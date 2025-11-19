import { TestBase } from '../core/TestEngine.js';
import { GaugeChart } from '../core/Charts/GaugeChart.js';

const agreeItems = [1, 3, 5, 7, 8, 9, 11, 13, 15, 19, 21, 24, 25, 26, 28, 29, 31, 34, 35, 38, 41, 43, 44, 47, 48, 49, 50];
const disagreeItems = [2, 4, 6, 10, 12, 14, 16, 17, 18, 20, 22, 23, 27, 30, 32, 33, 36, 37, 39, 40, 42, 45, 46];

export const AQ50 = new TestBase({
  name: "Cuestionario del Espectro Autista",
  info: "Este cuestionario debe ser completado por un observador cercano (padre, madre, profesor, terapeuta, etc.) que conozca muy bien a la persona desde la infancia. Todas las afirmaciones se refieren a la persona evaluada.",
  questions: [
    { text: "Le resulta fácil seguir varias conversaciones al mismo tiempo" },
    { text: "Prefiere hacer las cosas con otras personas en lugar de hacerlo solo/a" },
    { text: "Le gusta hacer las cosas de la misma manera una y otra vez" },
    { text: "Le resulta difícil imaginar cómo sería ser otra persona" },
    { text: "Le cuesta entender las intenciones de los demás" },
    { text: "Le resulta fácil leer entre líneas cuando alguien habla con él/ella" },
    { text: "Se concentra más en los detalles que en el conjunto" },
    { text: "Le resulta difícil trabajar en varias cosas a la vez" },
    { text: "Se fija mucho en detalles como números de matrículas, horarios, etc." },
    { text: "Cuando lee una historia o ve una película, le cuesta imaginar cómo se sienten los personajes" },
    { text: "Le gustan mucho los detalles" },
    { text: "Le resulta fácil cambiar de una actividad a otra" },
    { text: "Le gusta planificar cualquier actividad con mucho detalle antes de empezarla" },
    { text: "Le cuesta entender las expresiones faciales de los demás" },
    { text: "Las historias ficticias o novelas le aburren" },
    { text: "Le resulta fácil saber lo que alguien está pensando solo mirando su cara" },
    { text: "Le gustan las reuniones sociales" },
    { text: "Le resulta fácil hacer más de una cosa al mismo tiempo" },
    { text: "Cuando habla por teléfono, no sabe muy bien cuándo le toca hablar" },
    { text: "Disfruta haciendo cosas de forma espontánea" },
    { text: "Siempre se fija en los patrones que hay en las cosas" },
    { text: "Prefiere ir al teatro que a un museo" },
    { text: "No le molesta especialmente estar con otras personas" },
    { text: "Le resulta difícil inventar historias" },
    { text: "Le gusta organizar y clasificar las cosas" },
    { text: "Le cuesta averiguar qué hacer en una situación social" },
    { text: "Le resulta fácil improvisar o trabajar con lo que tiene a mano" },
    { text: "Se apasiona mucho por algunos temas" },
    { text: "Le cuesta seguir conversaciones largas" },
    { text: "Le resulta fácil pasar de una actividad a otra" },
    { text: "Le gusta hacer todo con precisión y exactitud" },
    { text: "Sabe cómo darse cuenta si alguien que le escucha se está aburriendo" },
    { text: "Le resulta fácil charlar con gente nueva" },
    { text: "Le cuesta imaginar lo que sería ser otra persona" },
    { text: "Le gusta tener rutinas diarias estrictas" },
    { text: "Disfruta con las bromas y los juegos de palabras" },
    { text: "Le resulta fácil entender lo que alguien siente mirando sus ojos" },
    { text: "A menudo le cuesta saber cuándo callarse" },
    { text: "Se interesa más por las personas que por las cosas" },
    { text: "Prefiere hacer las cosas de forma improvisada que planificada" },
    { text: "Le cuesta entender las intenciones de los demás" },
    { text: "No le gusta leer novelas" },
    { text: "Le resulta difícil hacer amigos" },
    { text: "Se fija en detalles que a los demás no les llaman la atención" },
    { text: "Se aseguraría de llegar a tiempo a una cita" },
    { text: "Le resulta fácil entender a la gente" },
    { text: "Le cuesta mantener una conversación" },
    { text: "Se apasiona por ciertos temas y habla mucho de ellos" },
    { text: "Le resulta difícil relajarse cuando tiene algo pendiente" },
    { text: "Le cuesta saber qué hacer en situaciones sociales complejas" }
  ],
  labels: ["Totalmente en desacuerdo", "Ligeramente en desacuerdo", "Ligeramente de acuerdo", "Totalmente de acuerdo"],
  calculator: resp => {
    let score = 0;
    agreeItems.forEach(i => { if (resp[i - 1] >= 2) score++; });
    disagreeItems.forEach(i => { if (resp[i - 1] <= 1) score++; });

    const interp = score >= 32 ? "Puntuación alta - muy sugerente de trastorno del espectro autista" :
      score >= 26 ? "Puntuación por encima del promedio - rasgos autistas significativos" :
        "Puntuación dentro del rango típico";

    // Renderizado del gráfico
    setTimeout(() => {
      const gaugeChart = new GaugeChart();
      gaugeChart.renderGauge(score, 50, { high: 32, medium: 26 });
    }, 100);

    return `
      <p><strong>Puntuación total AQ-50:</strong> ${score} / 50</p>
      <hr>
      <p class="highlight">${interp}</p>
      <p><small>Corte clásico ≥32 puntos (alta sensibilidad y especificidad en población clínica).<br>Este test no sustituye un diagnóstico profesional.</small></p>
    `;
  }
});