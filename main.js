"use strict"

// targeting elements in the html by their class and assigning them to new variables
const inputBox = document.querySelector(".input-box");
const tdlBtn = document.querySelector(".tdl-btn");
const todoList = document.querySelector(".tdl");


// function for the 'add item' button event
tdlBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log("buton works fine");
  const itemContainer = document.createElement('div'); // creating a new div element as a child element to a parent element in the html
  itemContainer.classList.add('item-container'); // giving the newly created div element a class 
  todoList.appendChild(itemContainer); // appending or linking the newly created div element to its parent element in the html
  const itemText = document.createElement('p'); // creating a new paragraph element to hold and display content 
  itemText.classList.add('item-text'); // giving the newly created paragraph element a class
  itemContainer.appendChild(itemText); // appending or linking the newly created paragraph element to the newly created div element, making the p element the child
  itemText.innerText = inputBox.value; // collecting the user input value and sending it to the paragraph element
  
  
  inputBox.value = ''; // makes it possible clear the input box after an item has been added
  
  
  //create check box button
const checkbutton = document.createElement('button');
checkbutton.innerHTML = "<i class='fa-solid fa-check'></i>";
checkbutton.classList.add('check-button');
itemContainer.appendChild(checkbutton);

// create trash button
const trashbutton = document.createElement('button');
trashbutton.innerHTML = "<i class='fa-solid fa-trash'></i>";
trashbutton.classList.add('trash-button');
itemContainer.appendChild(trashbutton);
inputBox.value= '';
  
  
})

todoList.addEventListener('click', (e) => {
    const item = e.target;
    if(item.classList[0] === 'check-button') {
        const todolist = item.parentElement;
        todolist.classList.toggle('checklist');
    }
    if(item.classList[0] === 'trash-button') {
        const todolist = item.parentElement;
        todolist.remove();
    }
})