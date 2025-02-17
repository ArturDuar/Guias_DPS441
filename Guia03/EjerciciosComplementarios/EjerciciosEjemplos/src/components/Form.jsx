'use client';
import React, {useState} from 'react';
import Todo from './Todo';
import styles from "../app/page.module.css";

const Form = () => {
    const [producto, setProducto] = useState([]);
    const [nuevoProducto, setNuevoProducto] = useState({
        nombre: "",
        marca: "",
        cantidad: 0,
        precio: 0
    });

    const handleChange = (e) => {
        setNuevoProducto({
            ...nuevoProducto,
            [e.target.name]: e.target.value
        });
    };

    const handleClick = () => {
        if (!nuevoProducto.nombre || !nuevoProducto.marca || nuevoProducto.cantidad <= 0 || nuevoProducto.precio <= 0) {
            alert("Todos los campos deben tener valores válidos");
            return;
        }
        setProducto([...producto, nuevoProducto]);

        setNuevoProducto({
            nombre: "",
            marca: "",
            cantidad: 0,
            precio: 0
        });   
    }

    const deleteProducto= indice =>{
        const newProducto=[...producto]
        newProducto.splice(indice, 1)
        setProducto(newProducto);
    }

    const totalCompra = producto.reduce((total, item) => total + (item.cantidad * item.precio),0);
    return (
        <>
        <form onSubmit={e => e.preventDefault()}>
            <label>Nombre: </label><br/>
            <input className={styles.form_input} type="text" name='nombre' onChange={handleChange} value={nuevoProducto.nombre}/>
            <label>Marca: </label><br/>
            <input className={styles.form_input} type="text" name='marca' onChange={handleChange} value={nuevoProducto.marca}/>
            <label>Cantidad: </label><br/>
            <input className={styles.form_input} type="text" name='cantidad' onChange={handleChange} value={nuevoProducto.cantidad}/>
            <label>Precio: </label><br/>
            <input className={styles.form_input} type="text" name='precio' onChange={handleChange} value={nuevoProducto.precio}/>

            <button className={styles.form_button} onClick={handleClick}>Agregar</button>

        </form>     

             <h2>Lista de Productos</h2>
            {
                producto.length === 0 ? <p>No hay productos en la lista.</p> :
                <table className={styles.table}>
                    {
                        producto.map((item, index) => (
                            <Todo key={index} index={index} producto={item} deleteProducto={deleteProducto} />
                        ))
                    }
                </table>
            }

            <h2>Total de la compra: ${totalCompra.toFixed(2)}</h2>
        </>
    );
}

export default Form