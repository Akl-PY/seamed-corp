import { Moon, Wind, Activity, Stethoscope, Package, Cpu, ShieldCheck, HeartPulse } from "lucide-astro";

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
    description: "Concentradores de oxígeno fijos y portátiles, cilindros y sistemas de alto flujo domiciliario.",
    text: "Solicitar Asesoramiento",
    largeDescription: "Provisión e instalación de sistemas de oxigenoterapia de última generación. Disponemos de concentradores domiciliarios continuos, concentradores portátiles de flujo a demanda y cilindros de respaldo con regulación de alta precisión."
  },
  { 
    id: "apnea",
    title: "Apnea del Sueño", 
    icon: Moon,
    image: SrvApnea,
    alt: "Equipamiento para tratamiento de Apnea del Sueño",
    link: "#apnea", 
    description: "Equipos de presión positiva continua (CPAP / BiPAP) y auto-ajustables con mascarillas de alta adaptabilidad.",
    text: "Solicitar Asesoramiento",
    largeDescription: "Contamos con una amplia gama de dispositivos CPAP y BiPAP auto-ajustables para el tratamiento de trastornos respiratorios del sueño. Ofrecemos titulación, configuración personalizada de humidificación y selección de mascarillas."
  },
  { 
    id: "accesorios",
    title: "Accesorios", 
    icon: Package,
    image: SrvApnea,
    alt: "Accesorios y repuestos médicos",
    link: "#accesorios", 
    description: "Máscaras, tubuladuras, filtros, humidificadores y repuestos originales multimarca.",
    text: "Solicitar Asesoramiento",
    largeDescription: "Amplio stock de accesorios e insumos de reposición periódica para garantizar la higiene, el correcto funcionamiento y la máxima durabilidad de sus equipos médicos."
  },
  { 
    id: "poligrafia",
    title: "Poligrafía Domiciliaria", 
    icon: Activity,
    image: SrvApnea,
    alt: "Estudios de Poligrafía Domiciliaria",
    link: "#poligrafia", 
    description: "Estudios simplificados de diagnóstico de sueño realizados en la comodidad del hogar.",
    text: "Solicitar Asesoramiento",
    largeDescription: "Realización de estudios poligráficos respiratorios nocturnos a domicilio para el diagnóstico preciso de apneas e hipopneas del sueño sin necesidad de internación."
  },
  { 
    id: "ventilacion",
    title: "Ventilación Mecánica", 
    icon: HeartPulse,
    image: SrvVentilacion,
    alt: "Equipos de Ventilación Mecánica",
    link: "#ventilacion", 
    description: "Soporte ventilatorio invasivo y no invasivo de alta complejidad para adultos y pediatría.",
    text: "Solicitar Asesoramiento",
    largeDescription: "Equipamiento de asistencia ventilatoria de alta complejidad para pacientes con insuficiencia respiratoria crónica o aguda, con seguimiento técnico integral."
  },
  { 
    id: "alimentacion-enteral",
    title: "Alimentación Enteral", 
    icon: Stethoscope,
    image: SrvTos,
    alt: "Sistemas de Alimentación Enteral",
    link: "#alimentacion-enteral", 
    description: "Bombas de infusión, guías y soporte nutricional para tratamiento en el hogar.",
    text: "Solicitar Asesoramiento",
    largeDescription: "Provisión de bombas de infusión enteral y material descartable para la administración segura de nutrición clínica domiciliaria."
  },
  { 
    id: "home-care",
    title: "Home Care", 
    icon: ShieldCheck,
    image: SrvTos,
    alt: "Equipamiento Home Care",
    link: "#home-care", 
    description: "Oximetría de pulso, aspiradores de secreciones, Cough Assist y nebulizadores.",
    text: "Solicitar Asesoramiento",
    largeDescription: "Equipamiento médico complementario para la atención domiciliaria integral: aspiradores de secreciones, oxímetros, asistentes de tos (Cough Assist) y nebulizadores ultrasónicos o a pistón."
  },
  { 
    id: "servicio-tecnico",
    title: "Servicio Técnico", 
    icon: Cpu,
    image: SrvVentilacion,
    alt: "Servicio técnico y mantenimiento",
    link: "#servicio-tecnico", 
    description: "Mantenimiento preventivo, calibración y reparación de equipamiento médico.",
    text: "Solicitar Asesoramiento",
    largeDescription: "Servicio técnico especializado con laboratorio propio para control de flujo, calibración de sensores, cambio de filtros internos y mantenimiento de equipos respiratorios."
  }
];

export default servicios;