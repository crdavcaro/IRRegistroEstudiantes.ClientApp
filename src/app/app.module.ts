import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { MateriaModule } from './materia/materia.module';
import { ProfesorModule } from './profesor/profesor.module';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    EstudianteModule,
    MateriaModule,
    ProfesorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
