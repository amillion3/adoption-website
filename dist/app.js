(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// Writing to the DOM
const getAllCards = require('./pets');
const buildDomString = require('./dom');

let petData = [];

function loadFunction () {
  petData = JSON.parse(this.responseText).animals;
  // randomize results?
  buildDomString(petData);
}

function errorFunction () {
  console.error('Something went wrong.');
}

const initializer = () => {
  getAllCards(loadFunction, errorFunction);
};

module.exports = initializer;

},{"./dom":2,"./pets":5}],2:[function(require,module,exports){
// Writing to the dom
const createEventListeners = require('./events');

const printToDom = output => {
  document.getElementById('div-cards').innerHTML = output;
};

const buildDomString = petData => {
  let output = '';
  console.log(petData);
  for (let i = 0; i < petData.length; i++) {
    output += `
    <div class="panel panel-default text-center ${petData[i].typeOfPet}">
    <div class="panel-heading">
      <h3 class="panel-title">${petData[i].name}</h3>
    </div>
    <div class="panel-body">
      <img src="${petData[i].imageURL}">
      <h4>${petData[i].color}</h4>
      <h4>${petData[i].specialSkill}</h4>
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
const getAllCards = require('./pets');

const handlePetButtonClick = e => {
  console.log(e);
  // animalClicked = e.target;
};

const createEventListeners = () => {
  const petButtons = document.getElementsByClassName('btn-pet');
  const resetButton = document.getElementById('btn-reset');
  for (let i = 0; i < petButtons.length; i++) {
    petButtons[i].addEventListener('click', handlePetButtonClick);
  }
  resetButton.addEventListener('click', getAllCards);
};

module.exports = createEventListeners;

},{"./pets":5}],4:[function(require,module,exports){
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

},{}]},{},[4]);
