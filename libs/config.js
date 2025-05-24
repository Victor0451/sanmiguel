import { PrismaClient as SanMiguelClient } from "../prisma/generated/sanmiguel";
import { PrismaClient as WerchowsgiClient } from "../prisma/generated/werchowsgi";
import { PrismaClient as WerchowServClient } from "../prisma/generated/werchowserv";

let SGI;
let SanMiguel;
let Serv;

//check if we are running in production mode
if (process.env.NODE_ENV === "production") {
  SanMiguel = new SanMiguelClient();
  SGI = new WerchowsgiClient();
  Serv = new WerchowServClient();
} else {
  //check if there is already a connection to the database
  if (!global.SanMiguel) {
    global.SanMiguel = new SanMiguelClient();
  } else if (!global.SGI) {
    global.SGI = new WerchowsgiClient();
  } else if (!global.Serv) {
    global.Serv = new WerchowServClient();
  }

  SanMiguel = global.SanMiguel;
  SGI = global.SGI;
  Serv = global.Serv;
}

export { SanMiguel, SGI, Serv };
