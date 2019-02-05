// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

// Add the woman with animateCSS from the right
function addGirl() {
  const element = document.querySelector('.ridiculousgirl');
  element.classList.remove('animated', 'bounceOutRight');
  element.style.display = "block";
  element.classList.add('animated', 'bounceInRight');
}

//remove the girl from the right with click
function removeGirl() {
  document.querySelector("#devilwoman").addEventListener("click", () => {
    const element = document.querySelector('.ridiculousgirl');
    element.classList.add('animated', 'bounceOutRight');
  });
}

//add the woman with AnimateCSS from the left
function addGirlL() {
  const element = document.querySelector('.ridiculousgirlLeft');
  element.style.display = "block";
  element.classList.remove('animated', 'bounceOutLeft');
  
  element.classList.add('animated', 'bounceInLeft');
}

//remove the girl from the left with click
function removeGirlL() {
  document.querySelector("#devilwomanLeft").addEventListener("click", () => {
    const element = document.querySelector('.ridiculousgirlLeft');
    element.classList.add('animated', 'bounceOutLeft');
  });
}

//add the woman with AnimateCSS from the bottom
function addGirlUp(){
  const element = document.querySelector('.ridiculousgirlUp');
  element.style.display = "block";
  element.classList.remove('animated', 'bounceOutDown');
  
  element.classList.add('animated', 'bounceInUp');
}

//remove the woman from the bottom when clicking
function removeGirlUp(){
  document.querySelector("#devilwomanUp").addEventListener("click", () => {
    const element = document.querySelector('.ridiculousgirlUp');
    element.classList.remove('animated', 'bounceInUp');
    element.classList.add('animated', 'bounceOutDown');
    countGirl = 0;
    console.log("$$");
  });
}

setInterval(addGirlL, 50000);
setInterval(addGirl, 46000);
setInterval(addGirlUp, 120000);

removeGirlUp();
removeGirl();
removeGirlL();

// Create a list of ideas
let list = document.createElement("ul");
list.setAttribute("id", "list");
document.querySelector(".content").appendChild(list);

