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
    console.log('(\'' + name + '\', ' + year + ', ' + house + '),');
  }
}

function parentGen () {
  for (i = 0; i < 127; i++) {
    var name = faker.name.findName();
    parents.push(name);
  }
}

function relGen () {
  for (i = 1; i <= 280; i++) {
    var studentId = i;
    var parentId  = getRandomIntInclusive(1, 127);
    console.log('(' + studentId + ', ' + parentId + '),');
  }
}

relGen();
