const people = ["Mortadelo", "Filemon", "Ofelia", "Bacterio"];
let counter = 0;
console.log(counter);
for (let idx of people) {
    //counter++;
    console.log(people[counter]);
    counter = counter+1;
}
console.log(counter);
console.log("¿Pero no tendría que ser 3? 0, 1, 2 y 3...")