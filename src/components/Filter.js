import React from 'react';

function Filter({ filterTitle, setFilterTitle, filterRating, setFilterRating }) {
    return (
          <div className="card mb-4">
            <div className="card-header"><h5>Filter Movies</h5></div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Filter by Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Search by title..."
                value={filterTitle}
                onChange={(e) => setFilterTitle(e.target.value)}
              />
                  </div>
            <div className="col-md-6">
                              <label className="form-label">Minimum Rating: {filterRating}</label>
              <input
                type="range"
                className="form-range"
                min="0"
                max="10"
                step="0.1"
                value={filterRating}
                onChange={(e) => setFilterRating(e.target.value)}
              />
                  </div>
                  </div>
                  </div>
                  </div>
    );
}

export default Filter;
