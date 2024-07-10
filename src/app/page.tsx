import styles from "./page.module.css";
import Link from "next/link";
import { Links } from "./components/Links/Links";

export default function Home() {
  return (
    <main id="content" className={styles.main}>
      <section className={styles.navContainer}><Links list={[]} /></section>
      <section className={styles.content}>
        <h1>HTMLui</h1>
        <p>Set de componentes que <strong>no requiere instalación</strong>, con el mejor <strong>SEO</strong>, soportado con <strong>accesibilidad</strong> y funciona con todos tus <strong>frameworks favs 😍 </strong> (React, Angular, Vue, etc.)</p>
        <Link href="/docs" className="btn success">Empezar!</Link>
      </section>
    </main>
  );
}
