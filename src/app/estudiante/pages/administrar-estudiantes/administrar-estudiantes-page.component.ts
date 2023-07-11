import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../../services/estudiantes.service';
import { Estudiante } from '../../interfaces/estudiante.interface';

@Component({
  templateUrl: './administrar-estudiantes-page.component.html',
  styles: [
  ]
})
export class AdministrarEstudiantesPageComponent implements OnInit{
public estudiantes: Estudiante[] = [];

constructor(private estudiantesService: EstudiantesService) {}
  ngOnInit(): void {
    this.obtenerEstudiantes();
  }

  private obtenerEstudiantes()
  {
    this.estudiantesService.getEstudiantes().subscribe(
      resp => this.estudiantes = resp
    );
  }

  public eliminarEstudiante(userId: number)
  {
    this.estudiantesService.deleteEstudianteById(userId).subscribe(
      resp => {
        if(resp)
        {
          this.obtenerEstudiantes();
        }
      }
    );
  }
}
