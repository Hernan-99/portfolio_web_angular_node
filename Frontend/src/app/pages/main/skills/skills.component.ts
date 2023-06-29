import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  public skills: Skills[] = [];

  constructor(private skillSv: SkillsService) {}

  ngOnInit(): void {
    this.getSkills();
  }

  public getSkills(): void {
    this.skillSv.getAllSkills().subscribe({
      next: (data) => {
        this.skills = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
