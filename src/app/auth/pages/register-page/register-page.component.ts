import { Component, ElementRef, ViewChild } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario.interface';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
    `
      .card {
        margin-top: 150px;
      }

      .login-anchor {
        margin-left: 10px;
      }
    `
  ]
})
export class RegisterPageComponent {

  @ViewChild('txtUsername')
  public txtUsername!: ElementRef<HTMLInputElement>;

  @ViewChild('txtPassword')
  public txtPassword!: ElementRef<HTMLInputElement>;

  @ViewChild('txtConfirmPassword')
  public txtConfirmPassword!: ElementRef<HTMLInputElement>;

  constructor(private authService: UsuarioService,
              private router: Router) { }

  public onRegister(userName: string, password: string) {

    const logIn: Usuario = {
      id: 0,
      userName,
      password,
      token: "",
      role: ""
    }

    this.authService.createUser(logIn)
      .subscribe(user => {
          if (user.id! > 0) {
            this.logIn(logIn);
          }
      });
  }

  public logIn(user: Usuario){
    this.authService.login(user)
      .subscribe(user => {
          if (user.id! > 0) {
            this.router.navigateByUrl("/estudiantes/crear-estudiante");
          }
      });
  }
}
