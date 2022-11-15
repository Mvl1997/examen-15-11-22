import rl from "readline-sync";

let voorNaam = rl.question("Voornaam?");
const familieNaam = rl.question("Familienaam?");
const straatNr = rl.question("Straat en huisnummer?");
const postCode = rl.question("Postcode?");
const gemeente = rl.question("Gemeente?");

voorNaam = voorNaam.slice(0, 1) + ".";

if (
  voorNaam === "" ||
  familieNaam === "" ||
  straatNr === "" ||
  postCode === "" ||
  gemeente === ""
) {
  console.log("Minstens één van de ingevulde velden is niet geldig!");
}

if (postCode < 1000 || postCode > 9900) {
  console.log(" Minstens één van de ingevulde velden is niet geldig!");
}

if (
  voorNaam.length > 44 ||
  familieNaam.length > 44 ||
  straatNr.length > 44 ||
  postCode.length > 44 ||
  gemeente.length > 44
) {
  console.log(
    " Kader is te breed. Gebruik afkortingen in de breedste stukken."
  );
}

console.log(
  `------------------\n|${voorNaam} ${familieNaam}\n|${straatNr}\n|${postCode} ${gemeente}\n------------------\n`
);
