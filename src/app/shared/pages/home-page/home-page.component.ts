import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/auth/services/usuario.service';
import { EstudiantesService } from 'src/app/estudiante/services/estudiantes.service';
import { Estudiante } from '../../../estudiante/interfaces/estudiante.interface';

@Component({
  selector: 'shared-home',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent implements OnInit {

  public Estudiante: Estudiante | undefined;

  constructor(private authService: UsuarioService,
    private estudianteService: EstudiantesService) {

  }

  ngOnInit(): void {
    if (this.authService.checkAuthentication() &&
      !this.authService.checkAdmin()) {
      this.Estudiante = this.estudianteService.currentEstudiante;
    }
    else {
      this.Estudiante = {
        id: 0,
        apellidos: "",
        carrera: "",
        cedula: 0,
        correo: "",
        idUsuario:0,
        nombres: "Administrador"
      };
    }
  }

}
