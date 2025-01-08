import { SanMiguel, SGI, Camp } from "../../libs/config";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "traer movimientos") {
      const mae = await SanMiguel.$queryRaw`
          SELECT 
                DIA_EMI,                
                OPERADOR,
                CONCAT("Produccion Puesto"," (",PUESTO,")")'DETALLE',
                SUM(IMPORTE) 'IMPORTE',
                'I' as 'MOVIM',
                0 as 'SERIE',                                  
                0 as 'NUMERO',
                665 as 'CODIGO'                                 
          FROM pagos
          WHERE OPERADOR = ${req.query.operador}
          AND RENDIDO = 0
          AND DIA_EMI = CURDATE()
          GROUP BY DIA_EMI, PUESTO, OPERADOR
`;

      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer cuentas") {
      const mae = await SanMiguel.$queryRaw`
          SELECT 
               *                               
          FROM subcta
          WHERE MOVIM in (${req.query.movim}, 'A')
`;

      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer tipo facturas") {
      const mae = await SGI.$queryRaw`
          SELECT 
               *                               
          FROM tipo_facturas          
`;

      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "reg movimientos") {
      const caja = await SGI.movimiento_caja_sucursales.create({
        data: {
          idcaja: parseInt(req.body.idcaja),
          fecha_carga: new Date(req.body.fecha_carga),
          sucursal: req.body.sucursal,
          fecha_movimiento: new Date(req.body.fecha_movimiento),
          concepto: req.body.concepto,
          movimiento: req.body.movimiento,
          importe: parseFloat(req.body.importe),
          operador_carga: req.body.operador_carga,
          empresa: req.body.empresa,
        },
      });
      res.status(200).json(caja);
    } else if (req.body.f && req.body.f === "reg caja") {
      const movCaja = await SGI.caja_sucursales.create({
        data: {
          fecha_carga: new Date(req.body.fecha_carga),
          sucursal: req.body.sucursal,
          ingresos: parseFloat(req.body.ingresos),
          egresos: parseFloat(req.body.egresos),
          saldo: parseFloat(req.body.saldo),
          operador_carga: req.body.operador_carga,
          empresa: req.body.empresa,
        },
      });
      res.status(200).json(movCaja);
    }
  }
}
