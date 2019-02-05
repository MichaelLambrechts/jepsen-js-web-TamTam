const showdown = require('showdown');
const converter = new showdown.Converter();

for (let num = 0; num < localStorage.length; num++) {
    let idealist = document.createElement("ul");
    idealist.setAttribute("id", "idea" + num);
    document.querySelector("#list").appendChild(idealist);

    let idlist = document.createElement("li");
    idlist.setAttribute("id", "id" + num);
    idlist.setAttribute("name", num);
    idlist.setAttribute("data-toggle", "modal");
    idlist.setAttribute("data-target", "#exampleModal");
    idlist.setAttribute("class", "display");
    document.querySelector("#idea" + num).appendChild(idlist);
    idlist.innerText = JSON.parse(localStorage.getItem(num))["name"]

    let edlist = document.createElement("li");
    edlist.setAttribute("id", "edit" + num);
    edlist.setAttribute("name", num);
    edlist.setAttribute("data-toggle", "modal");
    edlist.setAttribute("data-target", "#exampleModal");
    edlist.setAttribute("class", "edit");
    document.querySelector("#idea" + num).appendChild(edlist);

    let edcont = document.createElement("i");
    edcont.setAttribute("id", "editcont" + num);
    edcont.setAttribute("name", num);
    edcont.setAttribute("class", "fas fa-edit");
    document.querySelector("#edit" + num).appendChild(edcont);

    let delist = document.createElement("li");
    delist.setAttribute("id", "del" + num);
    delist.setAttribute("name", num);
    delist.setAttribute("class", "delete");
    document.querySelector("#idea" + num).appendChild(delist);

    let decont = document.createElement("i");
    decont.setAttribute("id", "delcont" + num);
    decont.setAttribute("name", num);
    decont.setAttribute("class", "fas fa-trash-alt");
    document.querySelector("#del" + num).appendChild(decont);
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
    descInput.setAttribute("type", "textarea");
    descInput.setAttribute("id", "desc");
    document.querySelector("#add").appendChild(descInput);

    //create a button submit
    let subInput = document.createElement("button");
    subInput.setAttribute("value", "submit");
    subInput.setAttribute("class", "btn btn-primary");
    subInput.setAttribute("data-dismiss", "modal");
    subInput.setAttribute("type", "submit");
    subInput.setAttribute("id", "save");
    document.querySelector(".modal-footer").appendChild(subInput);
    document.querySelector("#save").innerText = "Creer le plan";


    //submit form and send it to locale storage
    document.querySelector("#save").addEventListener("click", () => {
        let nameIdea = document.getElementById('name').value;
        let descIdea = convertToHtml(document.getElementById('desc').value);

        let idlength = parseInt(localStorage.length);
        localStorage.setItem(idlength, JSON.stringify({
            name: nameIdea,
            desc: descIdea
        }));
        refresh();
    });
}

// click listener display
for (let n = 0; n < localStorage.length; n++) {
    document.querySelector("#id" + n).addEventListener("click", () => {
        let id = document.querySelector("#id" + n).getAttribute('name');
        loadModal("display", id);
    })
}

