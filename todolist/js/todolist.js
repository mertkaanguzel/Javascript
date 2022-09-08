'use strict';

let list = document.getElementById('list');
let addButton = document.getElementById('liveToastBtn');

addButton.addEventListener('click', addNewElement);
window.addEventListener("load", load);


function load() {
    let memory = JSON.parse(localStorage.getItem("task"));
    if (memory) {
        list.innerHTML = memory;

        let listElemens = document.getElementsByClassName('list-item');
        addEvent(listElemens, markListItem);

        let closeButtons = document.getElementsByClassName('close');
        addEvent(closeButtons, removeListItem)

    }
}

function addEvent(items, callback, type = "click") {
    for(let item of items) {
        item.addEventListener(type, callback);
    }
}
//Marks or unmarks list element
function markListItem(event) {
    event.target.classList.toggle('checked');
    let backgroundColor = event.target.classList.contains('checked') ? 'rgb(0, 255, 0)' : 'rgb(255, 255, 255)';
    event.target.style.backgroundColor = backgroundColor;
    saveList(list);
}

function removeListItem(event) {
    event.target.parentElement.remove();
    saveList(list);
}

//Adds list element on page if input not null
function addNewElement(event) {
    let inputValue = document.getElementById('task').value;
    if (inputValue.trim().length > 0) {
        const listItem = createListItem(inputValue);
        list.appendChild(listItem);
        inputValue = '';
        $('#successToast').toast('show')
    }
    else {
        $('#errorToast').toast('show')
    }

    saveList(list);
}

function createListItem(inputValue) {
    const listElement = document.createElement("li");
    listElement.textContent = inputValue;
    listElement.classList.add("list-item");

    const closeButton = createCloseButton();
    listElement.append(closeButton);

    listElement.addEventListener("click", markListItem);
    listElement.firstElementChild.addEventListener("click", removeListItem);

    return listElement;
}

function createCloseButton() {
    const closeButton = document.createElement("span");
    closeButton.classList.add("close");
    closeButton.textContent = "\u00D7";
    return closeButton;
}

//Saves list to Local Storage
function saveList(list) {
    localStorage.setItem("task", JSON.stringify(list.innerHTML));
}