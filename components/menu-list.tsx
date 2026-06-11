"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

// Tus 3 categorías reales de ropa de Strapi
const categories: { title: string; href: string; description: string }[] = [
  {
    title: "Playeras",
    href: "/category/playeras",
    description: "Diseños frescos y cómodos para cualquier ocasión.",
  },
  {
    title: "Pantalones",
    href: "/category/pantalones",
    description: "Estilo y durabilidad en cada paso que das.",
  },
  {
    title: "Sudaderas y Chamarras",
    href: "/category/sudaderas-y-chamarras",
    description: "Mantente abrigado con lo último en moda urbana.",
  },
]

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        
        {/* Menú: Sobre Nosotros (Cuadro destacado de VR Estudio) */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            {/* Definimos un ancho fijo amplio y una rejilla limpia de dos columnas */}
            <div className="grid gap-4 p-6 w-[500px] md:w-[600px] grid-cols-[.8fr_1.2fr]">
              <NavigationMenuLink asChild>
                <Link
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-5 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <div className="mb-2 text-lg font-bold text-black">
                    VR Estudio
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Tu destino para la mejor moda urbana. Calidad, estilo y tendencia en cada prenda que elegimos para ti.
                    </p>
                </Link>
              </NavigationMenuLink>
              
              {/* Bloque derecho con los enlaces apilados verticalmente */}
              <ul className="flex flex-col justify-between gap-2">
                <ListItem href="/shop" title="Tienda">
                  Accede a toda la información y tus pedidos.
                </ListItem>
                <ListItem href="/offers" title="Ofertas">
                  Sección dedicada a promociones especiales.
                </ListItem>
                <ListItem href="/category/accesorios" title="Accesorios">
                  Complementos como gorras, mochilas y lentes.
                </ListItem>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Menú: Categorías */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categorías</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {categories.map((category) => (
                <ListItem
                  key={category.title}
                  title={category.title}
                  href={category.href}
                >
                  {category.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Enlace Directo: Eliminado legacyBehavior para corregir el error de Next.js */}
        <NavigationMenuItem>
          <Link href="/category/accesorios" passHref className={navigationMenuTriggerStyle()}>
            Accesorios
          </Link>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MenuList

// Componente ListItem modificado para garantizar la caída del texto en bloque
const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & { title: string; href: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          className={cn(
            "block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          {/* Forzamos una disposición en columna para que la descripción baje limpia */}
          <div className="flex flex-col space-y-1">
            <span className="text-sm font-semibold leading-none text-black">
              {title}
            </span>
            <span className="text-xs leading-normal text-muted-foreground block whitespace-normal">
              {children}
            </span>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"