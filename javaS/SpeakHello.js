// This is an IIFE
(function (window) {

	var speakWord = "Hello";
	var helloSpeaker = {};
	
	// store function as property of helloSpeaker object
	helloSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	}
    
    // this line exposes the helloSpeaker object to the global window "namespace"
	window.helloSpeaker = helloSpeaker;

} ) (window);