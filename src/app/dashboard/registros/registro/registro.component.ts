import { Component, input, output, signal } from '@angular/core';
import { Registro } from '../../registro/registros.model';

/**
 * Componente que representa un registro/ticket individual en el dashboard.
 *
 * Funcionalidad:
 * - Muestra la información del registro (título, descripción, estado)
 * - Permite expandir/contraer los detalles del registro
 * - Emite evento cuando el usuario marca el registro como completado
 * - Utiliza Angular Signals para gestión reactiva del estado local
 *
 * Inputs/Outputs:
 * - informacion (input): Datos del registro a mostrar (requerido)
 * - cerrado (output): Evento emitido cuando se completa el registro
 * - detallesVisibles (signal): Estado local para mostrar/ocultar detalles
 *
 * @component
 */
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export class RegistroComponent {
  /** Input requerido: datos del registro a renderizar */
  informacion = input.required<Registro>();

  /** Signal que controla la visibilidad de los detalles del registro */
  detallesVisibles = signal(false);

  /** Output: evento emitido cuando el registro se marca como completado */
  cerrado = output();

  /**
   * Alterna la visibilidad de los detalles del registro.
   * Si están visibles, los oculta; si están ocultos, los muestra.
   */
  alAlternarDetalles() {
    this.detallesVisibles.update((eraVisible) => !eraVisible);
  }

  /**
   * Marca el registro como completado y emite el evento 'cerrado'.
   * El componente padre (RegistrosComponent) escucha este evento
   * para actualizar el estado en la lista.
   */
  alMarcarComoCompletado() {
    this.cerrado.emit();
  }
}
