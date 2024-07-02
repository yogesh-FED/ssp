import React, { useEffect, useState } from 'react';
import { Card, ListGroup, Container, Row, Col, Form } from 'react-bootstrap';

var savedData;
const SchemeListDetails = () => {
    const [editMode, setEditMode] = useState(false); // State for edit mode
    const [formData, setFormData] = useState({});

    // Load data from localStorage on component mount
    useEffect(() => {
        savedData = localStorage.getItem('schemeDetails');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEdit = () => {
        // localStorage.setItem('schemeDetails', JSON.stringify(formData));
        setEditMode(true);
    };

    const handleSave = () => {
        // localStorage.setItem('schemeDetails', JSON.stringify(formData));
        localStorage.setItem('schemeDetails', JSON.stringify(formData));
        setEditMode(false); // Disable edit mode after saving

        alert(JSON.stringify(localStorage) + localStorage);
    };

    return (
        <>
            <Col>

                <div class="container mt-5">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h5 class="mb-0">Scheme Details</h5>
                        <div>
                            <button type="button" class="btn btn-primary" style={{ backgroundColor: '#331F8E', color: 'white', marginRight: '10px' }}
                             onClick={() => editMode ? handleSave() : handleEdit() }>{editMode ? 'Save' : 'Edit'}
                            </button>
                            <button type="button" class="btn btn-success" style={{ backgroundColor: '#331F8E', color: 'white' }} onClick={() => handleSave()}>Delete</button>
                        </div>
                    </div>
                </div>


            </Col>
            {/*       
            <Col>
        <div class="align-self-end ml-auto">
        <button class="position-relative top-100 start-100 translate-middle btn text-white" style={{ background: "#331F8E"}}>Edit</button>
        </div>
            </Col> */}

            <Container>
                <Row>
                    <Col lg={12}>

                        <>

                            <div className="col-lg-12 mb-2 allschemeBr">
                                <div className="py-1">
                                    <form className="row">
                                        {editMode ?
                                            <>
                                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                    <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Department </label>
                                                    <input type="text" className="form-control removespecialchar"
                                                        name="department"
                                                        value={formData.department}
                                                        onChange={handleInputChange}
                                                        placeholder="Department Name" />
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                    <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Sub Department</label>
                                                    <input type="text" className="form-control removespecialchar"
                                                        name="subdepartment"
                                                        value={formData.subdepartment}
                                                        onChange={handleInputChange}
                                                        placeholder="Sub Department Name" />
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                    <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Scheme Name</label>
                                                    <input type="text" className="form-control removespecialchar"
                                                        name="schemeName"
                                                        value={formData.schemeName}
                                                        onChange={handleInputChange}
                                                        placeholder="Scheme Name" />
                                                </div>

                                                <div className="viewmore-wrap row show">
                                                    <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Institute Component</b></h6>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Institute Ownership</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="instituteOwnership"
                                                            value={formData.instituteOwnership}
                                                            onChange={handleInputChange}
                                                            placeholder="Institute Ownership" />
                                                    </div>

                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Institute Category</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="instituteCategory"
                                                            value={formData.instituteCategory}
                                                            onChange={handleInputChange}
                                                            placeholder="Institute Category" />
                                                    </div>

                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Institute Type</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="instituteType"
                                                            value={formData.instituteType}
                                                            onChange={handleInputChange}
                                                            placeholder="Institute Type" />
                                                    </div>

                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Institute Type</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="instituteName"
                                                            value={formData.instituName}
                                                            onChange={handleInputChange}
                                                            placeholder="Institute Name" />
                                                    </div>

                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">University Type</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="universityType"
                                                            value={formData.universityType}
                                                            onChange={handleInputChange}
                                                            placeholder="University Type" />
                                                    </div>


                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">University </label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="university"
                                                            value={formData.university}
                                                            onChange={handleInputChange}
                                                            placeholder="University" />
                                                    </div>
                                                </div>


                                                <div className="viewmore-wrap row show">
                                                    <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Course Component</b></h6>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Stream</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="stream"
                                                            value={formData.stream}
                                                            onChange={handleInputChange}
                                                            placeholder="Stream" />
                                                    </div>

                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Course Type</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="courseType"
                                                            value={formData.courseType}
                                                            onChange={handleInputChange}
                                                            placeholder="courseType" />
                                                    </div>

                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Medium of Instruction</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="mediumOfInstruction"
                                                            value={formData.mediumOfInstruction}
                                                            onChange={handleInputChange}
                                                            placeholder="Medium of Instruction" />
                                                    </div>

                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Course</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="course"
                                                            value={formData.course}
                                                            onChange={handleInputChange}
                                                            placeholder="Course" />
                                                    </div>
                                                </div>


                                                <div className="viewmore-wrap row show">
                                                    <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Socio Economic Component</b></h6>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Religion</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="religion"
                                                            value={formData.religion}
                                                            onChange={handleInputChange}
                                                            placeholder="Religion" />
                                                    </div>

                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Community</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="community"
                                                            value={formData.community}
                                                            onChange={handleInputChange}
                                                            placeholder="community" />
                                                    </div>

                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Caste</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="caste"
                                                            value={formData.caste}
                                                            onChange={handleInputChange}
                                                            placeholder="caste" />
                                                    </div>

                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Gender</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="gender"
                                                            value={formData.gender}
                                                            onChange={handleInputChange}
                                                            placeholder="gender" />
                                                    </div>

                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Income</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="income"
                                                            value={formData.income}
                                                            onChange={handleInputChange}
                                                            placeholder="income"/>
                                                    </div>
                                                </div>

                                                <div className="viewmore-wrap row show">
                                                    <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Maintenance Component</b></h6>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Residential Status</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="residentialStatus"
                                                            value={formData.residentialStatus}
                                                            onChange={handleInputChange}
                                                            placeholder="Residential Status" />
                                                    </div>

                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Disability Status</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="disabilityStatus"
                                                            value={formData.disabilityStatus}
                                                            onChange={handleInputChange}
                                                            placeholder="Disability Status" />
                                                    </div>

                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Disability Category</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="disabilityCategory"
                                                            value={formData.disabilityCategory}
                                                            onChange={handleInputChange}
                                                            placeholder="Disability Category" />
                                                    </div>
                                                </div>

                                            </>
                                            : (
                                                <>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Department </label>
                                                        <p className="card-text">{formData.department}</p>
                                                    </div>

                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Sub Department </label>
                                                        <p className="card-text">{formData.subdepartment}</p>
                                                    </div>

                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Scheme Name </label>
                                                        <p className="card-text">{formData.schemeName}</p>
                                                    </div>

                                                    <div className="viewmore-wrap row show">
                                                        <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Institute Component</b></h6>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Institute Ownership </label>
                                                            <p className="card-text">{formData.instituteOwnership}</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Institute Category </label>
                                                            <p className="card-text">{formData.instituteCategory}</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Institute Type</label>
                                                            <p className="card-text">{formData.instituteType}</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">University Type</label>
                                                            <p className="card-text">{formData.universityType}</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">University </label>
                                                            <p className="card-text">{formData.university}</p>
                                                        </div>

                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Institute Ownership </label>
                                                            <p className="card-text">{formData.instituteOwnership}</p>
                                                        </div>
                                                    </div>

                                                    <div className="viewmore-wrap row show">
                                                        <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Course Component</b></h6>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Stream</label>
                                                            <p className="card-text">{formData.stream}</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Course Type</label>
                                                            <p className="card-text">{formData.courseType}</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Medium of Instruction</label>
                                                            <p className="card-text">{formData.mediumOfInstruction}</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Course</label>
                                                            <p className="card-text">{formData.course}</p>
                                                        </div>
                                                    </div>

                                                    <div className="viewmore-wrap row show">
                                                        <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Socio Economic Component</b></h6>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Religion</label>
                                                            <p className="card-text">{formData.religion}</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Community</label>
                                                            <p className="card-text">{formData.community}</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Caste</label>
                                                            <p className="card-text">{formData.caste}</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Gender</label>
                                                            <p className="card-text">{formData.gender}</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Income</label>
                                                            <p className="card-text">{formData.income}</p>
                                                        </div>
                                                    </div>
                                                    <div className="viewmore-wrap row show">
                                                        <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Maintenance Component</b></h6>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Residential Status</label>
                                                            <p className="card-text">{formData.residentialStatus}</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Disability Status</label>
                                                            <p className="card-text">{formData.disabilityStatus}</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Disability Category</label>
                                                            <p className="card-text">{formData.disabilityCategory}</p>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
    
                                    </form>




                                </div>
                            </div>
                        </>

                        {/* <div className="col-lg-12 mb-2 allschemeBr">
                            <div className="py-1">
                                <form className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Department </label>
                                        <input type="text" className="form-control removespecialchar" placeholder="Department Name" />
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1 ps-0">
                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Sub Department </label>
                                        <input type="text" className="form-control removespecialchar" placeholder="Sub Department" />
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1 ps-0">
                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Scheme Name </label>
                                        <input type="text" className="form-control removespecialchar" placeholder="Scheme Name" />
                                    </div>
                                    <div className="viewmore-wrap row show">
                                        <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Institute Component</b></h6>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Institute Ownership </label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Institute Ownership" />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Institute Category </label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Institute Category" />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Institute Type </label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Institute Type" />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> University Type </label>
                                            <input type="text" className="form-control removespecialchar" placeholder="University Type" />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> University </label>
                                            <input type="text" className="form-control removespecialchar" placeholder="University" />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Institute Name </label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Institute Name" />
                                        </div>
                                        <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Course Component</b></h6>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Stream </label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Stream" />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1 notEligible">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Course Type </label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Course Type" />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Medium of Instruction </label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Medium of Instruction" />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Course </label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Course" />
                                        </div>
                                        <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Socio Economic Components</b></h6>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Religion </label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Religion" />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1 notEligible">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Community </label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Community" />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Caste </label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Caste" />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Gender </label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Gender" />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Income </label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Income" />
                                        </div>
                                        <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Maintance Component</b></h6>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1 notEligible">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Residential Status </label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Residential Status" />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Disability Status </label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Disability Status" />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Disability Category </label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Disability Category" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div> */}
                    </Col>
                </Row>
            </Container>

            {/* fees details container */}

            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="col-lg-12 mb-2 allschemeBr">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                        <h5 style={{ marginTop: '1rem' }}><b>Fees Details</b></h5>
                                    </div>
                            <div className="py-1">
                                <form className="row">
                                {editMode ?
                                            <>
                                                <div className="viewmore-wrap row show">
                                            <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Exam Fees</b></h6>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Scholarship Amount</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="exmscholarshipAmount"
                                                            value={formData.exmscholarshipAmount}
                                                            onChange={handleInputChange}
                                                            placeholder="Scholarship Amount" />
                                                    </div>

                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Fees Type</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="exmfeesType"
                                                            value={formData.exmfeesType}
                                                            onChange={handleInputChange}
                                                            placeholder="Fees Type" />
                                                    </div>


                                                    <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Tution Fees</b></h6>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Scholarship Amount</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="tutnscholarshipAmount"
                                                            value={formData.tutnscholarshipAmount}
                                                            onChange={handleInputChange}
                                                            placeholder="Scholarship Amount" />
                                                    </div>

                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Fees Type</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="tutnfeesType"
                                                            value={formData.tutnfeesType}
                                                            onChange={handleInputChange}
                                                            placeholder="Fees Type" />
                                                    </div>

                                                    <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Special Fees</b></h6>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Scholarship Amount</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="spclscholarshipAmount"
                                                            value={formData.spclscholarshipAmount}
                                                            onChange={handleInputChange}
                                                            placeholder="Scholarship Amount" />
                                                    </div>

                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Fees Type</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="spclfeesType"
                                                            value={formData.spclfeesType}
                                                            onChange={handleInputChange}
                                                            placeholder="Fees Type" />
                                                    </div>



                                                    <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Library Fees</b></h6>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Scholarship Amount</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="libscholarshipAmount"
                                                            value={formData.libscholarshipAmount}
                                                            onChange={handleInputChange}
                                                            placeholder="Scholarship Amount" />
                                                    </div>

                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Fees Type</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="libfeesType"
                                                            value={formData.libfeesType}
                                                            onChange={handleInputChange}
                                                            placeholder="Fees Type" />
                                                    </div>


                                                    <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Sports Fees</b></h6>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Scholarship Amount</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="sprtscholarshipAmount"
                                                            value={formData.sprtscholarshipAmount}
                                                            onChange={handleInputChange}
                                                            placeholder="Scholarship Amount" />
                                                    </div>

                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Fees Type</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="sprtfeesType"
                                                            value={formData.sprtfeesType}
                                                            onChange={handleInputChange}
                                                            placeholder="Fees Type" />
                                                    </div>



                                                    <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Enroll Fees</b></h6>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Scholarship Amount</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="enrlscholarshipAmount"
                                                            value={formData.enrlscholarshipAmount}
                                                            onChange={handleInputChange}
                                                            placeholder="Scholarship Amount" />
                                                    </div>

                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Fees Type</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="enrlfeesType"
                                                            value={formData.enrlfeesType}
                                                            onChange={handleInputChange}
                                                            placeholder="Fees Type" />
                                                    </div>

                                                    <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Total Fees</b></h6>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Total Fees Amount</label>
                                                        <input type="text" className="form-control removespecialchar"
                                                            name="totalAmount"
                                                            value={formData.totalAmount}
                                                            onChange={handleInputChange}
                                                            placeholder="Total Amount" />
                                                    </div>
                                                </div>

                                            </>
                                            : (
                                                <>
                                                  
                                                    <div className="viewmore-wrap row show">
                                                        <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Exam Fees</b></h6>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Scholarship Amount </label>
                                                            <p className="card-text">{formData.exmscholarshipAmount}</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Fees Type</label>
                                                            <p className="card-text">{formData.exmfeesType}</p>
                                                        </div>

                                                        <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Tution Fees</b></h6>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Scholarship Amount </label>
                                                            <p className="card-text">{formData.tutnscholarshipAmount}</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Fees Type </label>
                                                            <p className="card-text">{formData.tutnfeesType}</p>
                                                        </div>


                                                        <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Special Fees</b></h6>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Scholarship Amount </label>
                                                            <p className="card-text">{formData.spclscholarshipAmount}</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Fees Type </label>
                                                            <p className="card-text">{formData.spclfeesType}</p>
                                                        </div>
                                                      
                                                        <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Library Fees</b></h6>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Scholarship Amount </label>
                                                            <p className="card-text">{formData.libscholarshipAmount}</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Fees Type </label>
                                                            <p className="card-text">{formData.libfeesType}</p>
                                                        </div>
                                                      
                                                        <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Sports Fees</b></h6>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Scholarship Amount </label>
                                                            <p className="card-text">{formData.sprtscholarshipAmount}</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Fees Type </label>
                                                            <p className="card-text">{formData.sprtfeesType}</p>
                                                        </div>

                                                        <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Enroll Fees</b></h6>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Scholarship Amount </label>
                                                            <p className="card-text">{formData.enrlscholarshipAmount}</p>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Fees Type </label>
                                                            <p className="card-text">{formData.enrlscholarshipAmount}</p>
                                                        </div>
                                                      
                                                        <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Total Fees</b></h6>
                                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Total Fees Amount </label>
                                                            <p className="card-text">{formData.totalAmount}</p>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                    {/* <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                        <h5 style={{ marginTop: '1rem' }}><b>Fees Details</b></h5>
                                    </div>
                                    <div className="viewmore-wrap row show">
                                        <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Exam Fees</b></h6>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Scholarship Amount</label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Scholarship Amount" />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Fees Type</label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Fees Type" />
                                        </div>

                                        <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Tution Fees</b></h6>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Scholarship Amount</label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Scholarship Amount" />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Fees Type</label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Fees Type" />
                                        </div>

                                        <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Special Fees</b></h6>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Scholarship Amount</label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Scholarship Amount" />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Fees Type</label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Fees Type" />
                                        </div>

                                        <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Library Fees</b></h6>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Scholarship Amount</label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Scholarship Amount" />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Fees Type</label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Fees Type" />
                                        </div>

                                        <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Sports Fees</b></h6>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Scholarship Amount</label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Scholarship Amount" />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Fees Type</label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Fees Type" />
                                        </div>

                                        <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Enroll Fees</b></h6>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Scholarship Amount</label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Scholarship Amount" />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Fees Type</label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Fees Type" />
                                        </div>

                                        <h6 style={{ marginTop: '1rem', borderBottom: '1px solid #ccc' }}><b>Total Fees</b></h6>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0">Total Amount</label>
                                            <input type="text" className="form-control removespecialchar" placeholder="Total Amount" />
                                        </div>
                                    </div> */}
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SchemeListDetails