import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  output,
} from '@angular/core';
import { BotonComponent } from '../../../compartida/boton/boton.component';
import { ControlComponent } from '../../../compartida/control/control.component';
import { FormsModule } from '@angular/forms';

/**
 * Componente formulario para crear nuevos registros.
 *
 * Responsabilidades:
 * - Proporciona campos de entrada para título y texto del registro
 * - Valida y emite los datos del nuevo registro al componente padre
 * - Limpia el formulario después de enviar
 *
 * Ciclo de vida:
 * - ngOnInit: Inicialización del componente
 * - ngAfterViewInit: Acceso a elementos del DOM después de renderizar
 *
 * Inputs/Outputs:
 * - agregar (output): Emite objeto con {titulo, texto} cuando se envía el formulario
 * - tituloIngresado/textoIngresado: Propiedades de dos vías con ngModel
 *
 * Nota: Elementos comentados como @ViewChild alternativa con viewChild.required
 *
 * @component
 */
@Component({
  selector: 'app-nuevo-registro',
  standalone: true,
  imports: [BotonComponent, ControlComponent, FormsModule],
  templateUrl: './nuevo-registro.component.html',
  styleUrls: ['./nuevo-registro.component.css'],
})
export class NuevoRegistroComponent implements OnInit, AfterViewInit {
  /** Referencia al elemento del formulario en el DOM */
  @ViewChild('miFormulario') miFormulario?: ElementRef<HTMLFormElement>;
  // private miFormulario =
  //   viewChild.required<ElementRef<HTMLFormElement>>('miFormulario');

  // @Output() agregar = new EventEmitter<{ titulo: string; texto: string }>();

  /** Output: Emite datos del nuevo registro cuando se completa el formulario */
  agregar = output<{ titulo: string; texto: string }>();

  /** Propiedad vinculada al input de título (two-way binding) */
  tituloIngresado = '';

  /** Propiedad vinculada al input de texto (two-way binding) */
  textoIngresado = '';

  /**
   * Se ejecuta después de que la vista se haya inicializado.
   * Accede a la referencia del formulario en el DOM.
   */
  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
    console.log(this.miFormulario?.nativeElement);
  }

  /**
   * Se ejecuta al inicializar el componente.
   * Intenta acceder a la referencia del formulario (aún no disponible).
   */
  ngOnInit() {
    console.log('ON INIT');
    console.log(this.miFormulario?.nativeElement);
  }

  /**
   * Maneja el envío del formulario.
   * Emite los datos al componente padre y limpia los campos de entrada.
   */
  alEnviar() {
    this.agregar.emit({
      titulo: this.tituloIngresado,
      texto: this.textoIngresado,
    });
    this.tituloIngresado = '';
    this.textoIngresado = '';
    // this.miFormulario?.nativeElement.reset();
  }
}
