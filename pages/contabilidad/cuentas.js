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
import FormCuenta from "@/components/contabilidad/FormCuenta";

function Cuentas(props) {
  let nroCuentaRef = React.createRef();
  let descCuentaRef = React.createRef();

  const [cuentas, guardarCuentas] = useState([]);
  const [movimSel, guardarMovimSel] = useState("");
  const [errores, guardarErrores] = useState(null);

  const { usu } = useWerchow();

  const { isLoading } = useUser();

  const traerCuenta = async () => {
    await axios
      .get("/api/contabilidad", {
        params: {
          f: "traer cuentas",
        },
      })
      .then((res) => {
        if (res.data) {
          guardarCuentas(res.data);
        } else {
          toast.info("No hay cuentas registradas en el sistema");
        }
      })

      .catch((error) => {
        console.log(error);
        toast.error("Ocurrio un error al generar el listado de cuentas");
      });
  };

  const handleChange = async (f, value) => {
    if (f === "movim") {
      guardarMovimSel(value);
    }
  };

  const regCuenta = async () => {
    guardarErrores(null);

    let data = {
      CODI: 0,
      DESC: descCuentaRef.current.value,
      CUEN: nroCuentaRef.current.value,
      MOVIM: movimSel,
      f: "reg cuenta",
    };

    console.log(data);


    if ((data.CUEN = "")) {
      guardarErrores("Tienes que ingresar el numero de cuenta a registrar");
    } else if (data.DESC === "") {
      guardarErrores("Tienes que ingresar el nombre de la cuenta a registrar");
    } else if (data.MOVIM === "") {
      guardarErrores(
        "Tienes que ingresar el tipo de movimiento de la cuenta a registrar"
      );
    } else {

    //   await axios
    //     .post("/api/contabilidad", data)
    //     .then((res) => {
    //       if (res.status === 200) {
    //         toast.success("La cuenta se registro correctamente");

    //         setTimeout(() => {
    //           traerCuenta();
    //         }, 200);
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       toast.error("Ocurrio un error al registrar la cuenta");
    //     });
    }
  };

  useSWR("/api/socios", traerCuenta);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormCuenta
            nroCuentaRef={nroCuentaRef}
            descCuentaRef={descCuentaRef}
            cuentas={cuentas}
            handleChange={handleChange}
            regCuenta={regCuenta}
            errores={errores}
          />
        </>
      )}
    </>
  );
}

export default Cuentas;
