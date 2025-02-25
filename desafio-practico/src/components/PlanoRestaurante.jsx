import zonas from '@/app/zonas';
import React from 'react';
import Mesa from '@/components/Mesa'
import 'bootstrap/dist/css/bootstrap.min.css';


function PlanoRestaurante({zonaSeleccionada, setMesasReservadas, mesasReservadas}){


    return(
        <div className='container'>
                {zonaSeleccionada === 0 ? (
                    zonas.map((zona) => (     
                        <div key={zona.id} className='m-3 p-3'>
                            <h3>Zona {zona.nombre}</h3>
                            <div className='row'>
                                {zona.mesas.map((mesa) => (      
                                    <Mesa mesa={mesa} key={mesa.id} setMesasReservadas={setMesasReservadas} mesasReservadas = {mesasReservadas}/>                   
                                ))}
                            </div> 
                        </div>
                    ))
                ): (
                    zonas
                    .filter(zona => zona.id === zonaSeleccionada)
                    .map((zona) => (     
                        <div key={zona.id} className='m-3 p-3'>
                            <h3>Zona {zona.nombre}</h3>
                            <div className='row'>
                                {zona.mesas.map((mesa) => (      
                                    <Mesa mesa={mesa} key={mesa.id} setMesasReservadas={setMesasReservadas} mesasReservadas = {mesasReservadas}/>                   
                                ))}
                            </div> 
                        </div>
                    ))
                )} 
        </div>
    )
}

export default PlanoRestaurante;