// Take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program says "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program says "Good Bye". So, the final output
// on the console looks like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

// This is an IIFE (immediatly invoked function expression)
(function () { 
  
  // names is an array, but under the hood it is an object that uses indices as property names!!
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // loop over the indices of names array
  for (var idx in names) {
    
    var firstLetter = names[idx].toLowerCase().charAt(0)

    if (firstLetter == "j") {
      byeSpeaker.speak(names[idx])

    } else {
      helloSpeaker.speak(names[idx])
    }
  } 

})();