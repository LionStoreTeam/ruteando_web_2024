"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Ruta_2() {
    const router = useRouter();

    const handleRegresar = () => {
        router.back();
    }
    return (
        <div className="mt-5 flex flex-col justify-center items-center">
            <button className='mb-5 p-2 rounded-xl text-white bg-blue-500'
                onClick={handleRegresar}
            >
                Regresar
            </button>
            <iframe src="https://www.google.com/maps/d/embed?mid=15_MriG_dmzx4LCT-VKjEw7x_aPsVOEWx&ehbc=2E312F" width="320" height="400"></iframe>
        </div>
    )
}
