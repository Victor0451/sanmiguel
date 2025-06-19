import { PrismaClient as SanMiguelClient } from "../prisma/generated/sanmiguel";
import { PrismaClient as SMArchivosClient } from "../prisma/generated/smarchivos";
import { PrismaClient as WerchowsgiClient } from "../prisma/generated/werchowsgi";
import { PrismaClient as WerchowServClient } from "../prisma/generated/werchowserv";

let SGI;
let SanMiguel;
let Serv;
let SMArchivo;

//check if we are running in production mode
if (process.env.NODE_ENV === "production") {
  SanMiguel = new SanMiguelClient();
  SGI = new WerchowsgiClient();
  Serv = new WerchowServClient();
  SMArchivo = new SMArchivosClient();
} else {
  //check if there is already a connection to the database
  if (!global.SanMiguel) {
    global.SanMiguel = new SanMiguelClient();
  } else if (!global.SGI) {
    global.SGI = new WerchowsgiClient();
  } else if (!global.Serv) {
    global.Serv = new WerchowServClient();
  } else if (!global.SMArchivo) {
    global.SMArchivo = new SMArchivosClient();
  }

  SanMiguel = global.SanMiguel;
  SGI = global.SGI;
  Serv = global.Serv;
  SMArchivo = global.SMArchivo;
}

export { SanMiguel, SGI, Serv, SMArchivo };
