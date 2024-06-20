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
                    <label for="dept">{key.replace(/_/g, ' ')}</label>
                    <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value={props.selectedRows[key]} readOnly/>
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
                <label for="dept">Department Name</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='Agriculture Scheme' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Sub Department Name</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='Agriculture Scheme' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Institute Name</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='Agricultural College, Theni' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Institute Type</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='Standalone College' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Institute Catagory</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='Agriculture' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Institute Ownership</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='Govt Aided' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">University Type</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='Central University' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">University Name</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='Govt Agriculture College' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Stream</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='Agriculture' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Course Type</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='UG' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Course</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='B.Tech' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Medium of Instruction</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='Tamil' readOnly/>
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
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='Rajaka' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Gender</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='Male' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Income</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='0 to 12000' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Residential Status</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='Hosteller' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Disablity Status</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='Yes' readOnly/>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <label for="dept">Disablity Catagory</label>
                <input type="email" class="form-control" id="dept" aria-describedby="emailHelp" placeholder="Department Name" value='Blindness' readOnly/>
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