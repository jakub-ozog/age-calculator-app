// const calculateTime = () => {
//   const day = parseInt(document.querySelector("#dayInput").value);
//   const month = parseInt(document.querySelector("#monthInput").value);
//   const year = parseInt(document.querySelector("#yearInput").value);

//   const inputDate = new Date(year, month, day);
//   const currentDate = new Date();

//   const timeDifference = Math.abs(currentDate - inputDate);
//   const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//   const monthDifference = Math.floor(dayDifference / 30.44);
//   const yearDifference = Math.floor(dayDifference / 365.25);

//   document.querySelector(".result__yearDiff").innerHTML = `
//   ${yearDifference}
//   `;

//   document.querySelector(".result__monthDiff").innerHTML = `
//   ${monthDifference}
//   `;

//   document.querySelector(".result__dayDiff").innerHTML = `
//   ${dayDifference}
//   `;
// };

// document.querySelector(".submitBtn").addEventListener("click", calculateTime);

// const age = () => {

//   const d1 = document.querySelector('#day').value
//   const m1 = document.querySelector('#month').value
//   const y1 = document.querySelector('#year').value

//   const date = new Date();
//   const d2 = date.getDate();
//   const m2 = date.getMonth() + 1;
//   const y2 = date.getFullYear();

// }


document.querySelector(".submitBtn").addEventListener("click", () => {
const birthDay = parseInt(document.querySelector("#dayInput").value);
const birthMonth = parseInt(document.querySelector("#monthInput").value) - 1;
const birthYear = parseInt(document.querySelector("#yearInput").value);

const birthDate = new Date(birthYear, birthMonth, birthDay);
const currentDate = new Date();

const ageInMilliseconds = currentDate - birthDate;
const ageInSeconds = ageInMilliseconds / 1000;
const ageInMinutes = ageInSeconds / 60;
const ageInHours = ageInMinutes / 60;
const ageInDays = ageInHours / 24;

const years = Math.floor(ageInDays / 365);
const remainingDays = ageInDays % 365;
const months = Math.floor(remainingDays / 30); // Przybliżona liczba miesięcy
const days = Math.floor(remainingDays % 30); // Przybliżona liczba dni

document.querySelector(".result__dateGeneral").innerHTML = `
    Age: ${years} years, ${months} months, ${days} days
  `;
});

