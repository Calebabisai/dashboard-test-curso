import { Component } from '@angular/core';

/**
 * Componente que visualiza datos de tráfico en el dashboard.
 *
 * Funcionalidad:
 * - Almacena datos simulados de tráfico con ID y valor
 * - Calcula el valor máximo para normalizar la visualización
 * - Renderiza la información en la plantilla para mostrar gráficos o estadísticas
 *
 * Nota: Los datos son ficticios para demostración. En producción,
 * provendrían de un servicio backend de análisis de tráfico.
 *
 * @component
 */
@Component({
  selector: 'app-trafico',
  standalone: true,
  imports: [],
  templateUrl: './trafico.component.html',
  styleUrl: './trafico.component.css',
})
export class TraficoComponent {
  /** Array con datos simulados de tráfico (id y valor numérico) */
  informacionTraficoFalsa = [
    {
      id: 'd1',
      valor: 433,
    },
    {
      id: 'd2',
      valor: 260,
    },
    {
      id: 'd3',
      valor: 290,
    },
    {
      id: 'd4',
      valor: 410,
    },
    {
      id: 'd5',
      valor: 397,
    },
    {
      id: 'd6',
      valor: 488,
    },
    {
      id: 'd47',
      valor: 589,
    },
  ];

  /** Valor máximo de tráfico para escalar visualizaciones */
  traficoMaximo = Math.max(
    ...this.informacionTraficoFalsa.map((data) => data.valor)
  );
}
