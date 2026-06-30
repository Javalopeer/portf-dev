interface SaludoProps {
  nombre: string;
}

export default function Saludo(props: SaludoProps) {
  return <p>Hola, {props.nombre}</p>;
}
