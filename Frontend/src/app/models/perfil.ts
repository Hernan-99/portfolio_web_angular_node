export class Perfil {
  id?: number;
  nombre: string;
  apellido: string;
  profesion: string;
  descripcion: string;
  img_perfil: string;
  banner: string;

  constructor(
    nombre: string,
    apellido: string,
    profesion: string,
    descripcion: string,
    img_perfil: string,
    banner: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.profesion = profesion;
    this.descripcion = descripcion;
    this.img_perfil = img_perfil;
    this.banner = banner;
  }
}
