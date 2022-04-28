import { Curso } from "./curso.js";

export enum NivelEducativo {
    BACHILLERATO = "Bachillerato",
    UNIVERSITARIO = "Universitario",
    POSGRADO = "Posgrado"
}

export class Aprendiz {
    constructor(public nombres: string, public apellidos: string, public avatar: string, public edad: number, public nivelEducativo: NivelEducativo, public cursos: Curso[]){}

    public darCursosCertificados(): number {
        let ans = 0;
        for (let i = 0; i<this.cursos.length; i++) {
            if (this.cursos[i].certificado){
                ans++;
            }
        }
        return ans;
    }
}