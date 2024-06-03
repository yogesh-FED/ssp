import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Select from 'react-select';
import '../InstituteDeptPages/institutedeptstyle.scss'
import InstituteDeptDash from './InstituteDeptDash';
import InstituteDeptTable from './InstituteDeptTable';
import { useLocation } from 'react-router-dom';
import TableChk from '../TableChk';
import Header from '../layouts/Header';

const InstituteHome = () => {
  const location = useLocation();
  const [comp, setComp] = useState('');
  const [approvedCount, setApprovedCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [rejectedCount, setRejectedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const handleApproveCountChange = (count) => {
    setApprovedCount(count);
  };
  const handlePendingCountChange = (count) => {
    setPendingCount(count);
  };
  const handleRejectedCountChange = (count) => {
    setRejectedCount(count);
  };
  const handleTotalCountChange = (count) => {
    setTotalCount(count);
  };
  const [communityData, setCommunityData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedCommunity, setSelectedCommunity] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [initialData, setInitialData] = useState([]); 
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedScheme, setSelectedScheme] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [schemeData, setSchemeData] = useState([]);
  const handleDashboardClick = (status) => { debugger;
    setSelectedStatus(status);
  };
  const Academic_Year_options = [{
    value: "2024-2025",label: "2024-2025"
  }]
  const Courses = [
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
  const Classes = [
    {
      value: "First Year",label: "First Year"
    },
    {
      value: "Second Year",label: "Second Year"
    },
    {
      value: "Third Year",label: "Third Year"
    },
    {
      value: "Fourth Year",label: "Fourth Year"
    },
  ]
  const Departments = [
    {
      value: "ADW",label: "ADW"
    },
    {
      value: "BCMBC",label: "BCMBC"
    },
    {
      value: "Tribal",label: "Tribal"
    },
  ]
  useEffect(() => { debugger;
    switch (location.pathname) {
      case '/institute':
        setComp('institute');
        break;
      case '/department':
        setComp('department');
        break;
      default:
        setComp('Page Not Found');
    }
    const fetchData = async () => {
      try {
        const response = await axios.get('workingJson/community.json');
        setCommunityData(response.data.Community);
        const schemeResponse = await axios.get('workingJson/scheme.json');
        setSchemeData(schemeResponse.data.Schemes);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  },[location])
  const [schemeOptions, setSchemeOptions] = useState([])
  useEffect(() => { debugger;
    const options = communityData.map(community => ({
      value: community.CommunityName,
      label: community.CommunityName
    }));
    setSelectedOptions(options);
    const schemeSelOptions = schemeData.map(scheme => ({
      value: scheme.SchemeName.replace(/([a-z])([A-Z])/g, '$1 $2'),
      label: scheme.SchemeName.replace(/([a-z])([A-Z])/g, '$1 $2')
    }));
    setSchemeOptions(schemeSelOptions);
  }, [communityData, schemeData]);
  
  const handleCommunityChange = (selectedOptions) => {
    setSelectedCommunity(selectedOptions.map(option => option.value));
  };

  const handleSchemeChange = (schemeOptions) => {
    setSelectedScheme(schemeOptions.map(option => option.value));
  };

  const handleYearChange = (selectedOption) => {
    setSelectedYear(selectedOption.value);
  };

  const handleCourseChange = (selectedOptions) => {
    setSelectedCourse(selectedOptions.map(option => option.value));
  };
  return (
    <div className='instituteApproveRejectFragment'>
      {/* <h1>{comp}</h1> */}
      {/* Filters */}
      <Header />
      <Container fluid className='filterSec'>
        <Row>
          <Col lg={12}>
            {/* Dashboard */}
            <InstituteDeptDash
              approvedCount={approvedCount}
              pendingCount = {pendingCount}
              rejectedCount = {rejectedCount}
              totalCount = {totalCount}
              handleDashboardClick = { (args) => handleDashboardClick(args) }
              comp = {comp}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Row>
              <Col lg={2}>
                <Form.Group className="mb-3 instituteApproveRejectForm">
                  <div className="instituteApproveRejectFormFilters">
                    <span>Academic Year</span>
                    <Select
                      //defaultValue={Academic_Year_options}
                      //isMulti
                      options={Academic_Year_options}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={handleYearChange}
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col lg={5}>
                <Form.Group className="mb-3 instituteApproveRejectForm">
                  <div className="instituteApproveRejectFormFilters">
                  <span>Scheme</span>
                  <Select
                    //defaultValue={selectedOptions}
                    isMulti
                    options={
                      schemeOptions
                    }
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={handleSchemeChange}
                  />
                  </div>
                </Form.Group>
              </Col>
              <Col lg={3}>
                <Form.Group className="mb-3 instituteApproveRejectForm">
                  <div className="instituteApproveRejectFormFilters">
                  <span>Community</span>
                  <Select
                    //defaultValue={selectedOptions}
                    isMulti
                    options={selectedOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={handleCommunityChange}
                  />
                  </div>
                </Form.Group>
              </Col>
              <Col lg={2}>
                <Form.Group className="mb-3 instituteApproveRejectForm">
                  <div className="instituteApproveRejectFormFilters">
                    <span>Course</span>
                    <Select
                      //defaultValue={Academic_Year_options}
                      isMulti
                      options={Courses}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={handleCourseChange}
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col lg={2}>
                <Form.Group className="mb-3 instituteApproveRejectForm">
                  <div className="instituteApproveRejectFormFilters">
                    <span>Class</span>
                    <Select
                      //defaultValue={Academic_Year_options}
                      isMulti
                      options={Classes}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={handleCourseChange}
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col lg={3}>
                <Form.Group className="mb-3 instituteApproveRejectForm">
                  <div className="instituteApproveRejectFormFilters">
                    <span>Department</span>
                    <Select
                      //defaultValue={Academic_Year_options}
                      isMulti
                      options={Departments}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={handleCourseChange}
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col lg={2}>
                <Form.Group className="mb-3 instituteApproveRejectForm">
                  <div className="instituteApproveRejectFormFilters">
                    <span>Umid Id</span>
                    <Form.Control
                      type="text"
                      placeholder="Umis Id"
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col lg={2}>
                <Form.Group className="mb-3 instituteApproveRejectForm">
                  <div className="instituteApproveRejectFormFilters">
                    <span>Emis Id</span>
                    <Form.Control
                      type="text"
                      placeholder="Emis Id"
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            {/* Table */}
            <InstituteDeptTable
              selectedYear={selectedYear}
              selectedScheme={selectedScheme}
              selectedCommunity={selectedCommunity}
              selectedCourse={selectedCourse}
              onApprovedCountChange = { handleApproveCountChange } 
              onRejectedCount = { handleRejectedCountChange }
              onPendingCount = { handlePendingCountChange }
              onTotalCount = { handleTotalCountChange }
              selectedStatus = { selectedStatus }
              comp = {comp}
            />
          </Col>
        </Row>
      </Container>   
    </div>
  )
}

export default InstituteHome