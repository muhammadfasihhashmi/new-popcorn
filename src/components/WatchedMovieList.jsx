function WatchedMovieList() {
  return (
    <ul className="list">
      <li>
        <img
          src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
          alt="Inception poster"
        />
        <h3>Inception</h3>
        <div>
          <p>
            <span>⭐️</span>
            <span>8.8</span>
          </p>
          <p>
            <span>🌟</span>
            <span>10</span>
          </p>
          <p>
            <span>⏳</span>
            <span>148 min</span>
          </p>
          <button className="btn-delete">X</button>
        </div>
      </li>
    </ul>
  );
}

export default WatchedMovieList;
