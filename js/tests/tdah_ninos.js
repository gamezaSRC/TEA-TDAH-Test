import { TestBase } from '../core/TestEngine.js';
import { BarChart } from '../core/Charts/BarChart.js';

export const SNAPIV_Ninos = new TestBase({
  name: "SNAP-IV - TDAH en niños y adolescentes",
  info: "Evalúe al niño según lo observado en los últimos 6 meses",
  getDisplayName: (ageGroup) => {
    if (ageGroup === 'child') return "SNAP-IV - TDAH en niños";
    if (ageGroup === 'teen') return "SNAP-IV - TDAH en adolescentes";
    return "SNAP-IV - TDAH en niños y adolescentes";
  },
  getDisplayInfo: (ageGroup) => {
    if (ageGroup === 'child') return "Evalúe al niño según lo observado en los últimos 6 meses";
    if (ageGroup === 'teen') return "Evalúe al adolescente según lo observado en los últimos 6 meses";
    return "Evalúe según lo observado en los últimos 6 meses";
  },
  questions: [
    { text: "Comete errores por descuido en trabajos escolares, actividades o tareas" },
    { text: "Tiene dificultad para mantener la atención en tareas o juegos" },
    { text: "Parece no escuchar cuando se le habla directamente" },
    { text: "No sigue instrucciones y no termina tareas escolares o deberes" },
    { text: "Tiene dificultad para organizar tareas y actividades" },
    { text: "Evita o le disgusta realizar tareas que requieren esfuerzo mental sostenido" },
    { text: "Pierde cosas necesarias para tareas o actividades (juguetes, libros, lápices…)" },
    { text: "Se distrae fácilmente por estímulos externos" },
    { text: "Es olvidadizo en las actividades diarias" },
    { text: "Mueve en exceso manos o pies, o se remueve en su asiento" },
    { text: "Se levanta en clase o en situaciones en que se espera que permanezca sentado" },
    { text: "Corre o salta excesivamente en situaciones en que resulta inapropiado" },
    { text: "Tiene dificultades para jugar o dedicarse tranquilamente a actividades de ocio" },
    { text: "Está “en marcha” o actúa como si tuviera un motor" },
    { text: "Habla en exceso" },
    { text: "Responde de forma precipitada antes de que se hayan completado las preguntas" },
    { text: "Tiene dificultad para esperar su turno" },
    { text: "Interrumpe o se entromete en las actividades de otros" }
  ],
  calculator: resp => {
    const inat = resp.slice(0,9).reduce((a,b)=>a+b,0);
    const hiper = resp.slice(9).reduce((a,b)=>a+b,0);
    const avgInat = (inat/9).toFixed(2);
    const avgHiper = (hiper/9).toFixed(2);

    let interp = "";
    if (avgInat >= 2.0 || avgHiper >= 2.0) interp = "Probabilidad Alta";
    else if (avgInat >= 1.67 || avgHiper >= 1.67) interp = "Probabilidad Media";
    else interp = "Probabilidad Baja";

    // Renderizar gráfico de barras
    setTimeout(() => {
      const barChart = new BarChart();
      barChart.renderBar(
        ['Inatención', 'Hiperactividad/Impulsividad'],
        [parseFloat(avgInat), parseFloat(avgHiper)],
        { dataLabel: 'Media', maxValue: 3 }
      );
    }, 100);

    return `
      <p><strong>Puntuación total:</strong> ${inat+hiper}/54</p>
      <p><strong>Inatención:</strong> ${inat}/27 (media: ${avgInat})</p>
      <p><strong>Hiperactividad/Impulsividad:</strong> ${hiper}/27 (media: ${avgHiper})</p>
      <hr>
      <p class="highlight">${interp}</p>
      <p><small>Solo es un test. Requiere evaluación clínica profesional.</small></p>
    `;
  }
});