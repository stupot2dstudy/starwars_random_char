const names = document.getElementById("names");
const homeworld = document.getElementById("planet");
const gender = document.getElementById("gender");
const button = document.querySelector(".ramdonmizeButton");

button.addEventListener("click", (e) => {
  e.preventDefault();
  names.innerHTML = "<em>Loading...</em>";
  planet.innerHTML = "<em>Loading...</em>";
  gender.innerHTML = "<em>Loading...</em>";
  image.innerHTML = "<em>Loading...</em>";

  const randomNumber = Math.ceil(Math.random() * 83);
  fetch(`https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`)
    .then((response) => response.json())
    .then((character) => {
      console.log(character);
      names.innerHTML = character.name;
      planet.innerHTML = character.homeworld;
      gender.innerHTML = character.gender;
      image.innerHTML = `<img src = ${character["image"]} height = 100% width = 100%/>`;
    });
});
