var bici = [
  {
    nome: "Mountain-Bike",
    peso: 25,
  },
  {
    nome: "Street-Bike",
    peso: 8,
  },
  {
    nome: "Electric-Bike",
    peso: 10,
  },
];

bici.sort(function (a, b) {
  return a.peso - b.peso;
});



console.log(
  "La bici più leggerà è " + bici[0].nome + " con un peso di " + bici[0].peso
);
