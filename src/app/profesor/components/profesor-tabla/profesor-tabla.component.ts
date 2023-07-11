import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Profesor } from '../../interfaces/profesor.interface';

@Component({
  selector: 'profesor-tabla',
  templateUrl: './profesor-tabla.component.html',
  styles: [
  ]
})
export class ProfesorTablaComponent {

  @Input()
  public profesores: Profesor[] = [];

  @Output()
  public onDelete = new EventEmitter();

  public deleteById(profId: number) {
    this.onDelete.emit(profId);
  }
}
