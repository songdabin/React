import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, coverImg, title, year, summary, genres, rating, runtime}) {
    return (
    <div>
        <img src={coverImg} alt={title}></img>
        <h2><Link to={`/movie/${id}`}>{title} ({year})</Link></h2>
        <p>{summary}</p>
        
        <h4>Genres</h4>
        <ul>
        {genres.map(g => <li key={g}>{g}</li>)}
        </ul>

        <h4>Rating</h4>
        {rating}
        
        <h4>Runtime</h4>
        {runtime}min
    </div>
  );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
}

export default Movie;
