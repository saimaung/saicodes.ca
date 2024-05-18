"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/lib/utils";

const Nav = () => {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {
        links.map((link, index) => {
          return (
            <Link 
              key={index} 
              href={link.path} 
              target={link.path.startsWith('http') ? '_blank' : undefined} 
              className={
                `${pathName === link.path && 'text-accent border-b-2 border-accent'} 
                capitalize font-medium hover:text-accent transition-all`}>
              {link.name}
            </Link>
          )
        })
      }
    </nav>
  )
}

export default Nav
