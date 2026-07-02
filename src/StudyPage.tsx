import { PersonaCard } from "./components/PersonaCard.tsx";
import { Persona } from "./types/types.ts";
import { Contador } from "./components/Contador.tsx";
import { useState } from "react";
import { Formulario } from "./components/Formulario.tsx";
import Usuarios from "./components/Usuarios.tsx";

const personas: Persona[] = [
  { nombre: "Gerardo", edad: 26, rol: "user", email: "gera@gera.com" },
  { nombre: "Edgar", edad: 30, rol: "admin" },
];

export default function StudyPage() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <>
      <h1>Laboratorio de React</h1>
      <p>Aqui practico componentes</p>
      {mostrar &&
        personas.map((n) => <PersonaCard key={n.nombre} persona={n} />)}
      <hr></hr>
      <Contador></Contador>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar" : "Mostrar"}
      </button>
      <hr></hr>
      <Formulario></Formulario>
      <Usuarios></Usuarios>
    </>
  );
}
