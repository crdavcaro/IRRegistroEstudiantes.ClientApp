import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriaRoutingModule } from './materia-routing.module';
import { AdministrarMateriasPageComponent } from './pages/administrar-materias-page/administrar-materias-page.component';
import { MateriaTablaComponent } from './components/table/materia-tabla.component';
import { CrearMateriaPageComponent } from './pages/crear-materia/crear-materia-page.component';
import { SharedModule } from '../shared/shared.module';
import { InscribirMateriasPageComponent } from './pages/inscribir-materias-page/inscribir-materias-page.component';
import { MateriaListaComponent } from './components/materia-lista/materia-lista.component';
import { ProfesorModule } from '../profesor/profesor.module';
import { MateriasInscritasListaComponent } from './components/materias-inscritas-lista/materias-inscritas-lista.component';


@NgModule({
  declarations: [

    AdministrarMateriasPageComponent,
    MateriaTablaComponent,
    CrearMateriaPageComponent,
    InscribirMateriasPageComponent,
    MateriaListaComponent,
    MateriasInscritasListaComponent
  ],
  imports: [
    CommonModule,
    MateriaRoutingModule,
    ProfesorModule,
    SharedModule
  ],
  exports: [
    MateriaListaComponent
  ]
})
export class MateriaModule { }
