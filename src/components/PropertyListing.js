import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import properties from '../data/properties.json';

const PropertyListing = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  // Filter logic here

  return (
    <div className="property-listing">
      {filteredProperties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyListing;
