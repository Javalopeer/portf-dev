import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola mundo desde mi backend");
});

let usuarios = [
  { id: 1, name: "Gerardo" },
  { id: 2, name: "Edgar" },
];

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.post("/usuarios", (req, res) => {
  const nuevoUsuario = {
    id: usuarios.length + 1,
    name: req.body.name,
  };
  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

app.delete("/usuarios/:id", (req, res) => {
  const id = Number(req.params.id);
  usuarios = usuarios.filter((u) => u.id !== id);
  res.status(204).send();
});

app.put("/usuarios/:id", (req, res) => {
  const id = Number(req.params.id);
  const usuario = usuarios.find((u) => u.id === id);

  if (!usuario) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  usuario.name = req.body.name;
  res.json(usuario);
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
