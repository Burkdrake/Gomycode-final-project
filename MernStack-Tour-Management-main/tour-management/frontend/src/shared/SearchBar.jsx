import React, { useRef } from 'react';
import './search-bar.css';
import { Col, Form, FormGroup, Input } from 'reactstrap';

const SearchBar = () => {
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);

  const searchHandler = () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || distance === "" || maxGroupSize === "") {
      return alert("All fields are required!");
    }

    // Perform the search or any other logic here
    console.log("Performing search with values:", location, distance, maxGroupSize);
  };

  return (
    <Col lg='12'>
      <div className="search-bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex align-items form__group form__group-fast">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <Input type="text" placeholder="where are you headed" ref={locationRef} />
            </div>
          </FormGroup>
          <FormGroup className="d-flex align-items form__group form__group-last">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <Input type="number" placeholder="Distance k/m" ref={distanceRef} />
            </div>
          </FormGroup>
          <FormGroup className="d-flex align-items form__group form__group-last">
            <span>
              <i className="ri-group-fill"></i>
            </span>
            <div>
              <h6>Max people</h6>
              <Input type="number" placeholder="0" ref={maxGroupSizeRef} />
            </div>
          </FormGroup>
          <span className="search__icon" onClick={searchHandler}>
            <i className="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
