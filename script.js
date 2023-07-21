let btn = document.getElementById("button");
btn.addEventListener("click", button);

function funcButton() {
  const randomNumber = Math.floor(Math.random() * 82);
  fetch("https://swapi.dev//api/people/" + randomNumber)
    .then((response) => response.json())
    .then((data) => {
      console.log(randomNumber, data.name, data.homeworld, data.films);
      names.innerHTML = data.name;
      planet.innerHTML = data.homeworld;
      movies.innerHTML = data.films;
    });
}
