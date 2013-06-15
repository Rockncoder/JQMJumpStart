// JavaScript Objects

var myObject = {
  key: "value",
  "The key can be anything in a string": "this is the value",
  "Really anything#@!": 123,
  anArray: [1, 2, 3, 4],
  anObject: {innerKey: 1},
  aFunction: function(name){
    alert("Hi " + name);
  }
};

function bob() {
  // Dot notation vs. Bracket notation
  var myKey1 = myObject.key;
  var myKey2 = myObject["key"];

  alert(myKey1 + " = " + myKey2);

  //obviously somethings can't be access with Dot notation
  var myThing = myObject["The key can be anything in a string"];

  alert(myThing);

  alert(myObject.aFunction("Troy"));
}