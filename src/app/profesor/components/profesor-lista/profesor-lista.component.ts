import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Profesor } from '../../interfaces/profesor.interface';

@Component({
  selector: 'profesor-lista',
  templateUrl: './profesor-lista.component.html',
  styles: [
  ]
})
export class ProfesorListaComponent {
  @Input()
  public profesores: Profesor[] = [];

  @Input()
  public profesorSeleccionado!: Profesor;

  @Output()
  public onProfesorSeleccionado = new EventEmitter();

  public seleccionarProfesor(profesor: Profesor) {
    this.profesorSeleccionado = profesor;
    this.onProfesorSeleccionado.emit(this.profesorSeleccionado);
  }

}
