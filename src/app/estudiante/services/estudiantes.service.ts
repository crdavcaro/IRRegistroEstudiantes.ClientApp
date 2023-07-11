import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Estudiante } from '../interfaces/estudiante.interface';
import { BaseHttpService } from 'src/app/shared/services/baseHttp.service';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService extends BaseHttpService {

  private Estudiante?: Estudiante;

  public constructor(private http: HttpClient) {
    super();
    this.getHeaders();
  }

  public get currentEstudiante(): Estudiante | undefined {
    if (!this.Estudiante) {
      return undefined;
    }

    return structuredClone(this.Estudiante);
  }

  public setCurrentEstudianteByUserId(id: number): Observable<Estudiante | undefined> {
    return this.getEstudianteByUserId(id).pipe(
      tap(res => {
        if (res!.id > 0) {
          this.Estudiante = res;
        }
      })
    );
  }


  public getEstudiantes(): Observable<Estudiante[]> {
    const headers = this.getHeaders();
    return this.http.get<Estudiante[]>(`${this.baseUrl}/Estudiante`, { headers });
  }

  public getEstudianteByUserId(id: number): Observable<Estudiante | undefined> {
    const headers = this.getHeaders();
    return this.http.get<Estudiante>(`${this.baseUrl}/Estudiante/user/${id}`, { headers })
      .pipe(
        catchError(error => of(undefined))
      );
  }

  public getEstudianteById(id: number): Observable<Estudiante | undefined> {
    const headers = this.getHeaders();
    return this.http.get<Estudiante>(`${this.baseUrl}/Estudiante/${id}`, { headers })
      .pipe(
        catchError(error => of(undefined))
      );
  }

  public addEstudiante(Estudiante: Estudiante): Observable<Estudiante> {
    const headers = this.getHeaders();
    return this.http.post<Estudiante>(`${this.baseUrl}/estudiante`, Estudiante, { headers });
  }

  public updateEstudiante(Estudiante: Estudiante): Observable<Estudiante> {
    const headers = this.getHeaders();
    if (!Estudiante.id) throw Error('Estudiante id is required');

    return this.http.put<Estudiante>(`${this.baseUrl}/estudiante/${Estudiante.id}`, Estudiante, { headers });
  }

  deleteEstudianteById(id: number): Observable<boolean> {
    const headers = this.getHeaders();
    return this.http.delete(`${this.baseUrl}/estudiante/${id}`, { headers })
      .pipe(
        map(resp => true),
        catchError(err => of(false)),
      );
  }

}
