import { SanMiguel, SGI, Camp, Sep } from "../../libs/config";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "traer cuentas") {
      const cuentas = await SanMiguel.subcta.findMany({
        orderBy: {
          CUEN: "asc",
        },
      });
      res.status(200).json(cuentas);
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "reg cuenta") {
      const regCuen = await SanMiguel.subcta.create({
        data: {
          CODI: parseInt(req.body.CODI),
          DESC: req.body.DESC,
          CUEN: parseInt(req.body.CUEN),
          MOVIM: req.body.MOVIM,
        },
      });

      res.status(200).json(regCuen);
    }
  } else if (req.method === "DELETE") {
    if (req.query.f && req.query.f === "eliminar cuenta") {
      const delCuenta = await SanMiguel.subcta.delete({
        where: {
          id: parseInt(req.query.id),
        },
      });

      res.status(200).json(delCuenta);
    }
  }
}
