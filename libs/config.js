import { PrismaClient as SanMiguelClient } from "../prisma/generated/sanmiguel";
import { PrismaClient as WerchowsgiClient } from "../prisma/generated/werchowsgi";

let SGI;
let SanMiguel;

//check if we are running in production mode
if (process.env.NODE_ENV === "production") {
  SanMiguel = new SanMiguelClient();
  SGI = new WerchowsgiClient();
} else {
  //check if there is already a connection to the database
  if (!global.SanMiguel) {
    global.SanMiguel = new SanMiguelClient();
  } else if (!global.SGI) {
    global.SGI = new WerchowsgiClient();
  }

  SanMiguel = global.SanMiguel;
  SGI = global.SGI;
}

export { SanMiguel, SGI };
