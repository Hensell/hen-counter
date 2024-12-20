// components/FlipCard.js
import { useEffect, useRef, useState } from "react";
import "./FlipCard.css";

export default function FlipCard({ number }) {
  const [currentNumber, setCurrentNumber] = useState(number); // Número actual en la parte superior
  const [topFlipping, setTopFlipping] = useState(false); // Estado para la animación superior
  const [bottomFlipping, setBottomFlipping] = useState(false); // Estado para la animación inferior
  const prevNumber = useRef(number);

  useEffect(() => {
    if (number !== prevNumber.current) {
      setTopFlipping(true); 

      setTimeout(() => {
        setTopFlipping(false);
      

        setBottomFlipping(true); 
        setCurrentNumber(number); 
        prevNumber.current = number;
        setTimeout(() => {
          
          setBottomFlipping(false); // Finaliza la animación inferior
          
        }, 350); // Duración de la animación inferior
      }, 350); // Duración de la animación superior
    }
  }, [number]);

  return (
    <div className="flip-card">
      {/* Fondo con el número siempre visible */}
      <div className="background-number">{prevNumber.current}</div>

      {/* Animaciones de la parte superior e inferior */}
      <div className={`top ${topFlipping ? "top-flip" : ""}`}>{currentNumber}</div>
      <div className={`bottom ${bottomFlipping ? "bottom-flip" : ""}`}>{currentNumber}</div>
    </div>
  );
}
