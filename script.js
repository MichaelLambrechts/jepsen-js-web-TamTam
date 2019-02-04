
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
let list = document.createElement("ul");
list.setAttribute("id", "list");
document.querySelector(".content").appendChild(list);
