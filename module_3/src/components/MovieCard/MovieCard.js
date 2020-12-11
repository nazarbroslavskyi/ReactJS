import './MovieCard.scss';

export default function MovieCard({}) {
  return (
    <div className="movie-card">
      {/* <div className="movie-card__image"></div> */}
      <img className="movie-card__image" src="https://m.media-amazon.com/images/M/MV5BYjA5YjA2YjUtMGRlNi00ZTU4LThhZmMtNDc0OTg4ZWExZjI3XkEyXkFqcGdeQXVyNjUyNjI3NzU@._V1_.jpg" alt=""/>
      <div className="movie-card__description">
        <div className="movie-card__name-of-movie">Name of Movie</div>
        <div className="movie-card__release-year">2005</div>
      </div>
      <div className="movie-card__genre">Genre</div>
    </div>
  )
}