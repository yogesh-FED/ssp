import React, { useState } from "react";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css'; // Import the CSS file
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



export default function FilterOne() {

    // slider one
    const [value, setValue] = useState(50);
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    // slider Income
    // const [value1, setValue1] = useState(75000);
    // const handleChange1 = (event) => {
    //     setValue1(event.target.value);
    // };

    const [value1, setValue1] = useState(100000);

    const handleChange1 = (event) => {
        setValue1(event.target.value);
    };

    const [val1, setVal1] = useState([10000, 1000000]);

    const [val0, setVal2] = useState([0, 100]);

    // typeahead
    const [selected, setSelected] = useState([]);

    return (
        <div className="row">
            <div className="mb-3">
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
                            <form>
                                <div class="row">


                                    <div className="col-lg-4 row mb-3">
                                        <label for="inputEmail3" class="col-sm-4 col-form-label lbl-color">Department</label>
                                        <div class="col-sm-8">
                                            <select class="form-select" aria-label="select Department">
                                                <option selected>Select Department</option>
                                                <option value="1">Civil Supplies and Consumer Protection Department</option>
                                                <option value="2">Welfare of Differently Abled Persons</option>
                                                <option value="3">Revenue and Disaaster Management Department</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 row mb-3">
                                        <label for="inputEmail3" class="col-sm-4 col-form-label lbl-color">Database</label>
                                        <div class="col-sm-8">
                                            <select class="form-select" aria-label="select Database">
                                                <option selected>Select Database</option>
                                                <option value="1">IFHRMS</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 row mb-3">
                                        <label for="inputEmail3" class="col-sm-4 col-form-label lbl-color">District</label>
                                        <div class="col-sm-8">
                                            <Typeahead
                                                id="basic-typeahead-example"
                                                labelKey="name"
                                                options={suggestions}
                                                placeholder="Select a district..."
                                                onChange={(selected) => setSelected(selected)}
                                                selected={selected}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-4 row mb-3">
                                        <label for="inputEmail3" class="col-sm-4 col-form-label lbl-color">Community</label>
                                        <div class="col-sm-8">
                                            <select id="inputState" className="form-select">
                                                <option>Select Community</option>
                                                <option>FC</option>
                                                <option>BC</option>
                                                <option>MBC</option>
                                                <option>DNC</option>
                                                <option>SC</option>
                                                <option>ST</option>
                                            </select>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="col-lg-5 row mb-1">
                                        <label for="inputEmail3" class="col-sm-3 col-form-label lbl-color">Marital Status</label>
                                        <div class="col-sm-9 no-wraps border-right">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions11" id="inlineRadio1111" value="option1" />
                                                <label class="form-check-label" for="inlineRadio1111">Married</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions11" id="inlineRadio222" value="option2" />
                                                <label class="form-check-label" for="inlineRadio222">Unmarried</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions11" id="inlineRadio3334" value="option3" />
                                                <label class="form-check-label" for="inlineRadio3334">Divorced</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions11" id="inlineRadio3335" value="option3" />
                                                <label class="form-check-label" for="inlineRadio3335">Separated</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions11" id="inlineRadio3336" value="option3" />
                                                <label class="form-check-label" for="inlineRadio3336">Widow / Widower</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 row mb-1">
                                        <label for="inputEmail3" class="col-sm-3 col-form-label lbl-color">Gender</label>
                                        <div class="col-sm-9 no-wraps border-right">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                <label class="form-check-label" for="inlineRadio1">Male</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                <label class="form-check-label" for="inlineRadio2">Female</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2222" value="option2" />
                                                <label class="form-check-label" for="inlineRadio2222">Third Gender</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                                <label class="form-check-label" for="inlineRadio3">Others</label>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-2 row mb-1">
                                        <label for="inputEmail3" class="col-sm-12 col-form-label lbl-color">Disability</label>
                                        <div class="col-sm-12 no-wraps">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio11" value="option1" />
                                                <label class="form-check-label" for="inlineRadio11">Yes</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio22" value="option2" />
                                                <label class="form-check-label" for="inlineRadio22">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="col-lg-3 row mb-3">
                                        {/* <div className="col-sm-2 col-form-label current-value-label lbl-color">Age: {value}</div> */}
                                        <div class="col-sm-12">
                                            {/* <div className="range-slider-container">
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max="100"
                                                    value={value}
                                                    onChange={handleChange}
                                                    className="slider"
                                                />
                                                <div className="slider-labels">
                                                    {[...Array(11).keys()].map((index) => (
                                                        <span key={index} className="slider-label">
                                                            {index * 10}
                                                        </span>
                                                    ))}
                                                </div>

                                            </div> */}

                                            <div>
                                                {/* <p><span className="form-label lbl-color">Age:</span> {val10[0]} - {val10[1]}</p>
                                                    <Range
                                                        draggableTrack
                                                        min={0}
                                                        max={100}
                                                        value={val10}
                                                        onChange={setVal2}
                                                    /> */}


                                                <div>
                                                    <p><span className="form-label lbl-color">Age:</span> {val0[0]} - {val0[1]}</p>
                                                    <Range
                                                        draggableTrack
                                                        min={0}
                                                        max={100}
                                                        value={val0}
                                                        onChange={setVal2}
                                                    />

                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-lg-3 row mb-3">


                                        <div className="ms-3">
                                            {/* <div className="col-sm-4 col-form-label current-value-label lbl-color">Income: {value1}</div> */}
                                            <div class="col-sm-12">

                                                <div>
                                                    <p><span className="form-label lbl-color">Annual:</span> {val1[0]} - {val1[1]}</p>
                                                    <Range
                                                        draggableTrack
                                                        min={10000}
                                                        max={1000000}
                                                        value={val1}
                                                        onChange={setVal1}
                                                    />

                                                </div>


                                            </div>
                                        </div>

                                    </div>




                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
