import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const ApplyScreen = (props) => {
  const showStudentDetail = () => {
    alert();
  }
  return (
    <div className='applyScreen'>
      <Container>
        <Row className='sectionSeparate'>
          <h5>ELIGIBLE SCHEME DETAILS</h5>
          {
            Object.keys(props.selectedRows).map((key, index) => (
              <Col lg={4}>
                <Form>
                  <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">{key.replace(/_/g, ' ')}</label></li>
                  <li><label for="dept"><b>{props.selectedRows[key]}</b></label></li>
                </ul>
                  </div>
                </Form>
              </Col>
            ))
          }
        </Row>
        <Row className='sectionSeparate'>
          <h5>SCHEME DETAILS</h5>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Department Name:</label></li>
                  <li><label for="dept"><b>Agriculture Scheme</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Sub Department Name:</label></li>
                  <li><label for="dept"><b>Agriculture Scheme</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Institute Name:</label></li>
                  <li><label for="dept"><b>Agricultural College, Theni</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Institute Type:</label></li>
                  <li><label for="dept"><b>Standalone College</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Institute Catagory:</label></li>
                  <li><label for="dept"><b>Agriculture</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Institute Ownership:</label></li>
                  <li><label for="dept"><b>Govt Aided</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">University Type:</label></li>
                  <li><label for="dept"><b>Central University</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">University Name:</label></li>
                  <li><label for="dept"><b>Govt Agriculture College</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Stream:</label></li>
                  <li><label for="dept"><b>Agriculture</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Course Type:</label></li>
                  <li><label for="dept"><b>UG</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Course:</label></li>
                  <li><label for="dept"><b>B.Tech</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Medium of Instruction:</label></li>
                  <li><label for="dept"><b>Tamil</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Religion:</label></li>
                  <li><label for="dept"><b>Hindu</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Community:</label></li>
                  <li><label for="dept"><b>MBC</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Caste:</label></li>
                  <li><label for="dept"><b>Rajaka</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Gender:</label></li>
                  <li><label for="dept"><b>Male</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Income:</label></li>
                  <li><label for="dept"><b>0 to 12000</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Residential Status:</label></li>
                  <li><label for="dept"><b>Hosteller</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Disablity Status:</label></li>
                  <li><label for="dept"><b>Yes</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Disablity Catagory:</label></li>
                  <li><label for="dept"><b>Blindness</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className='applyCancleCta'>
            {/* <span className='applyBtn' onClick={() => showStudentDetail()}>Apply</span>  */}
            <span className='applyBtn' onClick={() => props.closePopup()}>Close</span>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ApplyScreen