import { fields, singleton } from "@keystatic/core";

export const cotizacion = singleton({
  label: "Cotización - Formulario y Hero",
  path: "src/data/cotizacion",
  format: "json",
  schema: {
    heroTitulo: fields.text({
      label: "Título Hero (Texto normal)",
      defaultValue: "Adjuntá",
    }),
    heroTituloAcento: fields.text({
      label: "Título Hero (Texto con acento / color)",
      defaultValue: "tu pedido médico",
    }),
    heroBajada: fields.text({
      label: "Bajada descriptiva Hero",
      multiline: true,
      defaultValue:
        "para agilizar tiempo y que nuestro equipo pueda brindarte atención personalizada.",
    }),
    formTitulo: fields.text({
      label: "Título de la tarjeta del formulario",
      defaultValue: "Pedido Médico",
    }),
    formSubtitulo: fields.text({
      label: "Subtítulo del formulario",
      defaultValue: "Respondemos en menos de 24 horas hábiles.",
    }),
    formBotonTexto: fields.text({
      label: "Texto del botón de envío",
      defaultValue: "Enviar Mensaje",
    }),
    footerTexto: fields.text({
      label: "Texto de ayuda al pie",
      defaultValue:
        "¿Buscás comunicarte por otras consultas, soporte técnico o administración?",
    }),
    footerLinkTexto: fields.text({
      label: "Texto del enlace al pie",
      defaultValue: "Ir a medios de contacto →",
    }),
  },
});
