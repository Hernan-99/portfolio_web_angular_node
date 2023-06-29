import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Projects } from '../models/projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  URL = `${environment.apiURL}`;
  constructor(private http: HttpClient) {}
  public getProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>(`${this.URL}api/projects`);
  }
}
