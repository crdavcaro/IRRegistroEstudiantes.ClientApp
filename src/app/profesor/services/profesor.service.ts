import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environments } from '../../../environments/environment';
import { Observable, catchError, map, of } from 'rxjs';
import { Profesor } from '../interfaces/profesor.interface';
import { BaseHttpService } from 'src/app/shared/services/baseHttp.service';

@Injectable({ providedIn: 'root' })
export class ProfesorService extends BaseHttpService{

  constructor(private http: HttpClient) {
    super();
  }

  public getProfesors(): Observable<Profesor[]> {
    const headers = this.getHeaders();
    return this.http.get<Profesor[]>(`${this.baseUrl}/Profesor`,{ headers });
  }

  public getProfesorById(id: number): Observable<Profesor | undefined> {
    const headers = this.getHeaders();
    return this.http.get<Profesor>(`${this.baseUrl}/Profesor/${id}`, { headers })
      .pipe(
        catchError(error => of(undefined))
      );
  }

  public getProfesorByMateriaId(id: number): Observable<Profesor[] | undefined> {
    const headers = this.getHeaders();
    return this.http.get<Profesor[]>(`${this.baseUrl}/Profesor/materia/${id}`, { headers })
      .pipe(
        catchError(error => of(undefined))
      );
  }

  public addProfesor(Profesor: Profesor): Observable<Profesor> {
    const headers = this.getHeaders();
    return this.http.post<Profesor>(`${this.baseUrl}/Profesor`, Profesor, { headers });
  }

  public updateProfesor( Profesor: Profesor ): Observable<Profesor> {
    const headers = this.getHeaders();
    if ( !Profesor.id ) throw Error('Profesor id is required');

    return this.http.put<Profesor>(`${ this.baseUrl }/Profesor/${ Profesor.id }`, Profesor, { headers });
  }

  deleteProfesorById( id: number ): Observable<boolean> {
    const headers = this.getHeaders();
    return this.http.delete(`${ this.baseUrl }/Profesor/${ id }`,{ headers })
      .pipe(
        map( resp => true ),
        catchError( err => of(false) ),
      );
  }

}
