import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import StudentGrid from '../Grid/StudentGrid';
import Table from 'react-bootstrap/Table';
import './student.scss';
import { Card, ListGroup, Container, Row, Col, Form } from 'react-bootstrap';
import Aggrid from '../Aggrid/Aggridcomp';
import EligibleSchemes from '../EligibleSchemes/EligibleSchemes';
import StudentEligibleScheme from './StudentEligibleScheme';
import Aggridcomp from '../Aggrid/Aggridcomp';
import AllSchemes from '../../pages/AllSchemes';

const Student = () => {
  const handleAvailClick = () => {
    alert('Approval Request has been sent to Institute')
  }
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  return (
    <>
      {/* <Container fluid className='studentDetailsList'>
        <Row>
          <Col lg={12} className='detailsSection'>
              <Row>
                <Col md={4} className='studentList'>
                  <div className='innerListDiv'>
                    <p>Student Name</p>
                    <span>Thirumurthi</span>
                  </div>
                </Col>
                <Col md={4} className='studentList'>
                  <div className='innerListDiv'>
                    <p>Academic Year</p>
                    <span>{`${currentYear - 1}-${currentYear}`}</span>
                  </div>
                </Col>
                <Col md={4} className='studentList'>
                  <div className='innerListDiv'>
                    <p>Institute Name</p>
                    <span>Anna University, Chennai</span>
                  </div>
                </Col>
                <Col md={4} className='studentList'>
                  <div className='innerListDiv'>
                    <p>Gender</p>
                    <span>Male</span>
                  </div>
                </Col>
                <Col md={4} className='studentList'>
                  <div className='innerListDiv'>
                    <p>Fees Paid</p>
                    <span>₹ 50000</span>
                  </div>
                </Col>
                <Col md={4} className='studentList'>
                  <div className='innerListDiv'>
                    <p>Total Fee</p>
                    <span>₹ 75000</span>
                  </div>
                </Col>
              </Row>
          </Col>
        </Row>
      </Container> */}
      <div className='studentBasicDetails'>
        <Row>
          <Col lg={12}>
            <h5><b>STUDENT DETAILS</b></h5>
            <Table responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Caste</th>
                <th>Community</th>
                <th>Academic Year</th>
                <th>Fees Paid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Thirumurugan</td>
                <td>Male</td>
                <td>Madiga</td>
                <td>SC-Arunthathiyar</td>
                <td>2023-2024</td>
                <td>₹ 15000</td>
              </tr>
            </tbody>
          </Table>
          </Col>
        </Row>
      </div>
      <div className='studentScreen'>
        <Tabs
          defaultActiveKey="Eligible"
          id="studentPage"
          className="mb-3"
          fill
        >
          <Tab eventKey="Eligible" title="Probable Eligible Schemes">
            {/* <EligibleSchemes /> */}
            <StudentEligibleScheme />
          </Tab>
          {/* <Tab eventKey="BasicDetails" title="My Basic Details">
            <StudentGrid />
          </Tab> */}
          <Tab eventKey="Scheme Status" title="Scheme Status">
            <Aggridcomp />
          </Tab>
          <Tab eventKey="All Scheme" title="All Scheme">
            <AllSchemes />
          </Tab>
        </Tabs>
      </div>
    </>
  )
}

export default Student