import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Popup from '../Popup/Popup';
const StudentViewDetail = (props) => {
  const [applyComplete, setApplyComplete] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => setIsOpen(true);
  const closePopup = () => {
    setIsOpen(false);
    props.closePopup();
  };
  const ApplyScheme = () => {
    setApplyComplete(true);
    openPopup();
  }
  return (
    <div className='applyScreen'>
      <Container>
        <Row className='sectionSeparate'>
          <h5>ELIGIBLE SCHEME DETAILS</h5>
          {
            Object.keys(props.getRowData).map((key, index) => (
              <Col lg={4}>
                <Form>
                  <div class="form-group marBtm">
                    <label for="dept">{key.replace(/_/g, ' ')}</label>
                    <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value={props.getRowData[key]} readOnly/>
                  </div>
                </Form>
              </Col>
            ))
          }
        </Row>
        <Row className='sectionSeparate'>
          <h5>STUDENT DETAILS</h5>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Student Name</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='Thirumurugan' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Emis Id</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='1234567890' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Umis Id</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='1234567890' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Nationality</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='Indian' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Religion</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='Hindu' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Community</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='MBC' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Caste</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='Vaniyar' readOnly/>
              </div>
            </Form>
          </Col>
        </Row>
        <Row className='sectionSeparate'>
        <h5>ACADEMIC DETAILS</h5>
        <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Stream</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='Engineering & Technology' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Course</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='PG' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Medium Of Instruction</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='English' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Mode Of Study</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='Regular' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Date Of Admission</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='12-06-2023' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Roll Number</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='34567' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Hosteller</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='No' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Current Status Of The Student</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='Studying' readOnly/>
              </div>
            </Form>
          </Col>
        </Row>
        <Row className='sectionSeparate'>
        <h5>BANK DETAILS</h5>
        <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Name Of The Bank</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='AXIS' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Branch</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='Chennai, Egmore' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Account Number</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='009045654654' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Ifsc Code</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='OOOTN345345' readOnly/>
              </div>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className='applyCancleCta'>
            <span className='applyBtn' onClick={() => ApplyScheme()}>Apply</span> 
            <span className='cancel' onClick={() => props.closePopup()}>Close</span>
          </Col>
        </Row>
      </Container>
      {
        applyComplete &&
        <div className='text-center appliedSchemeScreen'>
          <Popup isOpen={isOpen} closePopup={closePopup} comp='studentView'>
            <h5>SCHEME APPLIED</h5>
            <p>Sent to Institute for Approval!</p>
          </Popup>
        </div>
      }
    </div>
  )
}

export default StudentViewDetail