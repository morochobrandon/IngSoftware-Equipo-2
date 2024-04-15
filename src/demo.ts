abstract class persona {
  private _cedula: string;
  constructor(cedula: string) {
    this._cedula = cedula;
  }

  public get cedula(): string {
    return this._cedula;
  }
}
class Trabajador extends persona {
  private sueldo: number;
  constructor(cedula: string, sueldo: number) {
    super(cedula);
    this.sueldo = sueldo;
  }
}
const object = new Trabajador("V-512513", 310);
console.log(object);
