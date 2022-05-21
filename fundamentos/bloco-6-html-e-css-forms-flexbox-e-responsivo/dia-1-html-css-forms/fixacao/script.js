// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener("click", previnir)
INPUT_CHECKBOX.addEventListener("click", previnir)
INPUT_TEXT.addEventListener("keypress", previnir)



function previnir(event){
event.preventDefault()
}