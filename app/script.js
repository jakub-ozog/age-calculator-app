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

  document.querySelector(".result__yearDiff").innerHTML = `${years}`;

  document.querySelector(".result__monthDiff").innerHTML = `${months}`;

  document.querySelector(".result__dayDiff").innerHTML = `${days} `;
});
