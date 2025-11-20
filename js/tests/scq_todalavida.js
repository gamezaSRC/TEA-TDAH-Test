import { TestBase } from '../core/TestEngine.js';
import { GaugeChart } from '../core/Charts/GaugeChart.js';

export const SCQ_TodaLaVida = new TestBase({
  name: "SCQ Forma A", // para mayores de 4 años con desarrollo verbal
  info: "Responda pensando en el comportamiento de la persona a la que evalua a lo largo de toda su vida (especialmente entre los 4-5 años). Rodee Sí si la conducta ha ocurrido alguna vez.",
  questions: [
    { text: "¿Es capaz de hablar usando frases u oraciones cortas?" },
    { text: "¿Puede usted tener una conversación con él o con ella, en la que participen ambos y se vayan turnando o vayan construyendo sobre lo ya dicho?", showIf: resp => resp[0] !== 1 },
    { text: "¿Ha usado alguna vez frases raras o ha dicho la misma cosa una y otra vez y casi exactamente de la misma manera ya fueran frases que ha oído a otras personas o frases que se ha inventado?", showIf: resp => resp[0] !== 1 },
    { text: "¿Ha hecho alguna vez preguntas o afirmaciones socialmente inconvenientes, tales como preguntas indiscretas o comentarios personales en momentos inoportunos?", showIf: resp => resp[0] !== 1 },
    { text: "¿Ha confundido alguna vez los pronombres diciendo, por ejemplo, «tú» o «ella» en lugar de «yo»?", showIf: resp => resp[0] !== 1 },
    { text: "¿Ha usado alguna vez palabras que ha inventado, ha expresado algunas cosas de una manera rara o indirecta o ha usado formas metafóricas para referirse a las cosas, como por ejemplo, decir «lluvia caliente» en lugar de «vapor»?", showIf: resp => resp[0] !== 1 },
    { text: "¿Ha dicho en ocasiones la misma cosa una y otra vez y exactamente de la misma manera o ha insistido para que usted diga las mismas cosas una y otra vez?", showIf: resp => resp[0] !== 1 },
    { text: "¿Ha insistido alguna vez en hacer ciertas cosas de una manera o en un orden muy particular o ha habido determinados «rituales» que pretendía que usted respetase?" },
    { text: "¿Piensa usted que por lo general su expresión facial se ha podido considerar adecuada a la situación del momento?" },
    { text: "¿Ha usado alguna vez la mano de usted como una herramienta o como si fuera parte de su propio cuerpo, por ejemplo, apuntando con su dedo o poniendo la mano de usted en el tirador de la puerta para lograr que la abriese?" },
    { text: "¿Ha mostrado alguna vez interés por cosas que le preocuparan mucho y que a otras personas les parecieran extrañas, por ejemplo, semáforos, tuberías de desagüe u horarios de transporte?" },
    { text: "¿Ha estado alguna vez más interesado en las piezas de un juguete o de un objeto (por ejemplo, dar vueltas a las ruedas de un coche), que en usar el objeto de acuerdo a su finalidad?" },
    { text: "¿Ha mostrado alguna vez un interés especial por algún tema (p.e.: trenes, dinosaurios, etc.) que, aun siendo normal a su edad y en su ambiente, parecía fuera de lo normal por su intensidad?" },
    { text: "¿Ha mostrado alguna vez un interés excepcional por la vista, el tacto, el sonido, el sabor o el olor de las cosas o las personas?" },
    { text: "¿Ha realizado en ocasiones gestos o movimientos extraños con las manos o los dedos, como agitar o mover sus dedos delante de sus ojos?" },
    { text: "¿Ha realizado en ocasiones movimientos complicados de su cuerpo, como dar vueltas, retorcerse o dar saltos repetidos en el sitio?" },
    { text: "Se ha hecho daño a propósito alguna vez, por ejemplo, mordiéndose un brazo o golpeándose la cabeza?" },
    { text: "¿Ha tenido alguna vez objetos que necesitaba llevar consigo, aparte de un muñeco o|Manta?" },
    { text: "¿Tiene un amigo íntimo o alguna amistad en particular?" },
    { text: "Cuando tenía entre 4 y 5 años, ¿habló con usted alguna vez sólo para ser simpático y amable y no para conseguir algo?" },
    { text: "Cuando tenía entre 4 y 5 años, ¿imitaba alguna vez espontáneamente a otras personas o lo que hacían (como pasar la aspiradora, cocinar o arreglar cosas)?" },
    { text: "Cuando tenía entre 4 y 5 años, ¿señalaba alguna vez espontáneamente las cosas que veía sólo para mostrárselas a usted y no porque quisiera obtenerlas?" },
    { text: "Cuando tenía entre 4 y 5 años, ¿hacía alguna vez gestos para indicarle lo que quería, aparte de señalar el objeto o tirarle a usted de la mano?" },
    { text: "Cuando tenía entre 4 y 5 años, ¿asentía con la cabeza para decir sí?" },
    { text: "Cuando tenía entre 4 y 5 años, ¿negaba con la cabeza para decir no?" },
    { text: "Cuando tenía entre 4 y 5 años, al hablarle o hacer algo con usted, ¿solía mirarle directamente a la cara?" },
    { text: "Cuando tenía entre 4 y 5 años, ¿devolvía la sonrisa si alguien le sonreía?" },
    { text: "Cuando tenía entre 4 y 5 años, ¿le mostraba a usted alguna vez cosas que le interesaban a fin de captar su atención?" },
    { text: "Cuando tenía entre 4 y 5 años, ¿se ofrecía alguna vez a compartir cosas con usted, aparte de alimentos?" },
    { text: "Cuando tenía entre 4 y 5 años, ¿quiso alguna vez que usted participara en sus juegos?" },
    { text: "Cuando tenía entre 4 y 5 años, ¿intentó alguna vez consolarle si vio que usted estaba triste o se había hecho daño?" },
    { text: "Cuando tenía entre 4 y 5 años y quería algo o buscaba ayuda, ¿le miraba y hacía gestos con sonidos o palabras para captar su atención?" },
    { text: "Cuando tenía entre 4 y 5 años, ¿mostraba una variedad normal de expresiones faciales?" },
    { text: "Cuando tenía entre 4 y 5 años, ¿tomó parte espontáneamente alguna vez en juegos de grupo o trató de imitar las acciones y juegos sociales que se estaban haciendo?" },
    { text: "Cuando tenía entre 4 y 5 años, ¿jugaba a disfrazarse, a simular que era otra persona o a juegos de ficción en general?" },
    { text: "¿Muestra interés por niños de su edad a los que no conoce?" },
    { text: "¿Responde positivamente cuando se le acerca otro niño?" },
    { text: "Si usted entra en un cuarto y empieza a hablarle sin decir su nombre, ¿por lo general levanta la vista y le presta atención?" },
    { text: "Cuando tenía entre 4 y 5 años, ¿participó alguna vez con otros niños en juegos de ficción, de tal manera que fuese claro que unos y otros comprendían en qué consistía el juego?" },
    { text: "Cuando tenía entre 4 y 5 años, ¿participaba activamente en juegos que requerían colaborar con otros niños en grupo, como jugar al escondite o a la pelota?" }
  ],
  labels: ["Sí", "No"],
  calculator: resp => {

    // Calcular puntuación: para cada ítem (excepto la pregunta 1), Sí (0) = 1 punto, No (1) = 0 puntos
    let score = 0;
    let denom = 0;
    for (let i = 1; i < resp.length; i++) {
      if (resp[i] === -1) continue;
      denom++;
      if (resp[i] === 0) score++;
    }

    let interpretacion = "";
    if (score >= 22) interpretacion = "MUY ALTA probabilidad de TEA";
    else if (score >= 15) interpretacion = "Probabilidad de TEA";
    else interpretacion = "BAJA probabilidad de TEA";
    // Renderizado del gráfico
    setTimeout(() => {
      const gaugeChart = new GaugeChart();
      gaugeChart.renderGauge(score, denom, { high: 22, medium: 15 });
    }, 100);

    return `
      <hr>
      <p class="highlight">${interpretacion}</p>
      <p><small>Solo es un test. Requiere evaluación clínica profesional.</small></p>
    `;
  }

});
