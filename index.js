// Remove the 'main#main' node
let main = document.querySelector('main#main');
main.remove();

// Create a new 'h1' node, assign it to the 'newHeader' variable, and give it an id of 'victory'
let newHeader = document.createElement('h1');
newHeader.id = 'victory';

// Set the text inside the 'newHeader' node
newHeader.textContent = 'RYAN-MONTGOMERY is the champion';

// Append the 'newHeader' node to the body of the document
document.body.appendChild(newHeader);
