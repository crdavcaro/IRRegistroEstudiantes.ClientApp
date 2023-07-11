import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Materia } from '../interfaces/materia.interface';
import { BaseHttpService } from 'src/app/shared/services/baseHttp.service';
import { EstudianteMateria } from '../interfaces/estudianteMateria.interface';

@Injectable({ providedIn: 'root' })
export class MateriaService extends BaseHttpService {

  constructor(private http: HttpClient) {
    super();
  }

  public getMaterias(): Observable<Materia[]> {
    const headers = this.getHeaders();
    return this.http.get<Materia[]>(`${this.baseUrl}/materia`, { headers });
  }

  public getMateriaById(id: number): Observable<Materia | undefined> {
    const headers = this.getHeaders();
    return this.http.get<Materia>(`${this.baseUrl}/materia/${id}`, { headers })
      .pipe(
        catchError(error => of(undefined))
      );
  }

  public addMateria(materia: Materia): Observable<Materia> {
    const headers = this.getHeaders();
    return this.http.post<Materia>(`${this.baseUrl}/materia`, materia, { headers });
  }

  public inscribirMaterias(estudianteMateria: EstudianteMateria): Observable<EstudianteMateria> {
    const headers = this.getHeaders();
    return this.http.post<EstudianteMateria>(`${this.baseUrl}/materia/inscribir-materias`, estudianteMateria, { headers });
  }

  public updateMateria(materia: Materia): Observable<Materia> {
    const headers = this.getHeaders();
    if (!materia.id) throw Error('materia id is required');

    return this.http.put<Materia>(`${this.baseUrl}/materia/${materia.id}`, materia, { headers });
  }

  deleteMateriaById(id: number): Observable<boolean> {
    const headers = this.getHeaders();
    return this.http.delete(`${this.baseUrl}/materia/${id}`, { headers })
      .pipe(
        map(resp => true),
        catchError(err => of(false)),
      );
  }

}
