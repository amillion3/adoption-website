// Writing to the DOM
const getAllCards = require('./pets');

const initializer = () => {
  getAllCards(loadFunction, errorFunction);
};

module.exports = initializer;
