import React, { useState } from "react";
import styles from "../app/page.module.css";

const Todo = ({ producto, index, deleteProducto }) => {
    return (
        <>
            <tr>
                <td>{producto.nombre} - {producto.marca}</td>
                <td>Cantidad: {producto.cantidad}</td>
                <td>Precio: ${producto.precio}</td>
                <td>Total: ${producto.cantidad * producto.precio}</td>
                <td><button className={styles.btn_delete} onClick={() => deleteProducto(index)}>Eliminar</button></td>
            </tr>
        </>
    );
};

export default Todo;
