'use client'
import SelectorZona from "@/components/SelectorZona";
import 'bootstrap/dist/css/bootstrap.min.css';
import ResumenReserva from "@/components/ResumenReserva";
import { useState } from "react";
import PlanoRestaurante from "@/components/PlanoRestaurante";


export default function Home() {
  const [mesasReservadas, setMesasReservadas] = useState([]);
  const [zonaSeleccionada, setZonaSeleccionada] = useState(0);

  

  return (
    <div>
      <header className="bg-primary p-3">
        <h5 className="text-white">Reservación de mesas</h5>
      </header>
      <div className="container">
        <div className="row">
          <SelectorZona
            setZonaSeleccionada={setZonaSeleccionada} />
          <div className="col-lg-9">
            <PlanoRestaurante
              zonaSeleccionada={zonaSeleccionada}
              setMesasReservadas={setMesasReservadas}
              mesasReservadas={mesasReservadas}
            />
          </div>
          <div className="col-lg-3">
            <ResumenReserva
              mesasReservadas={mesasReservadas}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
