import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, tap, of, map, catchError } from 'rxjs';

import { environments } from '../../../environments/environment';
import { Usuario } from '../interfaces/usuario.interface';
import { BaseHttpService } from 'src/app/shared/services/baseHttp.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseHttpService {

  private Usuario?: Usuario;

  constructor(private http: HttpClient) {
    super();
  }

  public get currentUser(): Usuario | undefined {
    if (!this.Usuario) {
      return undefined;
    }

    return structuredClone(this.Usuario);
  }

  public createUser(logIn: Usuario): Observable<Usuario> {
    const url = `${this.baseUrl}/Usuario`;
    return this.userPost(url, logIn);
  }

  public login(logIn: Usuario): Observable<Usuario> {
    const url = `${this.baseUrl}/Usuario/Login`;
    localStorage.setItem('token', "");
    return this.userPost(url, logIn);
  }

  private userPost(url: string, login: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(url, login)
      .pipe(
        tap(response => {
          if (response.id > 0) {
            this.Usuario = response;
            localStorage.setItem("token", this.Usuario.token!);
          }
        }));
  }

  public checkAuthentication(): Observable<boolean> {

    const url = `${this.baseUrl}/Usuario/${this.Usuario?.id}`;
    const headers = this.getHeaders();
    return this.http.get<Usuario>(url, { headers })
      .pipe(
        tap(response => this.Usuario = response),
        map(response => !!response),
        catchError(() => of(false))
      );
  }

  public checkAdmin(): boolean {
    return this.Usuario?.role === "admin";
  }

  public getUsuariosByUserName(id: string): Observable<Usuario[] | undefined> {
    const headers = this.getHeaders();
    return this.http.get<Usuario[]>(`${this.baseUrl}/usuario/username/${id}`, { headers })
      .pipe(
        catchError(error => of(undefined))
      );
  }

  public logout(): void {
    this.Usuario = undefined;
    localStorage.clear();
  }
}
