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
