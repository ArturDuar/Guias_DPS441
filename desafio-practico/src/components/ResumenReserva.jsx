'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ResumenReserva({mesasReservadas}) {
    
    const total = () => {
        let sumador = 0;
        mesasReservadas.forEach(mesa => {
          sumador += parseInt(mesa.capacidad); 
        });
        return sumador; 
      }

    return(
        <div>
            <h4>Resumen de Reservas</h4>
            <table className='table table-striped'>
                <th>Codigo de Mesa</th>
                <th>Capacidad</th>
                <tbody>
                    {mesasReservadas.map(mesa => (
                        <tr key={mesa.id}>
                            <td>{mesa.id}</td>
                            <td>{mesa.capacidad}</td>
                        </tr>
                        
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Cantidad de Personas: </td>
                        <td>{total()}</td>
                    </tr>
                </tfoot>

            </table>
        </div>

    )



}

export default ResumenReserva;