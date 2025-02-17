import styles from '../app/page.module.css'

const Modal = ({ isOpen, onClose, lenguaje}) => {
    if(!isOpen) return null;

    return(
        <div>
            <div className={styles.modal_overlay}>
                <div className={styles.modal_content}>
                    <h2>{lenguaje.nombre}</h2>
                    <img src={lenguaje.imagen} alt={lenguaje.nombre}/>
                    <p>{lenguaje.descripcion}</p>
                    <button onClick={onClose}>Cerrar</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;