import { Component, ElementRef, ViewChild } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario.interface';
import { EstudiantesService } from 'src/app/estudiante/services/estudiantes.service';

@Component({
  selector: "auth-login",
  templateUrl: './login-page.component.html',
  styles: [
    `
      .card {
        margin-top: 150px;
      }
    `
  ]
})
export class LoginPageComponent {

  @ViewChild('txtUsername')
  public txtUsername!: ElementRef<HTMLInputElement>;

  @ViewChild('txtPassword')
  public txtPassword!: ElementRef<HTMLInputElement>;

  constructor(private authService: UsuarioService,
              private estudiantesService: EstudiantesService,
              private router: Router) {}

  public onLogin(userName: string, password: string):void {

    const logIn: Usuario = {
      id: 0,
      userName,
      password,
      token: "",
      role: ""
    }

    this.authService.login(logIn).subscribe(
      user => {
        if (user.id > 0) {
          if (!this.authService.checkAdmin()) {
            this.setEstudiante(user.id);
          } else {
            this.router.navigateByUrl("home");
          }

        }
      }
    );
  }

  private setEstudiante(id: number): void {
    this.estudiantesService.setCurrentEstudianteByUserId(id).subscribe(
      result => {
        if (result) {
          this.router.navigateByUrl("home");
        }
      }
    );
  }
}
