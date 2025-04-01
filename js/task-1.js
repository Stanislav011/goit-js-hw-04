// function makeTransaction(quantity, pricePerDroid) {
//     const totalPrice = quantity * pricePerDroid;
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }
// console.log(makeTransaction(5, 3000)); 
// console.log(makeTransaction(3, 1000)); 
// console.log(makeTransaction(10, 500)); 


// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//     const totalPrice = quantity * pricePerDroid;
  
//     if (totalPrice > customerCredits) {
//       return "Insufficient funds!";
//     } else {
//       return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//     }
//   }
  
//   console.log(makeTransaction(5, 3000, 23000));
//   console.log(makeTransaction(3, 1000, 15000));
//   console.log(makeTransaction(10, 5000, 8000)); 
//   console.log(makeTransaction(8, 2000, 10000)); 
//   console.log(makeTransaction(10, 500, 5000)); 
  



// function slugify(title) {

//   return title.toLowerCase().split(' ').join('-');
// }


// console.log(slugify("Arrays for beginners"));  
// console.log(slugify("English for developer")); 
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));


const defaultSettings = {
  theme: "dark",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 5,
  timePerQuestion: 20
};

const overrideSettings = {
  theme: "light",
  public: false,
  withPassword: true,
  minNumberOfQuestions: 10,
  timePerQuestion: 30
};

const finalSettings = { ...defaultSettings, ...overrideSettings };

console.log(finalSettings);


