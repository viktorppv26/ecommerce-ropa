"use client"

import { Heart, ShoppingCart, User } from "lucide-react"
import { useRouter } from "next/navigation"
import MenuList from "./menu-list"
import ItemsMenuMobile from "./items-menu-mobile"
import ToggleTheme from "./toggle-theme"
import { useCart } from "@/hooks/use-cart"

const Navbar = () => {
  const router = useRouter()
  const cart = useCart()

  return (
    <nav className="flex items-center justify-between p-4 mx-auto w-full sm:max-w-4xl md:max-w-6xl">
      
      {/* Logotipo Oficial */}
      <h1 
        className="text-3xl cursor-pointer select-none"
        onClick={() => router.push("/")}
      >
        VR <span className="font-bold">Estilo</span>
      </h1>

      {/* Menú de escritorio (Centro) */}
      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>

      {/* Menú móvil (Se activa en pantallas chicas) */}
      <div className="flex sm:hidden">
        <ItemsMenuMobile />
      </div>

      {/* Iconos de la derecha */}
      <div className="flex items-center justify-between gap-2 sm:gap-7">
        <div 
          className="flex gap-1 cursor-pointer"
          onClick={() => router.push("/cart")}
        >
          <ShoppingCart strokeWidth="1" />
          {cart.items.length > 0 && (
            <span className="text-sm font-medium">
              {cart.items.length}
            </span>
          )}
        </div>
        <Heart 
          strokeWidth="1" 
          className="cursor-pointer" 
          onClick={() => router.push("/loved-products")} 
        />
        <User 
          strokeWidth="1" 
          className="cursor-pointer" 
          onClick={() => router.push("/profile")} 
        />
        <ToggleTheme/>
      </div>

    </nav>
  )
}

export default Navbar