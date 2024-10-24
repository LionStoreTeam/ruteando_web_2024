"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Ruta_3() {
    const router = useRouter()

    const handleClick = () => {
        router.back()
    }
    return (
        <div className="mt-5 flex flex-col justify-center items-center">
            <button className='mb-5 p-2 rounded-xl text-white bg-blue-500'
                onClick={handleClick}
            >
                Regresar
            </button>
            <iframe src="https://www.google.com/maps/d/embed?mid=1ffPVeYas7VrFoAQqY82GW-5V8AXdiDGN&ehbc=2E312F" width="320" height="400"></iframe>
        </div>
    )
}
