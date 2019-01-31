//initialisation de la modale

let modal = document.querySelector(".modal");
let trigger = document.querySelector(".trigger");
let closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

let ideas= {};
//show the form in the modal so we can add a new Idea

function addIdea() {

  //create a element form in the html
  let formAdd = document.createElement("form");
  formAdd.setAttribute("id", "add");
  document.querySelector("#modal-content").appendChild(formAdd);

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
  subInput.setAttribute("type", "submit");
  subInput.setAttribute("id", "submit");
  document.querySelector("#add").appendChild(subInput);

  //submit form and send it to locale storage
  document.querySelector("#submit").addEventListener("click", () => {
    let nameIdea = document.getElementById('name').value;
    let descIdea = document.getElementById('desc').value;
    
    let id = parseInt(localStorage.length);
    localStorage.setItem(id + 1, new Idea(nameIdea, descIdea));
  })
}

function displayIdea() {
  let name = localStorage.getItem(name);
  let desc = localStorage.getItem(desc);

  let nameInput = document.createElement("p");
  nameInput.setAttribute("id", "name");
  document.querySelector("#modal-content").appendChild(name);
  document.querySelector("#name").innerText =name;

  let descInput = document.createElement("p");
  descInput.setAttribute("id", "desc");
  document.querySelector("#modal-content").appendChild(desc);
  document.querySelector("#desc").innerText =desc;
}

function editIdea(){
  //create a element form in the html
  let formEdit = document.createElement("form");
  formEdit.setAttribute("id", "edit");
  document.querySelector("#modal-content").appendChild(formEdit);

  //create a input name in the html
  let nameInput = document.createElement("input");
  nameInput.setAttribute("value", "name");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  document.querySelector("#edit").appendChild(nameInput);

  //create a input description in the html
  let descInput = document.createElement("input");
  descInput.setAttribute("value", "desc");
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
    let id = parseInt(localStorage.length);
    localStorage.setItem(id + 1, nameIdea);
    localStorage.setItem(id + 1, descIdea);
  })
}

function removeIdea(){
  let id = localStorage.getItem(id)
  localStorage.removeItem(id)
}

switch (modal) {
  case display:
    displayIdea();
    break;
  case add:
    addIdea();
    break;
  case edit:
    editIdea();
    break;
  case remove:
  removeIdea();
    break;

}
