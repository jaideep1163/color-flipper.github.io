const colors = [
  "green",
  "red",
  "blue",
  "orange",
  "purple",
  "yellow",
  "black",
  "violet",
  "brown",
  "lightblue",
  "lightgreen",
  "aqua",
  "aquamarine",
  "AliceBlue",
  "AntiqueWhite",
  "BlueViolet",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "GreenYellow",
  "IndianRed",
  "Indigo",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LightCoral",
  "LightCyan",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "Navy",
  "Olive",
  "OliveDrab",
  "OrangeRed",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "Peru",
  "Plum",
  "PowderBlue",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Wheat",
  "YellowGreen",
  "Pink"
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  // Get Random Number Between 0 , 7

  const randomNumber = getRandomNumbers();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumbers() {
  return Math.floor(Math.random() * colors.length);
}
