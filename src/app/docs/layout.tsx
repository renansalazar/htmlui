import styles from "./page.module.css";
import { Links } from "../components/Links/Links";
import { componentsDocs } from "../constants/Contants";
import { useNavBarContext } from "../context/NavBarContext";

async function getData() { 
  return componentsDocs
}

export default async function Layout({
    children
  }: {
    children: React.ReactNode
  }) {
    const data = await getData()

    return <section className={styles.container}>
      <aside>
        <Links list={data} />
      </aside>
      <main id="content">
        {children}
      </main>
    </section>
  }