import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/models/projects';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  public projects: Projects[] = [];
  constructor(private projectSv: ProjectsService) {}

  ngOnInit(): void {
    this.getProyectos();
  }

  getProyectos(): void {
    this.projectSv.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
      },
      error: (err) => {
        alert(err);
      },
    });
  }
}
