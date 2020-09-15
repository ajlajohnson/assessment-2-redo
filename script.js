"use strict";

//============================================================

//1
const countDown = () => {
  for (let i = 5; i >= 1; i--) console.log(i);
};

countDown();

//============================================================

//2
const countUp = (start, end) => {
  for (let i = start; i <= end; i++) console.log(i);
};

countUp(2, 10);

//============================================================

//3
const isLong = (word) => {
  return word.length > 10 ? true : false;
};

console.log("ajla");

//============================================================

//4
const whatWaterState = (temperature) => {
  if (temperature <= 32) {
    console.log(`solid`);
  } else if (temperature > 32 && temperature < 212) {
    console.log(`liquid`);
  } else if (temperature >= 212) {
    console.log(`gas`);
  }
};

whatWaterState(230);

//============================================================

//5
const sandwiches = [
  {
    type: "italian",
    calories: 1000,
    cost: 7.69,
    isVegetarian: false,
  },
  {
    type: "veggie",
    calories: 500,
    cost: 5.5,
    isVegetarian: true,
  },
  {
    type: "meatball",
    calories: 900,
    cost: 8.25,
    isVegetarian: false,
  },
  {
    type: "jackfruit",
    calories: 650,
    cost: 8.5,
    isVegetarian: true,
  },
];

console.log(sandwiches);

//============================================================

//6
const makeSandwich = (sandwichArray, type, calories, cost, isVegetarian) => {
  const newSandwich = {
    type: type,
    calories: calories,
    cost: cost,
    isVegetarian: isVegetarian,
  };
  sandwiches.unshift(newSandwich);
};

makeSandwich(sandwiches, "chicken", 700, 7.5, false); //I added all the details of the new object
console.log(sandwiches); //i am logging the new object to the object array

//============================================================

//7 --------ASK FOR CLARITY ON THIS ONE
const findVegetarianSandwich = (sandwichArray) => {
  let foundVeggieSandwich = sandwichArray.find((sandwich) => {
    //
    return sandwich.isVegetarian === true;
  });
  return foundVeggieSandwich;
};

console.log(findVegetarianSandwich(sandwiches));

//============================================================

//8 --------ASK FOR CLARITY ON THIS ONE
const findCheapestSandwich = (sandwichArray) => {
  let cheapestSandwich = sandwichArray[0]; //using the first sandwich price to compare the price of all the rest of the sandwiches in the object array
  sandwichArray.forEach((sandwich) => {
    if (sandwich.cost < cheapestSandwich.cost) {
      //**literally** if sandwich cost is less than current cheapest compared sandwich that we used, then that sandwich is the one we're looking for
      cheapestSandwich = sandwich;
    }
  });
  return cheapestSandwich;
};

console.log(findCheapestSandwich(sandwiches));
