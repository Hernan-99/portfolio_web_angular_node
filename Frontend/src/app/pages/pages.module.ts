import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AboutMeComponent } from './main/about-me/about-me.component';
import { SkillsComponent } from './main/skills/skills.component';
import { ProjectsComponent } from './main/projects/projects.component';

@NgModule({
  declarations: [
    MainComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
  ],
  imports: [CommonModule],
  exports: [MainComponent],
})
export class PagesModule {}
