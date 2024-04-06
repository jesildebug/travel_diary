import React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import CommonSection from '../shared/CommonSection';
import TourCard from '../shared/TourCard';
import Newsletter from './../shared/Newsletter';

const SearchResultList = () => {
  const location = useLocation();
  const [data, setData] = useState(location.state || []);

  return (
    <div>
      <CommonSection />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className='text-center'>No Tours found</h4>
            ) : (
              data.map((tour) => (
                <Col lg='3' className='mb-4' key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </div>
  );
};

export default SearchResultList;
