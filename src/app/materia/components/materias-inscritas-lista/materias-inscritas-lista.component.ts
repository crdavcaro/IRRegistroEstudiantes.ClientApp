import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProfesorMaterias } from '../../interfaces/profesorMateria.interface';

@Component({
  selector: 'materias-inscritas-lista',
  templateUrl: './materias-inscritas-lista.component.html',
  styles: [
  ]
})
export class MateriasInscritasListaComponent {

  @Input()
  public materias: ProfesorMaterias[] = [];

  @Output()
  public onQuitarMateria = new EventEmitter();

  public quitarProfesorMaterias(materia: ProfesorMaterias) {
    this.onQuitarMateria.emit(materia)
  }

}
