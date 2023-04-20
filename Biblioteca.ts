import { Livro } from "./Livro";
import { Emprestimo } from "./Emprestimo";

export class Biblioteca {
    nome: string;
    livros: Array<Livro>;
    emprestimo: Array<Emprestimo>;

    constructor(nome: string, livros: Array<Livro> = [], emprestimo: Array<Emprestimo> = []) {
        this.nome = nome;
        this.livros = livros;
        this.emprestimo = emprestimo; 
     }
     getLivros(): Array<Livro> {
        return this.livros;
     }
     addLivro(livro: Livro): void {
     this.livros.push(livro);
     }
     empresta(data: string, livro: Livro, emprestimo: Emprestimo): void {
        this.emprestimo.push(
            new Emprestimo(data, livro, emprestimo))
     }
    }