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
