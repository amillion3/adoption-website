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
