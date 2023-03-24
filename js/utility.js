function switchVisibility(toShow,toHide){
    const content1 = document.getElementById(toShow);
    content1.classList.toggle('d-none');
    if (toHide != undefined) {
      const content2 = document.getElementById(toHide);
      content2.classList.toggle('d-none');
    }
};
function generateElementsByArray(elementType, content, wrapper){
  const singleElement = document.createElement(elementType);
  singleElement.innerText = content;
  wrapper.appendChild(singleElement);
}
function randomNumber(max) {
  return Math.round(Math.random() * (max - 1)) + 1;
};
function generateLi(listIngredients, listToAppend) {
let iterable = 0;
const ulDestination = document.getElementById(listToAppend);
while (iterable < listIngredients.length){
    const ingredient = document.createElement('li');
    ingredient.innerText = listIngredients[iterable];
    ulDestination.appendChild(ingredient);
    iterable++;
}};
function separe(buttons){
  for (let i = 0; i < buttons.length; i++){
      buttons[i].style.translate = 0;
    }
};
function drawCard(obj){
  const newCard = document.createElement('div');
  newCard.classList.add('card');
  const newIcon = document.createElement('i');
  newIcon.classList.add(`${obj.prefix}${obj.family}`,`${obj.prefix}${obj.name}`);
  newIcon.style.color = `${obj.color}`
  const cardTitle = document.createElement('h4');
  cardTitle.innerText = `${obj.name}`
  newCard.append(newIcon, cardTitle)
  return newCard
};
/* create a list of the object that have in common one attrivute value */
function listFromObjValue(objList,attribute, value) {
  const myArray = []
  for (let obj of  objList) {
      if (obj[attribute] == value) {
          myArray.push(obj);
      }
  }
  return myArray;
}
/* from a list of strings, generate a array with an option for string */
function generateOptions(list) {
  const optionList = []
  for (let i = 0; i < list.length; i++) {
      const newOption = document.createElement('option');
      newOption.value = list[i];
      newOption.textContent = list[i].charAt(0).toUpperCase() + list[i].slice(1);
      if (i == 0) {
          newOption.selected = true;
      }
      optionList.push(newOption);
  }
  return optionList;
}