import { Component } from '@angular/core';
import { MateriaService } from '../../services/Materia.Service';
import { Materia } from '../../interfaces/materia.interface';
import { Router } from '@angular/router';

@Component({
  templateUrl: './crear-materia-page.component.html',
  styles: [
  ]
})
export class CrearMateriaPageComponent {

  constructor(private router: Router,
              private materiaService: MateriaService) {

              }

  public crearMateria(nombreMateria: string)
  {
    const materia: Materia = {
      id: 0,
      nombre: nombreMateria,
      creditos: 0
    }
    this.materiaService.addMateria(materia).subscribe(result => {
        if (result.id > 0) {
          this.router.navigateByUrl("/materias/administrar-materias");
        }
    });
  }
}
