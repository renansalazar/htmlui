'use client'
import styles from "./ButtonCollapsible.module.css";
import { useNavBarContext } from "@/app/context/NavBarContext"

const hamburgerIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <rect x="3" y="6" width="18" height="2" fill="currentColor"/>
  <rect x="3" y="11" width="18" height="2" fill="currentColor"/>
  <rect x="3" y="16" width="18" height="2" fill="currentColor"/>
</svg>

const closeIcon = <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
  fill="currentColor"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <line x1="18" y1="6" x2="6" y2="18"></line>
  <line x1="6" y1="6" x2="18" y2="18"></line>
</svg>

export function ButtonCollapsible () {
  const { isOpen, toggleCollapsible } = useNavBarContext()
  const handleClick = () => {
    toggleCollapsible()
  }

  return (<button className={styles.hamburger} onClick={handleClick} aria-label="Toggle navigation bar">
    {isOpen ? closeIcon: hamburgerIcon}
  </button>)
}