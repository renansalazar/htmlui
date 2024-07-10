'use client'
import styles from "./Links.module.css";
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { IComponent } from "@/app/constants/Contants";
import { useNavBarContext } from "@/app/context/NavBarContext";
import { useRouter } from 'next/navigation'

interface IProps {
  list: IComponent[]
}

export function Links({ list }: IProps) {
  const pathname = usePathname()
  const {isOpen, toggleCollapsible} = useNavBarContext()

  const handleRedirect = () => {
    if(isOpen){
      toggleCollapsible()
    }
  }

  return (
    <nav className={styles.nav + ' ' + (isOpen ? styles.openCollapsible : '')}>
      <ul>
        <li className={pathname === '/docs' ? styles.active : ''}>
            <Link href="/docs" onClick={handleRedirect}>Introducción</Link>
        </li>
        {list.length > 0 && (
          <li>Componentes 
            <ul>
              {list.map(page => {
                const slug = "/docs/" + page.slug
                return (<li key={'key-' + page.slug} className={pathname === slug ? styles.active : ''}>
                  <Link href={slug} onClick={handleRedirect} >
                    {page.name}
                  </Link>
                </li>)
              })}
            </ul> 
          </li>
        )}
      </ul>
    </nav>
  )
}