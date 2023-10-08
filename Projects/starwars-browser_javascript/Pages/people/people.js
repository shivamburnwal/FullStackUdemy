
window.onload = function() {
    const searchBtn = document.getElementById("search");
    const name = document.getElementById("name");
    const birthYear = document.getElementById("birthYear");
    const eyeColor = document.getElementById("eyeColor");
    const gender = document.getElementById("gender");
    const skinColor = document.getElementById("skinColor");
    const mass = document.getElementById("mass");
    const height = document.getElementById("height");
    const films = document.getElementById("films");
    const starShips = document.getElementById("starShips");
    const vehicles = document.getElementById("vehicles");

    searchBtn.addEventListener('click', async () => {
        await fetchData();
    });

    async function fetchData() {
        try {
            // Set it to finding...
            const loading = "loading..."
            name.innerText = loading;
            birthYear.innerText = loading;
            eyeColor.innerText = loading;
            gender.innerText = loading;
            skinColor.innerText = loading;
            mass.innerText = loading;
            height.innerText = loading;
            films.innerText = loading;
            starShips.innerText = loading;
            vehicles.innerText = loading;

            const response = await fetch('https://swapi.dev/api/people/' + Math.ceil(Math.random()*83));
            const data = await response.json();

            // Set values in DOM
            name.innerText = data.name;
            birthYear.innerText = data.birth_year;
            eyeColor.innerText = data.eye_color;
            gender.innerText = data.gender;
            skinColor.innerText = data.skin_color;
            mass.innerText = data.mass;
            height.innerText = data.height;
            films.innerText = data.films.length;
            starShips.innerText = data.starships.length;
            vehicles.innerText = data.vehicles.length;
        } 
        catch (error) {
            displayEle.innerText = "Error fetching data! Please try again later.";
        }
    }
}