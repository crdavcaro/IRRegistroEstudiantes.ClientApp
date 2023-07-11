import { Component, OnInit } from '@angular/core';
import { Profesor } from '../../interfaces/profesor.interface';
import { ProfesorService } from '../../services/profesor.service';

@Component({
  templateUrl: './administrar-profesores-page.component.html',
  styles: [
  ]
})
export class AdministrarProfesoresPageComponent  implements OnInit {
  public profesores: Profesor[] = [];

  constructor(private profesorService: ProfesorService) {}
    ngOnInit(): void {
      this.obtenerProfesores();
    }

    private obtenerProfesores()
    {
      this.profesorService.getProfesors().subscribe(
        resp => this.profesores = resp
      );
    }

    public eliminarProfesor(profId: number)
    {
      this.profesorService.deleteProfesorById(profId).subscribe(
        resp => {
          if(resp)
          {
            this.obtenerProfesores();
          }
        }
      );
    }
  }
