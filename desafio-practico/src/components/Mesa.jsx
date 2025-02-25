"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Mesa({ mesa , setMesasReservadas, mesasReservadas}) {
    const libreAOcupado = () => {
        if(confirm('¿Estas seguro que deseas reservar esta mesa?')){

            setMesasReservadas([...mesasReservadas, { ...mesa, estado: false }])
        }
    };

    const OcupadoALibre = () => {
        if(confirm('¿Estas seguro que deseas deshacer la reservación?')){

            setMesasReservadas(mesasReservadas.filter(eliminada => eliminada.id !== mesa.id));
        }
    }

    const estaReservada = mesasReservadas.some(m => m.id === mesa.id);

    return (
        <div className="border rounded col-lg-2 m-1 text-center col-md-3 col-sm-5 p-0">
            {!estaReservada ? (
                <div className="border border-primary p-3">
                    <div>Mesa</div>
                    <strong>{mesa.id}</strong>
                    <div>Capacidad</div>
                    <strong>{mesa.capacidad}</strong>
                    <div>Estado</div>
                    <strong>Disponible</strong>
                    <button className="btn btn-primary mt-4" onClick={libreAOcupado}>
                        Reservar
                    </button>
                </div>
            ) : (
                <div className="btn btn-danger p-3 border">
                    <div>Mesa</div>
                    <strong>{mesa.id}</strong>
                    <div>Capacidad</div>
                    <strong>{mesa.capacidad}</strong>
                    <div>Estado</div>
                    <strong>Ocupada</strong><br />
                    <button className="btn btn-warning mt-4" onClick={OcupadoALibre}>
                        Deshacer
                    </button>
                </div>
            )}
        </div>
    );
}

export default Mesa;
