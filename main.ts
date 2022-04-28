import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";

let cursos = [new Curso("DALGO", 3, 4.5, true, 2022), new Curso("Sistrans", 3, 3.6, true, 2022)];


export const ap = new Aprendiz("Diego Alejandro", "Tovar García","./resources/avatar.png", 24, NivelEducativo.UNIVERSITARIO, cursos);
console.log(ap.cursos);

let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;
let estadisticasTable: HTMLElement = document.getElementById("estadisticas")!;

function mostrarDatosAprendiz(aprendiz: Aprendiz): void {
    let  tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML  = `<tr><td colspan=2><img src="./${aprendiz.avatar}" height="100"></td></tr>
    <tr><td>Nombres:</td><td>${aprendiz.nombres}</td></tr>
    <tr><td>Apellidos:</td><td>${aprendiz.apellidos}</td></tr>
    <tr><td>Nivel educativo:</td><td>${aprendiz.nivelEducativo}</td></tr>
    <tr><td>Edad:</td><td>${aprendiz.edad}</td></tr>`;
    aprendizTable.appendChild(tbodyAprendiz);
}

function mostrarEstadisticasAprendiz(aprendiz: Aprendiz): void {
    let  numeroCertificados = aprendiz.darCursosCertificados();
    let trElement : HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>Cursos certificados:</b></td><td>${numeroCertificados}</td>`;
    estadisticasTable.appendChild(trElement);
}

mostrarDatosAprendiz(ap);
mostrarEstadisticasAprendiz(ap);