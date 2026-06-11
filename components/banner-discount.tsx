import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerDiscount = () => {
    return (
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercase font-black text-2xl text-primary md:text-5xl">
                Consigue hasta un -25% en todas las compras
            </h2>
            <h3 className="mt-3 font-semibold text-lg text-gray-600 md:text-xl">
                -20% al gastar $1500 o más en todos los productos
            </h3>
            
            <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
                <Link href="#" className={buttonVariants()}>Comprar</Link>
                <Link href="#" className={buttonVariants({ variant: "outline" })}>Más información</Link>
            </div>
        </div>
    );
}

export default BannerDiscount;