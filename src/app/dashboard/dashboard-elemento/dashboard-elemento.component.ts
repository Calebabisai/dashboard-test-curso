import { Component, input, Input } from '@angular/core';

/**
 * Componente reutilizable para elementos individuales del dashboard.
 *
 * Funcionalidad:
 * - Renderiza tarjetas/elementos con imagen y título
 * - Utiliza Angular inputs para recibir datos de forma reactiva
 * - Componente decorativo/informativo dentro del dashboard
 *
 * Inputs:
 * - imagen (requerido): Objeto con src y alt de la imagen
 * - titulo (requerido): Texto del título del elemento
 *
 * Nota: El decorador host está comentado. Se puede activar para agregar
 * clases CSS al elemento raíz del componente.
 *
 * @component
 */
@Component({
  selector: 'app-dashboard-elemento',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-elemento.component.html',
  styleUrl: './dashboard-elemento.component.css',
  // host: {
  //   class: 'dashboard-elemento',
  // },
})
export class DashboardElementoComponent {
  // @Input({ required: true }) imagen!: {
  //   src: string;
  //   alt: string;
  // };

  // @Input({ required: true }) titulo!: string;

  /** Input requerido: objeto con propiedades src y alt de la imagen */
  imagen = input.required<{ src: string; alt: string }>();

  /** Input requerido: título del elemento del dashboard */
  titulo = input.required<string>();
}
