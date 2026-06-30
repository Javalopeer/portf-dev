import Saludo from "./components/Saludo.tsx";

const nombres = ["Gerardo", "Alberto", "Cristiano", "Jeremias"];

export default function StudyPage() {
  return (
    <>
      <h1>Laboratorio de React</h1>
      <p>Aqui practico componentes</p>
      {/*       <Saludo nombre="Gerardo" />
      <Saludo nombre="Alberto" /> */}
      {nombres.map((n) => (
        <Saludo key={n} nombre={n} />
      ))}
    </>
  );
}
