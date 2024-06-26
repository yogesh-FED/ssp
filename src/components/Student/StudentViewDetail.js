import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Popup from '../Popup/Popup';
import tnLogo from '../../assets/img/tn_logo.png';
const StudentViewDetail = (props) => {
  const [otpValue, setOTPValue] = useState('');
  const [otpComplete, setOtpComplete] = useState(false);
  const handleOtpChange = (e) => {
    const input = e.target.value.replace(/[^\d]/g, '').substring(0, 6);
    setOTPValue(input);
    setOtpComplete(input.length === 6);
  };
  const [applyComplete, setApplyComplete] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [getOtpScreen, setGetOtpScreen] = useState(false);
  const openPopup = () => setIsOpen(true);
  const closePopup = () => {
    setIsOpen(false);
    props.closePopup();
  };
  const ApplyScheme = () => {
    setApplyComplete(true);
    setGetOtpScreen(false);
    openPopup();
  }
  const getOtpToApply = () => {
    setGetOtpScreen(true);
    openPopup();
  }
  return (
    <div className='applyScreen'>
      <Container>
        <Row>
          <Col lg={12} className='tnLogo'>
            <img src={tnLogo} alt='tnLogo' />
            <h5>Tamil Nadu State Scholarship Scheme Application</h5>
          </Col>
        </Row>
        <Row className='sectionSeparate'>
          <h6>ELIGIBLE SCHEME DETAILS</h6>
          {
            Object.keys(props.getRowData).map((key, index) => (
              <Col lg={4}>
                <Form>
                  <div class="form-group marBtm">
                    <ul>
                      <li><label for="dept">{key.replace(/_/g, ' ')}:</label></li>
                      <li><label for="dept"><b>{props.getRowData[key]}</b></label></li>
                    </ul>
                  </div>
                </Form>
              </Col>
            ))
          }
        </Row>
        <Row className='sectionSeparate'>
          <h6>STUDENT DETAILS</h6>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Student Name:</label></li>
                  <li><label for="dept"><b>Thirumurugan</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Emis Id:</label></li>
                  <li><label for="dept"><b>1234567890</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Umis Id:</label></li>
                  <li><label for="dept"><b>1234567890</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Nationality:</label></li>
                  <li><label for="dept"><b>Indian</b></label></li>
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
                  <li><label for="dept"><b>Vaniyar</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
        </Row>
        <Row className='sectionSeparate'>
        <h6>ACADEMIC DETAILS</h6>
        <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Stream:</label></li>
                  <li><label for="dept"><b>Engineering & Technology</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Course:</label></li>
                  <li><label for="dept"><b>PG</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Medium Of Instruction:</label></li>
                  <li><label for="dept"><b>English</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Mode Of Study:</label></li>
                  <li><label for="dept"><b>Regular</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Date Of Admission:</label></li>
                  <li><label for="dept"><b>12-06-2023</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Roll Number:</label></li>
                  <li><label for="dept"><b>34567</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Hosteller:</label></li>
                  <li><label for="dept"><b>No</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Current Status Of The Student:</label></li>
                  <li><label for="dept"><b>Studying</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
        </Row>
        <Row className='sectionSeparate'>
        <h6>BANK DETAILS</h6>
        <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Name Of The Bank:</label></li>
                  <li><label for="dept"><b>AXIS Bank</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Branch:</label></li>
                  <li><label for="dept"><b>Chennai, Egmore</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Account Number:</label></li>
                  <li><label for="dept"><b>009045654654</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <div class="form-group marBtm">
                <ul>
                  <li><label for="dept">Ifsc Code:</label></li>
                  <li><label for="dept"><b>OOOTN345345</b></label></li>
                </ul>
              </div>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className='applyCancleCta'>
            {/* <span className='applyBtn' onClick={() => ApplyScheme()}>Apply Scheme</span>  */}
            <span className='applyBtn' onClick={() => getOtpToApply()}>Get OTP</span> 
            <span className='cancel' onClick={() => props.closePopup()}>Cancel Scheme</span>
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
      {
        getOtpScreen && 
        <div className='text-center otpScreen'>
          <Popup isOpen={isOpen} closePopup={closePopup} comp='studentOtp'>
            <h5><i class="bi bi-pencil-square"></i>CONSENT DECLARATION</h5>
            <div className='declaration'>
              <p>This is to inform that, I have undergone education in Government School, Tamil Nadu. I am well aware of the benefits and conditions of the Scholarship. I have submit that the information given by me is true to the best of my knowledge.</p>
              <p>If Sanctioned Scholarship will be transfered to my bank account.</p>
              <p>By Submitting and entering the OTP, i hereby give my consent to State Government / TNeGA to use and share my Aadhar number or any other unique identifier with any State / Central Government / Quasi Agencies and authorize TNEGA to obtain my demographic, financial and other information for the sole purpose of establishing my bonafied for welfare scheme of Government of Tamil Nadu.</p>
              <p>I Voluntarily give my whatsapp number to Portal for alerts.</p>
              <div class="input-group otpInput">
                <span class="input-group-text" id="basic-addon3">Enter OTP here</span>
                <input
                  type="text"
                  className="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3 basic-addon4"
                  pattern="[0-9]{6}"
                  maxLength="6"
                  value={otpValue}
                  onChange={handleOtpChange}
                />
              </div>
              <button className={`applyBtn ${otpComplete ? 'active' : ''}`} onClick={() => ApplyScheme()} disabled={!otpComplete} >Apply Scheme</button>
            </div>
          </Popup>
        </div> 
      }
    </div>
  )
}

export default StudentViewDetail