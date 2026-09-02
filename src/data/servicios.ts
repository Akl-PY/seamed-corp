import {
  Moon,
  Wind,
  Activity,
  Stethoscope,
  Package,
  Cpu,
  ShieldCheck,
  HeartPulse,
} from "lucide-astro";

import SrvApnea from "../assets/catalog/insumo1.jpg";
import SrvOxigeno from "../assets/catalog/insumo2.jpg";
import SrvVentilacion from "../assets/catalog/insumo3.jpg";
import SrvTos from "../assets/catalog/insumo4.jpg";

const servicios = [
  {
    id: "oxigenoterapia",
    title: "Oxigenoterapia",
    icon: Wind,
    image: SrvOxigeno,
    alt: "Concentradores y equipos de Oxigenoterapia",
    link: "#oxigenoterapia",
    description:
      "Concentradores de oxígeno fijos y portátiles, cilindros y sistemas de alto flujo domiciliario.",
    text: "Solicitar Asesoramiento",
    largeDescription:
      "Acompañamos a cada paciente con soluciones integrales de oxígeno medicinal certificado para uso domiciliario y ambulatorio, garantizando una terapia respiratoria segura, eficiente y adaptada.",
  },
  {
    id: "apnea",
    title: "Apnea del Sueño (CPAP / Auto CPAP)",
    icon: Moon,
    image: SrvApnea,
    alt: "Equipamiento para tratamiento de Apnea del Sueño",
    link: "#apnea",
    description: "",
    text: "Solicitar Asesoramiento",
    largeDescription:
      "Venta y alquiler de dispositivos CPAP y AutoCPAP para el tratamiento de trastornos respiratorios del sueño. Adaptamos cada equipo a las necesidades de cada paciente, favoreciendo una mejor adherencia al tratamiento. Además, contamos con variedad de accesorios (máscaras y tubuladuras) para garantizar la adaptación del paciente.",
  },
  {
    id: "poligrafia",
    title: "Poligrafía Domiciliaria",
    icon: Activity,
    image: SrvApnea,
    alt: "Estudios de Poligrafía Domiciliaria",
    link: "#poligrafia",
    description:
      "Desde el diagnóstico hasta el tratamiento de la apnea del sueño.",
    text: "Solicitar Asesoramiento",
    largeDescription:
      "Realizamos estudios de poligrafía respiratoria domiciliaria con el equipo ApneaLink, una solución práctica y confiable para la evaluación de trastornos respiratorios del sueño. El estudio se realiza en la comodidad de su hogar, permitiéndole dormir en su entorno habitual y evitando traslados o internaciones. Tras la poligrafía domiciliaria, realizamos la titulación personalizada del equipo CPAP para definir la presión terapéutica ideal y configurar el dispositivo de acuerdo con las necesidades de cada paciente.",
  },
  {
    id: "ventilacion",
    title: "Ventilación Mecánica",
    icon: HeartPulse,
    image: SrvVentilacion,
    alt: "Equipos de Ventilación Mecánica",
    link: "#ventilacion",
    description: "",
    text: "Solicitar Asesoramiento",
    largeDescription:
      "Contamos con equipos PB-560 Puritan Bennet, Stellar 150 RESMED, Asistidor de tos Cough Assist E70 e insumos para el tratamiento de pacientes con patologías respiratorias crónicas o agudas.",
  },
  {
    id: "alimentacion-enteral",
    title: "Alimentación Enteral",
    icon: Stethoscope,
    image: SrvTos,
    alt: "Sistemas de Alimentación Enteral",
    link: "#alimentacion-enteral",
    description:
      "Bombas de infusión, guías y soporte nutricional para tratamiento en el hogar.",
    text: "Solicitar Asesoramiento",
    largeDescription:
      "Ofrecemos bombas de infusión para alimentación enteral, diseñadas para administrar la nutrición de forma continua, precisa y segura en pacientes que requieren soporte nutricional por sonda. Los equipos son de fácil utilización y permiten una programación sencilla.",
  },
  {
    id: "home-care",
    title: "Home Care",
    icon: ShieldCheck,
    image: SrvTos,
    alt: "Equipamiento Home Care",
    link: "#home-care",
    description:
      "Oximetría de pulso, aspiradores de secreciones y nebulizadores.",
    text: "Solicitar Asesoramiento",
    largeDescription:
      "Disponemos de oxímetros de pulso para el control de la saturación de oxígeno y la frecuencia cardíaca, aspiradores de secreciones para el manejo eficaz de las vías respiratorias y nebulizadores para la administración de medicamentos inhalados en el tratamiento de diversas patologías respiratorias.",
  },
];

export default servicios;
