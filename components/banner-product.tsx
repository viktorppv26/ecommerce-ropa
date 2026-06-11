import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
    return (
        <div className="mt-4 text-center">
            <p>Descubre el estilo que te define</p>
            <h4 className="mt-2 text-5xl font-extrabold uppercase">
                Nueva Colección
            </h4>
            <p className="my-2 text-lg">
                Renueva tu armario con nuestras últimas tendencias
            </p>
            <Link href="/tienda" className={buttonVariants()}>
                Comprar ahora
            </Link>

            {/* Banner con imagen de fondo */}
            <div 
                className="h-[600px] bg-cover bg-center mt-5" 
                style={{ backgroundImage: "url('/imagen ropa 2.jpg')" }} 
            />
        </div>
    );
};

export default BannerProduct;