import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <strong>Loading...</strong>
        ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image}></img>
              <h2>{movie.title} ({movie.year})</h2>
              <p>{movie.summary}</p>
              
              <h4>Genres</h4>
              <ul>
                {movie.genres.map(g => <li key={g}>{g}</li>)}
              </ul>

              <h4>Rating</h4>
              {movie.rating}
              
              <h4>Runtime</h4>
              {movie.runtime}min
            </div>
          ))}
        </div>
        )}
    </div>
  );
};

export default App;
