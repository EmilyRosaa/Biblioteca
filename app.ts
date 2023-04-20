import { Livro } from "./Livro";
import { Autor } from "./Autor";
import { Leitor } from "./Leitor";
import { Loja } from "./Loja";
import { Biblioteca } from "./Biblioteca";

let autor = new Autor('Deus', '1')
console.log(autor)

let livro = new Livro('Blibia', autor, 'Religiao', -50) 
console.log(livro)
let leitor = new Leitor('Emily Nascimento', 21, '12345667') 
console.log(leitor)
let loja = new Loja('call of cthulhu', 'HP Lovecraft', 'Terror', 1928, 30)
console.log(loja)