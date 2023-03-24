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