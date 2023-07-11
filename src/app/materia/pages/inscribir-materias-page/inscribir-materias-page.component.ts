import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../../services/Materia.Service';
import { Materia } from '../../interfaces/materia.interface';
import { EstudiantesService } from 'src/app/estudiante/services/estudiantes.service';
import { Estudiante } from 'src/app/estudiante/interfaces/estudiante.interface';
import { Profesor } from '../../../profesor/interfaces/profesor.interface';
import { ProfesorService } from 'src/app/profesor/services/profesor.service';
import { ProfesorMaterias } from '../../interfaces/profesorMateria.interface';
import { EstudianteMateria } from '../../interfaces/estudianteMateria.interface';

@Component({
  templateUrl: './inscribir-materias-page.component.html',
  styles: [
  ]
})
export class InscribirMateriasPageComponent implements OnInit {
  public creditosCounter: number = 0;
  public canAdd: boolean = true;
  public materias: Materia[] = [];
  public materiasInscritas: ProfesorMaterias[] = [];
  public profesores: Profesor[] = [];
  public materiaSeleccionada!: Materia;
  public profesorSeleccionado!: Profesor;
  public estudianteActual: Estudiante | undefined;

  constructor(private materiaService: MateriaService,
    private estudianteService: EstudiantesService,
    private profesorService: ProfesorService) {

  }
  ngOnInit(): void {
    this.estudianteActual = this.estudianteService.currentEstudiante;
    this.obtenerMaterias();
    this.puedeAgregar();
  }

  public seleccionarMateria(materia: Materia) {
    this.materiaSeleccionada = materia;
    this.obtenerProfesores(this.materiaSeleccionada.id)
    this.puedeAgregar();
  }

  public seleccionarProfesor(profesor: Profesor) {
    this.profesorSeleccionado = profesor;
    this.puedeAgregar();
  }

  public agregarMateriaProfesor() {
    const ProfesorMaterias: ProfesorMaterias = {
      materia: {
        id: this.materiaSeleccionada.id,
        nombre: this.materiaSeleccionada.nombre,
        creditos: this.materiaSeleccionada.creditos
      },
      profesor: {
        id: this.profesorSeleccionado.id,
        nombre: this.profesorSeleccionado.nombre
      }
    }

    this.materiasInscritas.push(ProfesorMaterias);
    this.creditosCounter += this.materiaSeleccionada.creditos;
    this.limpiarSeleccion();
    this.puedeAgregar();
  }
  public inscribirMaterias() {
    const estudianteMaterias: EstudianteMateria = {
      idEstudiante: this.estudianteActual!.id,
      profesorMaterias: this.materiasInscritas
    }

    this.materiaService.inscribirMaterias(estudianteMaterias).subscribe(result => {
      this.materiasInscritas = result.profesorMaterias;
    });
  }
  public quitarProfesorMaterias(materia: ProfesorMaterias) {
    this.materiasInscritas = this.materiasInscritas.filter(mi => {
      return !(mi.materia.id == materia.materia.id && mi.profesor.id == materia.profesor.id)
    });

    this.creditosCounter -= materia.materia.creditos;
    this.puedeAgregar();
    this.obtenerMaterias();
  }

  private puedeAgregar() {
    this.canAdd = this.creditosCounter < 9 &&
      ((this.materiaSeleccionada !== undefined && this.materiaSeleccionada.id !== 0) &&
        (this.profesorSeleccionado !== undefined && this.profesorSeleccionado.id !== 0));
  }

  private limpiarSeleccion() {
    this.materiaSeleccionada = {
      id: 0,
      nombre: '',
      creditos: 0
    }

    this.profesorSeleccionado = {
      id: 0,
      nombre: '',
    }

    this.filtrarMateriasInscritas();
  }

  private filtrarMateriasInscritas() {
    this.materias = this.materias.filter(m => {
      return !this.materiasInscritas.find(mi => mi.materia.id == m.id)
    });
  }

  private obtenerMaterias() {
    this.materiaService.getMaterias().subscribe(
      materias => {
        this.materias = materias
        this.filtrarMateriasInscritas();
      }
    );
  }

  private obtenerProfesores(materiaId: number) {

    this.profesorSeleccionado = {
      id: 0,
      nombre: '',
    }

    this.profesorService.getProfesorByMateriaId(materiaId).subscribe(
      profesores => {
        this.profesores = profesores!.filter(p => {
          return !this.materiasInscritas.find(mi => mi.profesor.id == p.id)
        });
      }
    );
  }
}
