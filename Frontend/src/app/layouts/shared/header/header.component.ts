import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public hero: Perfil | undefined;
  constructor(private perfilSv: PerfilService) {}

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(): void {
    this.perfilSv.getAll().subscribe({
      next: (data) => {
        this.hero = data;
      },
      error: (err) => {
        alert(err);
      },
    });
  }
}
