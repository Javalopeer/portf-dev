// ============================================
//  PIZARRA DE APRENDIZAJE
//  Aquí practicas TypeScript y React desde cero.
//  Tu portafolio (App.tsx) queda intacto.
// ============================================

export default function Learn() {
  // ---- ZONA TYPESCRIPT ----
  // Escribe código TS aquí abajo. Usa console.log para ver
  // resultados en la consola del navegador (tecla F12 -> pestaña "Console").

  interface Proyecto {
    titulo: string,
    terminado: boolean,
    estrellas: number
  }

  const proyectos: Proyecto[] = [
    {titulo: 'SmartBugdet', terminado: false, estrellas: 12},
    {titulo: 'DigiExpress', terminado: true, estrellas: 30}
  ]

  console.log('Cuantos proyectos: ', proyectos.length)
  console.log('Primer proyecto: ', proyectos[0])
  console.log('Titulo del segundo: ', proyectos[1].titulo)

  // ---- ZONA PANTALLA ----
  // Lo que devuelve este return es lo que se pinta en la página.
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Pizarra</h1>
      <p>Abre la consola del navegador (F12) para ver los console.log.</p>
    </div>
  )
}
