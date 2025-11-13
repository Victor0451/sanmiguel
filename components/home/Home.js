import React, { useEffect, useState } from "react";
import Alertas from "./Alertas";
import { AccesosDirectos } from "./AccesosDirectos";
import { Typography, Card, CardBody } from "@material-tailwind/react";

export const Home = ({
  noticia,
  contratoRef,
  dniRef,
  buscarCaso,
  errores,
  alertas,
  caso,
  gestion,
}) => {
  return (
    <Card className="h-full w-full shadow-xl rounded-xl bg-white/90 backdrop-blur-sm">
      <CardBody floated={false} shadow={true} className="rounded-xl p-8">
        <Alertas noticia={noticia} />
        <hr className="border-t-2 border-primary/20 mt-6 mb-6" />
        <AccesosDirectos />
        <hr className="border-t-2 border-primary/20 mt-6 mb-6" />
      </CardBody>
    </Card>
  );
};
