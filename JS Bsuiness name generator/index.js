let rand = Math.random();
let first, second, third;

//logic is we have 100% chance from each category and we dive it into 3 equal parts so that every word can occur with in equal precision range.

/*Lets generate first word*/

if (rand < 0.33) {
    first = "Crazy";
}
else if (rand < 0.66 && rand >= 0.33) {
    first = "Amazing";
}
else {
    first = "Fire";
}

/*Lets generate second word*/

rand = Math.random();

if (rand < 0.33) {
    second = "Engine";
}
else if (rand < 0.66 && rand >= 0.33) {
    second = "Foods";
}
else {
    second = "Garments";
}

/*Lets generate third word*/

rand = Math.random();
if (rand < 0.33) {
    third = "Bros";
}
else if (rand < 0.66 && rand >= 0.33) {
    third = "Limited";
}
else {
    third = "Hub";
}

console.log(`${first} ${second} ${third}`)