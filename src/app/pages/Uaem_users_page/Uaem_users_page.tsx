import { listaCamionesUserUAEM } from "@/app/static/home_camiones_list";
import Link from "next/link";

const UaemUsersComponent = () => {
    return (
        <div className="">
            <div className="flex flex-col md:w-[600px]">
                <h1>Para ver el
                    <b>
                        {" "}Mapa{" "}
                    </b>
                    y conocer el trayecto o saber el tiempo estimado de llegada a la parada del camión, toca la imagen del trasporte que deseas abordar.</h1>
            </div>
            <div className=" p-2 mt-10 flex flex-col gap-4 justify-center items-center">
                {listaCamionesUserUAEM.map((camion, index) => (
                    <div key={index} className={`m-2  p-3 text-center ${camion.estilos}`}>
                        <Link href={camion.route}>
                            <h2>{camion.nombre_camion}</h2>
                            <img src={camion.imagen_camion} alt={camion.nombre_camion} className="w-auto h-24 object-cover md:w-auto md:h-48" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UaemUsersComponent;