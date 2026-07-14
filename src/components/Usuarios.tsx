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
  const [nombre, setNombre] = useState("");
  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [nombreEditado, setNombreEditado] = useState("");

  useEffect(() => {
    traer();
  }, []);

  async function traer() {
    try {
      // Backend propio (api-practica, puerto 3000). Requiere el server corriendo.
      // API publica de respaldo: https://jsonplaceholder.typicode.com/users
      const res = await fetch("http://localhost:3000/usuarios");
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

  async function crearUsuario(e: React.FormEvent) {
    e.preventDefault();
    await fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: nombre }),
    });
    setNombre("");
    await traer();
  }

  async function borrarUsuario(id:number){
    await fetch (`http://localhost:3000/usuarios/${id}`, {
    method: "DELETE",
    });
    await traer();
  }

   async function actualizarUsuario(id:number){
    await fetch (`http://localhost:3000/usuarios/${id}`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({name: nombreEditado}),
    });
    setEditandoId(null);
    await traer();
  }

  if (cargando) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Hubo un error al cargar los usuarios.</p>;
  }

  return (
    <>
      <form onSubmit={crearUsuario}>
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre nuevo"
        />
        <button type="submit">Crear Usuario</button>
      </form>

      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>
            {editandoId === u.id? (
              <>
              <input
              value={nombreEditado}
              onChange={(e) => setNombreEditado(e.target.value)}
              />
              <button onClick={()=> actualizarUsuario(u.id)}>Guardar</button>
              <button onClick={()=> setEditandoId(null)}>Cancelar</button>
              </>
            ):(
              <>
              {u.name}
              <button onClick={()=>{setEditandoId(u.id); setNombreEditado(u.name)}}>----Editar----</button>
              <button onClick={()=>borrarUsuario(u.id)}>Borrar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
