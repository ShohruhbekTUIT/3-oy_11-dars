var elForm = document.querySelector(".site-form");
var elInput = document.querySelector(".site-input");
var elBtn = document.querySelector(".site-btn");
var elList = document.querySelector(".site-list");

var array = [];

elForm.addEventListener("submit" , function(evt){
  evt.preventDefault();
  
  var elInputVal = elInput.value;
  
  let word = {
    id: array.length + 1,
    title: elInputVal,
  };
  array.push(word);
  elList.innerHTML = "";
  for (let item of array) {
    elList.classList.remove("site-list");
    let elLi = document.createElement("li");

    elLi.textContent = item.id + ": " + item.title;
    elList.appendChild(elLi);
  }
  elInput.value = "";
});