import { useEffect, useState } from "react";

interface Usuario {
  id: number;
  name: string;
  email: string;
}

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function traer() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status}`);
        }
        const data = await res.json();
        // console.log(data);
        setUsuarios(data);
      } catch (error) {
        setError(true);
      } finally {
        setCargando(false);
      }
    }
    traer();
  }, []);

  if (cargando) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Hubo un error al cargar los usuarios.</p>;
  }

  return (
    <ul>
      {usuarios.map((u) => (
        <li key={u.id}>
          {u.name} ------ {u.email}
          <br></br>
        </li>
      ))}
    </ul>
  );
}
