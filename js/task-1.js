//the slug task

console.log("-----task1-----");

function slugify(title) {
  const str = title.toLowerCase();
  const splitedWords = str.split(" ");
  return splitedWords.join("-");
}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"