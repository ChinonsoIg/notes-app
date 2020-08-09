console.log('Starting app.js');

const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes');

// console.log("Process", process.argv);
// console.log("Yargs", yargs.argv);

let title = yargs.argv.title;
let body = yargs.argv.body;
let command = yargs.argv._[0];

if (command === 'add') {
  console.log('Adding note');
  notes.addingNote(title,body);
} else if (command === 'remove') {
  console.log('Removing note');
  notes.removeNote(title,body);
} else if (command === 'read') {
  console.log('Reading note');
  notes.readNote(title,body);
} else if (command === 'list') {
  console.log('Listing note');
  notes.getAll(title,body);
} else {
  console.log('Unknown command was used!!');
}




// console.log('Sub: ',notes.sub(10,4));

// fs.appendFileSync('greetings.txt', 'Hello World!');