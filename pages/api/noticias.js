import { SanMiguel, SGI } from "../../libs/config";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "traer noticias") {
      const noti = await SGI.noticia.findFirst({
        where: {
          perfil: parseInt(req.query.perfil),
        },
        orderBy: {
          fecha: "desc",
        },
      });
      res.status(200).json(noti);
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "nueva noticia") {
      const noti = await SGI.noticia.create({
        data: {
          fecha: new Date(req.body.fecha),
          noticia: req.body.noticia,
          operador: req.body.operador,
          perfil: parseInt(req.body.perfil),
        },
      });
      res.status(200).json(noti);
    }
  }
}
