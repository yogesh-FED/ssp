import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './institutedeptstyle.scss';
import Form from 'react-bootstrap/Form';
import Popup from '../Popup/Popup';
import Table from 'react-bootstrap/Table';
import view from '../../assets/icons/eye.png';
import { Container, Row, Col } from 'react-bootstrap';

const InstituteTable = (props) => {
  const [rejectAllPop, setRejectAllPop] = useState(false);
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const academicYearStartMonth = 4;
  const academicYear = currentDate.getMonth() < academicYearStartMonth
  ? currentYear - 1 + '-' + currentYear
  : currentYear + '-' + (currentYear + 1);
  console.log(academicYear);
  const [rowData, setRowData] = useState([
    { 
      Sno: 1, 
      Scheme_Name: 'Central Scheme-Post-Matric Scholarship(ST)',
      academicYear: academicYear,
      Scheme_Amount: 60000,
      Community: 'BC-Others',
      Caste: 'Muthiriyar',
      Total_Fee: 100000,
       Class: "First Year",
       Department: "ADW",
      Income_verfied: "No",
      Community_Verified: "Yes",
      Disablity: "Yes",
      Disability_Details:"Deaf",
      Disability_Level: "50%",
      Income_Certificate_Number: "INVW908",
      Commiunity_Certificate_Number: "AMKLJ456",
      Umis: 120983534,
      Emis: 3096453432,
      StudentContact: 9840504456,
       Bank_details: '993442423424234',
       IFSC_Code: 'UI000B5678',
      Institute_Name:  'DR MGR FISHERIES COLLEGE AND RESEARCH INSTITUTE, THALAINAYERU',
      Course:  'EEE',
      Student_Name:  'Suresh',
      Status: 'Approved'
    },
    { 
      Sno: 2, 
      Scheme_Name: 'State Scheme-Higher Education Special Scholarship(SC,SCC)',
      academicYear: academicYear,
      Scheme_Amount: 40000,
      Community: 'BC-Muslim',
      Caste: 'Boyar',
      Total_Fee: 100000,
       Class: "Second Year",
       Department: "Tribal",
      Income_verfied: "No",
      Community_Verified: "Yes",
      Disablity: "Yes",
      Disability_Details:"Deaf",
      Disability_Level: "50%",
      Income_Certificate_Number: "INVW908",
      Commiunity_Certificate_Number: "AMKLJ456",
      Umis: 120983534,
      Emis: 3096453432,
      StudentContact: 9840504456,
       Bank_details: '993442423424234',
       IFSC_Code: 'UI000B5678',
      Institute_Name:  'FISHERIES COLLEGE AND RESEARCH INSTITUTE',
      Course:  'MCA',
      Student_Name:  'Ramesh',
      Status: 'Approved'
    },
    { 
      Sno: 3, 
      Scheme_Name: 'State Scheme-Special Post-Matric Scholarship Scheme(SCC)',
      academicYear: academicYear,
      Scheme_Amount: 15000,
      Community: 'OC', 
      Caste: 'Sidhannar',
      Total_Fee: 100000,
       Class: "Third Year",
       Department: "BCMBC",
      Income_verfied: "No",
      Community_Verified: "Yes",
      Disablity: "Yes",
      Disability_Details:"Deaf",
      Disability_Level: "50%",
      Income_Certificate_Number: "INVW908",
      Commiunity_Certificate_Number: "AMKLJ456",
      Umis: 120983534,
      Emis: 3096453432,
      StudentContact: 9840504456,
       Bank_details: '993442423424234',
       IFSC_Code: 'UI000B5678',
      Institute_Name:  'AISHWARYA POLYTECHNIC COLLEGE (803)',
      Course:  'BCA',
      Student_Name:  'Deepak',
      Status: 'Pending'
    },
    { 
      Sno: 4, 
      Scheme_Name: 'Central Scheme-Post-Matric Scholarship(4)',
      academicYear: academicYear,
      Scheme_Amount: 6000,
      Community: 'ST',
      Caste: 'Muthiriyar',
      Total_Fee: 100000,
       Class: "First Year",
       Department: "ADW",
      Income_verfied: "No",
      Community_Verified: "Yes",
      Disablity: "Yes",
      Disability_Details:"Deaf",
      Disability_Level: "50%",
      Income_Certificate_Number: "INVW908",
      Commiunity_Certificate_Number: "AMKLJ456",
      Umis: 120983534,
      Emis: 3096453432,
      StudentContact: 9840504456,
       Bank_details: '993442423424234',
       IFSC_Code: 'UI000B5678',
      Institute_Name:  'K.K.S. MANI POLYTECHNIC COLLEGE (789)',
      Course:  'Msc',
      Student_Name:  'Praveen',
      Status: 'Pending'
    },
    { 
      Sno: 5, 
      Scheme_Name: 'Central Scheme-Post-Matric(5)',
      academicYear: academicYear,
      Scheme_Amount: 60040,
      Community: 'NOT APPLICABLE',
      Caste: 'Muthiriyar',
      Total_Fee: 100000,
       Class: "Fourth Year",
       Department: "Tribal",
      Income_verfied: "No",
      Community_Verified: "Yes",
      Disablity: "Yes",
      Disability_Details:"Deaf",
      Disability_Level: "50%",
      Income_Certificate_Number: "INVW908",
      Commiunity_Certificate_Number: "AMKLJ456",
      Umis: 120983534,
      Emis: 3096453432,
      StudentContact: 9840504456,
       Bank_details: '993442423424234',
       IFSC_Code: 'UI000B5678',
      Institute_Name:  'ARULMIGU PALANIANDAVAR POLYTECHNIC COLLEGE (222)',
      Course:  'Bsc',
      Student_Name:  'Muthu',
      Status: 'Rejected'
    },
    { 
      Sno: 6, 
      Scheme_Name: 'Central Scheme-Post-Matric(6)',
      academicYear: academicYear,
      Scheme_Amount: 1240,
      Community: 'MBC',
      Caste: 'Muthiriyar',
      Total_Fee: 100000,
       Class: "First Year",
       Department: "BCMBC",
      Income_verfied: "No",
      Community_Verified: "Yes",
      Disablity: "Yes",
      Disability_Details:"Deaf",
      Disability_Level: "50%",
      Income_Certificate_Number: "INVW908",
      Commiunity_Certificate_Number: "AMKLJ456",
      Umis: 120983534,
      Emis: 3096453432,
      StudentContact: 9840504456,
       Bank_details: '993442423424234',
       IFSC_Code: 'UI000B5678',
      Institute_Name:  'KAMATCHI POLYTECHNIC COLLEGE (890)',
      Course:  'CSE',
      Student_Name:  'Dinesh',
      Status: 'Approved'
    },
    { 
      Sno: 7, 
      Scheme_Name: 'Central Scheme-Post-Matric(7)',
      academicYear: academicYear,
      Scheme_Amount: 15400,
      Community: 'SC-Arunthathiyar',
      Caste: 'Muthiriyar',
      Total_Fee: 100000,
       Class: "Second Year",
       Department: "ADW",
      Income_verfied: "No",
      Community_Verified: "Yes",
      Disablity: "Yes",
      Disability_Details:"Deaf",
      Disability_Level: "50%",
      Income_Certificate_Number: "INVW908",
      Commiunity_Certificate_Number: "AMKLJ456",
      Umis: 120983534,
      Emis: 3096453432,
      StudentContact: 9840504456,
       Bank_details: '993442423424234',
       IFSC_Code: 'UI000B5678',
      Institute_Name:  'CHANDY POLYTECHNIC COLLEGE (573)',
      Course:  'Bcom',
      Student_Name:  'Rajesh',
      Status: 'Pending'
    },
    { 
      Sno: 8, 
      Scheme_Name: 'Central Scheme-Post-Matric(8)',
      academicYear: academicYear,
      Scheme_Amount: 60040,
      Community: 'SC-Others',
      Caste: 'Muthiriyar',
      Total_Fee: 100000,
       Class: "Third Year",
       Department: "Tribal",
      Income_verfied: "No",
      Community_Verified: "Yes",
      Disablity: "Yes",
      Disability_Details:"Deaf",
      Disability_Level: "50%",
      Income_Certificate_Number: "INVW908",
      Commiunity_Certificate_Number: "AMKLJ456",
      Umis: 120983534,
      Emis: 3096453432,
      StudentContact: 9840504456,
       Bank_details: '993442423424234',
       IFSC_Code: 'UI000B5678',
      Institute_Name:  'SEIKALATHUR KAMATCHIAMMAN POLYTECHNIC COLLEGE (346)',
      Course:  'Mcom',
      Student_Name:  'Balamurugan',
      Status: 'Rejected'
    },
    { 
      Sno: 9, 
      Scheme_Name: 'Central Scheme-Post-Matric(9)',
      academicYear: academicYear,
      Scheme_Amount: 3040,
      Community: 'DNC',
      Caste: 'Muthiriyar',
      Total_Fee: 100000,
       Class: "First Year",
       Department: "BCMBC",
      Income_verfied: "No",
      Community_Verified: "Yes",
      Disablity: "Yes",
      Disability_Details:"Deaf",
      Disability_Level: "50%",
      Income_Certificate_Number: "INVW908",
      Commiunity_Certificate_Number: "AMKLJ456",
      Umis: 120983534,
      Emis: 3096453432,
      StudentContact: 9840504456,
       Bank_details: '993442423424234',
       IFSC_Code: 'UI000B5678',
      Institute_Name:  'PONNAIYAH RAMAJAYAM POLYTECHNIC COLLEGE (586)',
      Course:  'MCA',
      Student_Name:  'Depash',
      Status: 'Rejected'
    },
    { 
      Sno: 10, 
      Scheme_Name: 'Central Scheme-Post-Matric(10)',
      academicYear: "2025-2026",
      Scheme_Amount: 3040,
      Community: 'DNC',
      Caste: 'Muthiriyar',
      Total_Fee: 100000,
       Class: "Fourth Year",
       Department: "ADW",
      Income_verfied: "No",
      Community_Verified: "Yes",
      Disablity: "Yes",
      Disability_Details:"Deaf",
      Disability_Level: "50%",
      Income_Certificate_Number: "INVW908",
      Commiunity_Certificate_Number: "AMKLJ456",
      Umis: 120983534,
      Emis: 3096453432,
      StudentContact: 9840504456,
       Bank_details: '993442423424234',
       IFSC_Code: 'UI000B5678',
      Institute_Name:  'PASUMPON NETHAJI POLYTECHNIC COLLEGE (351)',
      Course:  'MCA',
      Student_Name:  'Suryakumar',
      Status: 'Rejected'
    },
    { 
      Sno: 11, 
      Scheme_Name: 'Central Scheme-Post-Matric(11)',
      academicYear: academicYear,
      Scheme_Amount: 3140,
      Community: 'DNC',
      Caste: 'Muthiriyar',
      Total_Fee: 100000,
       Class: "First Year",
       Department: "Tribal",
      Income_verfied: "No",
      Community_Verified: "Yes",
      Disablity: "Yes",
      Disability_Details:"Deaf",
      Disability_Level: "50%",
      Income_Certificate_Number: "INVW908",
      Commiunity_Certificate_Number: "AMKLJ456",
      Umis: 120983534,
      Emis: 3096453432,
      StudentContact: 9840504456,
       Bank_details: '993442423424234',
       IFSC_Code: 'UI000B5678',
      Institute_Name:  'UNION CHRISTIAN POLYTECHNIC COLLEGE (775)',
      Course:  'B.Arch',
      Student_Name:  'Rahul',
      Status: 'Pending'
    },
    { 
      Sno: 12, 
      Scheme_Name: 'Central Scheme-Post-Matric(12)',
      academicYear: academicYear,
      Scheme_Amount: 30410,
      Community: 'OC',
      Caste: 'Muthiriyar',
      Total_Fee: 100000,
       Class: "Second Year",
       Department: "BCMBC",
      Income_verfied: "No",
      Community_Verified: "Yes",
      Disablity: "Yes",
      Disability_Details:"Deaf",
      Disability_Level: "50%",
      Income_Certificate_Number: "INVW908",
      Commiunity_Certificate_Number: "AMKLJ456",
      Umis: 120983534,
      Emis: 3096453432,
      StudentContact: 9840504456,
       Bank_details: '993442423424234',
       IFSC_Code: 'UI000B5678',
      Institute_Name:  'RUDHRAVENI MUTHUSAMY POLYTECHNIC COLLEGE (510)',
      Course:  'BA Tamil',
      Student_Name:  'Vinothkumar',
      Status: 'Pending'
    },
  ]);
  
  const { selectedStatus } = props;
  const [filteredData, setFilteredData] = useState([]);
  let filtered = rowData;
  useEffect(() => {
    if (selectedStatus) {
      if (selectedStatus !== 'Total') {
        filtered = rowData.filter(row => row.Status === selectedStatus);
      }
      if (props.selectedYear) {
        filtered = filtered.filter(row => row.academicYear === props.selectedYear);
      }

      if (props.selectedScheme.length > 0) {
        filtered = filtered.filter(row => props.selectedScheme.includes(row.Scheme_Name));
      }

      if (props.selectedCommunity.length > 0) {
        filtered = filtered.filter(row => props.selectedCommunity.includes(row.Community));
      }

      if (props.selectedCourse.length > 0) {
        filtered = filtered.filter(row => props.selectedCourse.includes(row.Course));
      }
    } else {
      if (props.selectedYear) {
        filtered = filtered.filter(row => row.academicYear === props.selectedYear);
      }

      if (props.selectedScheme.length > 0) {
        filtered = filtered.filter(row => props.selectedScheme.includes(row.Scheme_Name));
      }

      if (props.selectedCommunity.length > 0) {
        filtered = filtered.filter(row => props.selectedCommunity.includes(row.Community));
      }

      if (props.selectedCourse.length > 0) {
        filtered = filtered.filter(row => props.selectedCourse.includes(row.Course));
      }
    }
    setFilteredData(filtered);
  }, [rowData, selectedStatus, props.selectedCourse, props.selectedYear, props.selectedScheme, props.selectedCommunity]);

  useEffect(() => {
    setColumnDefs(generateColumnDefs());
    //const dataSource = props.comp === "department" ? DepartmentRowData : rowData;
    const dataSource = rowData;
    props.onTotalCount(dataSource.length);
    props.onPendingCount(filtered.filter(row => row.Status === 'Pending').length);
    props.onRejectedCount(filtered.filter(row => row.Status === 'Rejected').length);
    props.onApprovedCountChange(filtered.filter(row => row.Status === 'Approved').length);
  }, [rowData, props.onPendingCount, props.onRejectedCount, props.onApprovedCountChange, props.comp]);
  const Setstatus = ({ value, data, node, colDef, api, columnApi, context }) => {
    return (
      <>
        <p className= {data.Status === 'Pending' ? 'pending defSty' : data.Status === 'Approved' ? 'approved defSty' : data.Status === 'Rejected' ? 'rejected defSty' : ''}> {
          data.Status === 'Pending' ? 'Pending' : data.Status === 'Approved' ? 'Approved' : data.Status === 'Rejected' ? 'Rejected' : ''
        } </p>
      </>
    );
  }
  const [getRowData, setGetRowData] = useState([]);
  const ViewBtn = ({ value, data, node, colDef, api, columnApi, context }) => {
    const showStudentSchemeDetail = () => {  debugger;
      setIsOpen(true);
      setGetRowData(data);
    }
    return (
      <button className='viewIcon' onClick={showStudentSchemeDetail}>
        <img src={view} alt='view' />
      </button>
    )
  }
  console.log('getRowData', getRowData);
  const generateColumnDefs = () => {
    let baseColumns = [
      {
        field: "Student_Name",
        checkboxSelection: true,
        width: 150
      },
      { field: "academicYear", width: 150 },
      { field: "Class", width: 150 },
      { field: "Course", width: 150 },
      { field: "Department", width: 150 },
      { field: "Umis", width: 150 },
      { field: "Emis", width: 150 },
      { field: "Scheme_Name", width: 150 },
      { field: "Scheme_Amount", width: 150 },
      { field: "Community", width: 150 },
      { field: "Caste", width: 150 },
      { field: "Total_Fee", width: 150 },
      { field: "Status", cellRenderer: Setstatus, width: 150 },
      {
        field: "actions",
        headerName: "Actions",
        cellRenderer: ViewBtn,
        width: 150
      },
    ];

    if (props.comp === 'department') {
      baseColumns.splice(2, 0, { field: "Institute_Name" });
    }

    return baseColumns;
  };

  const [columnDefs, setColumnDefs] = useState(generateColumnDefs);
  const defaultColDef = useMemo(() => {
    return {
      //filter: 'agTextColumnFilter',
      //floatingFilter: true,
      //flex: 2,
    }
  }, []);

  const gridRef = useRef();
  const [selectAll, setSelectAll] = useState(false);
  const rejectAllReason = () => {
    setRejectAllPop(true);
  }
  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      gridRef.current.api.selectAll();
    } else {
      gridRef.current.api.deselectAll();
    }
  };
  const onButtonClick = () => {
    openPopup();
  };
  const [rejectReason, setRejectReason] = useState(false);
  const handleRejectClick = () => {
    if(props.comp === 'department') {
      setRejectReason(false);
    }
    else {
      setRejectReason(true);
    }
  }
  const handleCancel = () => {
    setRejectReason(false);
    setRejectAllPop(false);
  }
  return (
    <div className='instituteTableSec'>
      <div className="ag-theme-alpine">
        <AgGridReact
          ref={gridRef}
          // rowData={
          //   props.comp === 'department'
          //   ?
          //   DepartmentRowData
          //   :
          //   filteredData
          // }
          rowData=
          {
            selectedStatus === ''
            ?
            'No Data'
            :
            filteredData
          }
          //rowData={filteredData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection="multiple"
          suppressRowClickSelection={true}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[1, 3, 5, 10, 12]}
          domLayout='autoHeight'
        />
      </div>
      {
        rejectAllPop && 
        <>
          <div className='rejectReason rejAll'>
            <Form>
              <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Reject Reason</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
            <div className='formSubmit'>
              <span className='save'>Save</span>
              <span className='cancel' onClick={handleCancel}>Cancel</span>
            </div>
          </div>
        </>
      }
      <Popup isOpen={isOpen} closePopup={closePopup} comp={'institute'}>
        <Container>
          <Row className='approveRejDetails'>
            <Col lg={12}>
              <div className='borMar'>
                <p className='head'> <b>Academic Year</b> </p>
                <span> {getRowData.academicYear} </span>
              </div>
              <div className='borMar'>
                <p className='head'> <b>Basic Details</b> </p>
                <Row>
                  <Col lg={4} className='marBt'>
                    <span><b>Student Name</b></span> <br/>
                    <p className='fieldVal'> {getRowData.Student_Name} </p>
                  </Col>
                  <Col lg={4} className='marBt'>
                    <span><b>Contact</b></span> <br/>
                    <p className='fieldVal'> {getRowData.StudentContact} </p>
                  </Col>
                  <Col lg={4} className='marBt'>
                    <span><b>Umis</b></span> <br/>
                    <p className='fieldVal'> {getRowData.Umis} </p>
                  </Col>
                  <Col lg={4} className='marBt'>
                    <span><b>Emis</b></span> <br/>
                    <p className='fieldVal'> {getRowData.Emis} </p>
                  </Col>
                  <Col lg={4} className='marBt'>
                    <span><b>Institute</b></span> <br/>
                    <p className='fieldVal'> {getRowData.Institute_Name} </p>
                  </Col>
                  <Col lg={4} className='marBt'>
                    <span><b>Community</b></span> <br/>
                    <p className='fieldVal'> {getRowData.Community} </p>
                  </Col>
                  <Col lg={4} className='marBt'>
                    <span><b>Caste</b></span> <br/>
                    <p className='fieldVal'> {getRowData.Caste} </p>
                  </Col>
                </Row>
              </div>
              <div className='borMar'>
                <p className='head'> <b>Certificate Details</b> </p>
                <Row>
                  <Col lg={4} className='marBt'>
                    <span><b>Income Certificate Number</b></span> <br/>
                    <p className='fieldVal'> {getRowData.Income_Certificate_Number} </p>
                  </Col>
                  <Col lg={4} className='marBt'>
                    <span><b>Income verfied</b></span> <br/>
                    <p className='fieldVal'> {getRowData.Income_verfied} </p>
                  </Col>
                  <Col lg={4} className='marBt'>
                    <span><b>Community Certificate Number</b></span> <br/>
                    <p className='fieldVal'> {getRowData.Commiunity_Certificate_Number} </p>
                  </Col>
                  <Col lg={4} className='marBt'>
                    <span><b>Community Verified</b></span> <br/>
                    <p className='fieldVal'> {getRowData.Community_Verified} </p>
                  </Col>
                </Row>
              </div>
              <div className='borMar'>
                <p className='head'> <b>Scheme Details</b> </p>
                <Row>
                  <Col lg={6} className='marBt'>
                    <span><b>Scheme Name</b></span> <br/>
                    <p className='fieldVal'> {getRowData.Scheme_Name} </p>
                  </Col>
                  <Col lg={4} className='marBt'>
                    <span><b>Scheme Amount</b></span> <br/>
                    <p className='fieldVal'> {getRowData.Scheme_Amount} </p>
                  </Col>
                </Row>
              </div>
              <div className='borMar'>
                <p className='head'> <b>Bank Details</b> </p>
                <Row>
                  <Col lg={4} className='marBt'>
                    <span><b>Account Number</b></span> <br/>
                    <p className='fieldVal'> {getRowData.Bank_details} </p>
                  </Col>
                  <Col lg={4} className='marBt'>
                    <span><b>IFSC</b></span> <br/>
                    <p className='fieldVal'> {getRowData.IFSC_Code} </p>
                  </Col>
                  <Col lg={4} className='marBt'>
                    <span><b>Branch</b></span> <br/>
                    <p className='fieldVal'> {getRowData.Branch} </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        {
          rejectReason && (
            <div className='rejectReason'>
              <Form>
                <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Reject Reason</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
              <div className='formSubmit'>
                <span className='save' onClick={closePopup}>Save</span>
                <span className='cancel' onClick={handleCancel}>Cancel</span>
              </div>
            </div>
          )
        }
        {
          props.comp === 'department'
          ?
          <div className='rejRemark'>
            <span><b>Reject Reason </b>:</span>
            <p>Certificate is not verfied</p>
          </div>
          :
          ''
        }
        <div className='instBtn'>
          <span className='Inst_approve' onClick={closePopup}>Recommend</span>
          <span className='Inst_reject' onClick={handleRejectClick}>Reject</span>
        </div>
      </Popup>
        <div className='instBtn mt-3'>
          <span className='Inst_approve' onClick={toggleSelectAll}>Recommend All</span>
          <span className='Inst_reject' onClick={rejectAllReason}>Reject All</span>
        </div>
    </div>
  );
}

export default InstituteTable