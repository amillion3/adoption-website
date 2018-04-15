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
