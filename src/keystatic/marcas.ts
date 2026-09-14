import { fields, singleton } from '@keystatic/core';

export const marcas = singleton({
  label: 'Inicio - Marcas y Distribuidores',
  path: 'src/data/inicio/marcas',
  format: 'json',
  schema: {
    titulo: fields.text({
      label: 'Título de la Sección',
      defaultValue: 'Somos distribuidores de marcas líderes',
    }),
    lista: fields.array(
      fields.object({
        name: fields.text({ label: 'Nombre de la Marca' }),
        imageKey: fields.select({
          label: 'Logo de la Marca',
          options: [
            { label: 'Abott', value: 'abott' },
            { label: 'BMC', value: 'bmc' },
            { label: 'GCE', value: 'gce' },
            { label: 'Lexel', value: 'lexel' },
            { label: 'Medtronic', value: 'medtronic' },
            { label: 'Pari', value: 'pari' },
            { label: 'Respironics', value: 'respironics' },
            { label: 'Resmed', value: 'resmed' },
            { label: 'Silmag', value: 'silmag' },
            { label: 'Yuwell', value: 'yuwell' },
          ],
          defaultValue: 'resmed',
        }),
      }),
      {
        label: 'Marcas aliadas',
        itemLabel: (props) => props.fields.name.value || 'Marca',
      }
    ),
  },
});