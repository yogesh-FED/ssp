import React from "react";
import circle from "../assets/img/icon.png";


const SchemeList = () => {
    return (
        <div>
            <main id="main">
                <nav className="sidebar sidebar-offcanvas" id="sidebar">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="user-dashboard.html">
                                <span className="menu-title">Dashboard</span>
                                <i className="bi bi-speedometer2 menu-icon"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="user-dashboard.html">
                                <span className="menu-title">Scheme Register</span>
                                <i className="bi bi-pencil-square menu-icon"></i>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="user-dashboard.html">
                                <span className="menu-title">Scheme List</span>
                                <i className="bi bi-file-earmark-text menu-icon"></i>
                            </a>
                        </li>

                    </ul>
                </nav>
                <div className="main-panel stats-wrap">
                    <div className="content-wrapper">

                        <div className="row mb-2 mt-2">

                        <div className="mb-3">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body bg-white">
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
                                        <label for="inputEmail3" class="col-sm-4 col-form-label lbl-color">Scheme</label>
                                        <div class="col-sm-8">
                                            <select class="form-select" aria-label="select Department">
                                                <option selected>Select Scheme Name</option>
                                                <option value="1">Scheme Name 1</option>
                                                <option value="2">Scheme Name 2</option>
                                                <option value="3">Scheme Name 3</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 row mb-3">
                                        <label for="inputEmail3" class="col-sm-4 col-form-label lbl-color">Fee</label>
                                        <div class="col-sm-8">
                                            <select class="form-select" aria-label="select Database">
                                                <option selected>Select Fee</option>
                                                <option value="1">40000</option>
                                                <option value="2">60000</option>
                                            </select> 
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

                                    {/* <hr /> */}

                                    {/* <div className="col-lg-5 row mb-1">
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
                                    </div> */}


                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


                            <div className="col-lg-12">

                                <h3 className="page-title mb-2"><span className="page-title-icon bg-gradient-violet text-white me-2"><i className="bi bi-pencil-square"></i></span> Scheme List</h3>


                            </div>

                            <div className="col-md-4 stretch-card grid-margin mb-2 d-flex">
                                <div
                                    className="w-100 card bg-gradient-violet card-img-holder text-white" data-bs-toggle="modal" data-bs-target=".show-scheme-info"
                                >
                                    <div className="card-body text-center card1">
                                        {/* <img src={circle} className="card-img-absolute" alt="circle" /> */}
                                        <h5 className="card-text mt-3">
                                            <i className="bi bi-file-earmark-text mdi-24px float-right"></i>
                                        </h5>
                                        <h5 className="font-weight-normal mb-2"> Central Scheme-Post-Matric Scholarship(ST)</h5>

                                        <div className="row">
                                            <div className="col-lg-6 border-right">
                                                <span>
                                            <i class="bi bi-currency-rupee pe-2"></i>
                                                20000
                                                </span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span>
                                                <i class="bi bi-person-check pe-2"></i>
                                                SC
                                                    </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 stretch-card grid-margin mb-2 d-flex">
                                <div
                                    className="w-100 card bg-gradient-violet card-img-holder text-white" data-bs-toggle="modal" data-bs-target=".show-scheme-info"
                                >
                                    <div className="card-body text-center card1">
                                        {/* <img src={circle} className="card-img-absolute" alt="circle" /> */}
                                        <h5 className="card-text mt-3">
                                            <i className="bi bi-file-earmark-text mdi-24px float-right"></i>
                                        </h5>
                                        <h5 className="font-weight-normal mb-2"> State Scheme-Higher Education Special Scholarship(SC,SCC)</h5>
                                        <div className="row">
                                            <div className="col-lg-6 border-right">
                                                <span>
                                            <i class="bi bi-currency-rupee pe-2"></i>
                                                40000
                                                </span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span>
                                                <i class="bi bi-person-check pe-2"></i>
                                                SC
                                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 stretch-card grid-margin mb-2 d-flex">
                                <div
                                    className="w-100 card bg-gradient-violet card-img-holder text-white" data-bs-toggle="modal" data-bs-target=".show-scheme-info"
                                >
                                    <div className="card-body text-center card1">
                                        {/* <img src={circle} className="card-img-absolute" alt="circle" /> */}
                                        <h5 className="card-text mt-3">
                                            <i className="bi bi-file-earmark-text mdi-24px float-right"></i>
                                        </h5>
                                        <h5 className="font-weight-normal mb-2"> State Scheme-Special Post-Matric Scholarship Scheme(SCC)</h5>
                                        <div className="row">
                                            <div className="col-lg-6 border-right">
                                                <span>
                                            <i class="bi bi-currency-rupee pe-2"></i>
                                                20000
                                                </span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span>
                                                <i class="bi bi-person-check pe-2"></i>
                                                SC
                                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 stretch-card grid-margin mb-2 d-flex">
                                <div
                                    className="w-100 card bg-gradient-violet card-img-holder text-white" data-bs-toggle="modal" data-bs-target=".show-scheme-info"
                                >
                                    <div className="card-body text-center card1">
                                        {/* <img src={circle} className="card-img-absolute" alt="circle" /> */}
                                        <h5 className="card-text mt-3">
                                            <i className="bi bi-file-earmark-text mdi-24px float-right"></i>
                                        </h5>
                                        <h5 className="font-weight-normal mb-2"> ADW-Law Incentivescheme (Final Year Law students) (SC,SCC)</h5>
                                        <div className="row">
                                            <div className="col-lg-6 border-right">
                                                <span>
                                            <i class="bi bi-currency-rupee pe-2"></i>
                                                20000
                                                </span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span>
                                                <i class="bi bi-person-check pe-2"></i>
                                                SC
                                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 stretch-card grid-margin mb-2 d-flex">
                                <div
                                    className="w-100 card bg-gradient-violet card-img-holder text-white" data-bs-toggle="modal" data-bs-target=".show-scheme-info"
                                >
                                    <div className="card-body text-center card1">
                                        {/* <img src={circle} className="card-img-absolute" alt="circle" /> */}
                                        <h5 className="card-text mt-3">
                                            <i className="bi bi-file-earmark-text mdi-24px float-right"></i>
                                        </h5>
                                        <h5 className="font-weight-normal mb-2"> Central Scheme-Free Education Scheme(Professional Courses)</h5>
                                        <div className="row">
                                            <div className="col-lg-6 border-right">
                                                <span>
                                            <i class="bi bi-currency-rupee pe-2"></i>
                                                20000
                                                </span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span>
                                                <i class="bi bi-person-check pe-2"></i>
                                                SC
                                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 stretch-card grid-margin mb-2 d-flex">
                                <div
                                    className="w-100 card bg-gradient-violet card-img-holder text-white" data-bs-toggle="modal" data-bs-target=".show-scheme-info"
                                >
                                    <div className="card-body text-center card1">
                                        {/* <img src={circle} className="card-img-absolute" alt="circle" /> */}
                                        <h5 className="card-text mt-3">
                                            <i className="bi bi-file-earmark-text mdi-24px float-right"></i>
                                        </h5>
                                        <h5 className="font-weight-normal mb-2"> Central Scheme-Post-Matric Scholarship Scheme(SC)</h5>
                                        <div className="row">
                                            <div className="col-lg-6 border-right">
                                                <span>
                                            <i class="bi bi-currency-rupee pe-2"></i>
                                                20000
                                                </span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span>
                                                <i class="bi bi-person-check pe-2"></i>
                                                SC
                                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 stretch-card grid-margin mb-2 d-flex">
                                <div
                                    className="w-100 card bg-gradient-violet card-img-holder text-white" data-bs-toggle="modal" data-bs-target=".show-scheme-info"
                                >
                                    <div className="card-body text-center card1">
                                        {/* <img src={circle} className="card-img-absolute" alt="circle" /> */}
                                        <h5 className="card-text mt-3">
                                            <i className="bi bi-file-earmark-text mdi-24px float-right"></i>
                                        </h5>
                                        <h5 className="font-weight-normal mb-2"> State Scheme-Free Educationfor UGBoys,Girls,Transgenderonly(SC,SCC)</h5>
                                        <div className="row">
                                            <div className="col-lg-6 border-right">
                                                <span>
                                            <i class="bi bi-currency-rupee pe-2"></i>
                                                20000
                                                </span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span>
                                                <i class="bi bi-person-check pe-2"></i>
                                                SC
                                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 stretch-card grid-margin mb-2 d-flex">
                                <div
                                    className="w-100 card bg-gradient-violet card-img-holder text-white" data-bs-toggle="modal" data-bs-target=".show-scheme-info"
                                >
                                    <div className="card-body text-center card1">
                                        {/* <img src={circle} className="card-img-absolute" alt="circle" /> */}
                                        <h5 className="card-text mt-3">
                                            <i className="bi bi-file-earmark-text mdi-24px float-right"></i>
                                        </h5>
                                        <h5 className="font-weight-normal mb-2"> State Scheme-Higher Education Special Scholarship(ST)</h5>
                                        <div className="row">
                                            <div className="col-lg-6 border-right">
                                                <span>
                                            <i class="bi bi-currency-rupee pe-2"></i>
                                                20000
                                                </span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span>
                                                <i class="bi bi-person-check pe-2"></i>
                                                SC
                                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 stretch-card grid-margin mb-2 d-flex">
                                <div
                                    className="w-100 card bg-gradient-violet card-img-holder text-white" data-bs-toggle="modal" data-bs-target=".show-scheme-info"
                                >
                                    <div className="card-body text-center card1">
                                        {/* <img src={circle} className="card-img-absolute" alt="circle" /> */}
                                        <h5 className="card-text mt-3">
                                            <i className="bi bi-file-earmark-text mdi-24px float-right"></i>
                                        </h5>
                                        <h5 className="font-weight-normal mb-2"> State Scheme-Free Educationfor UGBoys,Girls,Transgendersonly(ST)</h5>
                                        <div className="row">
                                            <div className="col-lg-6 border-right">
                                                <span>
                                            <i class="bi bi-currency-rupee pe-2"></i>
                                                20000
                                                </span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span>
                                                <i class="bi bi-person-check pe-2"></i>
                                                SC
                                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>
                </div>
            </main>

        {/* show scheme list info */}
            <div class="modal fade show-scheme-info" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                <div class="modal-content"> 
                <div class="modal-header py-2">
                    <h1 class="modal-title fs-5"><i class="bi bi-info-circle"></i> Scheme Information</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body py-2 row">
                    
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  <label htmlFor="toDate" className="form-label lbl-color w-100">
                  Department
                  </label>
                  <label htmlFor="toDate" className="form-label w-100">
                  Department Name
                  </label>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  <label htmlFor="toDate" className="form-label lbl-color w-100">
                  Sub Department
                  </label>
                  <label htmlFor="toDate" className="form-label w-100">
                  Sub Department Name
                  </label>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  <label htmlFor="toDate" className="form-label lbl-color w-100">
                  Course
                  </label>
                  <label htmlFor="toDate" className="form-label w-100">
                  Course Name
                  </label>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  <label htmlFor="toDate" className="form-label lbl-color w-100">
                  Ownership
                  </label>
                  <label htmlFor="toDate" className="form-label w-100">
                  Ownership Name
                  </label>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  <label htmlFor="toDate" className="form-label lbl-color w-100">
                  Community
                  </label>
                  <label htmlFor="toDate" className="form-label w-100">
                  Community Name
                  </label>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  <label htmlFor="toDate" className="form-label lbl-color w-100">
                  Caste
                  </label>
                  <label htmlFor="toDate" className="form-label w-100">
                  Caste Name
                  </label>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  <label htmlFor="toDate" className="form-label lbl-color w-100">
                  Scheme 
                  </label>
                  <label htmlFor="toDate" className="form-label w-100">
                  Scheme Name
                  </label>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  <label htmlFor="toDate" className="form-label lbl-color w-100">
                  Fees 
                  </label>
                  <label htmlFor="toDate" className="form-label w-100">
                  20000
                  </label>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  <label htmlFor="toDate" className="form-label lbl-color w-100">
                  Income 
                  </label>
                  <label htmlFor="toDate" className="form-label w-100">
                  200000
                  </label>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  <label htmlFor="toDate" className="form-label lbl-color w-100">
                  Scheme Description 
                  </label>
                  <label htmlFor="toDate" className="form-label w-100">
                  Scheme Description sample text
                  </label>
                </div>


                </div>
                <div class="modal-footer py-2">
                    <button type="button" class="btn btn-danger cus-btn" data-bs-dismiss="modal"><i class="bi bi-x-lg"></i> Close</button>
                    {/* <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button> */}
                </div>
                </div>
            </div>
            </div>


            <a
                href="/#"
                className="back-to-top d-flex align-items-center justify-content-center"
            >
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );
};

export default SchemeList;
