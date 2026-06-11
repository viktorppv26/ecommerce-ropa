"use client"

import { Menu } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Link from "next/link"

const ItemsMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu strokeWidth="1" className="cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="w-48 p-4 bg-white rounded-md shadow-md flex flex-col gap-2 text-sm">
        <Link href="/categories/playeras" className="block hover:font-bold transition-all text-black">
          Playeras
        </Link>
        <Link href="/categories/pantalones" className="block hover:font-bold transition-all text-black">
          Pantalones
        </Link>
        <Link href="/categories/sudaderas-y-chamarra" className="block hover:font-bold transition-all text-black">
          Sudaderas y Chamarras
        </Link>
      </PopoverContent>
    </Popover>
  )
}

export default ItemsMenuMobile