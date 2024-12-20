"use client";

import { useState } from "react";
import FlipCounter from '../app/components/flip-counter';
export default function Home() {
  // Estado para controlar la animación de los textos
  const [animateText, setAnimateText] = useState(false);

  // Función para activar la animación
  const handleAnimateClick = () => {
    setAnimateText(true);


    setTimeout(() => {
      setAnimateText(false);
    }, 1000); 
  };

  return (
    <div className="bg-white">
<FlipCounter />
      {/* Textos que serán animados */}
      <div>
        <p
          className={`${
            animateText ? "animate-flip-up animate-ease-out animate-reverse" : "text-black"
          } text-xl`}
        >
          ¡Hola, este es un texto animado!
        </p>
        <p
          className={`${
            animateText ? "animate-bounce text-blue-500" : "text-black"
          } text-xl`}
        >
          Otro texto que también se animará.
        </p>
      </div>

      {/* Botón que activa la animación */}
      <button
        onClick={handleAnimateClick}
        className="mt-4 p-2 bg-green-500 text-white rounded"
      >
        Animar
      </button>
    </div>
  );
}
