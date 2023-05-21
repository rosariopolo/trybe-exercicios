const whereAreYou = document.querySelector("#where-are-you");

const parent = whereAreYou.parentNode;
parent.style.color = "red";

const firstChildOfC = whereAreYou.firstElementChild;
firstChildOfC.innerText = "Esse é o primeiro filho do  primeiro filho";

const firstChild = parent.firstChild;

const firstChildAlternate = whereAreYou.previousElementSibling;

const attention = whereAreYou.nextSibling;

const thirdChild = whereAreYou.nextElementSibling;

const thirdChildAlternate = parent.lastElementChild.previousElementSibling;





