import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './allschemes.scss';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Popup from '../components/Popup/Popup'
import AllSchemeFilter from './AllSchemeFilter';
import Table from 'react-bootstrap/Table';

const AllSchemes = () => {
  const [getRowData, setGetRowData] = useState([]);
  const [clickView, setClickView] = useState(false);
  const [schemeListView, setSchemeListView] = useState(false);
  const [rowData, setRowData] = useState([
    {  
      Scheme_Name: 'Central Scheme-Post-Matric Scholarship(ST)',
      Department: 'AGRICULTURE AND FARMERS WELFARE DEPARTMENT',
      Sub_Department: 'AGRICULTURE',
    },
    {  
      Scheme_Name: 'State Scheme - Higher Education Special Scholarship (SC, SCC)',
      Department: 'ANIMAL HUSBANDRY, DAIRYING, FISHERIES',
      Sub_Department: 'HUSBANDRY',
    },
    {  
      Scheme_Name: 'State Scheme - Free Education for UG Boys(BC, MBC)',
      Department: 'Cooperation Department',
      Sub_Department: 'Cooperation',
    },
    {  
      Scheme_Name: 'State Scheme - Tuition Fee Concession (SC, SCC)',
      Department: 'Department of Chemicals  Petrochemicals',
      Sub_Department: 'Petrochemicals',
    },
    {  
      Scheme_Name: 'Central Scheme - Free Education Scheme (Degree Courses)',
      Department: 'Department of Youth Affairs and Sports',
      Sub_Department: 'Sports',
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => setIsOpen(true);
  const closePopup = () => {
    setIsOpen(false);
  };
  const ViewBtn = ({ value, data, node, colDef, api, columnApi, context }) => {
    const showStudentSchemeDetail = (e) => {
      // setClickView(true);
      // setGetRowData(data);
      openPopup();
      setSchemeListView(true);
    }
    return (
      <button className='viewIcon' onClick={(e) => showStudentSchemeDetail(e)}>
        {/* <img src={view} alt='view' /> */}
       <p className='applyCta'> <b><u>View Scheme here</u></b> </p>
      </button>
    )
  }
  const [columnDefs, setColumnDefs] = useState([
    {
        field: "Scheme_Name",
        //cellRenderer: viewIcon
    },
    { field: "Department"},
    { field: "Sub_Department"},
    {
      field: "actions",
      headerName: "Actions",
      cellRenderer: ViewBtn,
      //width: 150
    },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      //filter: 'agTextColumnFilter',
      //floatingFilter: true,
      flex: 1,
      minWidth: 100,
      resizable: true,
      suppressMovable: true
    }
  }, []);
  const gridRef = useRef();
  const onGridReady = (params) => {
    gridRef.current = params.api;
  };
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
              {/* <Col lg={3} className='filterSec'>
              <AllSchemeFilter />
              </Col> */}
              
              <Col lg={12} className='listSec'>
              {/* <h4>SCHEME LIST</h4> */}
              <div className="ag-theme-alpine allSchemeGrids">
                <AgGridReact
                  onGridReady={onGridReady}
                  ref={gridRef}
                  rowData={rowData}
                  columnDefs={columnDefs}
                  defaultColDef={defaultColDef}
                  rowSelection="single"
                  domLayout='autoHeight'
                  suppressRowDrag={true}
                />
              </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {
        schemeListView &&
        <div className=''>
          <Popup isOpen={isOpen} closePopup={closePopup} comp='studentEligible'>
            <h5 className='text-center clrChange'> <b>SCHEME DETAILS</b> </h5>
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="col-lg-12 mb-2 allschemeBr">
                    <div className="py-1">
                      <form className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                          <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Department </label>
                          <label htmlFor="toDate" className="form-label w-100 mb-0"> AGRICULTURE AND FARMERS WELFARE DEPARTMENT </label>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1 ps-0">
                          <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Sub Department </label> 
                          <label htmlFor="toDate" className="form-label w-100 mb-0"> Agriculture </label>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1 ps-0">
                          <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Scheme Name </label>
                          <label htmlFor="toDate" className="form-label w-100 mb-0"> Agri/Farm Scheme </label>
                        </div>
                        <div className="viewmore-wrap row show">
                          <h6 style={{marginTop: '1rem', borderBottom:'1px solid #ccc'}}><b>Institute Component</b></h6>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Institute Ownership </label>
                            <label htmlFor="toDate" className="form-label w-100 mb-0"> State Government </label>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Institute Category </label>
                            <label htmlFor="toDate" className="form-label w-100 mb-0"> Deemed </label>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Institute Type </label>
                            <label htmlFor="toDate" className="form-label w-100 mb-0"> Standalone </label>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> University Type </label>
                            <label htmlFor="toDate" className="form-label w-100 mb-0"> Deemed </label>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> University </label>
                            <label htmlFor="toDate" className="form-label w-100 mb-0"> Deemed </label>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Institute Name </label>
                            <label htmlFor="toDate" className="form-label w-100 mb-0"> Agri College of TN </label>
                          </div>
                          <h6 style={{marginTop: '1rem', borderBottom:'1px solid #ccc'}}><b>Course Component</b></h6>
                          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Stream </label>
                            <label htmlFor="toDate" className="form-label w-100 mb-0"> Agriculture </label>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1 notEligible">
                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Course Type </label>
                            <label htmlFor="toDate" className="form-label w-100 mb-0"> UG(PG) </label>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Medium of Instruction </label>
                            <label htmlFor="toDate" className="form-label w-100 mb-0"> English </label>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Course </label>
                            <label htmlFor="toDate" className="form-label w-100 mb-0"> B.TECH </label>
                          </div>
                          <h6 style={{marginTop: '1rem', borderBottom:'1px solid #ccc'}}><b>Socio Economic Components</b></h6>
                          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Religion </label>
                            <label htmlFor="toDate" className="form-label w-100 mb-0"> Hindu </label>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1 notEligible">
                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Community </label>
                            <label htmlFor="toDate" className="form-label w-100 mb-0"> MBC (SC-Arunthathiyar) </label>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Caste </label>
                            <label htmlFor="toDate" className="form-label w-100 mb-0"> Rajaka </label>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Gender </label>
                            <label htmlFor="toDate" className="form-label w-100 mb-0"> Male </label>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Income </label>
                            <label htmlFor="toDate" className="form-label w-100 mb-0"> 1,20,000 </label>
                          </div>
                          <h6 style={{marginTop: '1rem', borderBottom:'1px solid #ccc'}}><b>Maintance Component</b></h6>
                          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1 notEligible">
                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Residential Status </label>
                            <label htmlFor="toDate" className="form-label w-100 mb-0"> Hosteller(Day-Scholar) </label>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Disability Status </label>
                            <label htmlFor="toDate" className="form-label w-100 mb-0"> Yes </label>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Disability Category </label>
                            <label htmlFor="toDate" className="form-label w-100 mb-0"> Blindness </label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Popup>
        </div>
      }
    </div>
  )
}

export default AllSchemes