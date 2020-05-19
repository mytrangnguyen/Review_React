var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

//Force user
var jediPersonnel = personnel.filter(function (person) {
  return person.isForceUser;
});

var jediPersonnel1 = personnel.filter((person) => person.isForceUser);

// console.log(jediPersonnel)
// console.log(jediPersonnel1)

// total score pilot score and shooting score of force user
var jediScore1 = jediPersonnel.map(function (score) {
  return score.pilotingScore + score.shootingScore;
});
console.log(jediScore1);

var jediScore2 = jediPersonnel1.map(
  (score) => score.shootingScore + score.pilotingScore
);
console.log("arrow function " + jediScore2);

// reduce to get the total score
var totalScore1 = jediScore2.reduce(function (acc, score) {
  return acc + score;
}, 0);
console.log(totalScore1);

var totalScore2 = jediScore2.reduce((acc, score) => acc + score, 0);
console.log(totalScore2);

// sumary filter, sum, reduce
var totalScoreForceUser = personnel
  .filter((person) => person.isForceUser)
  .map((score) => score.pilotingScore + score.shootingScore)
  .reduce((acc, score) => acc + score, 0);
console.log(totalScoreForceUser);

// Hoisting in javascript
console.log("example 1 " + a);
var a;
a = "hoisting in JS";
// => hoisting sẽ tự động chuyển phần khai báo lên đầu tiên của JS
a = "hoisting in JS";
console.log("example 2 " + a);
var a;

// call in javascript

var person1 = {firstName: "Trang", lastName: "Nguyen"};
var person2 = {firstName: "Thanh", lastName: "Pham"};
function sayHelloCall(greeting1, greeting2) {
  console.log(greeting1 + " " + this.firstName + " " + this.lastName + " " +greeting2);
}

sayHelloCall.call(person1,"Welcom come "," to my house");

// apply in javascript

var person3 = {firstName: "Han", lastName: "Nguyen"};
var person4 = {firstName: "Linh", lastName: "Pham"};
function sayHelloApply(greeting3, greeting4) {
  console.log(greeting3 + " " + this.firstName + " " + this.lastName + " " +greeting4);
}

sayHelloApply.apply(person3,["Welcom come "," to my house"]);

// Bind in javascript
var person5 = {firstName: "Ngoc", lastName: "Nguyen"};
var person6 = {firstName: "Huy", lastName: "Pham"};
function sayHelloBind(greeting5, greeting6) {
  console.log(greeting5 + " " + this.firstName + " " + this.lastName + " " +greeting6);
}

sayHelloBind.bind(person5,"Welcom come "," to my house"); // không thực hiện được
var sayHelloHuy = sayHelloBind.bind(person6,"Welcom come "," to my house");
sayHelloHuy();


