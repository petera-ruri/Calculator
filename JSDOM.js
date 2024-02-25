const { JSDOM } = require('jsdom');

// Create a new DOM environment
const dom = new JSDOM('<!DOCTYPE html><html><body><div id="display">Hello, world!</div></body></html>');

// Extract the document object from the DOM environment
const document = dom.window.document;

// Now you can access the document object
const display = document.getElementById('display');

// Example usage: change the text content of the element
display.textContent = "New content";

// Example usage: change the background color
display.style.backgroundColor = "blue";

// Output the HTML content of the document
console.log(document.documentElement.outerHTML);
