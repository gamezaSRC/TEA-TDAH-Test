import { TestBase } from '../core/TestEngine.js';

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
    "1. Comete errores por descuido en trabajos escolares, actividades o tareas",
    "2. Tiene dificultad para mantener la atención en tareas o juegos",
    "3. Parece no escuchar cuando se le habla directamente",
    "4. No sigue instrucciones y no termina tareas escolares o deberes",
    "5. Tiene dificultad para organizar tareas y actividades",
    "6. Evita o le disgusta realizar tareas que requieren esfuerzo mental sostenido",
    "7. Pierde cosas necesarias para tareas o actividades (juguetes, libros, lápices…)",
    "8. Se distrae fácilmente por estímulos externos",
    "9. Es olvidadizo en las actividades diarias",
    "10. Mueve en exceso manos o pies, o se remueve en su asiento",
    "11. Se levanta en clase o en situaciones en que se espera que permanezca sentado",
    "12. Corre o salta excesivamente en situaciones en que resulta inapropiado",
    "13. Tiene dificultades para jugar o dedicarse tranquilamente a actividades de ocio",
    "14. Está “en marcha” o actúa como si tuviera un motor",
    "15. Habla en exceso",
    "16. Responde de forma precipitada antes de que se hayan completado las preguntas",
    "17. Tiene dificultad para esperar su turno",
    "18. Interrumpe o se entromete en las actividades de otros"
  ],
  calculator: resp => {
    const inat = resp.slice(0,9).reduce((a,b)=>a+b,0);
    const hiper = resp.slice(9).reduce((a,b)=>a+b,0);
    const avgInat = (inat/9).toFixed(2);
    const avgHiper = (hiper/9).toFixed(2);

    let interp = "";
    if (avgInat >= 2.0 || avgHiper >= 2.0) interp = "Altamente sugerente de TDAH (percentil >95)";
    else if (avgInat >= 1.67 || avgHiper >= 1.67) interp = "Riesgo moderado-alto / zona subclínica";
    else interp = "Dentro del rango típico";

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