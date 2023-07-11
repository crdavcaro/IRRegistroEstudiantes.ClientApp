import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Materia } from '../../interfaces/materia.interface';

@Component({
  selector: 'materia-tabla',
  templateUrl: './materia-tabla.component.html',
  styles: [
  ]
})
export class MateriaTablaComponent {

  @Input()
  public materias: Materia[] = [];

  @Output()
  public onDelete = new EventEmitter();

  public deleteById(matId: number) {
    this.onDelete.emit(matId);
  }
}
