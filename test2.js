// function* generator(array) {
//   for (let i = 0; i < array.length; i++) {
//     yield array[i];
//   }
// }
// const generatorObject = generator([1, 4, 6]);
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());

function* generateId() {
  let id = 1;

  while (true) {
    const increment = yield id;
    if (increment != null) {
      id += increment;
    } else {
      id++;
    }
  }
}

const generatorObject = generateId();
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next(5));
console.log(generatorObject.next());
