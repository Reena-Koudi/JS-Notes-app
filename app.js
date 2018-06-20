console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);
console.log('Process', process.argv);
console.log('Yargs', argv);

if(command === 'add') {
  console.log('Addind new note');
} else if (command === 'list'){
  console.log('Listing all notes');
} else if (command === 'read'){
  console.log('Reading note')
} else if (command === 'remove'){
  console.log('Removing note')
}
else {
  console.log('Command not recognised');
}
