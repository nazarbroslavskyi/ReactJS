import './FilmsCounter.scss';

export default function FilmsCounter({ counter }) {
  return (
    <div className="movies-counter">
      <span className="movies-counter__value">
        {counter}
      </span> movies found
    </div>
  )
}