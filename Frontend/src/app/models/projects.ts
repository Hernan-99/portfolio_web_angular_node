export class Projects {
  id_proyecto?: number;
  nombre_proyecto: string;
  descripcion_proyecto: string;
  link_url: string;
  link_repo: string;
  img_proyecto: string;

  constructor(
    nombre_proyecto: string,
    descripcion_proyecto: string,
    link_url: string,
    link_repo: string,
    img_proyecto: string
  ) {
    this.nombre_proyecto = nombre_proyecto;
    this.descripcion_proyecto = descripcion_proyecto;
    this.link_url = link_url;
    this.link_repo = link_repo;
    this.img_proyecto = img_proyecto;
  }
}
