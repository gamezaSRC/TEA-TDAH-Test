import { TestBase } from '../core/TestEngine.js';

export const ASRS_Adultos = new TestBase({
  name: "TDAH en adultos",
  info: "Responda según su experiencia en los últimos 6 meses. Sea lo más sincero posible.",
  questions: [
    "1. ¿Con qué frecuencia tiene problemas para terminar los detalles finales de un proyecto, una vez que las partes más difíciles ya están hechas?",
    "2. ¿Con qué frecuencia tiene dificultad para organizar tareas o actividades cuando hay muchas cosas que hacer?",
    "3. ¿Con qué frecuencia tiene problemas para recordar citas o compromisos?",
    "4. Cuando tiene una tarea que requiere mucho pensamiento, ¿con qué frecuencia evita o retrasa comenzarla?",
    "5. ¿Con qué frecuencia se mueve o retuerce las manos o los pies cuando tiene que estar sentado durante mucho tiempo?",
    "6. ¿Con qué frecuencia se siente excesivamente inquieto o como si estuviera impulsado por un motor?",
    "7. ¿Con qué frecuencia comete errores por descuido en el trabajo o en otras actividades?",
    "8. ¿Con qué frecuencia tiene dificultad para mantener la atención cuando está haciendo un trabajo aburrido o repetitivo?",
    "9. ¿Con qué frecuencia tiene dificultad para concentrarse en lo que la gente le dice, incluso cuando le hablan directamente?",
    "10. ¿Con qué frecuencia deja las cosas sin terminar en casa, en el trabajo o en el colegio/universidad?",
    "11. ¿Con qué frecuencia tiene dificultad para organizar sus cosas o su espacio de trabajo?",
    "12. ¿Con qué frecuencia olvida hacer cosas que tiene que hacer todos los días (como pagar facturas, hacer recados, etc.)?",
    "13. ¿Con qué frecuencia evita o retrasa tareas que requieren mucho esfuerzo mental sostenido?",
    "14. ¿Con qué frecuencia se le caen o pierde cosas necesarias para el trabajo o la escuela (llaves, gafas, móvil, etc.)?",
    "15. ¿Con qué frecuencia se distrae fácilmente por actividad o ruido a su alrededor?",
    "16. ¿Con qué frecuencia tiene dificultad para recordar hacer cosas que tiene que hacer (devolver llamadas, pagar facturas, etc.)?",
    "17. ¿Con qué frecuencia se remueve o se siente incómodo cuando tiene que estar sentado durante mucho tiempo?",
    "18. ¿Con qué frecuencia se siente inquieto o con ganas de moverse en situaciones en las que debería estar quieto?"
  ],
  labels: ["Nunca", "Rara vez", "A veces", "A menudo", "Muy a menudo"],
  calculator: resp => {
    // Puntuación oficial ASRS-v1.1 completa (18 ítems)
    // Parte A (ítems 1-6): umbrales altos → 1 punto si ≥2 en ítems 1-3 y ≥3 en ítems 4-6
    // Parte B (ítems 7-18): umbral ≥2 para puntuar 1 punto cada uno
    let parteA = 0;
    let parteB = 0;

    // Parte A
    if (resp[0] >= 2) parteA++;
    if (resp[1] >= 2) parteA++;
    if (resp[2] >= 2) parteA++;
    if (resp[3] >= 3) parteA++;
    if (resp[4] >= 3) parteA++;
    if (resp[5] >= 3) parteA++;

    // Parte B
    for (let i = 6; i < 18; i++) {
      if (resp[i] >= 2) parteB++;
    }

    const total = parteA + parteB;

    let interpretacion = "";
    if (parteA >= 4) interpretacion = "Muy probable TDAH (alta probabilidad clínica)";
    else if (total >= 17) interpretacion = "Probable TDAH (puntuación elevada en la escala completa)";
    else if (total >= 13) interpretacion = "Posible TDAH - zona subclínica o riesgo moderado";
    else interpretacion = "Poco probable TDAH";

    return `
      <p><strong>Puntuación total ASRS-v1.1 (18 ítems):</strong> ${total} / 18</p>
      <p><strong>Parte A (6 ítems):</strong> ${parteA} / 6</p>
      <p><strong>Parte B (detalle):</strong> ${parteB} / 12</p>
      <hr>
      <p class="highlight">${interpretacion}</p>
      <p><small>
        • Parte A ≥4 = alta sensibilidad/especificidad para TDAH en adultos<br>
        • Puntuación total ≥17 = criterio clásico de alta probabilidad<br>
        Solo es un test - requiere evaluación clínica completa.
      </small></p>
    `;
  }
});