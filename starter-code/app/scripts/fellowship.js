console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');

// Part 1


function makeMiddleEarth() {
var middleEarth = document.createElement("section");
// console.log(createSection);
for(var i = 0, len = lands.length; i < len; i++) {
var addLand = document.createElement("article");
  addLand.innerHTML = "<h1>" + lands[i] + "</h1>";
// console.log(addLand);
  middleEarth.appendChild(addLand);
 }
body.appendChild(middleEarth);
}

makeMiddleEarth();
// console.log(makeMiddleEarth);

///////////////////////////////////////////////////////

// DRAFT
// var lands = ['The Shire', 'Rivendell', 'Mordor'];

// var makeMiddleEarth = function () {
// var addMEarth = document.createElement("section");
// addMEarth.setAttribute("id","middle-earth");
// var addLand = document.createElement("article");
// addLand.innerhtml = lands
// addLand.setAttribute("ul", "li");
// }

// makeMiddleEarth();
// console.log(addLand);

///////////////////////////////////////////////////////

// DRAFT
// var lands = ['The Shire', 'Rivendell', 'Mordor'];

// var makeMiddleEarth = function () {
// var addMEarth = document.createElement("section");
// addMEarth.setAttribute("id","middle-earth");
// addMEarth.appendChild("article");
// var addArticle = document.createElement("article");
// lands.body.children;
// addArticle.innerhtml = lands
// console.log(addMEarth, addArticle);
// }

// makeMiddleEarth();


///////////////////////////////////////////////////////

// Part 2

var theShire = body.querySelectorAll("article")[0];
// console.log(theShire);
var rivendell = body.querySelectorAll("article")[1];
// console.log(rivendell);
var mordor = body.querySelectorAll("article")[3];
// console.log(mordor);

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  var listHobbits = document.createElement("ul");
  // console.log(listHobbits);
  // give each hobbit a class of hobbit
  for(var i = 0, len = hobbits.length; i < len; i++) {
    var hobbit = document.createElement("li");
    // console.log(hobbit);
    hobbit.className = "hobbit";
    hobbit.innerText = hobbit[i];
    listHobbits.appendChild(hobbit);
  // shireHobbits.innerHTML = "<li>" + hobbits[i] + "</li>";
  // shireHobbits.appendChild();
}
theShire.appendChild(listHobbits);
}

makeHobbits();

// Part 3
// var frodo = body.querySelectorAll("ul")("li")[0];
var frodo = body.querySelectorAll ("li")[0];


function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var theRing = document.createElement("div");
// var test = theRing.createElement("div", "class", "magic-imbued-jewelry");
// console.log("test");
  theRing.setAttribute('id', 'the-ring');
  // give the div a class of 'magic-imbued-jewelry'
  theRing.setAttribute("class", "magic-imbued-jewelry");
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theRing.addEventListener("click", "nazgulScreech");
  // add the ring as a child of Frodo
  console.log(theRing);
  frodo.appendChild(theRing);
}

keepItSecretKeepItSafe();
console.log(keepItSecretKeepItSafe);


// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
