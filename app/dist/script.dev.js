"use strict";

var calculateTime = function calculateTime() {
  var dayInput = new Date(document.querySelector("#dayInput").value);
  var monthInput = new Date(document.querySelector("#monthInput").value);
  var yearInput = new Date(document.querySelector("#yearInput").value);
  var currentDate = new Date();
  var daysDifference = Math.floor((currentDate - dayInput) / (1000 * 60 * 60 * 24));
  var monthDifference = Math.floor(daysDifference / 30.44);
  var yearDifference = Math.floor(daysDifference / 365.25);
  document.querySelector(".result__timeDiff").innerHTML = "\n  Days: ".concat(daysDifference, " <br>\n  Months: ").concat(monthDifference, " <br>\n  Years: ").concat(yearDifference, " <br>\n  ");
};

document.querySelector(".submitBtn").addEventListener("click", calculateTime);