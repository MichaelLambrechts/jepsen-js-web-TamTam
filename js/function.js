const showdown  = require('showdown');
const fs = require('fs');
let converter = new showdown.Converter();
/*
'use strict';

let modalToLoad = " ";

for (let num = 0; num < localStorage.length; num++) {
  let idealist = document.createElement("ul");
  idealist.setAttribute("id", "idea"+num);
  document.querySelector("#list").appendChild(idealist);

  let idlist = document.createElement("li");
  idlist.setAttribute("id", "id"+num);
  idlist.setAttribute("name", num);
  idlist.setAttribute("data-toggle", "modal");
  idlist.setAttribute("data-target", "#exampleModal");
  idlist.setAttribute("class", "display");
  document.querySelector("#idea"+num).appendChild(idlist);
  idlist.innerHTML= JSON.parse(localStorage.getItem(num))["name"]

  let edlist = document.createElement("li");
  edlist.setAttribute("id", "edit" + num);
  edlist.setAttribute("name", num);
  edlist.setAttribute("class", "edit");
  document.querySelector("#idea"+num).appendChild(edlist);

  let edcont = document.createElement("i");
  edcont.setAttribute("id", "editcont" + num);
  edcont.setAttribute("name", num);
  edcont.setAttribute("class", "fas fa-edit");
  document.querySelector("#edit"+num).appendChild(edcont);
  

  let delist = document.createElement("li");
  delist.setAttribute("id", "del" + num);
  delist.setAttribute("name", num);
  delist.setAttribute("class", "delete");
  document.querySelector("#idea"+num).appendChild(delist);

  let decont = document.createElement("i");
  decont.setAttribute("id", "editcont" + num);
  decont.setAttribute("name", num);
  decont.setAttribute("class", "fas fa-trash-alt");
  document.querySelector("#del"+num).appendChild(decont);
}

let addlist = document.createElement("button");
addlist.setAttribute("id", "add");
addlist.setAttribute("data-toggle", "modal");
addlist.setAttribute("data-target", "#exampleModal");
document.querySelector("#list").appendChild(addlist);
document.querySelector("#add").innerText = "Ajouter un plan";

//adding listener on buttons
document.querySelector("#add").addEventListener("click", () => {
  loadModal("add");
});

//remove all the elements present in the modal
function clearModal() {
  //clear the body of the modal
  var element = document.querySelector(".modal-body");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  //clear the head of the modal
  var element2 = document.querySelector(".modal-header");
  while (element2.firstChild) {
    element2.removeChild(element2.firstChild);
  }
  //clear the footer the 
  var element3 = document.querySelector(".modal-footer");
  while (element3.firstChild) {
    element3.removeChild(element3.firstChild);
  }
}

//allow the user to add an idea
function addIdea() {
  clearModal();
  //create a element form in the html
  let formAdd = document.createElement("form");
  formAdd.setAttribute("id", "add");
  document.querySelector(".modal-body").appendChild(formAdd);

  //create a input name in the html
  let nameInput = document.createElement("input");
  nameInput.setAttribute("value", "name");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  document.querySelector("#add").appendChild(nameInput);

  //create a input description in the html
  let descInput = document.createElement("input");
  descInput.setAttribute("value", "desc");
  descInput.setAttribute("type", "text");
  descInput.setAttribute("id", "desc");
  document.querySelector("#add").appendChild(descInput);

  //create a button submit
  let subInput = document.createElement("button");
  subInput.setAttribute("value", "submit");
  subInput.setAttribute("class", "btn btn-primary");
  subInput.setAttribute("type", "submit");
  subInput.setAttribute("id", "save");
  document.querySelector(".modal-footer").appendChild(subInput);
  document.querySelector("#save").innerText = "crÃ©er le plan";

  //submit form and send it to locale storage
  document.querySelector("#save").addEventListener("click", () => {
    let nameIdea = document.getElementById('name').value;
    let descIdea = document.getElementById('desc').value;

    let idlength = parseInt(localStorage.length);
    localStorage.setItem(idlength, JSON.stringify({
      name: nameIdea,
      desc: descIdea
    }));
  });
}

// click listener display
document.querySelector("#id").addEventListener("click", () => {
  let id = document.querySelector("#id").getAttribute('name');
  console.log(id)
  loadModal("display", id);
})

//allow the user to display the idea
function displayIdea(id) {
  clearModal();

  let nameInput = document.createElement("p");
  nameInput.setAttribute("id", "name");
  document.querySelector(".modal-body").appendChild(nameInput);
  document.querySelector("#name").innerText = JSON.parse(localStorage.getItem(id))["name"]

  let descInput = document.createElement("p");
  descInput.setAttribute("id", "desc");
  document.querySelector(".modal-body").appendChild(descInput);
  document.querySelector("#desc").innerText = JSON.parse(localStorage.getItem(id))["desc"]
}

//
document.querySelector(".display").addEventListener("click", () => {
  let id = document.querySelector(".display").getAttribute('name');
  console.log(id)
  loadModal("display", id);
})

//allow the user to edit an idea
function editIdea(id) {
  let name = JSON.parse(localStorage.getItem(num))["name"]
  let desc = JSON.parse(localStorage.getItem(num))["desc"]

  //create a element form in the html
  let formEdit = document.createElement("form");
  formEdit.setAttribute("id", "edit");
  document.querySelector(".modal-body").appendChild(formEdit);

  //create a input name in the html
  let nameInput = document.createElement("input");
  nameInput.setAttribute("value", name);
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  document.querySelector("#edit").appendChild(nameInput);

  //create a input description in the html
  let descInput = document.createElement("input");
  descInput.setAttribute("value", desc);
  descInput.setAttribute("type", "text");
  descInput.setAttribute("id", "desc");
  document.querySelector("#edit").appendChild(descInput);

  //create a button submit
  let subInput = document.createElement("button");
  subInput.setAttribute("value", "submit");
  subInput.setAttribute("type", "submit");
  subInput.setAttribute("id", "submit");
  document.querySelector("#edit").appendChild(subInput);

  //submit form and send it to locale storage
  document.querySelector("#submit").addEventListener("click", () => {
    let nameIdea = document.getElementById('name').value;
    let descIdea = document.getElementById('desc').value;
    new Idea(nameIdea, descIdea);
  });
}

//remove idea from localStorage
function removeIdea(id) {
  let delid = localStorage.getItem(id);
  localStorage.removeItem(delid);
}

//load the modal following the button that the user press
function loadModal(modalToLoad, id) {
  switch (modalToLoad) {
    case "display":
      displayIdea(id);
      break;
    case "add":
      addIdea();
      break;
    case "edit":
      editIdea(id);
      break;
    case "remove":
      removeIdea(id);
      break;
    default:
      break;
  }
}
*/
//load file 'ideaList.md' to convert it to html and print it on the page.
function loadFile() {
  let obj, toRet = "";

  obj = fs.readFileSync('ideaList.md', 'utf8');
  toRet += converter.makeHtml(obj);
  return toRet;
}

//write into file all the content of the div 'blabla'
function writeInFile(obj) {
  let ideaList = converter.makeMarkdown(obj);
  console.log('prout' + ideaList);
  fs.writeFileSync('ideaList.md', ideaList, 'utf8', (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
  });
}

document.querySelector(".blabla").innerHTML = loadFile();

document.querySelector('#test').addEventListener('click', ()=>{
  var objToConvert = document.querySelector(".blabla").innerHTML; 
  writeInFile(objToConvert);
  console.log(objToConvert);
});