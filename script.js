
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/
// Create a list of ideas
let countGirl = 9;

function addGirl() {
  const element = document.querySelector('.ridiculousgirl');
  element.classList.remove('animated', 'bounceOutRight');
  element.style.display = "block";
  element.classList.add('animated', 'bounceInRight');
}
function removeGirl() {
  document.querySelector("#devilwoman").addEventListener("click", () => {
    const element = document.querySelector('.ridiculousgirl');
    element.classList.add('animated', 'bounceOutRight');
    countGirl++;
  });
}

function addGirlL() {
  const element = document.querySelector('.ridiculousgirlLeft');
  element.style.display = "block";
  element.classList.remove('animated', 'bounceOutLeft');
  
  element.classList.add('animated', 'bounceInLeft');
}
function removeGirlL() {
  document.querySelector("#devilwomanLeft").addEventListener("click", () => {
    const element = document.querySelector('.ridiculousgirlLeft');
    element.classList.add('animated', 'bounceOutLeft');
    countGirl++;
    
  });
}

function addGirlUp(){
  const element = document.querySelector('.ridiculousgirlUp');
  element.style.display = "block";
  element.classList.remove('animated', 'bounceOutDown');
  
  element.classList.add('animated', 'bounceInUp');
}
function removeGirlUp(){
  document.querySelector("#devilwomanUp").addEventListener("click", () => {
    const element = document.querySelector('.ridiculousgirlUp');
    element.classList.remove('animated', 'bounceInUp');
    element.classList.add('animated', 'bounceOutDown');
    countGirl = 0;
    console.log("$$");
  });
}

setInterval(addGirlL, 5000);
setInterval(addGirl, 2000);
setInterval(addGirlUp, 37000);

removeGirlUp();
removeGirl();
removeGirlL();
