'use client'
import zonas from '@/app/zonas'
import 'bootstrap/dist/css/bootstrap.min.css';

function SelectorZona({setZonaSeleccionada}){

    const asignarZona = (e) => {
        setZonaSeleccionada(Number(e.target.value));
    }
    return(
        <div className='d-flex align-items-center flex-column col-lg-8'>
            <h2 className='text-center mt-5 mb-3'>Elige en que zona te gustaría reservar una mesa</h2>
                    <select className='w-25 form-select m-3' onChange={asignarZona}>
                            <option value='0'>Seleccionar</option>
                        {zonas.map(zona => (
                            <option value={zona.id} key={zona.id}>Zona {zona.nombre}</option>
                        ))}
                    </select>
        </div>
    )
}

export default SelectorZona;