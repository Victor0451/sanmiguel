import {
  werchow,
  sgi,
  serv,
  sep,
  camp,
  arch,
  club,
  sanmiguel,
  SMArchivo,
} from "../../libs/db/index";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "traer historial") {
      if (req.query.operador === "") {
        const historial = await sanmiguel.query(
          `
        SELECT *
        FROM historia
        ORDER BY FECHA DESC
    `
        );

        await sanmiguel.end();

        res.status(200).json(historial);
      } else {
        const historial = await sanmiguel.query(
          `
            SELECT *
            FROM historia
            WHERE OPERADOR = '${req.query.operador}'
            ORDER BY FECHA DESC
          `
        );

        await sanmiguel.end();

        res.status(200).json(historial);
      }
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "reg historia") {
      const historial = await sanmiguel.query(
        `
              INSERT INTO historia
              (
                CONTRATO,
                OPERADOR,
                ACCION,
                FECHA
              )

              VALUES
              (
                 ${parseInt(req.body.CONTRATO)},
                 '${req.body.OPERADOR}',
                 '${req.body.ACCION}',
                 '${req.body.FECHA}'
              )
            `
      );

      await sanmiguel.end();

      res.status(200).json(historial);
    }
  }
}
