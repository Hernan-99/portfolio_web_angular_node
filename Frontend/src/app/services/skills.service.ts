import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skills } from '../models/skills';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  URL = `${environment.apiURL}`;
  constructor(private http: HttpClient) {}

  public getAllSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(`${this.URL}api/skills`);
  }
}
