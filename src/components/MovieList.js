import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
    if (movies.length === 0) {
          return (
                  <div className="text-center mt-5">
                    <h4 className="text-muted">No movies found. Try adjusting your filters or add a new movie!</h4>
            </div>
          );
    }

  return (
        <div className="row">
  {movies.map(movie => (
            <MovieCard
                        key={movie.id}
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
          rating={movie.rating}
        />
      ))}
        </div>
  );
}

export default MovieList;
