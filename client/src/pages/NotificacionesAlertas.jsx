import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import ImgIcono from "../media/siren.png";
import { getEmergenciasRequest } from "../api/Emergencias.api";
import "../css/UsuarioPagina.css";
import "../css/MostrarAlertas.css";

/////////////////////////////
var Contador = 0;
var Contador2 = 1;
const AtenderE = async () => {
  window.location.href = "/alerta";
};
function MostrasVisto(Visto, Contador) {
  if (Visto == "no_visto" && Contador == 0) {
    showToastMessage();

    console.log("FUNCIONA");
    setInterval(() => {
      Contador = 0;

      if (Visto == "no_visto" && Contador == 0) {
        showToastMessage();
      }
    }, 15000);
  }
}

function showToastMessage() {
  toast(
    <div id="Contener">
      <div className="TituloA">
        <div className="ContenedorImg">
          <img src={ImgIcono} className="ImgIcono" />
        </div>

        <p className="TextoTitulo">Nueva Emergencia </p>
      </div>

      <div className="contenerdorbtn">
        <button onClick={() => AtenderE()} className="btnAlerta">
          Atender
        </button>
      </div>
    </div>,

    {
      style: {
        minWidth: "501px",
        background: "#FFE4C6",
      },
      success: {
        duration: 10000,
      },
    }
  );
}

//////////////////////////////

function PaginaEmergencia12() {
  const [users, setUsuarios] = useState([]);

  useEffect(() => {
    async function cargarTarea() {
      const response = await getEmergenciasRequest();
      setUsuarios(response.data);
    }
    cargarTarea();
  }, []);

  return (
    <>
      <div className="cont">
        {setInterval(() => {
          users.map((Emergencia) => (
            <div key={Emergencia.id_Usuario_E}>
              {MostrasVisto(Emergencia.Visto, Contador)}
              {(Contador = +1)}
            </div>
          ));
        }, 15000)}
        {setInterval(() => {
          Contador2 = +1;
        }, 15000)}

        {MostrasVisto(Contador)}
      </div>
    </>
  );
}

export default PaginaEmergencia12;
