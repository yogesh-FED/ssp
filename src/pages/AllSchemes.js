import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './allschemes.scss';
import axios from 'axios';
import AllSchemeFilter from './AllSchemeFilter';

const AllSchemes = () => {
  const [schemeData, setSchemeData] = useState([]);
  useEffect(() => { debugger;
    const fetchData = async () => {
      try {
        const response = await axios.get('workingJson/AllScheme.json');
        setSchemeData(response.data.AllScheme);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={12} className='text-center schemeListParent'>
            <Row>
              <Col lg={2} className='filterSec'>
              <AllSchemeFilter />
              </Col>
              
              <Col lg={10} className='listSec'>
              <h4>SCHEME LIST</h4>
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search Schemes" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <Row>
                  {
                    Object.entries(schemeData).map(([key,val]) => {
                      return (
                        <Col lg={4} className='mb-3 mt-3'>
                          <div className='schemeCard'>
                            <h6>{val.scheme_name}</h6>
                            <p>{val.scheme_id}</p>
                            <p>{val.fee}</p>
                          </div>
                        </Col>
                      )
                    })
                  }
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AllSchemes