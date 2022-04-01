let cores = document.querySelectorAll(".color")
cores[0].addEventListener("click", selected)
cores[1].addEventListener("click", selected)
cores[2].addEventListener("click", selected)
cores[3].addEventListener("click", selected)

function selected(click)
{
    let classSelected = document.querySelector(".selected")
    classSelected.classList.remove("selected")
    click.target.classList.add("selected")
}

let quadrados = document.querySelectorAll(".pixel")
for (i = 0; i < quadrados.length; i++)
{
    quadrados[i].addEventListener("click", pintar)
}

function pintar(click)
{
    let corSelecionada = document.querySelector(".selected")
    let pegaCSS = getComputedStyle(corSelecionada).backgroundColor;
    // usei o Comando GetComputedStyle que aprendi nesse site https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
    click.target.style.backgroundColor = pegaCSS;
    console.log(pegaCSS)
}

let botaoApagar = document.querySelector("#clear-board");
botaoApagar.addEventListener("click", limparBoard)

function limparBoard()
{
    let quadrados = document.querySelectorAll(".pixel")
    for (i = 0; i < quadrados.length; i++)
    {
        quadrados[i].style.backgroundColor = "white";
    }
}