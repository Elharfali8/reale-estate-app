// src/components/RealEstateList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProperties } from '../features/realeEstateSlice';

const RealEstateList = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.realEstate.properties);
  const status = useSelector((state) => state.realEstate.status);
  const error = useSelector((state) => state.realEstate.error);

  useEffect(() => {
    dispatch(fetchProperties('90004')); // You can replace '90004' with any postal code
  }, [dispatch]);

  let content;

  if (status === 'loading') {
    content = <p>Loading...</p>;
  } else if (status === 'succeeded') {
    content = (
      <ul>
        {properties.map((property, index) => (
          <li key={index}>{property.location.address.line}</li>
        ))}
      </ul>
    );
  } else if (status === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>Real Estate Listings</h2>
      {content}
    </section>
  );
};

export default RealEstateList;
