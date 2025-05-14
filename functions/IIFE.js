/* Immediately Invoked Function Expression */

var x = 10;
(function iife(){

   console.log("First call.")
})();

(() => console.log("Second call."))()
