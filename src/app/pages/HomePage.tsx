import Link from "next/link";
import { listaCamiones } from "../static/home_camiones_list";

const HomePage = () => {
    return (
        <div className="mt-5 p-2 flex flex-col">
            <h1>Para ver el
                <b>
                    {" "}Mapa,{" "}
                </b>
                conocer el trayecto y saber el tiempo estimado de llegada a la parada, toca la imagen del trasporte que deseas abordar.</h1>
            <div className=" p-2 mt-10 flex flex-col gap-4 justify-center items-center">
                {listaCamiones.map((camion, index) => (
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

export default HomePage;