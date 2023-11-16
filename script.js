function chooseYourCharacter(character) {
    const nameElement = document.querySelector('.main-container-profile-content-name');
    const homeworldElement = document.querySelector('.main-container-profile-content-homeworld');
    const speciesElement = document.querySelector('.main-container-profile-content-species');
    const imageElement = document.querySelector('.main-container-profile-img');

    nameElement.textContent = `Name: ${character.name}`;
    homeworldElement.textContent = `Homeworld: ${character.homeworld}`;
    speciesElement.textContent = `Species: ${character.species}`;

    if (character.image && character.image.trim() !== '') {
        fetch(character.image)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Image not found! Status: ${response.status}`);
                }
                imageElement.src = character.image;
            })
            .catch(error => {
                console.error('Image fetch error:', error);
                imageElement.src = 'images/image_notfound.png'; // Set default image on error
            });
    } else {
        // Set a default image if the character doesn't have an image
        imageElement.src = 'images/profile-picture.jpg'; // Replace 'profile-picture.jpg' with your default image path
    }
    imageElement.alt = character.name; // Set alt text for the image if applicable
}

function bringStarWarsChar(randomNumber) {
    fetch(`https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            if (data) {
                chooseYourCharacter(data);
            } else {
                chooseYourCharacter({
                    name: 'Not Found',
                    homeworld: 'N/A',
                    species: 'N/A',
                    image: '' || 'images/profile-picture.jpg'
                });
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

const showMe = document.querySelector('.header-container');
showMe.addEventListener("click", (e) => {
    e.preventDefault();
    const randomNumber = Math.ceil(Math.random() * 83);
    bringStarWarsChar(randomNumber);
});

const showMeTwo = document.querySelector('.main-container-profile');
showMeTwo.addEventListener("click", (e) => { // Fixed reference to showMeTwo
    e.preventDefault();
    const randomNumber = Math.ceil(Math.random() * 83);
    bringStarWarsChar(randomNumber);
});