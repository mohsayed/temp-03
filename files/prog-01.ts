// Define the shape of a note
interface Note {
  title: string;
  content: string;
  isPinned: boolean;
}

// Type the array using the Note interface
const notes: Note[] = [
  { title: 'Meeting Notes', content: 'Discuss project roadmap', isPinned: true },
  { title: 'Grocery List', content: 'Buy milk, eggs, bread', isPinned: false },
  { title: 'Workout Plan', content: 'Push day: Bench, Shoulder Press', isPinned: false },
  { title: 'Recipe Ideas', content: 'Pasta, Salad, Tacos', isPinned: false },
];

console.log(notes);

const noteTitles = notes.map((note) => note.title);
console.log(noteTitles);

const pinnedNotes = notes.filter((note) => note.isPinned);
console.log(pinnedNotes); 

const pinnedNoteTitles = notes
  .filter((note) => note.isPinned)
  .map((note) => note.title);
console.log(pinnedNoteTitles); // [ "Meeting Notes" ]