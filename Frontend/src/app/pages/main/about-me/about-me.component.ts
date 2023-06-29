import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  public perfil: Perfil | undefined;
  constructor(private perfilSv: PerfilService) {}

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(): void {
    this.perfilSv.getAll().subscribe({
      next: (data) => {
        this.perfil = data;
      },
      error: (err) => {
        alert(err);
      },
    });
  }
}
