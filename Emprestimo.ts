export class Emprestimo {
    livro: string;
    leitor: string;
    data: string;

    constructor(livro: string, leitor: string, data: string) {
        this.livro = livro
        this.leitor = leitor
        this.data = data
    }
}