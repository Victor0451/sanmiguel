import { SanMiguel, SGI, SMArchivo } from "../../libs/config";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "ultimo recibo") {
      const ultimoRec = await SanMiguel.pagos.findFirst({
        select: {
          SERIE: true,
          NRO_RECIBO: true,
          DIA_PAG: true,
          id: true,
        },
        where: {
          SERIE: parseInt(req.query.serie),
        },
        orderBy: {
          DIA_PAG: "desc",
        },
      });
      res.status(200).json(ultimoRec);
    } else if (req.query.f && req.query.f === "traer puestos") {
      const traerPuesto = await SGI.puestos.findMany({
        where: {
          operador: req.query.operador,
        },
      });
      res.status(200).json(traerPuesto);
    } else if (req.query.f && req.query.f === "traer recibo") {
      const traerRec = await SanMiguel.pagos.findMany({
        where: {
          CONTRATO: parseInt(req.query.contrato),
          SERIE: parseInt(req.query.serie),
          NRO_RECIBO: parseInt(req.query.rec),
          DIA_PAG: new Date(req.query.fecha),
        },
      });
      res.status(200).json(traerRec);
    } else if (req.query.f && req.query.f === "listado recibos") {
      const listRec = await SanMiguel.pagos.findMany({
        where: {
          OPERADOR: req.query.operador,
        },
      });
      res.status(200).json(listRec);
    } else if (req.query.f && req.query.f === "listado recibos admin") {
      const listRec = await SanMiguel.pagos.findMany({});
      res.status(200).json(listRec);
    } else if (req.query.f && req.query.f === "check so") {
      let tab = `${req.query.tab}`;

      const checkSO = await SMArchivo.$queryRawUnsafe(`
       SHOW TABLES LIKE '${tab}'
`);
      res.status(200).json(checkSO);
    } else if (req.query.f && req.query.f === "ofi emi") {
      let tab = `${req.query.tab}`;

      const ofiEmi = await SMArchivo.$queryRawUnsafe(`
          SELECT 'Oficina' as 'zona', 'Monterrico' as 'descr', COUNT(*) as 'fichas', SUM(CUOTA) as 'total' 
          FROM ${tab} 
          WHERE GRUPO = 1000 
          AND DEUDA in (0,1)   
`);

      res
        .status(200)
        .json(
          JSON.stringify(ofiEmi, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "ofi cob") {
      const ofiEmi = await SanMiguel.$queryRaw`
          SELECT 'Oficina' as 'zona', COUNT(*) as 'fichascob', SUM(CUOTA) as 'cobrado'           
          FROM so as s
          INNER JOIN pagos as p on p.CONTRATO = s.CONTRATO
          WHERE s.GRUPO = 1000
          AND s.DEUDA in (0,1)
          AND p.MES = ${parseInt(req.query.mes)}
          AND p.ANO = ${parseInt(req.query.ano)}
          AND p.MOVIM = 'P'
          AND p.DIA_PAG BETWEEN ${moment(req.query.mes, "MM")
            .startOf("month")
            .format("YYYY-MM-DD")}
          AND ${moment(req.query.mes, "MM").endOf("month").format("YYYY-MM-DD")}
          
`;

      res
        .status(200)
        .json(
          JSON.stringify(ofiEmi, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "ofi adel") {
      const ofiEmi = await SanMiguel.$queryRaw`
          SELECT 'Oficina' as 'zona', 
          (CASE
          WHEN SUM(IMPORTE) IS NULL
          THEN 0
          WHEN SUM(IMPORTE) IS NOT NULL
          THEN SUM(IMPORTE)
          END
          ) as 'adelantado'           
          FROM  pagos as p 
          WHERE p.MES >= ${parseInt(req.query.mes)}
          AND p.ANO >= ${parseInt(req.query.ano)}
          AND p.MOVIM = 'P'
          AND p.DIA_PAG BETWEEN ${moment(req.query.mes, "MM")
            .startOf("month")
            .format("YYYY-MM-DD")}
          AND ${moment(req.query.mes, "MM").endOf("month").format("YYYY-MM-DD")}
          
`;

      res
        .status(200)
        .json(
          JSON.stringify(ofiEmi, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    } else if (req.query.f && req.query.f === "socios sin abonar") {
      let tab = `${req.query.tab}`;

      const ofiEmi = await SMArchivo.$queryRawUnsafe(`
              SELECT
                  *
              FROM
                  ${tab} AS s
              WHERE
                  s.GRUPO = 1000
              AND s.DEUDA IN (0, 1)
              AND NOT EXISTS (
                  SELECT
                    *
                  FROM
                    sanmiguel.pagos AS p
                  WHERE
                    s.CONTRATO = p.CONTRATO
                  AND p.MES = ${parseInt(req.query.mes)}
                  AND p.ANO = ${parseInt(req.query.ano)}
                  AND p.MOVIM = 'P'
                )
          
`);

      res
        .status(200)
        .json(
          JSON.stringify(ofiEmi, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
          )
        );
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "reg pago") {
      const nuPago = await SanMiguel.pagos.create({
        data: {
          SERIE: parseInt(req.body.SERIE),
          NRO_RECIBO: parseInt(req.body.NRO_RECIBO),
          MES: parseInt(req.body.MES),
          ANO: parseInt(req.body.ANO),
          IMPORTE: parseFloat(req.body.IMPORTE),
          DIA_REN: new Date(req.body.DIA_REN),
          DIA_CAR: new Date(req.body.DIA_CAR),
          DIA_EMI: new Date(req.body.DIA_EMI),
          DIA_PAG: new Date(req.body.DIA_PAG),
          HORA_CAR: req.body.HORA_CAR,
          CONTRATO: parseInt(req.body.CONTRATO),
          MAN_COM: req.body.MAN_COM,
          MOVIM: req.body.MOVIM,
          OPERADOR: req.body.OPERADOR,
          PUESTO: req.body.PUESTO,
          ZONA: parseInt(req.body.ZONA),
          SUCURSAL: req.body.SUCURSAL,
          EMPRESA: req.body.EMPRESA,
          RENDIDO: req.body.RENDIDO,
          MED_PAG: req.body.MED_PAG,
        },
      });
      res.status(200).json(nuPago);
    }
  } else if (req.method === "PUT") {
    if (req.body.f && req.body.f === "anular recibo") {
      const mae = await SanMiguel.$queryRaw`
          UPDATE pagos
          SET MOVIM = 'A'              
          WHERE id = ${req.body.id}          
               
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
