
import {notes} from './prog-01.ts'




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

