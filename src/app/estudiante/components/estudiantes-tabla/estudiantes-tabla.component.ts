import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Estudiante } from '../../interfaces/estudiante.interface';

@Component({
  selector: 'estudiantes-tabla',
  templateUrl: './estudiantes-tabla.component.html',
  styles: [
  ]
})
export class EstudiantesTablaComponent {
  @Input()
  estudiantes: Estudiante[] = [];

  @Output()
  public onDelete = new EventEmitter();

  public deleteById(userId: number) {
    this.onDelete.emit(userId);
  }

}
