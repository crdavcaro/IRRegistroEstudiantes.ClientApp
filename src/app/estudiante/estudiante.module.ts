import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { CrearEstudiantePageComponent } from './pages/crear-estudiante-page/crear-estudiante-page.component';
import { SharedModule } from '../shared/shared.module';
import { AdministrarEstudiantesPageComponent } from './pages/administrar-estudiantes/administrar-estudiantes-page.component';
import { EstudiantesTablaComponent } from './components/estudiantes-tabla/estudiantes-tabla.component';


@NgModule({
  declarations: [
    CrearEstudiantePageComponent,
    AdministrarEstudiantesPageComponent,
    EstudiantesTablaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EstudianteRoutingModule,
    SharedModule
  ],
})
export class EstudianteModule { }
