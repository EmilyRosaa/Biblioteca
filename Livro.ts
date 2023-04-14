export class Livro{
    titulo: string;
    autor: string;
    categoria: string;
    ano: number;

    constructor(titulo: string, autor: string, categoria: string, ano: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.categoria = categoria;
        this.ano = ano;
    }
 }