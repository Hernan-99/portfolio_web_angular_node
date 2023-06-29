import { Injectable } from '@angular/core';
import { Perfil } from '../models/perfil';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  URL = `${environment.apiURL}`;
  constructor(private http: HttpClient) {}
  public getAll(): Observable<Perfil> {
    return this.http.get<Perfil>(`${this.URL}perfil/1`);
  }
}
