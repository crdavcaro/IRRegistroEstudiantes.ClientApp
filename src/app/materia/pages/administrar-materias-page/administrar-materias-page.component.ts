import { Component, OnInit } from '@angular/core';
import { Materia } from '../../interfaces/materia.interface';
import { MateriaService } from '../../services/Materia.Service';

@Component({
  templateUrl: './administrar-materias-page.component.html',
  styles: [
  ]
})
export class AdministrarMateriasPageComponent implements OnInit {
  public materias: Materia[] = [];

  constructor(private materiaService: MateriaService) {}
    ngOnInit(): void {
      this.obtenerMaterias();
    }

    private obtenerMaterias()
    {
      this.materiaService.getMaterias().subscribe(
        resp => this.materias = resp
      );
    }

    public eliminarMateria(matId: number)
    {
      this.materiaService.deleteMateriaById(matId).subscribe(
        resp => {
          if(resp)
          {
            this.obtenerMaterias();
          }
        }
      );
    }
  }
