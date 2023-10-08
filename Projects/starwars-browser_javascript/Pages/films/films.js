
window.onload = function() {
    const searchBtn = document.getElementById("search");
    const title = document.getElementById("title");
    const openingCrawl = document.getElementById("opening-crawl");
    const director = document.getElementById("director");
    const producer = document.getElementById("producer");
    const releaseDate = document.getElementById("releaseDate");
    const characters = document.getElementById("characters");
    const starShips = document.getElementById("starShips");
    const planets = document.getElementById("planets");

    searchBtn.addEventListener('click', async () => {
        await fetchData();
    });

    async function fetchData() {
        try {
            // Set it to finding...
            const loading = "loading..."
            title.innerText = loading;
            openingCrawl.innerText = "";
            director.innerText = loading;
            producer.innerText = loading;
            releaseDate.innerText = loading;
            characters.innerText = loading;
            starShips.innerText = loading;
            planets.innerText = loading;

            const response = await fetch('https://swapi.dev/api/films/' + Math.ceil(Math.random()*6));
            const data = await response.json();

            // Set values in DOM
            title.innerText = data.title;
            openingCrawl.innerText = data.opening_crawl.replace(/\r?\n/g, ' ');
            director.innerText = data.director;
            producer.innerText = data.producer;
            releaseDate.innerText = data.release_date;
            characters.innerText = data.characters.length;
            starShips.innerText = data.starships.length;
            planets.innerText = data.planets.length;
        } 
        catch (error) {
            displayEle.innerText = "Error fetching data! Please try again later.";
        }
    }
}