const calculateTime = () => {
  const dayInput = new Date(document.querySelector("#dayInput").value);
  const monthInput = new Date(document.querySelector("#monthInput").value);
  const yearInput = new Date(document.querySelector("#yearInput").value);
  const currentDate = new Date();

  const daysDifference = Math.floor((currentDate - dayInput) / (1000 * 60 * 60 * 24));
  const monthDifference = Math.floor((daysDifference) / 30.44);
  const yearDifference = Math.floor((daysDifference) / 365.25);

  document.querySelector(".result__timeDiff").innerHTML = `
  Days: ${daysDifference} <br>
  Months: ${monthDifference} <br>
  Years: ${yearDifference} <br>
  `;
};

document.querySelector(".submitBtn").addEventListener("click", calculateTime);
