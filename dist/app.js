(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// Writing to the DOM
const getAllCards = require('./pets');
const buildDomString = require('./dom');
const randomizeArray = require('./randomize');

let petData = [];

function loadFunction () {
  petData = JSON.parse(this.responseText).animals;
  const petDataRandomized = randomizeArray(petData);
  // randomize results?
  buildDomString(petDataRandomized);
}

function errorFunction () {
  console.error('Something went wrong.');
}

const initializer = () => {
  getAllCards(loadFunction, errorFunction);
};

module.exports = initializer;

},{"./dom":2,"./pets":5,"./randomize":6}],2:[function(require,module,exports){
// Writing to the dom
const createEventListeners = require('./events');

const printToDom = output => {
  document.getElementById('div-cards').innerHTML = output;
};

const buildDomString = petData => {
  let output = '';
  for (let i = 0; i < petData.length; i++) {
    output += `
    <div class="panel panel-default text-center ${petData[i].typeOfPet}">
    <div class="panel-heading">
      <h3 class="panel-title">${petData[i].name}</h3>
    </div>
    <div class="panel-body">
      <img src="${petData[i].imageURL}">
      <h5>${petData[i].color}</h5>
      <h5>${petData[i].specialSkill}</h5>
    </div>
    <div class="panel-footer type-${petData[i].typeOfPet}">${petData[i].typeOfPet}</div>
  </div>
    `;
  }
  printToDom(output);
  createEventListeners();
};

module.exports = buildDomString;

},{"./events":3}],3:[function(require,module,exports){
// Attaching all event listeners

const changePetVisibility = (hide1, hide2, show) => {
  const cardsToHide = document.querySelectorAll(`${hide1}, ${hide2}`);
  const cardsToShow = document.getElementsByClassName(`${show}`);
  // hide the first two parameters
  for (let i = 0; i < cardsToHide.length; i++) {
    cardsToHide[i].classList.add('hide-card');
  }
  // show the last parameter
  for (let j = 0; j < cardsToShow.length; j++) {
    cardsToShow[j].classList.remove('hide-card');
  }
};

const handlePetButtonClick = e => {
  const animalClicked = e.target.id;
  if (animalClicked === 'btn-cats') {
    changePetVisibility('div.dog', 'div.dino', 'cat');
  } else if (animalClicked === 'btn-dogs') {
    changePetVisibility('div.cat', 'div.dino', 'dog');
  } else {
    changePetVisibility('div.cat', 'div.dog', 'dino');
  }
};

const handleResetClick = e => {
  const allCards = document.getElementsByClassName('panel');
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].classList.remove('hide-card');
  }
};

const createEventListeners = () => {
  const petButtons = document.getElementsByClassName('btn-pet');
  const resetButton = document.getElementById('btn-reset');
  for (let i = 0; i < petButtons.length; i++) {
    petButtons[i].addEventListener('click', handlePetButtonClick);
  }
  resetButton.addEventListener('click', handleResetClick);
};

module.exports = createEventListeners;

},{}],4:[function(require,module,exports){
// Entry point/start application
const data = require('./data');

data(); // start application function

},{"./data":1}],5:[function(require,module,exports){
// XHR call for pets.json

const getAllCards = (loadFunction, errorFunction) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', loadFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', '../db/pets.json');
  myRequest.send();
};

module.exports = getAllCards;

},{}],6:[function(require,module,exports){
const randomizeArray = petData => {
  // https://stackoverflow.com/a/2450976
  let currentIndex = petData.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = petData[currentIndex];
    petData[currentIndex] = petData[randomIndex];
    petData[randomIndex] = temporaryValue;
  }
  return petData;
};

module.exports = randomizeArray;

},{}]},{},[4]);
