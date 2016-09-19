// Store the element to be removed in a variable.
var element = document.getElementsByTageName('li')[0];

// Find the element which contains the element to be removed.
  var container = element.parentNode;

// Remove the element.
container.removeChild(element);