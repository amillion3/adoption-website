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
