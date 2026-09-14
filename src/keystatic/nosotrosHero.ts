import { fields, singleton } from '@keystatic/core';

export const nosotrosHero = singleton({
  label: 'Nosotros - Hero y Métricas',
  path: 'src/data/nosotros/hero',
  format: 'json',
  schema: {
    titulo: fields.text({
      label: 'Título principal (Texto normal)',
      defaultValue: 'Tecnología al servicio del',
    }),
    tituloAcento: fields.text({
      label: 'Título resaltado (Acento)',
      defaultValue: 'cuidado de la salud',
    }),
    bajada: fields.text({
      label: 'Bajada descriptiva',
      multiline: true,
      defaultValue:
        'Combinamos tecnología médica, equipamiento certificado y asistencia especializada para brindar soluciones confiables a pacientes, instituciones, obras sociales y profesionales de la salud.',
    }),
    targetYears: fields.integer({
      label: 'Años de trayectoria (ej: 13)',
      defaultValue: 13,
    }),
    targetCerts: fields.integer({
      label: 'Porcentaje de Habilitaciones (ej: 100)',
      defaultValue: 100,
    }),
    targetPatients: fields.integer({
      label: 'Cantidad de pacientes atendidos (ej: 1282)',
      defaultValue: 1282,
    }),
  },
});