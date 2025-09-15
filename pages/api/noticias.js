import {
  werchow,
  sgi,
  serv,
  sep,
  camp,
  arch,
  club,
  sanmiguel,
} from "../../libs/db/index";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.f && req.query.f === "traer noticias") {
      const noti = await sanmiguel.query(
        `
        SELECT *
        FROM noticia
        WHERE perfil = ${parseInt(req.query.perfil)}    
        ORDER BY fecha DESC
      
      `
      );

      await sanmiguel.end();

      res.status(200).json(noti);
    }
  } else if (req.method === "POST") {
    if (req.body.f && req.body.f === "nueva noticia") {
      const noti = await sanmiguel.query(
        `
          INSERT INTO noticia
          (
              fecha,
              noticia,
              operador,
              perfil
          )  

          VALUES

          (
            '${moment(req.body.fecha).format("YYYY-MM-DD HH:mm:ss")}',
            '${req.body.noticia}',
            '${req.body.operador}',
            ${parseInt(req.body.perfil)}
          
          )
        `
      );

      await sanmiguel.end();

      res.status(200).json(noti);
    }
  }
}
