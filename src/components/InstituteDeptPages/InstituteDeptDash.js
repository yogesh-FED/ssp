import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Popup from '../Popup/Popup';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Select from 'react-select';
import Accordion from 'react-bootstrap/Accordion';

const InstituteDeptDash = (props) => { debugger;
  const [fee, setFee] = useState('');
  const [feeDetails, setFeeDetails] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleGetFee = () => {
    setFeeDetails(true);
  }
  const openPopup = (args) => { debugger;
    document.body.style.overflow = 'hidden';
    if(args === 'fee') {
      setIsOpen(true); 
      setFee('fee');
    } else {
      setIsOpen(true);
      setFee('');
    }
  }
  const closePopup = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }
  const [filteredData, setFilteredData] = useState([]);
  const handleDashboardClick = (status) => { debugger;
    props.handleDashboardClick(status);
  };
  const streams = [
    {
      value: 'Engineering',
      label: 'Engineering'
    },
    {
      value: 'Arts & Science',
      label: 'Arts & Science'
    },
    {
      value: 'Medical',
      label: 'Medical'
    },
    {
      value: 'Architecture',
      label: 'Architecture'
    },
  ]
  const Course = [
    {
      value: "MCA",label: "MCA"
    },
    {
      value: "MBA",label: "MBA"
    },
    {
      value: "BCA",label: "BCA"
    },
    {
      value: "BBA",label: "BBA"
    },
    {
      value: "EEE",label: "EEE"
    },
    {
      value: "B.sc",label: "B.sc"
    },
    {
      value: "Bcom",label: "Bcom"
    },
    {
      value: "Msc",label: "Msc"
    },
  ]
  const sub = [
    {
      value: "English",label: "English"
    },
    {
      value: "Tamil",label: "Tamil"
    },
    {
      value: "Maths",label: "Maths"
    },
    {
      value: "Physics",label: "Physics"
    },
    {
      value: "Chemistry",label: "Chemistry"
    },
    {
      value: "Botany",label: "Botany"
    },
    {
      value: "Zoology",label: "Zoology"
    },
    {
      value: "Economics",label: "Economics"
    },
    {
      value: "Computer Science",label: "Computer Science"
    },
  ]
  const studentCategory = [
    {
      value: "NRI",label: "NRI"
    },
    {
      value: "Government",label: "Government"
    },
  ]
  return (
    <div>
      <Container fluid className='dashboardSec'>
        <Row>
          <Col lg={2}>
            <div className='dashCards text-center approve' onClick={() => handleDashboardClick('Approved')}>
              <p>Approved</p>
              <h2>{props.approvedCount}</h2>
            </div>
          </Col>
          <Col lg={2}>
            <div className='dashCards text-center pending' onClick={() => handleDashboardClick('Pending')}>
              <p>Pending</p>
              <h2>{props.pendingCount}</h2>
            </div>
          </Col>
          <Col lg={2}>
            <div className='dashCards text-center rejected' onClick={() => handleDashboardClick('Rejected')}>
              <p>Rejected</p>
              <h2>{props.rejectedCount}</h2>
            </div>
          </Col>
          <Col lg={2}>
            <div className='dashCards text-center total'>
            {/* onClick={() => handleDashboardClick('Total')} */}
              <p>Total Application</p>
              <h2>{props.totalCount}</h2>
            </div>
          </Col>
          <Col lg={2}>
            <div className='dashCards text-center fee' onClick={() => openPopup('fee')}>
            {/* onClick={() => handleDashboardClick('Total')} */}
              <p>Fee Details</p>
            </div>
          </Col>
          <Col lg={2}>
            <div className='dashCards text-center schemeRep' onClick={() => openPopup()}>
            {/* onClick={() => handleDashboardClick('Total')} */}
              <p>Scheme Report</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Popup isOpen={isOpen} closePopup={closePopup} comp={'fsr'}>
        {
          fee !== ''
          ?
          <>
            <h5 className='text-center'>FEE DETAILS</h5>
            <Container>
              <Row>
                <Col lg={3}>
                  <Form.Group className="mb-3 feeForm">
                    <div>
                      <Select
                        //defaultValue={Academic_Year_options}
                        isMulti
                        options={streams}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder="Select Stream"
                        //onChange={handleCourseChange}
                      />
                    </div>
                  </Form.Group>
                </Col>
                <Col lg={3}>
                  <Form.Group className="mb-3 feeForm">
                    <div>
                      <Select
                        //defaultValue={Academic_Year_options}
                        isMulti
                        options={Course}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder="Select Course"
                        //onChange={handleCourseChange}
                      />
                    </div>
                  </Form.Group>
                </Col>
                <Col lg={3}>
                  <Form.Group className="mb-3 feeForm">
                    <div>
                      <Select
                        //defaultValue={Academic_Year_options}
                        isMulti
                        options={sub}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder="Select Subject"
                        //onChange={handleCourseChange}
                      />
                    </div>
                  </Form.Group>
                </Col>
                <Col lg={3}>
                  <Form.Group className="mb-3 feeForm">
                    <div>
                      <Select
                        //defaultValue={Academic_Year_options}
                        isMulti
                        options={studentCategory}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder="Select Student Category"
                        //onChange={handleCourseChange}
                      />
                    </div>
                  </Form.Group>
                </Col>
                {/* <Col lg={3}>
                  <Form.Group className="mb-3 feeForm">
                    <div>
                    <span>Fee Type</span>
                      <Select
                        //defaultValue={Academic_Year_options}
                        isMulti
                        options={studentCategory}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        //onChange={handleCourseChange}
                      />
                    </div>
                  </Form.Group>
                </Col> */}
                <button className='feeDtCTA' onClick={handleGetFee}>Show Fees</button>
              </Row>
              <Row>
              {
                feeDetails && (
                  <>
                    <Col lg={4}>
                      <div className='feeDisplay'>
                        <p>Refundable Fee</p>
                        <Table striped bordered>
                          <tbody>
                            <tr>
                              <td>Tution Fee</td>
                              <td>3478</td>
                            </tr>
                            <tr>
                              <td>Special Fee</td>
                              <td>800</td>
                            </tr>
                            <tr>
                              <td>Lab Fee</td>
                              <td>650</td>
                            </tr>
                            <tr>
                              <td>Library Fee</td>
                              <td>125</td>
                            </tr>
                            <tr>
                              <td>Sports Fee</td>
                              <td>876</td>
                            </tr>
                            <tr>
                              <td>Enroll Fee</td>
                              <td>1000</td>
                            </tr>
                            <tr>
                              <td>Exam Fee</td>
                              <td>4567</td>
                            </tr>
                            <tr>
                              <td>Complusory Fee</td>
                              <td>900</td>
                            </tr>
                            <tr>
                              <td>Book Fee</td>
                              <td>500</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className='feeDisplay'>
                        <p>Non-Refundable Fee</p>
                        <Table striped bordered>
                          <tbody>
                            <tr>
                              <td>Tution Fee</td>
                              <td>7893</td>
                            </tr>
                            <tr>
                              <td>Special Fee</td>
                              <td>400</td>
                            </tr>
                            <tr>
                              <td>Lab Fee</td>
                              <td>250</td>
                            </tr>
                            <tr>
                              <td>Library Fee</td>
                              <td>125</td>
                            </tr>
                            <tr>
                              <td>Sports Fee</td>
                              <td>750</td>
                            </tr>
                            <tr>
                              <td>Enroll Fee</td>
                              <td>800</td>
                            </tr>
                            <tr>
                              <td>Exam Fee</td>
                              <td>3567</td>
                            </tr>
                            <tr>
                              <td>Complusory Fee</td>
                              <td>500</td>
                            </tr>
                            <tr>
                              <td>Book Fee</td>
                              <td>200</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className='feeDisplay'>
                        <p>Maintance Fee</p>
                        <Table striped bordered>
                          <tbody>
                            <tr>
                              <td>Tution Fee</td>
                              <td>3453</td>
                            </tr>
                            <tr>
                              <td>Special Fee</td>
                              <td>200</td>
                            </tr>
                            <tr>
                              <td>Lab Fee</td>
                              <td>230</td>
                            </tr>
                            <tr>
                              <td>Library Fee</td>
                              <td>125</td>
                            </tr>
                            <tr>
                              <td>Sports Fee</td>
                              <td>350</td>
                            </tr>
                            <tr>
                              <td>Enroll Fee</td>
                              <td>400</td>
                            </tr>
                            <tr>
                              <td>Exam Fee</td>
                              <td>1290</td>
                            </tr>
                            <tr>
                              <td>Complusory Fee</td>
                              <td>300</td>
                            </tr>
                            <tr>
                              <td>Book Fee</td>
                              <td>100</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Col>
                  </>
                )
              }
              </Row>
            </Container>
            
          </>
          :
          <>
            <h5 className='text-center'>SCHEME REPORT</h5>
            <Accordion defaultActiveKey="0" className='schemeReportList'>
              <Accordion.Item eventKey="0">
                <Accordion.Header>StateScheme-TuitionFeeConcession(SC,SCC)</Accordion.Header>
                  <Accordion.Body>
                    <Container>
                      <Row>
                        <Col lg={4}>
                          <div className='schemeListInnerSection'>
                            <p>Scheme Fee</p>
                            <h5>45000</h5>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className='schemeListInnerSection'>
                            <p>Availed By</p>
                            <h5>1234 Students</h5>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className='schemeListInnerSection'>
                            <p>Community</p>
                            <h5>MBC</h5>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>ADW-LawIncentivescheme (Final Year Law students) (SC,SCC)</Accordion.Header>
                  <Accordion.Body>
                    <Container>
                      <Row>
                        <Col lg={4}>
                          <div className='schemeListInnerSection'>
                            <p>Scheme Fee</p>
                            <h5>94300</h5>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className='schemeListInnerSection'>
                            <p>Availed By</p>
                            <h5>134 Students</h5>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className='schemeListInnerSection'>
                            <p>Community</p>
                            <h5>SC</h5>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>StateScheme-TuitionFeeConcession(ST)</Accordion.Header>
                  <Accordion.Body>
                    <Container>
                      <Row>
                        <Col lg={4}>
                          <div className='schemeListInnerSection'>
                            <p>Scheme Fee</p>
                            <h5>23789</h5>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className='schemeListInnerSection'>
                            <p>Availed By</p>
                            <h5>7534 Students</h5>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className='schemeListInnerSection'>
                            <p>Community</p>
                            <h5>SC</h5>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>State Scheme-Higher Education Special Scholarship(ST)</Accordion.Header>
                  <Accordion.Body>
                    <Container>
                      <Row>
                        <Col lg={4}>
                          <div className='schemeListInnerSection'>
                            <p>Scheme Fee</p>
                            <h5>5490</h5>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className='schemeListInnerSection'>
                            <p>Availed By</p>
                            <h5>13 Students</h5>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className='schemeListInnerSection'>
                            <p>Community</p>
                            <h5>ST</h5>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>CentralScheme-Post-MatricScholarship(ST)</Accordion.Header>
                  <Accordion.Body>
                    <Container>
                      <Row>
                        <Col lg={4}>
                          <div className='schemeListInnerSection'>
                            <p>Scheme Fee</p>
                            <h5>14300</h5>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className='schemeListInnerSection'>
                            <p>Availed By</p>
                            <h5>14 Students</h5>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className='schemeListInnerSection'>
                            <p>Community</p>
                            <h5>ST</h5>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </>
        }
        
      </Popup> 
    </div>
  )
}

export default InstituteDeptDash