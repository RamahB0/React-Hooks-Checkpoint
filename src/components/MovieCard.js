import React from 'react';

function MovieCard({ title, description, posterURL, rating }) {
  return (
      <div className="col-md-3 mb-4">
            <div className="card h-100 shadow">
                    <img
                              src={posterURL || 'https://via.placeholder.com/300x450?text=No+Poster'}
                                        className="card-img-top"
                                                  alt={title}
                                                            style={{ height: '300px', objectFit: 'cover' }}
                                                                    />
                                                                            <div className="card-body">
                                                                                      <h5 className="card-title">{title}</h5>
                                                                                                <p className="card-text text-muted">{description}</p>
                                                                                                        </div>
                                                                                                                <div className="card-footer">
                                                                                                                          <span className="badge bg-warning text-dark">Rating: {rating}/10</span>
                                                                                                                                  </div>
                                                                                                                                        </div>
                                                                                                                                            </div>
                                                                                                                                              );
                                                                                                                                              }
                                                                                                                                              
                                                                                                                                              export default MovieCard;
