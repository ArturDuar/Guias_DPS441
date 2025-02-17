import Image from "next/image";
import styles from "./page.module.css";
import Form from "../components/Form";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.App}>
        <div>
          <p>
            Gestión de compras
          </p>
          <Form></Form>
        </div>
      </div>
    </main>
  );
}
