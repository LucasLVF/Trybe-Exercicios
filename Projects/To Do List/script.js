let botaoCriar = document.getElementById("criar-tarefa")
let listaOl = document.getElementById("lista-tarefas")
let input = document.getElementById("texto-tarefa")
botaoCriar.addEventListener("click", adicionarTarefa)

function adicionarTarefa() {
    let linha = document.createElement("li");
    linha.innerText = input.value;
    listaOl.appendChild(linha);
    input.value = ""

    //linha.className = "linhas";
    linha.addEventListener("click", selected)
    linha.addEventListener("dblclick", done)
}

function selected(click) {
    let selecionado = document.querySelector(".selected")
    if (selecionado != null)
    {
        selecionado.classList.remove("selected")
    } 
    click.target.classList.add("selected")
 /*    click.target.classList.add("selected")
    selecionado.classList.remove("selected")
    click.target.classList.add("selected") */
}

function done(clickdbl)
{
    
    if (clickdbl.target.className.includes("completed") )
    {
        clickdbl.target.classList.remove("completed")
    }
    else
    {
        clickdbl.target.classList.add("completed")
    }
}

let botaoApagar = document.getElementById("apaga-tudo")
botaoApagar.addEventListener("click", apagarTudo)

function apagarTudo()
{    
    let filhos = listaOl.children;
    console.log(filhos)
    for(let i = filhos.length-1; i >= 0; i--)
    {
        listaOl.removeChild(filhos[i])
    } 
    console.log(filhos)
}

let botaoExcluirProntos = document.getElementById("remover-finalizados")
botaoExcluirProntos.addEventListener("click", removerProntos)
let completos = document.getElementsByClassName("completed")

function removerProntos()
{
    for(let i = completos.length-1; i >=0; i--)
    {
        listaOl.removeChild(completos[i])
    }
}