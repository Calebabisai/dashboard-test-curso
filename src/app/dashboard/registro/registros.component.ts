import { Component } from '@angular/core';
import { NuevoRegistroComponent } from '../registros/nuevo-registro/nuevo-registro.component';
import { Registro } from './registros.model';
import { RegistroComponent } from '../registros/registro/registro.component';

/**
 * Componente contenedor principal para la gestión de registros/tickets.
 *
 * Responsabilidades:
 * - Mantener el listado de registros en memoria
 * - Agregar nuevos registros desde el formulario
 * - Actualizar el estado de registros a 'cerrado'
 * - Renderizar la lista de registros individuales
 *
 * Estructura:
 * - NuevoRegistroComponent: Formulario para crear nuevos registros
 * - RegistroComponent (repetido): Renderiza cada registro individual
 *
 * @component
 */
@Component({
  selector: 'app-registros',
  standalone: true,
  imports: [NuevoRegistroComponent, RegistroComponent],
  templateUrl: './registros.component.html',
  styleUrl: './registros.component.css',
})
export class RegistrosComponent {
  /** Array que almacena todos los registros del sistema */
  registros: Registro[] = [];

  /**
   * Agrega un nuevo registro a la lista.
   * Genera un ID único usando Math.random() y establece el estado inicial como 'abierto'.
   *
   * @param informacionRegistro - Objeto con título y texto del nuevo registro
   * @param informacionRegistro.titulo - Título del registro
   * @param informacionRegistro.texto - Descripción/contenido del registro
   */
  alAgregar(informacionRegistro: { titulo: string; texto: string }) {
    const registro: Registro = {
      titulo: informacionRegistro.titulo,
      textoPedido: informacionRegistro.texto,
      id: Math.random().toString(),
      estado: 'abierto',
    };
    this.registros.push(registro);
  }

  /**
   * Marca un registro como cerrado.
   * Busca el registro por ID y actualiza su estado a 'cerrado',
   * dejando los demás intactos.
   *
   * @param id - Identificador único del registro a cerrar
   */
  alCerrarRegistro(id: string) {
    this.registros = this.registros.map((registro) => {
      if (registro.id === id) {
        return { ...registro, estado: 'cerrado' };
      }
      return registro;
    });
  }
}
