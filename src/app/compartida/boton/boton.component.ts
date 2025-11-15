import { Component } from '@angular/core';

/**
 * Componente compartido para botones en toda la aplicación.
 *
 * Funcionalidad:
 * - Proporciona estilos consistentes para botones a lo largo del dashboard
 * - Puede ser usado como selector de atributo en elementos <button> y <a>
 * - Facilita la reutilización y consistencia visual
 *
 * Uso: <button appButton>Enviar</button> o <a appButton href="#">Enlace</a>
 *
 * @component
 */
@Component({
  selector: 'button[appButton], a[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css'],
})
export class BotonComponent {}
