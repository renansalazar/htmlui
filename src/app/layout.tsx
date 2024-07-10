import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBarProvider from "./context/NavBarContext";
import { NavBar } from "./components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HTMLui",
  description: "Un set de componente que no requiere instalación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <section className="skipLinkContainer">
          <a className="skipLink" href="#content">
            Saltar al contenido
          </a>
        </section>
        <NavBarProvider>
          <header>
            <NavBar />
          </header>
          {children}
          <footer>
            <p>Desarrollado con 💚 por <a href="https://github.com/renansalazar">Renan Salazar</a></p>
          </footer>
        </NavBarProvider>
      </body>
    </html>
  );
}
