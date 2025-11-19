import { TestBase } from '../core/TestEngine.js';

const agreeItems = [1,3,5,7,8,9,11,13,15,19,21,24,25,26,28,29,31,34,35,38,41,43,44,47,48,49,50];
const disagreeItems = [2,4,6,10,12,14,16,17,18,20,22,23,27,30,32,33,36,37,39,40,42,45,46];

export const AQ50 = new TestBase({
  name: "Cuestionario del Espectro Autista",
  info: "Este cuestionario debe ser completado por un observador cercano (padre, madre, profesor, terapeuta, etc.) que conozca muy bien a la persona desde la infancia. Todas las afirmaciones se refieren a la persona evaluada.",
  questions: [
    "1. Le resulta fácil seguir varias conversaciones al mismo tiempo",
    "2. Prefiere hacer las cosas con otras personas en lugar de hacerlo solo/a",
    "3. Le gusta hacer las cosas de la misma manera una y otra vez",
    "4. Le resulta difícil imaginar cómo sería ser otra persona",
    "5. Le cuesta entender las intenciones de los demás",
    "6. Le resulta fácil leer entre líneas cuando alguien habla con él/ella",
    "7. Se concentra más en los detalles que en el conjunto",
    "8. Le resulta difícil trabajar en varias cosas a la vez",
    "9. Se fija mucho en detalles como números de matrículas, horarios, etc.",
    "10. Cuando lee una historia o ve una película, le cuesta imaginar cómo se sienten los personajes",
    "11. Le gustan mucho los detalles",
    "12. Le resulta fácil cambiar de una actividad a otra",
    "13. Le gusta planificar cualquier actividad con mucho detalle antes de empezarla",
    "14. Le cuesta entender las expresiones faciales de los demás",
    "15. Las historias ficticias o novelas le aburren",
    "16. Le resulta fácil saber lo que alguien está pensando solo mirando su cara",
    "17. Le gustan las reuniones sociales",
    "18. Le resulta fácil hacer más de una cosa al mismo tiempo",
    "19. Cuando habla por teléfono, no sabe muy bien cuándo le toca hablar",
    "20. Disfruta haciendo cosas de forma espontánea",
    "21. Siempre se fija en los patrones que hay en las cosas",
    "22. Prefiere ir al teatro que a un museo",
    "23. No le molesta especialmente estar con otras personas",
    "24. Le resulta difícil inventar historias",
    "25. Le gusta organizar y clasificar las cosas",
    "26. Le cuesta averiguar qué hacer en una situación social",
    "27. Le resulta fácil improvisar o trabajar con lo que tiene a mano",
    "28. Se apasiona mucho por algunos temas",
    "29. Le cuesta seguir conversaciones largas",
    "30. Le resulta fácil pasar de una actividad a otra",
    "31. Le gusta hacer todo con precisión y exactitud",
    "32. Sabe cómo darse cuenta si alguien que le escucha se está aburriendo",
    "33. Le resulta fácil charlar con gente nueva",
    "34. Le cuesta imaginar lo que sería ser otra persona",
    "35. Le gusta tener rutinas diarias estrictas",
    "36. Disfruta con las bromas y los juegos de palabras",
    "37. Le resulta fácil entender lo que alguien siente mirando sus ojos",
    "38. A menudo le cuesta saber cuándo callarse",
    "39. Se interesa más por las personas que por las cosas",
    "40. Prefiere hacer las cosas de forma improvisada que planificada",
    "41. Le cuesta entender las intenciones de los demás",
    "42. No le gusta leer novelas",
    "43. Le resulta difícil hacer amigos",
    "44. Se fija en detalles que a los demás no les llaman la atención",
    "45. Se aseguraría de llegar a tiempo a una cita",
    "46. Le resulta fácil entender a la gente",
    "47. Le cuesta mantener una conversación",
    "48. Se apasiona por ciertos temas y habla mucho de ellos",
    "49. Le resulta difícil relajarse cuando tiene algo pendiente",
    "50. Le cuesta saber qué hacer en situaciones sociales complejas"
  ],
  labels: ["Totalmente en desacuerdo","Ligeramente en desacuerdo","Ligeramente de acuerdo","Totalmente de acuerdo"],
  calculator: resp => {
    let score = 0;
    agreeItems.forEach(i => { if (resp[i-1] >= 2) score++; });
    disagreeItems.forEach(i => { if (resp[i-1] <= 1) score++; });

    const interp = score >= 32 ? "Puntuación alta - muy sugerente de trastorno del espectro autista" :
                   score >= 26 ? "Puntuación por encima del promedio - rasgos autistas significativos" :
                   "Puntuación dentro del rango típico";

    return `
      <p><strong>Puntuación total AQ-50:</strong> ${score} / 50</p>
      <hr>
      <p class="highlight">${interp}</p>
      <p><small>Corte clásico ≥32 puntos (alta sensibilidad y especificidad en población clínica).<br>Este test no sustituye un diagnóstico profesional.</small></p>
    `;
  }
});