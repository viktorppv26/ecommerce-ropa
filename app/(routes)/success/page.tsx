"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PageSuccess = () => {
    const router = useRouter()

    return (
        <div className="max-w-5xl px-4 py-16 mx-auto sm:py-24">
            <div className="flex flex-col-reverse gap-2 sm:flex-row">
                <div className="flex justify-center md:min-w-[400px]">
                    <Image
                        src="/Imagen ropa 1.jpg"
                        alt="Success"
                        width={250}
                        height={500}
                        className="rounded-lg object-cover"
                    />
                </div>

                <div>
                    <h1 className="text-3xl font-bold">¡Tu pedido está confirmado! 🛍️</h1>
                    <p className="my-3"> Tu ropa está en camino. Nuestro equipo ya está preparando tu pedido con el mayor cuidado para que llegue en perfectas condiciones.</p>
                    <p className="my-3">En breve recibirás un correo con los detalles de tu envío y el número de seguimiento para que puedas rastrear tu paquete.</p>
                    <p className="my-3">Gracias por elegirnos para renovar tu estilo.</p>

                    <Button onClick={() => router.push("/")}>
                        Seguir comprando
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PageSuccess