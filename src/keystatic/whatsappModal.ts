import { fields, singleton } from "@keystatic/core";

export const whatsappModal = singleton({
  label: "Global - Botón Flotante WhatsApp",
  path: "src/data/global/whatsapp",
  format: "json",
  schema: {
    modalTitulo: fields.text({
      label: "Título del modal",
      defaultValue: "¿Cómo podemos ayudarte?",
    }),
    modalSubtitulo: fields.text({
      label: "Subtítulo del modal",
      defaultValue:
        "Seleccioná el área correspondiente para derivar tu consulta.",
    }),
    horarioAtencion: fields.text({
      label: "Horario de atención visible",
      defaultValue: "LUN a VIE 09 - 17:30 hs",
    }),
    opciones: fields.array(
      fields.object({
        title: fields.text({ label: "Área o Sector" }),
        description: fields.text({ label: "Descripción breve" }),
        badge: fields.text({ label: "Badge (ej: Respuesta rápida, Stock)" }),
        phoneNumber: fields.text({
          label:
            "Número de WhatsApp (con código de país sin espacios, ej: 5493515226545)",
          defaultValue: "5493515226545",
        }),
        defaultText: fields.text({
          label: "Mensaje predeterminado de WhatsApp",
          multiline: true,
        }),
        iconType: fields.select({
          label: "Icono del sector",
          options: [
            { label: "Bolsa de compra / Ventas", value: "cart" },
            { label: "Caja / Insumos y Repuestos", value: "box" },
            { label: "Salvavidas / Soporte Técnico", value: "support" },
          ],
          defaultValue: "cart",
        }),
      }),
      {
        label: "Opciones de WhatsApp",
        itemLabel: (props) => props.fields.title.value || "Canal WhatsApp",
      },
    ),
  },
});
