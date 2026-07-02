import { useState } from "react";

export function Formulario() {
  const [nombre, setNombre] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <p>Hola, {nombre}</p>
      </div>
    </>
  );
}
