import React, { useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Popup from '../Popup/Popup';
import view from '../../assets/icons/eye.png';
import ApplyScreen from './ApplyScreen';
import StudentViewDetail from './StudentViewDetail';

const StudentEligibleScheme = () => {
  const [getRowData, setGetRowData] = useState([]);
  const [clickView, setClickView] = useState(false);
  const ViewBtn = ({ value, data, node, colDef, api, columnApi, context }) => {
    const showStudentSchemeDetail = (e) => {
      setClickView(true);
      setGetRowData(data);
    }
    return (
      <button className='viewIcon' onClick={(e) => showStudentSchemeDetail(e)}>
        {/* <img src={view} alt='view' /> */}
       <p className='applyCta'> <b><u>Apply here</u></b> </p>
      </button>
    )
  }
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => setIsOpen(true);
  const closePopup = () => {
    setIsOpen(false);
    setClickView(false);
  };
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const academic_year = currentYear - 1 - currentYear
  const [rowData, setRowData] = useState([
    { 
      Application_No: 1, 
      Scheme_Name: 'Central Scheme-Post-Matric Scholarship(ST)',
      Academic_Year: '2023-2024',
      Scheme_Amount: 60000,
      //Community: 'MBC',
      //Caste: 'Muthiriyar',
      Total_Fee: 100000
    },
    { 
      Application_No: 2, 
      Scheme_Name: 'State Scheme-Higher Education Special Scholarship(SC,SCC)',
      Academic_Year: '2023-2024',
      Scheme_Amount: 40000,
      //Community: 'BC',
      //Caste: 'Boyar',
      Total_Fee: 100000
    },
    { 
      Application_No: 3, 
      Scheme_Name: 'State Scheme-Special Post-Matric Scholarship Scheme(SCC)',
      Academic_Year: '2023-2024',
      Scheme_Amount: 25000,
      //Community: 'DNC', 
      //Caste: 'Sidhannar',
      Total_Fee: 100000
    },
  ]);

  const [columnDefs, setColumnDefs] = useState([
    {
        field: "Scheme_Name",
        width: 550,
        //checkboxSelection: true,
        // editable: true,
        // cellEditor: 'agSelectCellEditor',
        // cellEditorParams: {
        //     values: ["Tesla", "Ford", "Toyota", "Mercedes", "Fiat", "Nissan", "Vauxhall", "Volvo", "Jaguar"],
        // },
    },
    { field: "Scheme_Amount"},
    { field: "Total_Fee" },
    {
      field: "actions",
      headerName: "Actions",
      cellRenderer: ViewBtn,
      width: 150
    },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      //filter: 'agTextColumnFilter',
      //floatingFilter: true,
      //width: 200,
      suppressMovable: true
    }
  }, []);

  const gridRef = useRef();
  //const gridApiRef = useRef(null);
  const [selectAll, setSelectAll] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [appliedBtn, setAppliedBtn] = useState(false);
  const [singleApplicationOpen, setSingleApplicationOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const onGridReady = (params) => {
    gridRef.current = params.api;
  };
  // const onButtonClick = () => { debugger;
  //   openPopup();
  //   if (gridRef.current) {
  //     const selectedNodes = gridRef.current.api.getSelectedNodes();
  //     const selectedData = selectedNodes.map(node => node.data);
  //     if(selectedData.length === 0) {
  //       setAppliedBtn(false);
  //     } else {
  //       setAppliedBtn(true);
  //     }
  //     const sumOfFees = selectedData.reduce((sum, item) => sum + item.Scheme_Amount, 0);
  //     if (sumOfFees > 100000) {
  //       setErrorMessage(`Total selected Schemes exceed the maximum allowed limit of 100,000.`);
  //       setAppliedBtn(false);
  //     } else {
  //       setErrorMessage('');
  //     }
  //   }
  // };
  // const toggleSelectAll = () => {
  //   setSelectAll(!selectAll);
  //   if (!selectAll) {
  //     gridRef.current.api.selectAll();
  //   } else {
  //     gridRef.current.api.deselectAll();
  //   }
  // };
  const onRowClicked = (event) => {
    if(clickView) {
      const viewData = getRowData;
      console.log('View Data:', viewData);
      openPopup();
      } else {
      const clickedRowData = event.data;
      console.log('Row Data:', clickedRowData);
      setSelectedRows(clickedRowData);
      setSingleApplicationOpen(true);
      setClickView(false);
      openPopup();
    }
  };
  return (
    <>
      <div className="ag-theme-alpine">
        {/* <p className='selectAllSchemes'>
          <input
          type="checkbox"
          checked={selectAll}
          onChange={toggleSelectAll}
          style={{ marginBottom: 10 }}
          /> Select All Schemes
        </p> */}
        <AgGridReact
          onGridReady={onGridReady}
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection="single"
          pagination={true}
          paginationPageSize={3}
          paginationPageSizeSelector={[1, 3, 5]}
          domLayout='autoHeight'
          onRowClicked={onRowClicked}
          suppressRowDrag={true}
        />
      </div>
      {/* <p className={appliedBtn ? 'appliedBtn approveBtn' : 'approveBtn'} onClick={onButtonClick}>
        {
          appliedBtn ? 'Scheme Applied' : 'Apply Schemes'
        }
      </p> */}
      {/* <p className='approveBtn' onClick={onButtonClick}>
        Apply Schemes
      </p> */}
      {/* {
        errorMessage &&
        <div className='text-center'>
          <Popup isOpen={isOpen} closePopup={closePopup} comp='studentEligible'>
            <h5 className='errHead'>Error</h5>
            <p>{errorMessage}</p>
          </Popup>
        </div>
      }
      {
        appliedBtn &&
        <div className='text-center'>
          <Popup isOpen={isOpen} closePopup={closePopup} comp='studentEligible'>
            <h5>SCHEME APPLIED</h5>
            <p>Sent to Institute for Approval!</p>
          </Popup>
        </div>
      } */}
      {
        singleApplicationOpen &&
        <div className='text-center'>
          <Popup isOpen={isOpen} closePopup={closePopup} comp='studentEligible'>
            {/* {
              Object.keys(selectedRows).map((key, index) => (
              <div class="form-input" key={index}>
                <label>{key.replace(/_/g, ' ')}</label>
                <input class="form-input" type="input" value={selectedRows[key]} id=""/>
              </div>
              ))
            } */}
            <ApplyScreen 
              selectedRows={selectedRows} 
              closePopup={closePopup}
            />
            
          </Popup>
        </div>
      }
      {
        clickView &&
        <div className='text-center'>
          <Popup isOpen={isOpen} closePopup={closePopup} comp='studentEligible'>
            <StudentViewDetail 
              getRowData = {getRowData}
              closePopup={closePopup}
            />
            {/* {
              Object.keys(getRowData).map((key, index) => (
              <div class="form-input" key={index}>
                <label>{key.replace(/_/g, ' ')}</label>
                <input class="form-input" type="input" value={getRowData[key]} id=""/>
              </div>
              ))
            } */}
            
          </Popup>
        </div>
      }
    </>
  );
}

export default StudentEligibleScheme;