
import { Component, OnInit } from '@angular/core';
import { TextSearch } from 'src/app/shared/interfaces/text.search.interface';
import { UsuarioService } from '../../../auth/services/usuario.service';
import { Estudiante } from '../../interfaces/estudiante.interface';
import { EstudiantesService } from '../../services/estudiantes.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './crear-estudiante-page.component.html',
  styles: [
  ]
})
export class CrearEstudiantePageComponent implements OnInit{
  public isAdmin: boolean = false;
  public nombreUsuario: string = '';
  public usuarios: TextSearch[] = [];
  public estudiante: Estudiante;

  constructor(private router: Router,
              private authService: UsuarioService,
              private estudianteService: EstudiantesService) {
    this.estudiante = {
        id: 0,
        apellidos: '',
        carrera: '',
        correo: '',
        idUsuario: 0,
        nombres: '',
        cedula: 0
      };
    }
  ngOnInit(): void {
    this.isAdmin = this.authService.checkAdmin();
  }

  public buscarUsuarios(texto: string): void {
    this.authService.getUsuariosByUserName(texto)
                    .subscribe(
                      result => {
                          this.usuarios = result!.map<TextSearch>(u => {
                            const textSearch: TextSearch = {
                              id: u.id,
                              text: u.userName
                            }
                          return textSearch;
                          });
                      });
  }

  public getNombreUsuario(nombreUsuario: string) {
    this.nombreUsuario = nombreUsuario;
  }

  public crearEstudiante(){
    if (!this.isAdmin) {
      this.nombreUsuario = this.authService.currentUser?.userName ?? '';
    }

    this.authService.getUsuariosByUserName(this.nombreUsuario).subscribe(
      result => {
        const idUsuario = result![0].id;
        this.estudiante.idUsuario = idUsuario;
        this.enviarEstudiante();
      });
  }

  private enviarEstudiante(): void {
    this.estudianteService.addEstudiante(this.estudiante).subscribe(
      result => {
        if (!this.isAdmin) {

        }

      }
    );
  }

  private updateCurrentEstudiante(): void {
    this.estudianteService.setCurrentEstudianteByUserId(this.estudiante.idUsuario).subscribe(
      result => {
        if (result) {
          this.router.navigateByUrl("/home");
        }
      });
  }
}
