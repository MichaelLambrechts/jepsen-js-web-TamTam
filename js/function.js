let modalToLoad = " ";

for (let num = 0; num <= localStorage.length; num++) {
  let idealist = document.createElement("ul");
  idealist.setAttribute("id", "idea");
  document.querySelector("#list").appendChild(idealist);

  let idlist = document.createElement("li");
  idlist.setAttribute("id", "id" + num);
  document.querySelector("#idea").appendChild(idlist);

  let edlist = document.createElement("li");
  edlist.setAttribute("id", "edit" + num);
  document.querySelector("#idea").appendChild(edlist);

  let delist = document.createElement("li");
  delist.setAttribute("id", "del" + num);
  document.querySelector("#idea").appendChild(delist);
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
  console.log(element);
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  //clear the head of the modal
  var element2 = document.querySelector(".modal-header");
  console.log(element2);
  while (element2.firstChild) {
    element2.removeChild(element2.firstChild);
  }
  //clear the footer the 
  var element3 = document.querySelector(".modal-footer");
  console.log(element3);
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
    localStorage.setItem(idlength + 1, new Idea(nameIdea, descIdea));
  });
}

//get the idea based on the id given in parameters
function getIdea(id) {
  id = localStorage.getItem(id);
}

//allow the user to display the idea
function displayIdea(id) {
  let name = localStorage.getItem(name).getName;
  let desc = localStorage.getItem(desc).getDesc;

  let nameInput = document.createElement("p");
  nameInput.setAttribute("id", "name");
  document.querySelector("#modal-body").appendChild(name);
  document.querySelector("#name").innerText = name;

  let descInput = document.createElement("p");
  descInput.setAttribute("id", "desc");
  document.querySelector("#modal-body").appendChild(desc);
  document.querySelector("#desc").innerText = desc;
}

//allow the user to edit an idea
function editIdea(id) {
  let name = localStorage.getItem(name).getName;
  let desc = localStorage.getItem(desc).getDesc;

  //create a element form in the html
  let formEdit = document.createElement("form");
  formEdit.setAttribute("id", "edit");

  document.querySelector("#modal-body").appendChild(formEdit);

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
function loadModal(modalToLoad) {
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