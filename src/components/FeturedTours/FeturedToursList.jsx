
import React from 'react';
import TourCard from '../../shared/TourCard';
import { Col } from 'reactstrap';
import useFetch from './../../hooks/useFetch';


const FeturedToursList = () => {
  const {
    data: getFeaturedTour,
    loading,
    error
  } = useFetch(`https://travel-diary-backend-3x2a.onrender.com/api/v1/tours/search/getFeaturedTours`);

  return (
    <>
      {loading && <h4>Loading..........</h4>}
      {error && <h4>{error}</h4>}

      {Array.isArray(getFeaturedTour) && !loading && !error && getFeaturedTour.map(tour => (
        <Col lg='3' md='6' sm='6' className="mb-4" key={tour._id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  )
}

export default FeturedToursList;
