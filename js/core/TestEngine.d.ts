/**
 * Tipo para las respuestas del usuario (0, 1, 2, 3... según las etiquetas definidas)
 */
type ResponseValue = number;

/**
 * Firma de la función que calcula los resultados del test
 */
type CalculatorFunction = (responses: ResponseValue[]) => string;

/**
 * Función opcional para personalizar el nombre del test según el grupo de edad u otro parámetro
 */
type DisplayNameFunction = (ageGroup: string | null) => string;

/**
 * Función opcional para personalizar la información/instrucciones según el grupo de edad u otro parámetro
 */
type DisplayInfoFunction = (ageGroup: string | null) => string;

/**
 * Configuración para crear un nuevo test
 */
interface TestConfig {
    /** Nombre base del test */
    name: string;

    /** Información o instrucciones generales (opcional) */
    info?: string;

    /** Lista de preguntas del test */
    questions: string[];

    /** Etiquetas para las opciones de respuesta. Por defecto: Nada, Poco, Bastante, Mucho */
    labels?: string[];

    /** Función que recibe el array de respuestas y devuelve el HTML con los resultados */
    calculator: CalculatorFunction;

    /** Opcional: permite cambiar el título según edad o contexto */
    getDisplayName?: DisplayNameFunction | null;

    /** Opcional: permite cambiar las instrucciones según edad o contexto */
    getDisplayInfo?: DisplayInfoFunction | null;
}

/**
 * Clase base para crear tests de cribado neurodesarrollo.
 * Totalmente reutilizable y extensible.
 */
declare class TestBase {
    /**
     * Crea una nueva instancia de test.
     * @param config - Configuración del test
     */
    constructor(config: TestConfig);

    /** Nombre interno del test */
    readonly name: string;

    /** Información general del test */
    readonly info: string;

    /** Preguntas del test */
    readonly questions: string[];

    /** Etiquetas de las opciones de respuesta */
    readonly labels: string[];

    /** Función de cálculo de resultados */
    readonly calculator: CalculatorFunction;

    /** Función opcional para personalizadora del nombre */
    readonly getDisplayName: DisplayNameFunction | null;

    /** Función opcional personalizadora de la información */
    readonly getDisplayInfo: DisplayInfoFunction | null;

    /**
     * Renderiza el test completo dentro del contenedor especificado.
     * @param container - Elemento HTML donde se insertará el formulario
     * @param ageGroup - Parámetro opcional (ej: "niño", "adulto") para personalizar nombre e instrucciones
     */
    render(container: HTMLElement, ageGroup?: string | null): void;
}

export { TestBase };