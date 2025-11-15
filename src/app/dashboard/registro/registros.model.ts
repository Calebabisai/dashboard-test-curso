/**
 * Interfaz que define la estructura de un registro/ticket en el sistema.
 *
 * Propiedades:
 * - id: Identificador único del registro
 * - titulo: Título o asunto principal del registro
 * - textoPedido: Descripción detallada del contenido o solicitud
 * - estado: Estado del registro ('abierto' para activos, 'cerrado' para completados)
 */
export interface Registro {
  id: string;
  titulo: string;
  textoPedido: string;
  estado: 'abierto' | 'cerrado';
}
