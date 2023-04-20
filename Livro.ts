import { Autor } from "./Autor";

export class Livro{
    titulo: string;
    autor: Autor;
    categoria: string;
    ano: number;

    constructor(titulo: string, autor: Autor, categoria: string, ano: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.categoria = categoria;
        this.ano = ano;
    }
 }