'use client'
 
import { createContext, useContext, useState } from 'react'

interface NavBarContextType {
  isOpen: boolean;
  toggleCollapsible: () => void;
}

export const NavBarContext = createContext<NavBarContextType | undefined>(undefined)

export const useNavBarContext = () => {
  const context = useContext(NavBarContext);
  if (!context) {
    throw new Error('useNavBarContext must be used within a NavBarProvider');
  }
  return context;
}

export default function NavBarProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };
  return <NavBarContext.Provider value={{ isOpen, toggleCollapsible }}>{children}</NavBarContext.Provider>
}