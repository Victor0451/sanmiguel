import React, { useState } from "react";
import useUser from "@/hook/useUser";
import { Skeleton } from "@/components/Layouts/Skeleton";
import useWerchow from "@/hook/useWerchow";
import axios from "axios";
import { toast } from "react-toastify";
import { Redirect } from "@/components/auth/Redirect";
import useSWR from "swr";
import { confirmAlert } from "react-confirm-alert";
import moment, { months } from "moment";
import { registrarHistoria, regHistorialSocio } from "@/libs/funciones";
import Router, { useRouter } from "next/router";
import FormCierre from "@/components/caja/FormCierre";

function cierre(props) {
  let fechaRef = React.createRef();
  let serieRef = React.createRef();
  let nroCompRef = React.createRef();
  let cuitRef = React.createRef();
  let importeRef = React.createRef();

  const [produc, guardarProduc] = useState([]);
  const [cuentas, guardarCuentas] = useState([]);
  const [tipoFac, guardartipoFac] = useState([]);
  const [facturaSel, guardarFacturaSel] = useState("");
  const [detalleSel, guardarDetalleSel] = useState("");
  const [codigoSel, guardarCodigoSel] = useState("");
  const [nCuentaSel, guardarNcuentaSel] = useState("");
  const [cuenDescSel, guardarCuenDescSel] = useState("");
  const [puestos, guardarPuestos] = useState([]);
  const [errores, guardarErrores] = useState(null);
  const [alertas, guardarAlertas] = useState(null);
  const [ingresos, guardarIngresos] = useState([]);
  const [egresos, guardarEgresos] = useState([]);
  const [flag, guardarFlag] = useState(false);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerMovimientos = async () => {
    await axios
      .get(`/api/caja`, {
        params: {
          f: "traer movimientos",
          operador: usu.usuario,
        },
      })
      .then((res) => {
        if (res.data) {
          let movim = JSON.parse(res.data);

          guardarProduc(movim);
        }
      })
      .catch((error) => {
        console.log(error);

        toast.error("Ocurrio un error al generar los movimientos de la caja");
      });

    traerPuestos();
  };

  const traerPuestos = async () => {
    if (usu.usuario) {
      await axios
        .get(`/api/cobranza`, {
          params: {
            operador: usu.usuario,
            f: "traer puestos",
          },
        })
        .then((res) => {
          if (res.data) {
            guardarPuestos(res.data[0]);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ocurrio un error al traer la cuota mensual");
        });
    }
  };

  const tarerCuentas = async (movim) => {
    await axios
      .get("/api/caja", {
        params: {
          f: "traer cuentas",
          movim: movim,
        },
      })
      .then((res) => {
        if (res.data) {
          let movim = JSON.parse(res.data);
          guardarCuentas(movim);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al generar el listado de cuentas");
      });

    await axios
      .get("/api/caja", {
        params: {
          f: "traer tipo facturas",
        },
      })
      .then((res) => {
        if (res.data) {
          let tipoFac = JSON.parse(res.data);
          guardartipoFac(tipoFac);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al generar el listado de recibos");
      });
  };

  const handleChange = async (f, value) => {
    if (f === "cuenta") {
      let split = value.split("-");

      let cod = split[0];
      let nCuen = split[1];
      let cuenDesc = split[2];

      guardarCodigoSel(cod);

      guardarNcuentaSel(nCuen);

      guardarCuenDescSel(cuenDesc);
    } else if (f === "comprobante") {
      guardarFacturaSel(value);
    } else if (f === "detalle") {
      guardarDetalleSel(value.target.value);
    }
  };

  const preRegImputacion = async (movim) => {
    guardarAlertas(null);
    guardarErrores(null);

    let impu = {
      SUCURSAL: usu.sucursal,
      PUESTO: puestos.puesto_sm,
      CODIGO: codigoSel,
      MOVIM: movim,
      CUENTA: nCuentaSel,
      CUENTA_DESC: cuenDescSel,
      IMPORTE: importeRef.current.value,
      TIPO: facturaSel,
      SERIE: serieRef.current.value,
      NUMERO: nroCompRef.current.value,
      CUIT: cuitRef.current.value,
      DETALLE: detalleSel,
      FECHA: moment().format("YYYY-MM-DD"),
      FEC_COM: fechaRef.current.value,
      HORA: moment().format("HH:mm"),
      ORIGEN: "",
      OPERADOR: usu.usuario,
      f: "reg impu",
    };

    if (impu.CODIGO === "") {
      guardarErrores(
        "Debes seleccionar la cuenta a la que pertenece la imputacion"
      );
    } else if (impu.TIPO === "") {
      guardarErrores("Debes seleccionar el tipo de comprobante");
    } else if (impu.SERIE === "") {
      guardarErrores("Debes ingresar el n° de serie del comprobante");
    } else if (impu.NUMERO === "") {
      guardarErrores("Debes ingresar el n° del comprobante");
    } else if (impu.FEC_COM === "") {
      guardarErrores("Debes ingresar fecha del comprobante");
    } else {
      if (movim === "I") {
        guardarIngresos([...ingresos, impu]);
      } else if (movim === "E") {
        guardarEgresos([...egresos, impu]);
      }

      guardarAlertas("Imputacion registrada correctamente");
    }
  };

  const eliminarImpuPrecargado = (index, movim) => {
    if (movim === "I") {
      ingresos.splice(index, 1);

      guardarIngresos([...ingresos]);
    } else if (movim === "E") {
      egresos.splice(index, 1);

      guardarEgresos([...egresos]);
    }
  };

  const totales = (f, arr, arr2) => {
    let total = 0;
    let ing = 0;
    let egr = 0;

    if (f === "I") {
      for (let i = 0; i < arr.length; i++) {
        ing += parseFloat(arr[i].IMPORTE);
      }

      return ing.toFixed(2);
    } else if (f === "E") {
      for (let i = 0; i < arr.length; i++) {
        egr += parseFloat(arr[i].IMPORTE);
      }

      return egr.toFixed(2);
    } else if (f === "D") {
      for (let i = 0; i < arr.length; i++) {
        ing += parseFloat(arr[i].IMPORTE);
      }

      for (let i = 0; i < arr2.length; i++) {
        egr += parseFloat(arr2[i].IMPORTE);
      }

      total = ing - egr;

      return total.toFixed(2);
    }
  };

  const chekCaja = async (user) => {
    let fecha = moment().format("YYYY-MM-DD");

    await axios
      .get(`/api/caja`, {
        params: {
          fecha: fecha,
          user: user,
          f: "check caja",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          guardarFlag(true);
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al chequear la caja", "ATENCION");
      });
  };

  const regCierreCaja = async () => {
    if (flag === false) {
      let totI = 0;
      let totE = 0;

      let caja = {
        SUCURSAL: usu.sucursal,
        PUESTO: "30",
        CODIGO: 0,
        MOVIM: "",
        CUENTA: "",
        IMPORTE: "",
        TIPO: "",
        SERIE: 0,
        NUMERO: 0,
        CUIT: "",
        DETALLE: "",
        DET_AUX: "",
        FECHA: moment().format("YYYY-MM-DD"),
        FEC_COMP: "",
        HORA: moment().format("HH:mm"),
        ORIGEN: "",
        OPERADOR: usu.usuario,
        ASIENTO: 0,
        EXENTO: "",
        CANT_AFIL: 0,
        CAE: "",
        VTO_CAE: "",
        f: "reg caja",
      };

      for (let i = 0; i < ingresos.length; i++) {
        caja.CODIGO = ingresos[i].CODIGO;
        caja.CUENTA = ingresos[i].CUENTA;
        caja.MOVIM = ingresos[i].MOVIM;
        caja.IMPORTE = ingresos[i].IMPORTE;
        caja.TIPO = ingresos[i].TIPO;
        caja.DETALLE = ingresos[i].DETALLE;
        caja.NUMERO = ingresos[i].NUMERO;
        caja.CUIT = ingresos[i].CUIT;

        totI += parseFloat(ingresos[i].IMPORTE);

        postCaja(caja, 0);
      }

      for (let j = 0; j < egresos.length; j++) {
        caja.CODIGO = egresos[j].CODIGO;
        caja.CUENTA = egresos[j].CUENTA;
        caja.MOVIM = egresos[j].MOVIM;
        caja.IMPORTE = egresos[j].IMPORTE;
        caja.TIPO = egresos[j].TIPO;
        caja.DETALLE = egresos[j].DETALLE;
        caja.NUMERO = egresos[j].NUMERO;
        caja.CUIT = egresos[j].CUIT;

        totE += parseFloat(egresos[j].IMPORTE);

        postCaja(caja, 0);
      }

      caja.CODIGO = 718;
      caja.CUENTA = "0101010700";
      caja.MOVIM = "E";
      caja.IMPORTE = totI - totE;
      caja.TIPO = "X";
      caja.DETALLE = "VALORES A DEPOSITAR";
      caja.NUMERO = 1;
      caja.CUIT = "0";

      postCaja(caja, 0);

      caja.CODIGO = -1;
      caja.CUENTA = "";
      caja.MOVIM = "I";
      caja.IMPORTE = 0;
      caja.TIPO = "";
      caja.DETALLE = "SALDO INICIAL";
      caja.NUMERO = 0;
      caja.CUIT = "0";

      postCaja(caja, 1);
    } else if (flag === true) {
      toastr.warning(
        `Ya se genero una caja con la fecha en el dia de hoy (${moment().format(
          "DD/MM/YYYY"
        )})`,
        "ATENCION"
      );
    }
  };

  useSWR("/api/caja", traerMovimientos);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormCierre
            produc={produc}
            tarerCuentas={tarerCuentas}
            ingresos={ingresos}
            egresos={egresos}
            cuentas={cuentas}
            tipoFac={tipoFac}
            handleChange={handleChange}
            fechaRef={fechaRef}
            serieRef={serieRef}
            nroCompRef={nroCompRef}
            cuitRef={cuitRef}
            importeRef={importeRef}
            preRegImputacion={preRegImputacion}
            eliminarImpuPrecargado={eliminarImpuPrecargado}
            alertas={alertas}
            errores={errores}
            totales={totales}
          />
        </>
      )}
    </>
  );
}

export default cierre;
