// 1. Datos detallados para la Lista de Juegos Seleccionados
const juegosSeleccionados = [
  { prioridad: "01", titulo: "Satisfactory", genero: "Simulación / Automatización", plataforma: "Steam", estado: "Transmitiendo" },
  { prioridad: "02", titulo: "RimWorld", genero: "Estrategia / Supervivencia", plataforma: "Steam", estado: "Siguiente" },
  { prioridad: "03", titulo: "Terraria", genero: "Aventura / Sandbox", plataforma: "Steam", estado: "En Espera" },
  { prioridad: "04", titulo: "Forager", genero: "Crafting / RPG", plataforma: "Steam", estado: "En Espera" },
  { prioridad: "05", titulo: "Nuclear Throne", genero: "Roguelike / Acción", plataforma: "Steam", estado: "En Espera" }
];

// 2. Datos para la Cola de Votos
const colaVotos = [
  { id: 101, titulo: "Blood Strike", votos: 24 },
  { id: 102, titulo: "Craft The World", votos: 18 },
  { id: 103, titulo: "Meccha Chameleon", votos: 15 },
  { id: 104, titulo: "Slither.io", votos: 9 },
  { id: 105, titulo: "Cyberpunk 2077", votos: 7 },
  { id: 106, titulo: "Hades II", votos: 5 },
  { id: 107, titulo: "Dead Cells", votos: 3 },
  { id: 108, titulo: "Valheim", votos: 1 }
];

// 3. Renderizado de interfaz
function renderizarInterfaz() {
  const contenedorTabla = document.getElementById('lista-seleccionados');
  const contenedorVotos = document.getElementById('grid-votos');

  // Renderizar Lista/Tabla de Seleccionados
  contenedorTabla.innerHTML = juegosSeleccionados.map(juego => {
    const esActivo = juego.estado === "Transmitiendo";
    const statusClass = esActivo ? "status-activo" : "status-espera";

    return `
      <tr>
        <td style="color: var(--neon-blue); font-weight: bold;">#${juego.prioridad}</td>
        <td style="font-weight: bold; color: #fff;">${juego.titulo}</td>
        <td style="color: #aaa;">${juego.genero}</td>
        <td><span style="color: var(--neon-purple); font-weight: bold;">${juego.plataforma}</span></td>
        <td><span class="badge-status ${statusClass}">${juego.estado}</span></td>
      </tr>
    `;
  }).join('');

  // Renderizar Cajas de Votación
  contenedorVotos.innerHTML = colaVotos.map(juego => `
    <div class="caja-voto" onclick="votarJuego(${juego.id})">
      <p class="titulo-juego-voto">${juego.titulo}</p>
      <span class="badge-votos-cyber">▲ ${juego.votos} VOTOS</span>
    </div>
  `).join('');
}

// 4. Función de votación
function votarJuego(id) {
  const juego = colaVotos.find(j => j.id === id);
  if (juego) {
    juego.votos++;
    // Reordenar automáticamente la lista por número de votos (de mayor a menor)
    colaVotos.sort((a, b) => b.votos - a.votos);
    renderizarInterfaz();
  }
}

// Carga inicial
document.addEventListener('DOMContentLoaded', renderizarInterfaz);