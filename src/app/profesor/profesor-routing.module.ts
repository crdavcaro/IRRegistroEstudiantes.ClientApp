import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProfesorComponent } from './pages/crear-profesor/crear-profesor.component';
import { AdministrarProfesoresPageComponent } from './pages/administrar-profesores-page/administrar-profesores-page.component';

const routes: Routes = [
  {
    path: 'crear-profesor',
    component: CrearProfesorComponent
  },
  {
    path: 'administrar-profesores',
    component: AdministrarProfesoresPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }
