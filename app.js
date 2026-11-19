/**
 * Lógica de control - Taller Realidad Aumentada (TEL 315)
 * Gestiona la escala global (1.0 vs 1.5) y la telemetría de detección de marcadores.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Referencias a elementos de la interfaz
  const btnToggleScale = document.getElementById('btn-toggle-scale');
  const badgeScale = document.getElementById('badge-scale');
  const ledIndicator = document.getElementById('led-indicator');
  const statusText = document.getElementById('status-text');

  // Referencias a los marcadores y contenedores 3D de A-Frame
  const markerHiro = document.getElementById('marker-hiro');
  const markerKanji = document.getElementById('marker-kanji');
  const groupHiro = document.getElementById('group-hiro');
  const groupKanji = document.getElementById('group-kanji');

  // Estado compartido de escala: false = Normal (1.0), true = Ampliado (1.5)
  let isExpanded = false;

  // 1. Control del botón "Cambiar tamaño"
  btnToggleScale.addEventListener('click', () => {
    isExpanded = !isExpanded;

    const targetScale = isExpanded ? '1.5 1.5 1.5' : '1 1 1';

    // Se aplica la escala a ambos grupos para conservar el estado entre tarjetas
    groupHiro.setAttribute('scale', targetScale);
    groupKanji.setAttribute('scale', targetScale);

    // Actualización visual de la etiqueta en pantalla
    badgeScale.textContent = isExpanded ? 'Ampliado (1.5x)' : 'Normal (1.0x)';
  });

  // 2. Telemetría en tiempo real: Tarjeta A (Hiro)
  markerHiro.addEventListener('markerFound', () => {
    ledIndicator.className = 'led led-active';
    statusText.textContent = 'Tarjeta A (Hiro) • Cubo Azul';
  });

  markerHiro.addEventListener('markerLost', () => {
    ledIndicator.className = 'led led-idle';
    statusText.textContent = 'Buscando marcador...';
  });

  // 3. Telemetría en tiempo real: Tarjeta B (Kanji)
  markerKanji.addEventListener('markerFound', () => {
    ledIndicator.className = 'led led-active';
    statusText.textContent = 'Tarjeta B (Kanji) • Esfera Roja';
  });

  markerKanji.addEventListener('markerLost', () => {
    ledIndicator.className = 'led led-idle';
    statusText.textContent = 'Buscando marcador...';
  });
});