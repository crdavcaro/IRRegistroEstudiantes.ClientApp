import { Component } from '@angular/core';
import { UsuarioService } from './auth/services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'IRRegistroEstudiantes.ClientApp';

  public isLogedIn: boolean = false;
  public isAdmin: boolean = false;

  constructor(private authService: UsuarioService) { }
  public onActivated(): void {
    this.authService.checkAuthentication()
      .subscribe(
        auth => {
          this.isLogedIn = auth;
          this.isAdmin = this.authService.checkAdmin();
        }
      );
  }
}