//allow the user to display the idea
function displayIdea(id) {
    clearModal();
    let comments = JSON.parse(localStorage.getItem(id))["comments"];
    //Create the array for the comments
    if (comments == undefined)
        comments = [];

    let nameInput = document.createElement("p");
    nameInput.setAttribute("id", "name");
    document.querySelector(".modal-body").appendChild(nameInput);
    document.querySelector("#name").innerText = JSON.parse(localStorage.getItem(id))["name"]

    let descInput = document.createElement("p");
    descInput.setAttribute("id", "desc");
    document.querySelector(".modal-body").appendChild(descInput);
    document.querySelector("#desc").innerHTML = JSON.parse(localStorage.getItem(id))["desc"]

    //List of comments
    let commentlist = document.createElement("ul");
    commentlist.setAttribute("id", "commentList");
    document.querySelector(".modal-body").appendChild(commentlist);

    for (let comment = 0; comment < comments.length; comment++) {
        let commentcont = document.createElement("li");
        commentcont.setAttribute("id", "comment" + comment);
        document.querySelector("#commentList").appendChild(commentcont);
        commentcont.innerText = comments[comment];
    }

    //create a input comment in the modal
    let commentInput = document.createElement("input");
    commentInput.setAttribute("value", "comment");
    commentInput.setAttribute("type", "textarea");
    commentInput.setAttribute("id", "comment");
    document.querySelector(".modal-body").appendChild(commentInput);

    //create a button submit
    let subInput = document.createElement("button");
    subInput.setAttribute("data-dismiss", "modal");
    subInput.setAttribute("value", "submit");
    subInput.setAttribute("class", "btn btn-primary");
    subInput.setAttribute("type", "submit");
    subInput.setAttribute("id", "save");
    document.querySelector(".modal-footer").appendChild(subInput);
    document.querySelector("#save").innerText = "Envoyer le commentaire";

    //Send the comments to the database
    document.querySelector("#save").addEventListener("click", () => {
        comments.push(document.querySelector("#comment").value);
        let name = JSON.parse(localStorage.getItem(id))["name"];
        let desc = JSON.parse(localStorage.getItem(id))["desc"];
        localStorage.setItem(id, JSON.stringify({
            name: name,
            desc: desc,
            comments: comments
        })
        )
    });
}

// click display 
document.querySelector(".display").addEventListener("click", () => {
    let id = document.querySelector(".display").getAttribute('name');
    loadModal("display", id);
})

// click edit listener
for (let f = 0; f < localStorage.length; f++) {
    document.querySelector("#edit" + f).addEventListener("click", () => {
        let id = document.querySelector("#edit" + f).getAttribute('name');
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
    descInput.setAttribute("value", convertToMd(desc));
    descInput.setAttribute("type", "textarea");
    descInput.setAttribute("id", "desc");
    document.querySelector("#edit").appendChild(descInput);

    //create a button submit
    let subInput = document.createElement("button");
    subInput.setAttribute("value", "submit");
    subInput.setAttribute("class", "btn btn-primary");
    subInput.setAttribute("data-dismiss", "modal");
    subInput.setAttribute("type", "submit");
    subInput.setAttribute("id", "save");
    document.querySelector(".modal-footer").appendChild(subInput);
    document.querySelector("#save").innerText = "Modifier le plan";

    //submit form and send it to locale storage
    document.querySelector("#save").addEventListener("click", () => {
        let nameIdea = document.getElementById('name').value;
        let descIdea = convertToHtml(document.getElementById('desc').value);
        localStorage.setItem(id, JSON.stringify({
            name: nameIdea,
            desc: descIdea
        }));
        refresh();
    });
}

// function click listener remove idea
for (let r = 0; r < localStorage.length; r++) {
    document.querySelector("#del" + r).addEventListener("click", () => {
        let id = document.querySelector("#del" + r).getAttribute('name');
        loadModal("remove", id);
    })
}

//remove idea from localStorage
function removeIdea(id) {
    id = parseInt(id);
    // Move the next elements to the previous one
    for (let n = id + 1; n < localStorage.length; n++) {

        let name = JSON.parse(localStorage.getItem(n))["name"];
        let desc = JSON.parse(localStorage.getItem(n))["desc"];
        let idlength = n - 1;
        localStorage.setItem(idlength, JSON.stringify({
            "name": name,
            "desc": desc
        }));
    }
    localStorage.removeItem(localStorage.length - 1);
    refresh();

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

//@þaram = string in markdown toConvert  @return = markdown converted in html
function convertToHtml(toConvert) {
    let toRet = converter.makeHtml(toConvert);
    return toRet;
}

//@þaram = string in html toConvert  @return = html converted in markdown
function convertToMd(toConvert) {
    let toRet = converter.makeMarkdown(toConvert);
    return toRet;
}

//refresh the page
async function refresh() {
    await location.reload(true);
}