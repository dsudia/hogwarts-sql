var faker = require('faker');

var parents = [];
var students = [];

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function studentGen () {
  for (i = 0; i < 280; i++) {
    var name = faker.name.findName();
    var year = getRandomIntInclusive(1, 7);
    var house = getRandomIntInclusive(1, 4);
    students.push(name + ", " + year + ", " + house);
  }
}

function parentGen () {
  for (i = 0; i < 127; i++) {
    var name = faker.name.findName();
    parents.push('(' + name + ')');
  }
}

parentGen();
studentGen();
console.log(parents);
