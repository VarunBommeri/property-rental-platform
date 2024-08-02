import React from 'react';

const Filters = ({ filters, setFilters }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="filters">
      <input type="text" name="location" value={filters.location} onChange={handleInputChange} placeholder="Location" />
      <input type="number" name="minPrice" value={filters.minPrice} onChange={handleInputChange} placeholder="Min Price" />
      <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleInputChange} placeholder="Max Price" />
      <input type="number" name="bedrooms" value={filters.bedrooms} onChange={handleInputChange} placeholder="Bedrooms" />
    </div>
  );
};

export default Filters;
