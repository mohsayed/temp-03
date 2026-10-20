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




const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum); // 15

// Let's say we want to count the total number of characters in all the notes. We can use the `reduce()` method to do this:

    const totalCharacters = notes.reduce
    (
        (total, note) => total + note.content.length,0
    );

    console.log(totalCharacters); // 94


// forEach()
//The `forEach()` method executes a provided function once for each array element. It is similar to the `map()` method,
// but it does not return a new array. It is useful when you want to perform an action on each element in the array.

notes.forEach((note) => console.log(note.title));

