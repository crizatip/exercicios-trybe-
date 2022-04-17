document.getElementById("elementoOndeVoceEsta").parentNode.style.color = "red";

document.getElementById("elementoOndeVoceEsta").firstElementChild.innerHTML = "Filho do Filho";

document.getElementById("pai").firstElementChild;

document.getElementById("elementoOndeVoceEsta").previousElementSibling;

document.getElementById("elementoOndeVoceEsta").nextSibling;

document.getElementById("elementoOndeVoceEsta").nextElementSibling;

document.getElementById("pai").lastElementChild.previousElementSibling;

let pai = document.getElementById("pai");

pai.appendChild(document.createElement('p'));

pai.lastChild.innerText = "teste";

let ondeEuEstou = document.getElementById("elementoOndeVoceEsta")

ondeEuEstou.appendChild(document.createElement('p'))

ondeEuEstou.lastChild.innerText = "Meu filho";

let primeiroFilhoFilho = document.getElementById("primeiroFilhoDoFilho")

const filhoDoFilhoDoFilho = primeiroFilhoFilho.appendChild(document.createElement('section'))

filhoDoFilhoDoFilho.id = "filho-do-filho-do-filho"

primeiroFilhoFilho.lastChild.innerText = "Filho do Filho do Filho";

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
    const currentChildren = pai.childNodes[index];
    if (currentChildren.id !== 'elementoOndeVoceEsta') {
      currentChildren.remove();
    }
  }
