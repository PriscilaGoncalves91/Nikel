const nome = "Priscila Gonçalves";
let nome2 = "";
let pessoadefault = {
    nome: "Maria de Lourdes",
    Idade: "60",
    Trabalho: "do lar"
}

let nomes = ["Maria de Lourdes", "Priscila Gonçalves", "Ana Victória Gonçalves"]



let pessoas = [
    {
    nome: "Maria de Lourdes",
    Idade: "60",
    Trabalho: "do lar"
    },
    {
    nome: "Priscila Gonçalves",
    Idade: "30",
    Trabalho: "estudante"
    }
]



function alterarNome() {
    nome2 = "Heitor Gonçalves"
    console.log("Valor Alterado:")
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor Alterado recebendo um nome")
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.Idade);
    
    console.log("Trabalho:");
    console.log(pessoa.Trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    pessoas.forEach((item)=> {
        console.log("nome:");
        console.log(item.nome);
        console.log("Idade:");
        console.log(item.Idade);
    
        console.log("Trabalho:");
        console.log(item.Trabalho)
    })
}

imprimirPessoas();

console.log(pessoas);

adicionarPessoa({
    nome: "Ana Victória",
    Idade: "13",
    Trabalho: "Estudante"
});

console.log(pessoas);

//imprimirPessoa(pessoadefault);

//imprimirPessoa({
//    nome: "Priscila Gonçalves",
//    Idade: "30",
//    Trabalho: "estudante"
//})

//recebeEalteraNome("Ana Victória Gonçalves");
//recebeEalteraNome("Lucas Freitas")

//alterarNome();