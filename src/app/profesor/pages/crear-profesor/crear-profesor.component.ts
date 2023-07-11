import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfesorService } from '../../services/profesor.service';
import { Profesor } from '../../interfaces/profesor.interface';

@Component({
  templateUrl: './crear-profesor.component.html',
  styles: [
  ]
})
export class CrearProfesorComponent {

  constructor(private router: Router,
              private profesorService: ProfesorService) {

              }

  public crearProfesor(nombreProfesor: string)
  {
    const profesor: Profesor = {
      id: 0,
      nombre: nombreProfesor,
    }
    this.profesorService.addProfesor(profesor).subscribe(result => {
        if (result.id > 0) {
          this.router.navigateByUrl("/profesores/administrar-profesores");
        }
    });
  }
}
