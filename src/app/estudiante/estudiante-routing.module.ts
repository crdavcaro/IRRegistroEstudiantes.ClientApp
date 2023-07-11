import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEstudiantePageComponent } from './pages/crear-estudiante-page/crear-estudiante-page.component';
import { AdministrarEstudiantesPageComponent } from './pages/administrar-estudiantes/administrar-estudiantes-page.component';

const routes: Routes = [
  {
    path: 'crear-estudiante',
    component: CrearEstudiantePageComponent
  },
  {
    path: 'administrar-estudiante',
    component: AdministrarEstudiantesPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
