import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const initialMovies = [
  { id: 1, title: 'Inception', description: 'A thief who steals corporate secrets through dream-sharing technology.', posterURL: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg', rating: 9 },
    { id: 2, title: 'The Dark Knight', description: 'Batman faces the Joker who wants to plunge Gotham City into anarchy.', posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg', rating: 9 },
      { id: 3, title: 'Interstellar', description: 'A team of explorers travel through a wormhole in space to ensure humanity survival.', posterURL: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg', rating: 8.6 },
        { id: 4, title: 'The Shawshank Redemption', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption.', posterURL: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NiYyLTg3MzMtYTJmNjg3Nzk5NzRhXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg', rating: 9.3 }
        ];

        function App() {
          const [movies, setMovies] = useState(initialMovies);
            const [filterTitle, setFilterTitle] = useState('');
              const [filterRating, setFilterRating] = useState(0);
                const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: '' });

                  const filteredMovies = movies.filter(movie =>
                      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
                          movie.rating >= Number(filterRating)
                            );

                              const handleAddMovie = (e) => {
                                  e.preventDefault();
                                      if (!newMovie.title || !newMovie.description) return;
                                          const movie = { ...newMovie, id: Date.now(), rating: Number(newMovie.rating) || 0 };
                                              setMovies([...movies, movie]);
                                                  setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
                                                    };

                                                      return (
                                                          <div className="container mt-4">
                                                                <h1 className="text-center mb-4">Movie App</h1>
                                                                      <Filter filterTitle={filterTitle} setFilterTitle={setFilterTitle} filterRating={filterRating} setFilterRating={setFilterRating} />
                                                                            <div className="card mb-4">
                                                                                    <div className="card-header"><h5>Add New Movie</h5></div>
                                                                                            <div className="card-body">
                                                                                                      <form onSubmit={handleAddMovie}>
                                                                                                                  <div className="row g-2">
                                                                                                                                <div className="col-md-3"><input className="form-control" placeholder="Title" value={newMovie.title} onChange={e => setNewMovie({...newMovie, title: e.target.value})} required /></div>
                                                                                                                                              <div className="col-md-4"><input className="form-control" placeholder="Description" value={newMovie.description} onChange={e => setNewMovie({...newMovie, description: e.target.value})} required /></div>
                                                                                                                                                            <div className="col-md-3"><input className="form-control" placeholder="Poster URL" value={newMovie.posterURL} onChange={e => setNewMovie({...newMovie, posterURL: e.target.value})} /></div>
                                                                                                                                                                          <div className="col-md-1"><input className="form-control" type="number" placeholder="Rating" min="0" max="10" step="0.1" value={newMovie.rating} onChange={e => setNewMovie({...newMovie, rating: e.target.value})} /></div>
                                                                                                                                                                                        <div className="col-md-1"><button type="submit" className="btn btn-primary w-100">Add</button></div>
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                              </form>
                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                  <MovieList movies={filteredMovies} />
                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                        export default App;
