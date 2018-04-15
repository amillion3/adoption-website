// Writing to the dom
const createEventListeners = require('./events');

const printToDom = output => {
  document.getElementById('div-cards').innerHTML = output;
};

const buildDomString = petData => {
  let output = '';
  for (let i = 0; i < petData.length; i++) {
    output += `
    <div class="col-sm-4">
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
    </div>
    `;
  }
  printToDom(output);
  createEventListeners();
};

module.exports = buildDomString;
