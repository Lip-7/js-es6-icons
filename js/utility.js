/* switch the visibility removing d-none from the first arg and giving it to the second one.
The args must be strings and must match with id of element to work with*/
function switchVisibility(toShow,toHide){
    const content1 = document.getElementById(toShow);
    content1.classList.toggle('d-none');
    if (toHide != undefined) {
      const content2 = document.getElementById(toHide);
      content2.classList.toggle('d-none');
    }
};
/* generate an element (input the type as arg), with a content in a wrapper */
function generateElementsByArray(elementType, content, wrapper){
  const singleElement = document.createElement(elementType);
  singleElement.innerText = content;
  wrapper.appendChild(singleElement);
}
/* get a random number from min to a max */
function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
};
/* generate li from a list (1st arg) and append it to a ul(2bs arg) */
function generateLi(listIngredients, listToAppend) {
let iterable = 0;
const ulDestination = document.getElementById(listToAppend);
while (iterable < listIngredients.length){
    const ingredient = document.createElement('li');
    ingredient.innerText = listIngredients[iterable];
    ulDestination.appendChild(ingredient);
    iterable++;
}};
/* reset style translate of a array of elements of html */
function separe(buttons){
  for (let i = 0; i < buttons.length; i++){
      buttons[i].style.translate = 0;
    }
};
/* draw a simple card from an obj */
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
/* create a list of the objects that have in common one attrivute value */
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
/* create a random hex color */
function randomHexColor() {
  const hexValues = '0123456789ABCDEF';
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hexValues[randomNumber(0, 15)];
  }
  return hexColor;
}
function changeColorObjList(objlist, list) {
  const colorlist = list.map(singletype => {
      const newObj = {
          type: singletype,
          color: randomHexColor()
      }
      return newObj;
  })
  objlist.forEach(element => {
      for (let el of colorlist) {
          if (element.type == el.type) {
              element.color = el.color
          }
      }
  })
  const color = randomHexColor()
}