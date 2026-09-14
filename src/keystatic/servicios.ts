import { fields, singleton } from '@keystatic/core';

export const servicios = singleton({
  label: 'Servicios y Especialidades',
  path: 'src/data/servicios',
  format: 'json',
  schema: {
    tituloHome: fields.text({ label: 'Título en Home', defaultValue: 'Conocé Nuestros Servicios' }),
    subtituloHome: fields.text({ 
      label: 'Subtítulo en Home', 
      defaultValue: 'Soluciones integrales de salud respiratoria y equipamiento para atención domiciliaria e institucional.' 
    }),
    lista: fields.array(
      fields.object({
        id: fields.text({ label: 'ID único (ej: oxigenoterapia, apnea, ventilacion)' }),
        title: fields.text({ label: 'Nombre del Servicio' }),
        description: fields.text({ label: 'Descripción corta (para Home)', multiline: true }),
        largeDescription: fields.text({ label: 'Descripción completa (página /servicios)', multiline: true }),
        linkText: fields.text({ label: 'Texto botón en página', defaultValue: 'Solicitar Asesoramiento' })
      }),
      {
        label: 'Listado de Servicios',
        itemLabel: (props) => props.fields.title.value || 'Servicio',
      }
    ),
  },
});