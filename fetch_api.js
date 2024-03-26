// fetch api provide interface for fetching(request/response) resource
//it is used to fetch a resource (Data)

async function logMovies() {
    const response = await fetch("https://cat-fact.herokuapp.com/facts");
    const movies = await response.json();
    console.log(movies);
  }

  logMovies();