import { SanMiguel, SGI, Camp, Sep } from "../../libs/config";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "traer historial") {
      if (req.query.operador === "") {
        const historial = await SanMiguel.historia.findMany({
          orderBy: {
            FECHA: "desc",
          },
        });
        res.status(200).json(historial);
      } else {
        const historial = await SanMiguel.historia.findMany({
          where: {
            OPERADOR: req.query.operador,
          },
          orderBy: {
            FECHA: "desc",
          },
        });
        res.status(200).json(historial);
      }
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "reg historia") {
      const historial = await SanMiguel.historia.create({
        data: {
          CONTRATO: req.body.CONTRATO,
          OPERADOR: req.body.OPERADOR,
          ACCION: req.body.ACCION,
          FECHA: req.body.FECHA,
        },
      });

      res.status(200).json(historial);
    }
  }
}
