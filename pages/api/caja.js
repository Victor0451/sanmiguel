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
                665 as 'CODIGO',
                '0401010600' as 'CUENTA',
                DATE_FORMAT(CURDATE(), "%Y-%m-%d" ) as 'FECHA',
                DATE_FORMAT(CURDATE(), "%Y-%m-%d" ) as 'FEC_COMP',
                DATE_FORMAT(NOW( ), "%H:%i" ) as 'HORA'
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
    if (req.body.f && req.body.f === "reg caja") {
      const movCaja = await SanMiguel.caja.create({
        data: {
          SUCURSAL: req.body.SUCURSAL,
          PUESTO: req.body.PUESTO,
          CODIGO: parseInt(req.body.CODIGO),
          MOVIM: req.body.MOVIM,
          CUENTA: req.body.CUENTA,
          IMPORTE: parseFloat(req.body.IMPORTE),
          TIPO: req.body.TIPO,
          SERIE: parseInt(req.body.SERIE),
          NUMERO: parseInt(req.body.NUMERO),
          CUIT: req.body.CUIT,
          DETALLE: req.body.DETALLE,
          FECHA: req.body.FECHA,
          FEC_COMP: req.body.FEC_COMP,
          HORA: req.body.HORA,
          OPERADOR: req.body.OPERADOR,
        },
      });
      res.status(200).json(movCaja);
    }
  } else if (req.method === "PUT") {
    if (req.body.f && req.body.f === "rendir pagos") {
      const mae = await SanMiguel.$queryRaw`
          UPDATE pagos
          SET RENDIDO = 1,
              FECHA_CAJA = CURDATE()
          WHERE DIA_PAG = CURDATE()  
          AND RENDIDO = 0
               
`;

      res
        .status(200)
        .json(
          JSON.stringify(mae, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
  }
}
