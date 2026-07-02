import { Persona } from "../types/types.ts";

interface PersonaCardProps {
  persona: Persona;
}

export function PersonaCard(props: PersonaCardProps) {
  return (
    <div>
      <hr />
      <h2>{props.persona.nombre}</h2>
      <p>Edad: {props.persona.edad}</p>
      <p>Rol: {props.persona.rol}</p>
      <p>
        Email: {props.persona.email ? props.persona.email : "No posee correo."}
      </p>
    </div>
  );
}
