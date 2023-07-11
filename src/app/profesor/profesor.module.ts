import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesorRoutingModule } from './profesor-routing.module';
import { ProfesorTablaComponent } from './components/profesor-tabla/profesor-tabla.component';
import { AdministrarProfesoresPageComponent } from './pages/administrar-profesores-page/administrar-profesores-page.component';
import { CrearProfesorComponent } from './pages/crear-profesor/crear-profesor.component';
import { ProfesorListaComponent } from './components/profesor-lista/profesor-lista.component';


@NgModule({
  declarations: [
    ProfesorTablaComponent,
    AdministrarProfesoresPageComponent,
    CrearProfesorComponent,
    ProfesorListaComponent
  ],
  imports: [
    CommonModule,
    ProfesorRoutingModule
  ],
  exports: [
    ProfesorListaComponent,
  ]
})
export class ProfesorModule { }
