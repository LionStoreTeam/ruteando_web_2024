export interface Camiones_usuarios_uaem {
  nombre_camion: string;
  imagen_camion: string;
  route: string;
  estilos: string;
}

export const listaCamionesUserUAEM: Camiones_usuarios_uaem[] = [
  {
    nombre_camion: "Ruta 1",
    imagen_camion: "/rutas/centro/RUTA_1.png",
    route: "/rutas/zona_centro/ruta_1",
    estilos:
      "bg-amber-50 rounded-2xl uppercase font-bold text-[20px] text-amber-300",
  },
  {
    nombre_camion: "Ruta 13",
    imagen_camion: "/rutas/centro/RUTA_13.png",
    route: "/rutas/zona_centro/ruta_13",
    estilos:
      "bg-blue-100 rounded-2xl uppercase font-bold text-[20px] text-blue-600",
  },
  {
    nombre_camion: "Ruta 15",
    imagen_camion: "/rutas/centro/RUTA_15.png",
    route: "/rutas/zona_centro/ruta_15",
    estilos:
      "bg-orange-50 rounded-2xl uppercase font-bold text-[20px] text-red-600",
  },
  {
    nombre_camion: "ALIADOS DE MORELOS",
    imagen_camion: "/rutas/centro/ALIADOS_URBAN.png",
    route: "/rutas/zona_centro/ruta_aliados_morelos",
    estilos:
      "bg-cyan-100 rounded-2xl uppercase font-bold text-[20px] text-cyan-600",
  },
  // { nombre_camion: 'Camion 4', imagen_camion: 'camion4.jpg', route: '/camion4' },
  // { nombre_camion: 'Camion 5', imagen_camion: 'camion5.jpg', route: '/camion5' },
  // { nombre_camion: 'Camion 6', imagen_camion: 'camion6.jpg', route: '/camion6' },
];

export interface Camiones_usuarios_normales_zona_centro {
  nombre_camion: string;
  imagen_camion: string;
  route: string;
  estilos: string;
}

export const listaCamionesNormalUserZonaCentro: Camiones_usuarios_normales_zona_centro[] =
  [
    {
      nombre_camion: "Ruta 1",
      imagen_camion: "/rutas/centro/RUTA_1.png",
      route: "/rutas/zona_centro/ruta_1",
      estilos:
        "bg-amber-50 rounded-2xl uppercase font-bold text-[20px] text-amber-300",
    },
    {
      nombre_camion: "Ruta 2",
      imagen_camion: "/rutas/centro/RUTA_2.png",
      route: "/rutas/zona_centro/ruta_2",
      estilos:
        "bg-blue-50 rounded-2xl uppercase font-bold text-[20px] text-blue-600",
    },
    {
      nombre_camion: "Ruta 3",
      imagen_camion: "/rutas/centro/RUTA_3.png",
      route: "/rutas/zona_centro/ruta_3",
      estilos:
        "bg-red-50 rounded-2xl uppercase font-bold text-[20px] text-red-600",
    },
    // { nombre_camion: 'Camion 4', imagen_camion: 'camion4.jpg', route: '/camion4' },
    // { nombre_camion: 'Camion 5', imagen_camion: 'camion5.jpg', route: '/camion5' },
    // { nombre_camion: 'Camion 6', imagen_camion: 'camion6.jpg', route: '/camion6' },
  ];
