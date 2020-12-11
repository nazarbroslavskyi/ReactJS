import './Main.scss';
import MovieCard from './../MovieCard';
import FilmsCounter from './../FilmsCounter';

export default function Main() {
  return (
    <main className="main">
      <div className="main-content">
        <FilmsCounter counter="39"></FilmsCounter>
        <div className="movies-cards">
        {[1,2,3,4,5].map((item, index) => <MovieCard></MovieCard>)}
      </div>
      </div>
    </main>
  )
}
