import React from "react";
import './index.css'
import { Container, Col, Row } from 'react-bootstrap';
import SearchBar from "../SearchBar";
import WhoisDataCard from "../WhoisDataCard";

function Content() {
  return (
    <Container className="center">
      <Col xs="12" lg="9" className="content-box">
        <Row>
          <h3>Get Searching</h3>
        </Row>
        <Row>
          <SearchBar />
        </Row>
        <Row>
          <WhoisDataCard />
        </Row>
      </Col>
    </Container>
  )
};

export default Content;