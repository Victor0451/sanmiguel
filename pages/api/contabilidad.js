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
    if (req.query.f && req.query.f === "traer cuentas") {
      const cuentas = await sanmiguel.query(
        `
              SELECT *
              FROM subcta
              ORDER BY CUEN ASC
            `
      );

      await sanmiguel.end();
      res.status(200).json(cuentas);
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "reg cuenta") {
      const regCuen = await sanmiguel.query(
        `
            INSERT INTO subcta
            (
              CODI,
              DESC,
              CUEN,
              MOVIM
            )

            VALUES
            (
               ${parseInt(req.body.CODI)},
               '${req.body.DESC}',
               ${parseInt(req.body.CUEN)},
               '${req.body.MOVIM}'
            )
          `
      );

      await sanmiguel.end();

      res.status(200).json(regCuen);
    }
  } else if (req.method === "DELETE") {
    if (req.query.f && req.query.f === "eliminar cuenta") {
      const delCuenta = await sanmiguel.query(
        `
      DELETE FROM subcta
      WHERE id = ${parseInt(req.query.id)}
    `
      );

      await sanmiguel.end();

      res.status(200).json(delCuenta);
    }
  }
}
