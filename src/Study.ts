/* const saludar = (nombre: string) => "Hola " + nombre;
console.log(saludar("Gerardo"));

const esMayorDeEdad = (edad: number) => edad >= 18;
console.log(esMayorDeEdad(17));

const promedio = (a: number, b: number) => (a + b) / 2;
console.log(promedio(10, 20));
 */

interface Persona {
  nombre: string;
  edad: number;
  email?: string;
  rol: "admin" | "user" | "guest";
}

const persona: Persona = {
  nombre: "Gerardo",
  edad: 26,
  rol: "user",
};

const presentar = (persona: Persona) =>
  `${persona.nombre} tiene ${persona.edad} años y es ${persona.rol}`;
console.log(presentar(persona));

const personas: Persona[] = [
  { nombre: "Alberto", edad: 30, rol: "admin" },
  { nombre: "Edgardo", edad: 25, email: "edgardo@example.com", rol: "user" },
];
const permisos = (rol: "admin" | "user" | "guest") => {
  if (rol === "admin") {
    return "Tiene todos los permisos, puede acceder a todo";
  } else if (rol === "user") {
    return "Tiene permisos de usuario, puede acceder a ciertas funciones";
  } else {
    return "Tiene permisos de invitado, puede acceder a funciones básicas";
  }
};

personas.forEach((persona) => {
  console.log(presentar(persona));
  console.log(permisos(persona.rol));
});

/* console.log(personas.length);
console.log(personas[0].email);
console.log(personas[0].email?.toUpperCase());
console.log(personas[1].email?.toUpperCase()); */
