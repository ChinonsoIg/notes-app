const fs = require('fs');
console.log('Starting notes.js');

// Export method I
/*module.exports.sub = function(x,y) {
  return x-y;
}*/

// Export method II
const add = (x, y) => {
  return x+y;
}

const sub = (x, y) => {
  return x-y;
}

const fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.txt'));
  } catch (err) {
    return [];
  }
}

const addingNote = (title, body) => {
  let notes = fetchNotes();
  let note = { 
    title,
    body
  }
  notes.push(note);
  fs.writeFileSync("notes.txt", JSON.stringify(notes));
}

const removeNote = (title) => {
  let notes = fetchNotes();

  let filteredNotes = notes.filter(note => note.title !== title
  );

  fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
}

const readNote = (title) => {
  let notes = fetchNotes();

  let filteredNotes = notes.filter(note => note.title === title
  );

  fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
}

const getAll = () => {
  let notes = fetchNotes();

  // let filteredNotes = notes.filter(note => note.title === title
  // );
  console.log(notes)

  fs.writeFileSync("notes.txt", JSON.stringify(notes));
}

module.exports = {
  addingNote,
  removeNote,
  readNote,
  getAll
}

