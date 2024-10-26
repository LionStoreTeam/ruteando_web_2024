import { listaCamionesNormalUser } from "@/app/static/home_camiones_list";
import Link from "next/link";

const NormalUsersComponent = () => {
    return (
        <div className="">
            <div className=" p-2 mt-10 flex flex-col gap-4 justify-center items-center">
                {listaCamionesNormalUser.map((camion, index) => (
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

export default NormalUsersComponent;