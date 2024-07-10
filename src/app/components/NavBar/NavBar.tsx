import Link from "next/link";
import { ButtonCollapsible } from "../ButtonCollapsible/ButtonCollapsible";

export function NavBar() {
  return (
    <nav>
      <ButtonCollapsible />
      <Link href="/">
        🪄
      </Link>
      <div>
        <a
          href="https://github.com/renansalazar/htmlui"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </nav>
  )
}