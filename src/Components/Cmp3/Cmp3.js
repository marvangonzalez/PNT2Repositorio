import React, { useState, useEffect } from 'react';

function FechaYHoraActual() {
  const [fechaHora, setFechaHora] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setFechaHora(new Date());
    }, 1000); // Actualizar cada segundo

    return () => {
      clearInterval(interval);
    };
  }, []);

  const dia = fechaHora.getDate();
  const mes = fechaHora.getMonth() + 1; // Sumamos 1 porque los meses se indexan desde 0
  const año = fechaHora.getFullYear();
  const hora = fechaHora.getHours();
  const minutos = fechaHora.getMinutes();
  const segundos = fechaHora.getSeconds();

  const fechaHoraFormateada = `${dia}/${mes}/${año} ${hora}:${minutos}:${segundos}`;

  return (
    <div>
      <h2>Fecha y Hora Actual: </h2>
      <p>{fechaHoraFormateada}</p>
    </div>
  );
}

export default FechaYHoraActual;
