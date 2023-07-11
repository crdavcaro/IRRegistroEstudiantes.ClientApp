import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AuthGuard } from './auth/guards/usuario.guard';
import { PublicGuard } from './auth/guards/public.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [ AuthGuard ],
    canMatch: [ AuthGuard ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [ PublicGuard ],
    canMatch: [ PublicGuard ]
  },
  {
    path: 'estudiantes',
    loadChildren: () => import('./estudiante/estudiante.module').then(m => m.EstudianteModule),
    canActivate: [ AuthGuard ],
    canMatch: [ AuthGuard ]
  },
  {
    path: 'profesores',
    loadChildren: () => import('./profesor/profesor.module').then(m => m.ProfesorModule),
    canActivate: [ AuthGuard ],
    canMatch: [ AuthGuard ]
  },
  {
    path: 'materias',
    loadChildren: () => import('./materia/materia.module').then(m => m.MateriaModule),
    canActivate: [ AuthGuard ],
    canMatch: [ AuthGuard ]
  },
  {
    path: '**',
    redirectTo: '/login'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
