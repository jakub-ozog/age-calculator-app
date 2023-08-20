"use strict";

document.querySelector(".submitBtn").addEventListener("click", function () {
  var birthDay = parseInt(document.querySelector("#dayInput").value);
  var birthMonth = parseInt(document.querySelector("#monthInput").value) - 1;
  var birthYear = parseInt(document.querySelector("#yearInput").value);
  var birthDate = new Date(birthYear, birthMonth, birthDay);
  var currentDate = new Date();
  var ageInMilliseconds = currentDate - birthDate;
  var ageInSeconds = ageInMilliseconds / 1000;
  var ageInMinutes = ageInSeconds / 60;
  var ageInHours = ageInMinutes / 60;
  var ageInDays = ageInHours / 24;
  var years = Math.floor(ageInDays / 365);
  var remainingDays = ageInDays % 365;
  var months = Math.floor(remainingDays / 30); // Przybliżona liczba miesięcy

  var days = Math.floor(remainingDays % 30); // Przybliżona liczba dni

  document.querySelector(".result__yearDiff").innerHTML = "".concat(years);
  document.querySelector(".result__monthDiff").innerHTML = "".concat(months);
  document.querySelector(".result__dayDiff").innerHTML = "".concat(days, " ");
});