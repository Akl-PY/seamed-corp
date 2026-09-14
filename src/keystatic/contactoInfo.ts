import { fields, singleton } from "@keystatic/core";

export const contactoInfo = singleton({
  label: "Contacto - Canales y Vías de Comunicación",
  path: "src/data/contacto/info",
  format: "json",
  schema: {
    // Encabezado del bloque Hero (Estamos para asesorarte)
    heroTitulo: fields.text({
      label: "Título Hero",
      defaultValue: "Estamos para",
    }),
    heroTituloAcento: fields.text({
      label: "Acento del Título Hero(La palabra que se resalta en otro color)",
      defaultValue: "asesorarte",
    }),
    heroBajada: fields.text({
      label: "Bajada descriptiva Hero",
      multiline: true,
      defaultValue:
        "Contamos con atención personalizada para orientarte y acompañarte en cada etapa, desde tu consulta hasta la solución que necesitás.",
    }),

    // Encabezado del bloque Otros Medios de Contacto
    otrosTitulo: fields.text({
      label: "Título Otros Medios",
      defaultValue: "Otros medios de contacto",
    }),
    otrosBajada: fields.text({
      label: "Bajada descriptiva Otros Medios",
      multiline: true,
      defaultValue:
        "Podés comunicarte directamente a nuestras líneas o correos específicos haciendo clic en cualquiera de ellos.",
    }),

    // Directorio unificado de canales
    canales: fields.array(
      fields.object({
        label: fields.text({
          label: "Nombre del sector / canal (ej: Atención por WhatsApp, Pagos)",
        }),
        icono: fields.select({
          label: "Icono del sector",
          options: [
            { label: "Mensajes / WhatsApp", value: "message" },
            { label: "Correo Electrónico", value: "mail" },
            { label: "Teléfono / Fijo", value: "phone" },
            { label: "Ventas y Alquiler (Caja)", value: "package" },
            { label: "Pagos (Tarjeta)", value: "creditCard" },
            { label: "Devoluciones (Giro)", value: "rotateCcw" },
            { label: "Oficina / Edificio", value: "building" },
          ],
          defaultValue: "message",
        }),
        subtext: fields.text({
          label:
            "Texto auxiliar / Horario (ej: Lunes a Viernes de 9:00 a 17:30 hs)",
        }),
        phones: fields.array(fields.text({ label: "Número de teléfono" }), {
          label: "Teléfonos / WhatsApps",
          itemLabel: (props) => props.value || "Número",
        }),
        emails: fields.array(fields.text({ label: "Correo electrónico" }), {
          label: "Correos electrónicos",
          itemLabel: (props) => props.value || "Correo",
        }),
        // Filtros de visibilidad por componente
        mostrarEnPrincipal: fields.checkbox({
          label: "Mostrar en la sección principal (arriba con foto)",
          defaultValue: false,
        }),
        mostrarEnOtros: fields.checkbox({
          label: 'Mostrar en "Otros medios de contacto" (abajo en grilla)',
          defaultValue: true,
        }),
      }),
      {
        label: "Listado Maestro de Canales",
        itemLabel: (props) => props.fields.label.value || "Canal de contacto",
      },
    ),
  },
});
