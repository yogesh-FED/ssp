import React from 'react'

const AllSchemeFilter = () => {
  return (
    <div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button py-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Institute Components </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div className="col-md-12 mb-2">
                <label for="inputEmail4" className="form-label lbl-font lbl-color">Institute Category</label> 
                {/* {
                  formData.instituteCategory.map((value, index) => {
                    return (
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value={value.label} id="instCt" onClick={(e) => handleCheckBox(e, 'instituteCategory')}
                        checked={filterFormData.instituteCategory.includes(value.label)}
                        />
                        <label class="form-check-label" for="instCt"> {
                          value.label} </label>
                      </div>
                    )
                  })
                } */}
              </div>
              <div className="col-md-12 mb-2">
                <label for="inputEmail4" className="form-label lbl-font lbl-color">Institute Ownership</label>
                {/* {
                  formData.instituteOwnership.map((value, index) => {
                    return (
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value={value.label} id="instOwn" onClick={(e) => handleCheckBox(e, 'instituteOwnership')}
                        checked={filterFormData.instituteOwnership.includes(value.label)}/>
                        <label class="form-check-label" for="instOwn"> {value.label} </label>
                      </div>
                    )
                  })
                } */}
              </div>
              <div className="col-md-12 mb-2">
                <label for="inputEmail4" className="form-label lbl-font lbl-color">Institute Type</label>
                {/* {
                  formData.instituteType.map((value, index) => {
                    return (
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value={value.label} id="instTy" onClick={(e) => handleCheckBox(e, 'instituteType')}
                        checked={filterFormData.instituteType.includes(value.label)}/>
                        <label class="form-check-label" for="instTy"> {value.label} </label>
                      </div>
                    )
                  })
                } */}
              </div>
              <div className="col-md-12 mb-2">
                <label for="inputEmail4" className="form-label lbl-font lbl-color">University Type</label>
                {/* {
                  formData.universityType.map((value, index) => {
                    return (
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value={value.label} id="univTy" onClick={(e) => handleCheckBox(e, 'universityType')}
                        checked={filterFormData.universityType.includes(value.label)}/>
                        <label class="form-check-label" for="univTy"> {value.label} </label>
                      </div>
                    )
                  })
                } */}
              </div>
              <div className="col-md-12 mb-2">
                <label for="inputEmail4" className="form-label lbl-font lbl-color">University</label>
                {/* {
                  formData.university.map((value, index) => {
                    return (
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value={value.label} id="univ" onClick={(e) => handleCheckBox(e, 'university')}
                        checked={filterFormData.university.includes(value.label)} />
                        <label class="form-check-label" for="univ"> {value.label} </label>
                      </div>
                    )
                  })
                } */}
              </div>
              <div className="col-md-12 mb-2">
                <label for="inputEmail4" className="form-label lbl-font lbl-color">Institute Name</label>
                {/* {
                  formData.instituteText.map((value, index) => {
                    return (
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value={value.label} id="instName" onClick={(e) => handleCheckBox(e, 'instituteText')}
                        checked={filterFormData.instituteText.includes(value.label)}/>
                        <label class="form-check-label" for="instName"> {value.label} </label>
                      </div>
                    )
                  })
                } */}
              </div>
              {/* <div className="col-md-12 mb-2">
                <label for="inputEmail4" className="form-label lbl-font lbl-color">Student Category</label> 
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="studCt" />
                  <label class="form-check-label" for="studCt"> Student Category A </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault456" checked />
                  <label class="form-check-label" for="flexCheckDefault456"> Student Category B </label>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed py-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Course Components </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div className="col-md-12 mb-2">
                <label for="inputEmail4" className="form-label lbl-font lbl-color">Stream</label> 
                {/* {
                  formData.stream.map((value, i) => {
                    return (
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value={value.label} id="stream" onClick={(e) => handleCheckBox(e, 'stream')}
                        checked={filterFormData.stream.includes(value.label)}/>
                        <label class="form-check-label" for="stream"> {value.label} </label>
                      </div>
                    )
                  })
                } */}
              </div>
              <div className="col-md-12 mb-2">
                <label for="inputEmail4" className="form-label lbl-font lbl-color">Course Type</label> 
                {/* {
                  formData.courseType.map((value, i) => {
                    return (
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value={value.label} id="courseTy" onClick={(e) => handleCheckBox(e, 'courseType')}
                        checked={filterFormData.courseType.includes(value.label)}/>
                        <label class="form-check-label" for="courseTy"> {value.label} </label>
                      </div>
                    )
                  })
                } */}
              </div>
              <div className="col-md-12 mb-2">
                <label for="inputEmail4" className="form-label lbl-font lbl-color">Medium Of Instruction</label> 
                {/* {
                  formData.medium.map((value, i) => {
                    return (
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value={value.label} id="medium" onClick={(e) => handleCheckBox(e, 'medium')}
                        checked={filterFormData.medium.includes(value.label)}/>
                        <label class="form-check-label" for="medium"> {value.label} </label>
                      </div>
                    )
                  })
                } */}
              </div>
              <div className="col-md-12 mb-2">
                <label for="inputEmail4" className="form-label lbl-font lbl-color">Course</label> 
                {/* {
                  formData.course.map((value, i) => {
                    return (
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value={value.label} id="course" onClick={(e) => handleCheckBox(e, 'course')}
                        checked={filterFormData.course.includes(value.label)}/>
                        <label class="form-check-label" for="course"> {value.label} </label>
                      </div>
                    )
                  })
                } */}
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed py-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Socio Economic Components </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div className="col-md-12 mb-2">
                <label for="inputEmail4" className="form-label lbl-font lbl-color">Religion</label> 
                {/* {
                  formData.religion.map((value, i) => {
                    return (
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value={value.label} id="religion" onClick={(e) => handleCheckBox(e, 'religion')}
                        checked={filterFormData.religion.includes(value.label)}/>
                        <label class="form-check-label" for="religion"> {value.label} </label>
                      </div>
                    )
                  })
                } */}
              </div>
              <div className="col-md-12 mb-2">
                <label for="inputEmail4" className="form-label lbl-font lbl-color">Community</label> 
                {/* {
                  formData.community.map((value, i) => {
                    return (
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value={value.label} id="community" onClick={(e) => handleCheckBox(e, 'community')}
                        checked={filterFormData.community.includes(value.label)}/>
                        <label class="form-check-label" for="religion"> {value.label} </label>
                      </div>
                    )
                  })
                } */}
              </div>
              <div className="col-md-12 mb-2">
                <label for="inputEmail4" className="form-label lbl-font lbl-color">Caste</label> 
                {/* {
                  formData.caste.map((value, i) => {
                    return (
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value={value.label} id="caste" onClick={(e) => handleCheckBox(e, 'caste')}
                        checked={filterFormData.caste.includes(value.label)}/>
                        <label class="form-check-label" for="caste"> {value.label} </label>
                      </div>
                    )
                  })
                } */}
              </div>
              <div className="col-md-12 mb-2">
                <label for="inputEmail4" className="form-label lbl-font lbl-color">Gender</label> 
                {/* {
                  formData.gender.map((value, i) => {
                    return (
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value={value.label} id="gender" onClick={(e) => handleCheckBox(e, 'gender')}
                        checked={filterFormData.gender.includes(value.label)} />
                        <label class="form-check-label" for="gender"> {value.label} </label>
                      </div>
                    )
                  })
                } */}
              </div>
              <div className="col-md-12 mb-2">
                <label for="inputEmail4" className="form-label lbl-font lbl-color">Income</label> 
                {/* {
                  formData.income.map((value, i) => {
                    return (
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value={value.label} id="income" onClick={(e) => handleCheckBox(e, 'income')}
                        checked={filterFormData.income.includes(value.label)} />
                        <label class="form-check-label" for="income"> {value.label} </label>
                      </div>
                    )
                  })
                } */}
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed py-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> Maintenance Components </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div className="col-md-12 mb-2">
                <label for="inputEmail4" className="form-label lbl-font lbl-color">Student Residential Status</label> 
                {/* {
                  formData.residentalStatus.map((value, i) => {
                    const checkboxId = `resSt${i}`;
                    return (
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value={value.label} id={checkboxId} onClick={(e) => handleCheckBox(e, 'residentalStatus')}
                        checked={filterFormData.residentalStatus.includes(value.label)} />
                        <label class="form-check-label" for={checkboxId}> {value.label} </label>
                      </div>
                    )
                  })
                } */}
              </div>
              <div className="col-md-12 mb-2">
                <label for="inputEmail4" className="form-label lbl-font lbl-color">Disability Status</label> 
                {/* {
                  formData.disabilityStatus.length === 0 ? '' :
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value={formData.disabilityStatus} id="disSt" onClick={(e) => handleCheckBox(e, 'disabilityStatus')}
                        checked={filterFormData.disabilityStatus.includes(formData.disabilityStatus)} />
                    <label class="form-check-label" for="disSt"> {formData.disabilityStatus} </label>
                  </div>
                } */}
              </div>
              <div className="col-md-12 mb-2">
                <label for="inputEmail4" className="form-label lbl-font lbl-color">Disability Category</label> 
                  {/* {
                    formData.disabilityCategory.map((value, i) => {
                      const checkboxId = `disCt${i}`;
                      return (
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value={value.label} id={checkboxId} onClick={(e) => handleCheckBox(e, 'disabilityCategory')}
                        checked={filterFormData.disabilityCategory.includes(value.label)} />
                          <label class="form-check-label" for={checkboxId}> {value.label} </label>
                        </div>
                      )
                    })
                  } */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllSchemeFilter