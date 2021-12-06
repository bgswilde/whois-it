import React, { useState, useEffect } from "react";
import './index.css'
import { Container, Col, Row } from 'react-bootstrap';
import SearchBar from "../SearchBar";
import WhoisDataCard from "../WhoisDataCard";
import Loading from '../Loading';
import axios from 'axios';

function Content() {
  const [domainOrIP, setDomainOrIP] = useState(null);
  const [whoisData, setWhoisData] = useState({
    loading: false,
    data: null,
    error: false
  });

  const handleClick = (event) => {
    event.preventDefault();
    console.log('clicked');
    setDomainOrIP(event.target.searchTerm.value);
    console.log(event.target.searchTerm.value);
    console.log(domainOrIP)
  };

  useEffect(() => {
    setWhoisData({
      loading: true,
      data: null,
      error: false
    })
    axios.get("/api/whois", {
      params: {
        domainOrIP: domainOrIP
      }
    })
      .then(response => {
        setWhoisData({
          loading: false,
          data: response.data.whoisData,
          error: false
        })
      })
      .catch(error => {
        setWhoisData({
          loading: false,
          data: null,
          error: true
        })
      })
  }, [domainOrIP]);

  let content = null

  if (whoisData.data) {
    content = 
    <WhoisDataCard
      whoisData={whoisData.data}
      domainOrIP={domainOrIP}
    />
  }

  if (whoisData.error) {
    content =
    <div className="content-spacing">
      <h3>{`${whoisData.error}`}</h3>
    </div>
  }

  if (whoisData.loading) {
    content =
    <div className="content-spacing">
      <Loading />
    </div>
  }

  return (
    <Container className="center">
      <Col xs="12" lg="9" className="content-box">
        <Row>
          <h3>Get Searching</h3>
        </Row>
        <Row>
          <SearchBar 
            handleClick={handleClick}
          />
        </Row>
        <Row>
          {content}
        </Row>
      </Col>
    </Container>
  )
};

export default Content;