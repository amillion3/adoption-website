// Writing to the DOM
const getAllCards = require('./pets');
const buildDomString = require('./dom');

let petData = [];

function loadFunction () {
  petData = JSON.parse(this.responseText).animals;
  buildDomString(petData);
}

function errorFunction () {
  console.error('Something went wrong.');
}

const initializer = () => {
  getAllCards(loadFunction, errorFunction);
};

module.exports = initializer;
