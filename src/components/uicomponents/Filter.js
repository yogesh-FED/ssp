import React, { useState } from "react";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css'; // Import the CSS file


// import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { Range } from 'rc-slider';


// Sample suggestions data
const suggestions = [
  { name: 'Ariyalur' },
  { name: 'Chengalpattu' },
  { name: 'Chennai' },
  { name: 'Coimbatore' },
  { name: 'Cuddalore' },

  { name: 'Dharmapuri' },
  { name: 'Dindigul' },
  { name: 'Erode' },
  { name: 'Kallakurichi' },
  { name: 'Kancheepuram' },

  { name: 'Kanniyakumari' },
  { name: 'Karur' },
  { name: 'Krishnagiri' },
  { name: 'Madurai' },
  { name: 'Mayiladuthurai' },

  { name: 'Nagapattinam' },
  { name: 'Namakkal' },
  { name: 'Perambalur' },
  { name: 'Pudukkottai' },
  { name: 'Ramanathapuram' },

  { name: 'Ranipet' },
  { name: 'Salem' },
  { name: 'Sivagangai' },
  { name: 'Tenkasi' },
  { name: 'Thanjavur' },

  { name: 'Theni' },
  { name: 'Nilgiris' },
  { name: 'Thiruvarur' },
  { name: 'Thoothukudi' },
  { name: 'Tiruchirappalli' },

  { name: 'Tirunelveli' },
  { name: 'Tirupathur' },
  { name: 'Tiruppur' },
  { name: 'Tiruvallur' },
  { name: 'Tiruvannamalai' },

  { name: 'Vellore' },
  { name: 'Villupuram' },
  { name: 'Virudhunagar' },
];



export default function Filter() {

  // const [minValue, setMinValue] = useState(100000);
  // const [maxValue, setMaxValue] = useState(350000);

  // const handleChange = (value) => {
  //   setMinValue(value[0]);
  //   setMaxValue(value[1]);
  // };

  const [val1, setVal1] = useState([1000, 1000000]);

  // slider
  // const [value, setValue] = useState(50);
  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  // typeahead
  const [selected, setSelected] = useState([]);

  return (
    <div className="row">




      <div className="mb-1">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body bg-light-green">
              <div className="page-header">
                <h3 className="page-title">
                  <span className="page-title-icon bg-gradient-violet text-white me-2">
                    <i className="bi bi-filter"></i>
                  </span>{" "}
                  Filters
                </h3>
              </div>





              <form className="row g-3">



                {/* <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  <label htmlFor="fromDate" className="form-label lbl-color">
                    Department
                  </label>
                  <select class="form-select" aria-label="select Department">
                    <option selected>Select Department</option>
                    <option value="1">Civil Supplies and Consumer Protection Department</option>
                    <option value="2">Welfare of Differently Abled Persons</option>
                    <option value="3">Revenue and Disaaster Management Department</option>
                  </select>
                </div> */}
                
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  <label htmlFor="inputPassword4" className="form-label lbl-color">
                    District
                  </label>
                  <Typeahead
                    id="basic-typeahead-example"
                    labelKey="name"
                    options={suggestions}
                    placeholder="Select a district..."
                    onChange={(selected) => setSelected(selected)}
                    selected={selected}
                  />


                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  <label htmlFor="toDate" className="form-label lbl-color">
                  Institute
                  </label>
                  <select class="form-select" aria-label="select Institute">
                    <option selected>Select Institute</option>
                    <option value="1">Institute 1</option>
                    <option value="1">Institute 2</option>
                    <option value="1">Institute 3</option>
                  </select>
                </div> 
                

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
