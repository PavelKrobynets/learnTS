// const isBirthdayData: boolean = true;
// let ageData: number = 40;
// const userNameData: string = "Alex";
var player1 = {
  game: "CS GO",
  hours: 300,
  server: "basic",
};
var player2 = {
  game: 2048,
  hours: "300 h.",
  server: "arcade",
};
var player3 = {
  game: "Chess",
  hours: {
    total: 500,
    inMenu: 50,
  },
  server: "chess",
};
function calculateAmountOfFigures(figure) {
  var result = {
    squares: 0,
    circles: 0,
    triangles: 0,
    others: 0,
  };
  figure.forEach(function (item) {
    switch (item.name) {
      case "rect":
        result.squares++;
        break;
      case "triangle":
        result.triangles++;
        break;
      case "line":
        result.others++;
        break;
      case "circle":
        result.circles++;
        break;
      default:
        break;
    }
  });
  return result;
}
var data = [
  {
    name: "rect",
    data: { a: 5, b: 10 },
  },
  {
    name: "rect",
    data: { a: 6, b: 11 },
  },
  {
    name: "triangle",
    data: { a: 5, b: 10, c: 14 },
  },
  {
    name: "line",
    data: { l: 15 },
  },
  {
    name: "circle",
    data: { r: 10 },
  },
  {
    name: "circle",
    data: { r: 5 },
  },
  {
    name: "rect",
    data: { a: 15, b: 7 },
  },
  {
    name: "triangle",
  },
];
console.log(calculateAmountOfFigures(data));
console.log("AAAASASDASDASDAS");


