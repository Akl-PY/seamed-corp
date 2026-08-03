import { Moon, Wind, Activity, Stethoscope } from "lucide-astro";

import SrvApnea from "../assets/catalog/insumo1.jpg";
import SrvOxigeno from "../assets/catalog/insumo2.jpg";
import SrvVentilacion from "../assets/catalog/insumo3.jpg";
import SrvTos from "../assets/catalog/insumo4.jpg";

const servicios = [
  { 
    id: "apnea",
    title: "Apnea del Sueño (CPAP / BiPAP)", 
    icon: Moon,
    image: SrvApnea,
    alt: "Equipamiento para tratamiento de Apnea del Sueño",
    link: "#apnea", 
    description: "Equipos de presión positiva continua y auto-ajustables con mascarillas de alta adaptabilidad.",
    text: "Solicitar Asesoramiento",
    largeDescription: "Contamos con una amplia gama de dispositivos CPAP y BiPAP auto-ajustables para el tratamiento de trastornos respiratorios del sueño. Ofrecemos titulación, configuración personalizada de humidificación y selección de mascarillas (nasales, buconasales y almohadillas) garantizando el máximo confort y adherencia al tratamiento."
  },
  { 
    id: "oxigeno",
    title: "Oxigenoterapia", 
    icon: Wind,
    image: SrvOxigeno,
    alt: "Concentradores y equipos de Oxigenoterapia",
    link: "#oxigeno", 
    description: "Concentradores de oxígeno fijos y portátiles, cilindros y sistemas de alto flujo domiciliario.",
    text: "Solicitar Asesoramiento",
    largeDescription: "Provisión e instalación de sistemas de oxigenoterapia de última generación. Disponemos de concentradores domiciliarios continuos, concentradores portátiles de flujo a demanda para mantener la autonomía del paciente y cilindros de respaldo con regulación de alta precisión."
  },
  { 
    id: "ventilacion",
    title: "Ventilación Mecánica", 
    icon: Activity,
    image: SrvVentilacion,
    alt: "Equipos de Ventilación Mecánica",
    link: "#ventilacion", 
    description: "Soporte ventilatorio invasivo y no invasivo de alta complejidad para adultos y pediatría.",
    text: "Solicitar Asesoramiento",
    largeDescription: "Acompañamos a cada paciente con soluciones integrales de oxígeno medicinal certificado para uso domiciliario y ambulatorio, garantizando una terapia respiratoria segura, eficiente y adaptada."
  },
  { 
    id: "tos",
    title: "Asistencia de la Tos", 
    icon: Stethoscope,
    image: SrvTos,
    alt: "Equipos Cough Assist para Asistencia de la Tos",
    link: "#tos", 
    description: "Equipos de in-exsuflación mecánica (Cough Assist) para remoción e higiene bronquial.",
    text: "Solicitar Asesoramiento",
    largeDescription: "Dispositivos de in-exsuflación mecánica (Cough Assist) diseñados para simular la tos natural en pacientes con debilidad muscular respiratoria o patologías neuromusculares. Ayudan a movilizar y despejar secreciones bronquiales de forma no invasiva, reduciendo el riesgo de infecciones pulmonares."
  }
];

export default servicios;