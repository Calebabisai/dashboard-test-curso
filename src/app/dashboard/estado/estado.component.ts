import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';

/**
 * Componente que simula y muestra el estado de conexión del sistema.
 *
 * Funcionalidad:
 * - Simula cambios de estado cada 3 segundos usando Math.random()
 * - Estados posibles: 'online', 'offline', 'unknown'
 * - Utiliza Angular Signals para reactividad moderna
 * - Usa DestroyRef para limpiar el intervalo al destruir el componente
 * - Implementa un effect() para monitorear cambios de estado
 *
 * Nota: Código de demostración. En producción, conectaría a un servicio real
 * de monitoreo de estado del servidor.
 *
 * @component
 */
@Component({
  selector: 'app-estado',
  standalone: true,
  imports: [],
  templateUrl: './estado.component.html',
  styleUrl: './estado.component.css',
})
export class EstadoComponent implements OnInit {
  /** Signal que almacena el estado actual de la conexión */
  estadoActual = signal<'online' | 'offline' | 'unknown'>('offline');

  /** Referencia al contexto de destrucción para limpiar recursos */
  private destroyRef = inject(DestroyRef);

  /**
   * Inicializa el componente y comienza la simulación de cambios de estado.
   * Configura un intervalo que actualiza el estado cada 3 segundos.
   */
  ngOnInit() {
    console.log('ON INIT');
    const intervalo = setInterval(() => {
      const rnd = Math.random();
      if (rnd > 0.5) this.estadoActual.set('online');
      else if (rnd > 0.1) {
        this.estadoActual.set('offline');
      } else {
        this.estadoActual.set('unknown');
      }
    }, 3000);

    // Limpia el intervalo cuando el componente se destruye
    this.destroyRef.onDestroy(() => clearInterval(intervalo));
  }

  /**
   * Constructor: Configura un efecto reactivo que registra los cambios de estado.
   * El effect() se ejecuta automáticamente cuando estadoActual cambia.
   */
  constructor() {
    effect(() => {
      console.log(this.estadoActual());
    });
  }

  /**
   * Ciclo de vida que se ejecuta después de inicializar la vista.
   */
  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }
}
