import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Materia } from '../../interfaces/materia.interface';

@Component({
  selector: 'materia-lista',
  templateUrl: './materia-lista.component.html',
  styles: [
  ]
})
export class MateriaListaComponent {
  @Input()
  public materias: Materia[] = [];

  @Input()
  public materiaSeleccionada!: Materia;

  @Output()
  public onMateriaSeleccionada = new EventEmitter();

  public seleccionarMateria(materia: Materia) {
    this.materiaSeleccionada = materia;
    this.onMateriaSeleccionada.emit(this.materiaSeleccionada);
  }

}

