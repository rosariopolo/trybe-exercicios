const pai = document.querySelector("pai");
const irmaoParaOElemento = document.createElement("section");
irmaoParaOElemento.id = "irmaoParaOElemento";
pai.appendChild(irmaoParaOElemento)

const elementoOndeVoceEsta = document.querySelector("elementoOndeVoceEsta");
const filhoParaElementoOndeEsta = document.createElement("section");
filhoParaElementoOndeEsta.id = "filhoParaElementoOndeEsta";
elementoOndeVoceEsta.appendChild(filhoParaElementoOndeEsta);

const primeiroFilhoDoFilho = document.querySelector("primeiroFilhoDoFilho");
const filhoDoPrimeiro = document.createElement("section");
filhoDoPrimeiro.id = "filhoDoPrimeiro";
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiro);

primeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling