import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

/**
 * Componente compartido para campos de entrada (input/textarea).
 *
 * Funcionalidad:
 * - Envuelve inputs y textareas con estilos y comportamiento consistentes
 * - Usa ViewEncapsulation.None para permitir que los estilos se transmitan
 * - Maneja eventos de clic en el host
 * - Accede al contenido proyectado usando contentChild
 *
 * Inputs:
 * - etiqueta (requerido): Texto de la etiqueta del campo
 *
 * @component
 */
@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'alClickear()',
  },
})
export class ControlComponent {
  // @HostBinding('class') nombreClase = 'control';
  // @HostListener()

  /** Input requerido: etiqueta para mostrar en el campo */
  etiqueta = input.required<string>();

  /** Referencia inyectada al elemento del componente */
  private el = inject(ElementRef);

  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;

  /** Referencia al elemento de entrada proyectado (input o textarea) */
  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  /**
   * Constructor: Configura hooks del ciclo de vida de renderizado.
   */
  constructor() {
    afterRender(() => {
      console.log('AFTER RENDER');
    });
    afterNextRender(() => {
      console.log('AFTER NEXT RENDER');
    });
  }

  /**
   * Manejador de evento de clic en el componente.
   */
  alClickear() {
    console.log('Clickeado');
    console.log(this.el);
    console.log(this.control);
  }
}
