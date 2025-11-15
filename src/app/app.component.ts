import { Component } from '@angular/core';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { EstadoComponent } from './dashboard/estado/estado.component';
import { TraficoComponent } from './dashboard/trafico/trafico.component';
import { RegistrosComponent } from './dashboard/registro/registros.component';
import { DashboardElementoComponent } from './dashboard/dashboard-elemento/dashboard-elemento.component';

/**
 * Componente raíz principal de la aplicación dashboard.
 *
 * Actúa como contenedor central que integra todos los componentes principales:
 * - Encabezado: Barra superior con información y controles
 * - Estado: Indicador de estado online/offline/unknown
 * - Tráfico: Visualización de datos de tráfico
 * - Registros: Lista y gestión de registros/tickets
 * - Dashboard Elemento: Elementos decorativos o informativos del dashboard
 *
 * @component
 */
@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    EncabezadoComponent,
    EstadoComponent,
    TraficoComponent,
    RegistrosComponent,
    DashboardElementoComponent,
  ],
})
export class AppComponent {}
