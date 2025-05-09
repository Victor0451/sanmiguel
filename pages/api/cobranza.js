import { SanMiguel, SGI, Camp } from "../../libs/config";

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
