import React, { useEffect, useState } from 'react'
import CommonSection from '../shared/CommonSection'

import '../styles/tour.css'
import TourCard from './../shared/TourCard';
import SearchBar from './../shared/SearchBar';
import NewsLetter from './../shared/Newsletter';
import { Col, Container, Row } from 'reactstrap';
import useFetch from '../hooks/useFetch';



const Tours = () => {

const [pageCount,setPageCount] = useState(0)
const [page,setPage]=useState(0)

const {data:tours,loading,error} = useFetch(`http://localhost:4000/api/v1/tours?page=${page}`)
const {data:tourCount} = useFetch(`http://localhost:4000/api/v1/tours/search/getTourCount`)


useEffect(()=>{
  const pages = Math.ceil(tourCount/8)
  setPageCount(pages)
  window.scrollTo(0,0)
},[page,tourCount,tours])

  return (
    <div>
      <CommonSection title={'All Tours'}/>
      <section>
        <Container>
          <Row>
            <SearchBar/> 
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading.......</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}
          {
            !loading && !error &&<Row>
            {tours?.map(tour=>
            <Col lg='3' className='mb-4' key={tour._id}>
              <TourCard tour={tour}/>
            </Col>)}
             <Col lg="12">
              <div className='pagination d-flex justify-content-center align-items-center mt-4 gap-3'>
                {[...Array(pageCount).keys()].map(number =>(
                  <span key={number} onClick={()=>setPage(number)}
                  className={page === number? "active__page" : ""}>
                    {number+1}
                  </span>
                ))}
              </div>
             </Col>
          </Row>
          }
        </Container>
      </section>
      <NewsLetter/>
    </div>
  )
}

export default Tours;
