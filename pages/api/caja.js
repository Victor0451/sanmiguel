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
                SERIE,                                  
                NRO_RECIBO as 'NUMERO',
                665 as 'CODIGO',
                '0401050000' as 'CUENTA',
                DATE_FORMAT(CURDATE(), "%Y-%m-%d" ) as 'FECHA',
                DATE_FORMAT(CURDATE(), "%Y-%m-%d" ) as 'FEC_COMP',
                DATE_FORMAT(NOW( ), "%H:%i" ) as 'HORA'
          FROM pagos
          WHERE OPERADOR = ${req.query.operador}
          AND RENDIDO = 0
          AND DIA_EMI = CURDATE()
          AND MOVIM = 'P'
          GROUP BY DIA_EMI, PUESTO, OPERADOR, SERIE, NRO_RECIBO
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
    } else if (req.query.f && req.query.f === "listado cajas") {
      const listadoCajas = await SanMiguel.$queryRaw`
          SELECT FECHA, HORA, IMPORTE, OPERADOR              
          FROM caja
          WHERE DETALLE = 'VALORES A DEPOSITAR'
          AND OPERADOR = ${req.query.operador}
          GROUP BY FECHA, HORA, IMPORTE, OPERADOR   
          ORDER BY FECHA DESC   
`;

      res
        .status(200)
        .json(
          JSON.stringify(listadoCajas, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "listado cajas admin") {
      const listadoCajas = await SanMiguel.$queryRaw`
          SELECT FECHA, HORA, IMPORTE, OPERADOR              
          FROM caja
          WHERE DETALLE = 'VALORES A DEPOSITAR'
          GROUP BY FECHA, HORA, IMPORTE, OPERADOR    
          ORDER BY FECHA DESC 
`;

      res
        .status(200)
        .json(
          JSON.stringify(listadoCajas, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer ingresos caja fecha") {
      const ingFecha = await SanMiguel.$queryRaw`
          SELECT *             
          FROM caja
          WHERE FECHA = ${req.query.fecha}
          AND MOVIM = 'I'
          AND DETALLE != ('SALDO INICIAL')
          AND OPERADOR = ${req.query.usuario}
          
          
`;

      res
        .status(200)
        .json(
          JSON.stringify(ingFecha, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "traer egresos caja fecha") {
      const egFecha = await SanMiguel.$queryRaw`
          SELECT *             
          FROM caja
          WHERE FECHA = ${req.query.fecha}
          AND MOVIM = 'E'
          AND DETALLE != ('VALORES A DEPOSITAR')
          AND OPERADOR = ${req.query.usuario}
          
          
`;

      res
        .status(200)
        .json(
          JSON.stringify(egFecha, (key, value) =>
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
          AND MOVIM = 'P'
               
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
