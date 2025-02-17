import React, {useState, useEffect} from "react";
import Modal from "./Modal";
import styles from '../app/page.module.css'

const LenguajesGrid = () => {
    const [lenguajes, setLenguajes] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [lenguajeSeleccionado, setLenguajeSeleccionado] = useState(null);

    useEffect(() => {
        fetch("/lenguajes.json")
          .then((response) => response.json())
          .then((data) => setLenguajes(data));
      }, []);

    const abrirModal = (lenguaje) => {
        setLenguajeSeleccionado(lenguaje);
        setModalOpen(true);
    };

    return (
        <div className={styles.grid_container}>
          {lenguajes.map((lenguaje, index) => (
            <div key={index} className={styles.grid_item}>
              <img src={lenguaje.imagen} alt={lenguaje.nombre} />
              <h3>{lenguaje.nombre}</h3>
              <button onClick={() => abrirModal(lenguaje)}>Ver más</button>
            </div>
          ))}
    
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} lenguaje={lenguajeSeleccionado} />
        </div>
    );
}

export default LenguajesGrid;