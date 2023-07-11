import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/auth/services/usuario.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input()
  public isLogedIn: boolean = false;
  @Input()
  public isAdmin: boolean = false;

  public constructor(private authService: UsuarioService) {

  }

  public onLogout(): void {
    this.authService.logout();
  }
}
