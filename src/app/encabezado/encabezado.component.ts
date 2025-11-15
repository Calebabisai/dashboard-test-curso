import { Component } from '@angular/core';
import { BotonComponent } from '../compartida/boton/boton.component';

/**
 * Componente de encabezado del dashboard.
 *
 * Proporciona la barra superior de la aplicación, típicamente con:
 * - Título o branding
 * - Navegación principal
 * - Botones de acción rápida
 *
 * Utiliza el componente compartido BotonComponent para consistencia visual.
 *
 * @component
 */
@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [BotonComponent],
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
})
export class EncabezadoComponent {}
