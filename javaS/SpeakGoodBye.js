// This is an IIFE
(function (window) {

	var speakWord = "Good Bye";
	var byeSpeaker = {};
    
    // store function as property of byeSpeaker object
	byeSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
    }
	
	// this line exposes the byeSpeaker object to the global window "namespace"
	window.byeSpeaker = byeSpeaker;

})(window);
