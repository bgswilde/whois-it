import React from "react";
import './index.css';
import { Form, Col, Row, Button } from 'react-bootstrap';

function SearchBar() {
  return (

      <Form>
        <Form.Group>
          <Row className="flex-row">
            <Col xs="12" md="8" className="mt-1">
              <Form.Control
                name='domainOrIP'
                type='text'
                size='lg'
                placeholder='Search by Domain Name or IP Address'
                className="search-area"
              />
            </Col>
            <Col xs="8" md="4" className="mt-1">
              <Button type='submit' className='submit-btn' size='lg'>
                Search
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>

  )
}
export default SearchBar;