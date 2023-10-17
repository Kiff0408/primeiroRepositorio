var acordeon = document.querySelector(".acordeon")
var listaBtn = acordeon.querySelectorAll("button")
var listaProdutos = acordeon.querySelector(".lista-produtos")
var pos = 0

listaBtn[1].addEventListener("click", scrollarLadoDireito);
listaBtn[0].addEventListener("click", scrollarLadoEsquerdo);

function scrollarLadoDireito() {
    if(listaProdutos.getBoundingClientRect().width > pos) 
    pos += 200
    listaProdutos.scrollTo({
        left: pos,
        behavior: "smooth"
    });
    
}

function scrollarLadoEsquerdo() {
    if(0 < pos)
    pos -= 200

    listaProdutos.scrollTo({
        left: pos,
        behavior: "smooth"
    });
}
