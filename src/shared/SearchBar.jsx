import React, { useRef } from 'react';
import './searchBar.css';
import { Col, Form, FormGroup } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const locationRef = useRef('');
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);
  const navigate = useNavigate();

  const searchHandler = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    // Convert string values to numbers
    const numericDistance = parseFloat(distance);
    const numericMaxGroupSize = parseInt(maxGroupSize);

    if (location === '' || isNaN(numericDistance) || isNaN(numericMaxGroupSize)) {
      return alert('All fields are required and must be numbers!');
    }

    const res = await fetch(`https://travel-diary-backend-3x2a.onrender.com/api/v1/tours/search/getTourBySearch?city=${location}&distance=${numericDistance}&maxGroupSize=${numericMaxGroupSize}`);

    if (!res.ok) alert('Something went wrong');

    const result = await res.json();

    navigate(`/tours/search?city=${location}&distance=${numericDistance}&maxGroupSize=${numericMaxGroupSize}`, { state: result.data });
  };

  return (
    <Col lg="12">
      <div className='search__bar'>
        <Form className='d-flex align-items-center gap-4'>
          <FormGroup className='d-flex gap-3 form__group form__group-fast'>
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input type='text' placeholder='Where are you going?' ref={locationRef} />
            </div>
          </FormGroup>
          <FormGroup className='d-flex gap-3 form__group form__group-fast'>
            <span>
              <i className="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input type='number' placeholder='Distance k/m' ref={distanceRef} />
            </div>
          </FormGroup>
          <FormGroup className='d-flex gap-3 form__group form__group-last'>
            <span>
              <i className="ri-group-line"></i>
            </span>
            <div>
              <h6>Max People</h6>
              <input type='number' placeholder='0' ref={maxGroupSizeRef} />
            </div>
          </FormGroup>

          <span className='search__icon' type="submit" onClick={searchHandler}><i className="ri-search-line"></i></span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
