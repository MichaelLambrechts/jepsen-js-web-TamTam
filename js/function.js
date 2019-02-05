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
  edlist.setAttribute("data-toggle", "modal");
  edlist.setAttribute("data-target", "#exampleModal");
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
  decont.setAttribute("id", "delcont" + num);
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
  document.querySelector("#save").innerText = "Créer le plan";

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
for (let n = 0; n < localStorage.length; n++){
  document.querySelector("#id"+n).addEventListener("click", () => {
    let id = document.querySelector("#id"+n).getAttribute('name');
    console.log(id)
    loadModal("display", id);
  })
}

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

// click edit listener
for (let f = 0; f < localStorage.length; f++){
  document.querySelector("#edit"+f).addEventListener("click", () => {
    let id = document.querySelector("#edit"+f).getAttribute('name');
    loadModal("edit", id);
  })
}

//allow the user to edit an idea
function editIdea(id) {
  clearModal();
  let name = JSON.parse(localStorage.getItem(id))["name"]
  let desc = JSON.parse(localStorage.getItem(id))["desc"]

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
  subInput.setAttribute("class", "btn btn-primary");
  subInput.setAttribute("type", "submit");
  subInput.setAttribute("id", "save");
  document.querySelector(".modal-footer").appendChild(subInput);
  document.querySelector("#save").innerText = "Modifier le plan";

  //submit form and send it to locale storage
  document.querySelector("#save").addEventListener("click", () => {
    let nameIdea = document.getElementById('name').value;
    let descIdea = document.getElementById('desc').value;
    localStorage.setItem(id, JSON.stringify({
      name: nameIdea,
      desc: descIdea
    }));
  });
}

// function click listener remove idea
for (let r = 0; r < localStorage.length; r++){
  document.querySelector("#del"+r).addEventListener("click", () => {
    let id = document.querySelector("#del"+r).getAttribute('name');
    loadModal("remove", id);
  })
}

//remove idea from localStorage
function removeIdea(id) {
  id=parseInt(id);
  // Déplace les éléments suivants vers le précedent
  for (let n = id +1 ; n < localStorage.length; n++){

    let name = JSON.parse(localStorage.getItem(n))["name"];
    let desc = JSON.parse(localStorage.getItem(n))["desc"];
    let idlength = n-1;
    console.log(idlength)
    localStorage.setItem(idlength, JSON.stringify({
      "name": name,
      "desc": desc
    }));
  }
  localStorage.removeItem(localStorage.length-1);

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
