import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const ApplyScreen = (props) => {
  const showStudentDetail = () => {
    alert();
  }
  return (
    <div className='applyScreen'>
      <Container>
      <h5><b>ELIGIBLE SCHEME DETAILS</b></h5>
        <Row className='sectionSeparate'>
          {
            <Table responsive>
            <thead>
              <tr>
                {
                  Object.keys(props.selectedRows).map((key, index) => (
                    <th>{key.replace(/_/g, ' ')}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              <tr>
                {
                  Object.keys(props.selectedRows).map((key, index) => (
                    <td>{props.selectedRows[key]}</td>
                  ))
                }
              </tr>
            </tbody>
          </Table>
          }
        </Row>
        <h5><b>SCHEME DETAILS</b></h5>
        <Row className='sectionSeparate'>
          <h6>DEPARTMENT DETAILS</h6>
          <Table responsive>
            <thead>
              <tr>
                <th>Department Name</th>
                <th>Sub Department Name</th>
                <th>Institute Name</th>
                <th>Institute Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Agriculture Scheme</td>
                <td>Agriculture Scheme</td>
                <td>Agricultural College, Theni</td>
                <td>Standalone College</td>
              </tr>
            </tbody>
          </Table>
          <Table responsive>
            <thead>
              <tr>
                <th>Institute Catagory</th>
                <th>Institute Ownership</th>
                <th>University Type</th>
                <th>University Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Agriculture</td>
                <td>Govt Aided</td>
                <td>Central University</td>
                <td>Govt Agriculture College</td>
              </tr>
            </tbody>
          </Table>
          <h6>COURSE DETAILS</h6>
          <Table responsive>
            <thead>
              <tr>
                <th>Stream</th>
                <th>Course Type</th>
                <th>Course</th>
                <th>Medium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Agriculture</td>
                <td>UG</td>
                <td>B.Tech</td>
                <td>Tamil</td>
              </tr>
            </tbody>
          </Table>
          <h6>Socio Economic Components</h6>
          <Table responsive>
            <thead>
              <tr>
                <th>Religion</th>
                <th>Community</th>
                <th>Caste</th>
                <th>Gender</th>
                <th>Income</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hindu</td>
                <td>MBC</td>
                <td>Rajaka</td>
                <td>Male</td>
                <td>0 to 12000</td>
              </tr>
            </tbody>
          </Table>
          <h6>Maintance Components</h6>
          <Table responsive>
            <thead>
              <tr>
                <th>Residential Status</th>
                <th>Disablity Status</th>
                <th>Disablity Catagory</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hosteller</td>
                <td>No</td>
                <td>-</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  )
}

export default ApplyScreen