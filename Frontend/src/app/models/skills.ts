export class Skills {
  id_skill?: number;
  nombre_skill: string;
  icono_skill: string;

  constructor(nombre_skill: string, icono_skill: string) {
    this.nombre_skill = nombre_skill;
    this.icono_skill = icono_skill;
  }
}
