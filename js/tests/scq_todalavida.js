import { TestBase } from '../core/TestEngine.js';

export const SCQ_TodaLaVida = new TestBase({
  name: "SCQ Forma A - Toda la vida", // para mayores de 4 años con desarrollo verbal
  info: "Responda pensando en el comportamiento de la persona a lo largo de toda su vida (especialmente entre los 4-5 años). Rodee Sí si la conducta ha ocurrido alguna vez.",
  questions: [
    "¿Es capaz de hablar usando frases u oraciones cortas?",
    "¿Puede usted tener una conversación con él o con ella, en la que participen ambos y se vayan turnando o vayan construyendo sobre lo ya dicho?",
    "¿Ha usado alguna vez frases raras o ha dicho la misma cosa una y otra vez y casi exactamente de la misma manera ya fueran frases que ha oído a otras personas o frases que se ha inventado?",
    "¿Ha hecho alguna vez preguntas o afirmaciones socialmente inconvenientes, tales como preguntas indiscretas o comentarios personales en momentos inoportunos?",
    "¿Ha confundido alguna vez los pronombres diciendo, por ejemplo, «tú» o «ella» en lugar de «yo»?",
    "¿Ha usado alguna vez palabras que ha inventado, ha expresado algunas cosas de una manera rara o indirecta o ha usado formas metafóricas para referirse a las cosas, como por ejemplo, decir «lluvia caliente» en lugar de «vapor»?",
    "¿Ha dicho en ocasiones la misma cosa una y otra vez y exactamente de la misma manera o ha insistido para que usted diga las mismas cosas una y otra vez?",
    "¿Ha insistido alguna vez en hacer ciertas cosas de una manera o en un orden muy particular o ha habido determinados «rituales» que pretendía que usted respetase?",
    "¿Piensa usted que por lo general su expresión facial se ha podido considerar adecuada a la situación del momento?",
    "¿Ha usado alguna vez la mano de usted como una herramienta o como si fuera parte de su propio cuerpo, por ejemplo, apuntando con su dedo o poniendo la mano de usted en el tirador de la puerta para lograr que la abriese?",
    "¿Ha mostrado alguna vez interés por cosas que le preocuparan mucho y que a otras personas les parecieran extrañas, por ejemplo, semáforos, tuberías de desagüe u horarios de transporte?",
    "¿Ha estado alguna vez más interesado en las piezas de un juguete o de un objeto (por ejemplo, dar vueltas a las ruedas de un coche), que en usar el objeto de acuerdo a su finalidad?",
    "¿Ha mostrado alguna vez un interés especial por algún tema (p.e.: trenes, dinosaurios, etc.) que, aun siendo normal a su edad y en su ambiente, parecía fuera de lo normal por su intensidad?",
    "¿Ha mostrado alguna vez un interés excepcional por la vista, el tacto, el sonido, el sabor o el olor de las cosas o las personas?",
    "¿Ha realizado en ocasiones gestos o movimientos extraños con las manos o los dedos, como agitar o mover sus dedos delante de sus ojos?",
    "¿Ha realizado en ocasiones movimientos complicados de su cuerpo, como dar vueltas, retorcerse o dar saltos repetidos en el sitio?",
    "¿Se ha hecho daño a propósito alguna vez, por ejemplo, mordiéndose un brazo o golpeándose la cabeza?",
    "¿Ha tenido alguna vez objetos que necesitaba llevar consigo, aparte de un muñeco o|Manta?",
    "¿Tiene un amigo íntimo o alguna amistad en particular?",
    "Cuando tenía entre 4 y 5 años, ¿habló con usted alguna vez sólo para ser simpático y amable y no para conseguir algo?",
    "Cuando tenía entre 4 y 5 años, ¿imitaba alguna vez espontáneamente a otras personas o lo que hacían (como pasar la aspiradora, cocinar o arreglar cosas)?",
    "Cuando tenía entre 4 y 5 años, ¿señalaba alguna vez espontáneamente las cosas que veía sólo para mostrárselas a usted y no porque quisiera obtenerlas?",
    "Cuando tenía entre 4 y 5 años, ¿hacía alguna vez gestos para indicarle lo que quería, aparte de señalar el objeto o tirarle a usted de la mano?",
    "Cuando tenía entre 4 y 5 años, ¿asentía con la cabeza para decir sí?",
    "Cuando tenía entre 4 y 5 años, ¿negaba con la cabeza para decir no?",
    "Cuando tenía entre 4 y 5 años, al hablarle o hacer algo con usted, ¿solía mirarle directamente a la cara?",
    "Cuando tenía entre 4 y 5 años, ¿devolvía la sonrisa si alguien le sonreía?",
    "Cuando tenía entre 4 y 5 años, ¿le mostraba a usted alguna vez cosas que le interesaban a fin de captar su atención?",
    "Cuando tenía entre 4 y 5 años, ¿se ofrecía alguna vez a compartir cosas con usted, aparte de alimentos?",
    "Cuando tenía entre 4 y 5 años, ¿quiso alguna vez que usted participara en sus juegos?",
    "Cuando tenía entre 4 y 5 años, ¿intentó alguna vez consolarle si vio que usted estaba triste o se había hecho daño?",
    "Cuando tenía entre 4 y 5 años y quería algo o buscaba ayuda, ¿le miraba y hacía gestos con sonidos o palabras para captar su atención?",
    "Cuando tenía entre 4 y 5 años, ¿mostraba una variedad normal de expresiones faciales?",
    "Cuando tenía entre 4 y 5 años, ¿tomó parte espontáneamente alguna vez en juegos de grupo o trató de imitar las acciones y juegos sociales que se estaban haciendo?",
    "Cuando tenía entre 4 y 5 años, ¿jugaba a disfrazarse, a simular que era otra persona o a juegos de ficción en general?",
    "¿Muestra interés por niños de su edad a los que no conoce?",
    "¿Responde positivamente cuando se le acerca otro niño?",
    "Si usted entra en un cuarto y empieza a hablarle sin decir su nombre, ¿por lo general levanta la vista y le presta atención?",
    "Cuando tenía entre 4 y 5 años, ¿participó alguna vez con otros niños en juegos de ficción, de tal manera que fuese claro que unos y otros comprendían en qué consistía el juego?",
    "Cuando tenía entre 4 y 5 años, ¿participaba activamente en juegos que requerían colaborar con otros niños en grupo, como jugar al escondite o a la pelota?"
  ],
  labels: ["Sí", "No"],
  calculator: resp => {
    // Pregunta 1 es de screening verbal – si es "No", el SCQ no es válido
    if (resp[0] === 1) { // "No" a la pregunta 1
      return `<p class="highlight">El SCQ no es válido: la persona no tiene lenguaje verbal suficiente (pregunta 1 = No)</p><p>Utilice otro instrumento como el ADOS o CSBS.</p>`;
    }

    // Puntuación: Sí = 1 punto en todas las preguntas excepto la 1
    const score = resp.slice(1).reduce((a, b) => a + b, 0); // b = 0 para Sí, 1 para No => invertimos

    let interpretacion = "";
    if (score >= 22) interpretacion = "MUY ALTA probabilidad de TEA";
    else if (score >= 15) interpretacion = "ALTA probabilidad de TEA (corte clásico)";
    else interpretacion = "BAJA probabilidad de TEA";

    return `
      <p><strong>Puntuación total SCQ (40 ítems):</strong> ${score} / 39</p>
      <hr>
      <p class="highlight">${interpretacion}</p>
      <p><small>Corte estándar ≥15 puntos (sensibilidad 85%, especificidad 75%).<br>≥22 puntos = muy sugerente de autismo clásico.<br>Solo herramienta de cribado.</small></p>
    `;
  }
});