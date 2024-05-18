"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

import { links } from "@/lib/utils";

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent"/>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">S<span className="text-accent">.</span>ai</h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {
            links.map((link, index) => {
              return (
                <Link
                  href={link.path}
                  key={index}
                  className={`text-xl capitalize hover:text-accent transition-all ${pathName === link.path && "text-accent border-b-2 border-accent"}`}
                >
                  {link.name}
                </Link>
              )
            })
          }
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
