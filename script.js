const convertButton = document.querySelector("#convertButton");

convertButton.addEventListener("click", function () {
  const unitInput = document.querySelector("#unitInput").value;
  const unitFrom = document.querySelector("#unitFrom").value;
  const unitTo = document.querySelector("#unitTo").value;

  // Fylll inn og logg alle variabler for å se om vi henter riktig før vi går videre i koden
  console.log(
    "Knappen er trykket!",
    convertButton,
    unitInput,
    unitFrom,
    unitTo
  );

  if (unitFrom === "MM" && unitTo === "CM") {
    let result = unitInput / 10;
    const displayResult = document.querySelector("#displayResult");
    displayResult.textContent = result;
  } else {
    console.log("Julie vil ikke gjøre matte");
  }
});

//
//

const addTodo = document.querySelector("#addTodo");

addTodo.addEventListener("click", function () {
  console.log("Knappen er trykket!");
});
