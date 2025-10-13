// Simulación de distancias entre ciudades
export const calcular = (origen, destino) => {
  // Ejemplo predefinido: Machala → Guayaquil
  if (origen.toLowerCase() === 'machala' && destino.toLowerCase() === 'guayaquil') {
    return {
      origen,
      destino,
      distancia_km: 180,
      duracion_horas: 2.5
    };
  }

  // Valor por defecto si no está predefinido
  return {
    origen,
    destino,
    distancia_km: 100,
    duracion_horas: 1.5
  };
};
