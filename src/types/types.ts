export interface Persona {
  nombre: string;
  edad: number;
  email?: string;
  rol: "admin" | "user" | "guest";
}
