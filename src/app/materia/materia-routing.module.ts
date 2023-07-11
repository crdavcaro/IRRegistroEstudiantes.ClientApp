import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrarMateriasPageComponent } from './pages/administrar-materias-page/administrar-materias-page.component';
import { CrearMateriaPageComponent } from './pages/crear-materia/crear-materia-page.component';
import { InscribirMateriasPageComponent } from './pages/inscribir-materias-page/inscribir-materias-page.component';

const routes: Routes = [
  {
    path: 'crear-materia',
    component: CrearMateriaPageComponent
  },
  {
    path: 'administrar-materias',
    component: AdministrarMateriasPageComponent
  },
  {
    path: 'inscribir-materias',
    component: InscribirMateriasPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriaRoutingModule { }
