'use client';
import styles from "./page.module.css";
import LenguajesGrid from "@/components/LenguajeGrid";

export default function Home(){
    return (
        <main>
            <h1>Lenguajes de Programación</h1>
            <LenguajesGrid/>     
        </main>
    )
}