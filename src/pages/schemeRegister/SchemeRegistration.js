import axios from 'axios';
import React, { useEffect, useState } from 'react' ; 
import Select from 'react-select';
import Form from 'react-bootstrap/Form';
import SelectComp from '../SelectComp';
const SchemeRegistration = () => { 
  const [formData, setFormData] = useState({
    department: [],
    subDepartment: [],
    schemeName: '',
    schemeCode: '',
    education: [],
    instituteType: [],
    instituteCategory: [],
    universityType: [],
    university: [],
    instituteName: [],
    studentCategory: [],
    class: [],
    schoolCategory: [],
    schoolType: [],
    schoolName: [],
    schoolClass: [],
    stream: [],
    course: [],
    courseType: [],
    medium: [],
    religion: [],
    community: [],
    caste: [],
    gender: [],
    income: [],
  });
  const [departmentData, setDepartmentData] = useState([]);
  const [subDepartmentData, setSubDepartmentData] = useState([]);
  const [community, setCommunity] = useState([]);
  const [course, setCourse] = useState([]);
  const [stream, setStream] = useState([]);
  const [institutionCat, setInstitutionCat] = useState([]);
  const [caste, setCaste] = useState([]);
  const [gender, setGender] = useState([]);
  const [education, setEducation] = useState([]);
  const [instTyp, setInstTyp] = useState([]);
  const [univ, setUniv] = useState([]);
  const [univTyp, setUnivTyp] = useState([]);
  const [religion, setReligion] = useState([]);
  const [income, setIncome] = useState([]);
  const [disability, setDisability] = useState([]);
  const [courseTyp, setCourseTyp] = useState([]);
  const [deptData, setDeptData] = useState([]);
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    'X-APP-KEY': 'te$t',
  };
  useEffect(() => {
    const fetchData = async () => { debugger;
        try {
            // Fetch department data
            const departmentResponse = await axios.post('https://tngis.tnega.org/ssp_backend/api/v1/get_department', { user_id: 1 }, {headers: headers});
            setDepartmentData(departmentResponse.data?.data || []);
        } catch (error) {
            console.log('Error fetching department data:', error);
        }
    };

    fetchData();
}, []);
const [selectedDepartment, setSelectedDepartment] = useState(null);

// const handleDepartmentChange = async (selectedOption) => { debugger;
//   try {
//       // Fetch sub department data based on selected department's ID
//       const subDepartmentResponse = await axios.post('https://tngis.tnega.org/ssp_backend/api/v1/get_sub_department', { user_id: 1, department_id: selectedOption[0].value }, {headers: headers});
//       setSubDepartmentData(subDepartmentResponse.data?.data || []);
//       selectedOption = [selectedOption];
//       latestSelectedOption = selectedOption;
//   } catch (error) {
//       console.log('Error fetching sub department data:', error);
//   }
// };
const handleSave = (e) => { debugger;
  e.preventDefault();
  console.log('Form Data:', formData);
};
const handleCommunityChange = (e) => {
  debugger
  setFormData({ ...formData, community: e });
}
const handleDepartmentChange = async (selectedOption) => {
  debugger;
  try {
    //const latestSelectedOption = selectedOption[selectedOption.length - 1];
    const subDepartmentResponse = await axios.post(
      'https://tngis.tnega.org/ssp_backend/api/v1/get_sub_department',
      { user_id: 1, department_id: selectedOption.value },
      { headers: headers }
    );
    setSubDepartmentData(subDepartmentResponse.data?.data || []);
    //selectedOption = [latestSelectedOption];
    setFormData({ ...formData, department: selectedOption.label });
  } catch (error) {
    console.log('Error fetching sub department data:', error);
  }
};
  useEffect(() => {
    const postDataToApi = async () => {
        const urls = [
            { url: 'https://tngis.tnega.org/ssp_backend/api/v1/get_department', body: { user_id: 1 } },
            { url: 'https://tngis.tnega.org/ssp_backend/api/v1/get_sub_department', body: { user_id: 1, department_id: 0 } },
            { url: 'https://tngis.tnega.org/ssp_backend/api/v1/get_community', body: { user_id: 1 } },
            { url: 'https://tngis.tnega.org/ssp_backend/api/v1/get_caste', body: { user_id: 1, community_id: 2 } },
            { url: 'https://tngis.tnega.org/ssp_backend/api/v1/get_dropdown_values', body: { user_id: 1, category: 'EducationType' } },
            { url: 'https://tngis.tnega.org/ssp_backend/api/v1/get_institute_category', body: { user_id: 1 } },
            { url: 'https://tngis.tnega.org/ssp_backend/api/v1/get_streams', body: { user_id: 1 } },
            { url: 'https://tngis.tnega.org/ssp_backend/api/v1/get_courses', body: { user_id: 1, stream_id: 0, course_type_id: 0 } },
            { url: 'https://tngis.tnega.org/ssp_backend/api/v1/get_institutetypes', body: { user_id: 1 } },
            { url: 'https://tngis.tnega.org/ssp_backend/api/v1/get_dropdown_values', body: { user_id: 1, category: 'Gender' } },
            { url: 'https://tngis.tnega.org/ssp_backend/api/v1/get_universities', body: { user_id: 1, university_type_id: 0 } },
            { url: 'https://tngis.tnega.org/ssp_backend/api/v1/get_university_types', body: { user_id: 1, ownership_id: 1 } },
            { url: 'https://tngis.tnega.org/ssp_backend/api/v1/get_dropdown_values', body: { user_id: 1, category: 'Religion' } },
            { url: 'https://tngis.tnega.org/ssp_backend/api/v1/get_income_ranges', body: { user_id: 1 } },
            { url: 'https://tngis.tnega.org/ssp_backend/api/v1/get_differentlyabled', body: { user_id: 1 } },
            { url: 'https://tngis.tnega.org/ssp_backend/api/v1/get_course_types', body: { user_id: 1 } }
        ];
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            'X-APP-KEY': 'te$t',
        };
        try {
            const requests = urls.map(({ url, body }) => axios.post(url, body, { headers }));
            const responses = await axios.all(requests);
            responses.forEach((response, index) => {
                switch (index) {
                    // case 0:
                    //     setDepartmentData(response.data?.data || []);
                    //     break;
                    // case 1:
                    //     setSubDepartmentData(response.data?.data || []);
                    //     break;
                    case 2:
                        setCommunity(response.data?.data || []);
                        break;
                    case 3:
                        setCaste(response.data?.data || []);
                        break;
                    case 4:
                        setEducation(response.data?.data || []);
                        break;
                    case 5:
                        setInstitutionCat(response.data?.data || []);
                        break;
                    case 6:
                        setStream(response.data?.data || []);
                        break;
                    case 7:
                        setCourse(response.data?.data || []);
                        break;
                    case 8:
                        setInstTyp(response.data?.data || []);
                        break;
                    case 9:
                        setGender(response.data?.data || []);
                        break;
                    case 10:
                        setUniv(response.data?.data || []);
                        break;
                    case 11:
                        setUnivTyp(response.data?.data || []);
                        break;
                    case 12:
                      setReligion(response.data?.data || []);
                      break;
                    case 13:
                        setIncome(response.data?.data || []);
                        break;
                    case 14:
                        setDisability(response.data?.data || []);
                        break;
                    case 15:
                        setCourseTyp(response.data?.data || []);
                        break;
                    default:
                        break;
                }
            });
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };
    postDataToApi();
}, []);
  const univOptions = Object.entries(univ).map(([key, val]) => {
    return(
      {
        value: val.university_name,
        label: val.university_name
      }
    )
  })
  const courseTypOption = Object.entries(courseTyp).map(([key, val]) => {
    return(
      {
        value: val.course_type,
        label: val.course_type
      }
    )
  })
  const incomeOptions = Object.entries(income).map(([key, val]) => {
    return(
      {
        value: val.income_range,
        label: val.income_range
      }
    )
  })
  const religionOptions = Object.entries(religion).map(([key, val]) => {
    return(
      {
        value: val.display_text,
        label: val.display_text
      }
    )
  })
  const deptOptions = Object.entries(departmentData).map(([key, val]) => {
    return(
      {
        value: val.id,
        label: val.department_name
      }
    )
  })
  const genderOptions = Object.entries(gender).map(([key, val]) => {
    return(
      {
        value: val.display_text,
        label: val.display_text
      }
    )
  })
  const instTypOptions = Object.entries(instTyp).map(([key, val]) => {
    return(
      {
        value: val.institute_type,
        label: val.institute_type
      }
    )
  })
  const courseOptions = Object.entries(course).map(([key, val]) => {
    return(
      {
        value: val.id,
        label: val.course_name
      }
    )
  })
  const subdeptOptions = Object.entries(subDepartmentData).map(([key, val]) => {
    return(
      {
        value: val.subdepartment_name,
        label: val.subdepartment_name
      }
    )
  })
  
  const communityOptions = Object.entries(community).map(([key, val]) => {
    return(
      {
        value: val.community_name,
        label: val.community_name
      }
    )
  })
  const casteOptions = Object.entries(caste).map(([key, val]) => {
    return(
      {
        value: val.caste_name,
        label: val.caste_name
      }
    )
  })
  const eduOptions = Object.entries(education).map(([key, val]) => {
    return(
      {
        value: val.display_text,
        label: val.display_text
      }
    )
  })
  const insCtOptions = Object.entries(institutionCat).map(([key, val]) => {
    return(
      {
        value: val.institute_category,
        label: val.institute_category
      }
    )
  })
  const streamOptions = Object.entries(stream).map(([key, val]) => {
    return(
      {
        value: val.stream_name,
        label: val.stream_name
      }
    )
  })
  const univTypOptions = Object.entries(univTyp).map(([key, val]) => {
    return(
      {
        value: val.university_type,
        label: val.university_type
      }
    )
  })
  const disabilityOptions = Object.entries(disability).map(([key, val]) => {
    return(
      {
        value: val.disability_name,
        label: val.disability_name
      }
    )
  })
  const [school, setSchool] = useState(false);
  const [college, setCollege] = useState(false);
  const handleEducationChange = (e) => { debugger;
    if(e.value === 'School') {
      setSchool(true);
      setCollege(false);
    }
    else {
      setCollege(true);
      setSchool(false);
    }
    if(e.value === 0) {
      setCollege(false);
      setSchool(false);
    }
    
  }
  const [showMore, setShowMore] = useState(false); 
  const [selectedFeesType, setSelectedFeesType] = useState(''); 
  const handleSelectChange = (event) => { setSelectedFeesType(event.target.value); }; 
  const [disStatus, setDisStatus] = useState(false);
  const handledisabilityStatus = (e) => {
    if(e.value === 'Yes') {
      setDisStatus(true);
    } else {
      setDisStatus(false);
    }
  }
  return ( 
  <>
  <div className="row mb-2 mt-2">
  <div className="col-lg-12">
    <h3 className="page-title mb-2">
      <span className="page-title-icon bg-gradient-violet text-white me-2">
        <i className="bi bi-pencil-square"></i>
      </span> Scheme Registration
    </h3>
  </div>
  <div className="card col-lg-12">
    <div className="card-body pt-3">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
            <i class="bi bi-file-earmark-text"></i> Scheme Details </button>
        </li>
        <li class="nav-item mx-2" role="presentation">
          <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
            <i class="bi bi-award"></i> Scholarship - Fee Details </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
            <i class="bi bi-check2-circle"></i> Scheme Characteristics </button>
        </li>
      </ul>
      <div class="tab-content my-3" id="myTabContent">
        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
          <form className="row">
            <div className="col-md-4 mb-2">
              <Form.Group className="mb-3 instituteApproveRejectForm">
                <div className="">
                  <span className="form-label lbl-font lbl-color">Department</span>
                  <Select
                    //defaultValue={selectedOptions}
                    //isMulti
                    options={[{ value: 'all', label: 'All' }, ...deptOptions]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={handleDepartmentChange}
                  />
                </div>
              </Form.Group>
            </div>
            <div className="col-md-4 mb-2">
              <Form.Group className="mb-3 instituteApproveRejectForm">
                <div className="">
                  <span className="form-label lbl-font lbl-color">Sub Department</span>
                  <Select
                    //defaultValue={selectedOptions}
                    isMulti
                    options={[{ value: 'all', label: 'All' }, ...subdeptOptions]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    //onChange={handleCommunityChange}
                  />
                </div>
              </Form.Group>
            </div>
            <div className="col-md-4 mb-2">
              <label for="inputEmail4" className="form-label lbl-font lbl-color">Scheme Name</label>
              <input type="text" className="form-control removespecialchar" placeholder="Enter Scheme Name" />
            </div>
            <div className="col-md-4 mb-2">
                <label for="inputEmail4" className="form-label lbl-font lbl-color">Scheme Code</label>
                <input type="text" class="form-control removespecialchar" placeholder="Enter Scheme Code" />
              </div>
            <div className='separateComp row'>
              <div className="col-md-12 mb-2 mt-2">
                <h4 className="page-title txt-red">
                  <i class="bi bi-file-earmark-text"></i> Institute Components
                </h4>
              </div>
              <div className="col-md-4 mb-2">
                <Form.Group className="mb-3 instituteApproveRejectForm">
                <div className="">
                  <span className="form-label lbl-font lbl-color">Education</span>
                  <Select
                    //defaultValue={selectedOptions}
                    //isMulti
                    options={[{ value: 0, label: 'None' }, ...eduOptions]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) => handleEducationChange(e)}
                  />
                </div>
              </Form.Group>
              </div>
              {
                school && (
                  <>
                    <div className="col-md-4 mb-2">
                      <Form.Group className="mb-3 instituteApproveRejectForm">
                        <div className="">
                          <span className="form-label lbl-font lbl-color">School Category</span>
                          <Select
                            //defaultValue={selectedOptions}
                            isMulti
                            options={[{ value: 'all', label: 'All' }]}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            //onChange={handleCommunityChange}
                          />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4 mb-2">
                      <Form.Group className="mb-3 instituteApproveRejectForm">
                        <div className="">
                          <span className="form-label lbl-font lbl-color">School Type</span>
                          <Select
                            //defaultValue={selectedOptions}
                            isMulti
                            options={[{ value: 'all', label: 'All' }]}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            //onChange={handleCommunityChange}
                          />
                        </div>
                      </Form.Group>
                    </div>
                  <div className="col-md-4 mb-2">
                    <Form.Group className="mb-3 instituteApproveRejectForm">
                      <div className="">
                        <span className="form-label lbl-font lbl-color">School Name</span>
                        <Select
                          //defaultValue={selectedOptions}
                          isMulti
                          options={[{ value: 'all', label: 'All' }]}
                          className="basic-multi-select"
                          classNamePrefix="select"
                          //onChange={handleCommunityChange}
                        />
                      </div>
                    </Form.Group>
                  </div>
                </>
                )
              }
              {
                college && (
                  <>
                    <div className="col-md-4 mb-2">
                      <Form.Group className="mb-3 instituteApproveRejectForm">
                        <div className="">
                          <span className="form-label lbl-font lbl-color">Institute Type</span>
                          <Select
                            //defaultValue={selectedOptions}
                            isMulti
                            options={[{ value: 'all', label: 'All' }, ...instTypOptions]}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            //onChange={handleCommunityChange}
                          />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4 mb-2">
                      <Form.Group className="mb-3 instituteApproveRejectForm">
                        <div className="">
                          <span className="form-label lbl-font lbl-color">Institute Category</span>
                          <Select
                            //defaultValue={selectedOptions}
                            isMulti
                            options={[{ value: 'all', label: 'All' }, ...insCtOptions]}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            //onChange={handleCommunityChange}
                          />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4 mb-2">
                      <Form.Group className="mb-3 instituteApproveRejectForm">
                        <div className="">
                          <span className="form-label lbl-font lbl-color">University Type</span>
                          <Select
                            //defaultValue={selectedOptions}
                            isMulti
                            options={[{ value: 'all', label: 'All' }, ...univTypOptions]}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            //onChange={handleCommunityChange}
                          />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4 mb-2">
                      <Form.Group className="mb-3 instituteApproveRejectForm">
                        <div className="">
                          <span className="form-label lbl-font lbl-color">University</span>
                          <Select
                            //defaultValue={selectedOptions}
                            isMulti
                            options={[{ value: 'all', label: 'All' }, ...univOptions]}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            //onChange={handleCommunityChange}
                          />
                        </div>
                      </Form.Group>
                    </div>
                  <div className="col-md-4 mb-2">
                    <Form.Group className="mb-3 instituteApproveRejectForm">
                      <div className="">
                        <span className="form-label lbl-font lbl-color">Institute Name</span>
                        <Select
                          //defaultValue={selectedOptions}
                          isMulti
                          options={[{ value: 'all', label: 'All' }]}
                          className="basic-multi-select"
                          classNamePrefix="select"
                          //onChange={handleCommunityChange}
                        />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-4 mb-2">
                    <Form.Group className="mb-3 instituteApproveRejectForm">
                      <div className="">
                        <span className="form-label lbl-font lbl-color">Student Category</span>
                        <Select
                          //defaultValue={selectedOptions}
                          isMulti
                          options={[{ value: 'all', label: 'All' }]}
                          className="basic-multi-select"
                          classNamePrefix="select"
                          //onChange={handleCommunityChange}
                        />
                      </div>
                    </Form.Group>
                  </div>
                </>
                )
              }
            </div>
            <div className='separateComp row'>
              <div className="col-md-12 mb-2 mt-2">
                <h4 className="page-title txt-red">
                  <i class="bi bi-file-earmark-text"></i> Course Components
                </h4>
              </div>
              <div className="col-md-4 mb-2">
                {/* <label for="inputEmail4" className="form-label lbl-font lbl-color">Stream</label>
                <select className="form-select" name="Stream">
                  <option value="">Select Stream</option>
                  <option value="all">ALL</option>
                  {
                  Object.entries(stream).map(([key,val]) => {
                    return (
                      Object.entries(val).map(([dataKey,dataVal]) => {
                        return (
                          <option key={dataKey} value={dataVal.stream_name}>{dataVal.stream_name}</option>
                        )
                      })
                    )
                  })
                }
                </select> */}
                    <Form.Group className="mb-3 instituteApproveRejectForm">
                        <div className="">
                          <span className="form-label lbl-font lbl-color">Stream</span>
                          <Select
                            //defaultValue={selectedOptions}
                            isMulti
                            options={[{ value: 'all', label: 'All' }, ...streamOptions]}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            //onChange={handleCommunityChange}
                          />
                        </div>
                      </Form.Group>
              </div>
              <div className="col-md-4 mb-2">
                <Form.Group className="mb-3 instituteApproveRejectForm">
                  <div className="">
                    <span className="form-label lbl-font lbl-color">Course Type</span>
                    <Select
                      //defaultValue={selectedOptions}
                      isMulti
                      options={[{ value: 'all', label: 'All' }, ...courseTypOption]}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      //onChange={handleCommunityChange}
                    />
                  </div>
                </Form.Group>
              </div>
              <div className="col-md-4 mb-2">
                {/* <label for="inputEmail4" className="form-label lbl-font lbl-color">Course</label>
                <select className="form-select" name="Course">
                  <option value="">Select Course</option>
                  <option value="all">ALL</option>
                  {
                    Object.entries(course).map(([key,val]) => { debugger;
                      return (
                        Object.entries(val).map(([dataKey,dataVal]) => {
                          return (
                            <option key={dataKey} value={dataVal.course_type}>{dataVal.course_type}</option>
                          )
                        })
                      )
                    })
                  }
                </select> */}
                <Form.Group className="mb-3 instituteApproveRejectForm">
                <div className="">
                  <span className="form-label lbl-font lbl-color">Course</span>
                  <Select
                    //defaultValue={selectedOptions}
                    isMulti
                    options={[{ value: 'all', label: 'All' }, ...courseOptions]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    //onChange={handleCommunityChange}
                  />
                </div>
              </Form.Group>
              </div>
              
              
              <div className="col-md-4 mb-2">
                {/* <label for="inputEmail4" className="form-label lbl-font lbl-color">Medium of Instruction</label>
                <select className="form-select" name="Course">
                  <option value="">Select Medium</option>
                  <option value="1">English</option>
                  <option value="1">Tamil</option>
                </select> */}
                <Form.Group className="mb-3 instituteApproveRejectForm">
                  <div className="">
                    <span className="form-label lbl-font lbl-color">Medium of Instruction</span>
                    <Select
                      //defaultValue={selectedOptions}
                      isMulti
                      options={[{ value: 'all', label: 'All' },{ value: 'English', label: 'English' },{ value: 'Tamil', label: 'Tamil' },]}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      //onChange={handleCommunityChange}
                    />
                  </div>
                </Form.Group>
              </div>
              
              
              </div>
            <div className='separateComp row'>
              <div className="col-md-12 mb-2 mt-2">
                <h4 className="page-title txt-red">
                  <i class="bi bi-file-earmark-text"></i> Socio Economic Components
                </h4>
              </div>
              <div className="col-md-4 mb-2">
              <Form.Group className="mb-3 instituteApproveRejectForm">
                <div className="">
                  <span className="form-label lbl-font lbl-color">Religion</span>
                  <Select
                    //defaultValue={selectedOptions}
                    isMulti
                    options={[{ value: 'all', label: 'All' }, ...religionOptions]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    //onChange={handleCommunityChange}
                  />
                </div>
              </Form.Group>
              </div>
              <div className="col-md-4 mb-2">
                <Form.Group className="mb-3 instituteApproveRejectForm">
                <div className="">
                  <span className="form-label lbl-font lbl-color">Community</span>
                  <Select
                    //defaultValue={selectedOptions}
                    isMulti
                    options={[{ value: 'all', label: 'All' }, ...communityOptions]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={handleCommunityChange}
                  />
                </div>
              </Form.Group>
              </div>
              <div className="col-md-4 mb-2">
                <Form.Group className="mb-3 instituteApproveRejectForm">
                <div className="">
                  <span className="form-label lbl-font lbl-color">Caste</span>
                  <Select
                    //defaultValue={selectedOptions}
                    isMulti
                    options={[{ value: 'all', label: 'All' }, ...casteOptions]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    //onChange={handleCommunityChange}
                  />
                </div>
              </Form.Group>
              </div>
              <div className="col-md-4 mb-2">
              <Form.Group className="mb-3 instituteApproveRejectForm">
                <div className="">
                  <span className="form-label lbl-font lbl-color">Gender</span>
                  <Select
                    //defaultValue={selectedOptions}
                    isMulti
                    options={[{ value: 'all', label: 'All' }, ...genderOptions]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    //onChange={handleCommunityChange}
                  />
                </div>
              </Form.Group>
              </div>
              <div className="col-md-4 mb-2">
              <Form.Group className="mb-3 instituteApproveRejectForm">
                <div className="">
                  <span className="form-label lbl-font lbl-color">Income</span>
                  <Select
                    //defaultValue={selectedOptions}
                    isMulti
                    options={[{ value: 'all', label: 'All' }, ...incomeOptions]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    //onChange={handleCommunityChange}
                  />
                </div>
              </Form.Group>
              </div>
            </div>
            <div className='separateComp row'>
              <div className="col-md-12 mb-2 mt-2">
                <h4 className="page-title txt-red">
                  <i class="bi bi-file-earmark-text"></i> Maintenance Components
                </h4>
              </div>
              <div className="col-md-4 mb-2">
                <Form.Group className="mb-3 instituteApproveRejectForm">
                  <div className="">
                    <span className="form-label lbl-font lbl-color">Residential Status</span>
                    <Select
                      //defaultValue={selectedOptions}
                      isMulti
                      options={[{ value: 'all', label: 'All' },{ value: 'Hosteller', label: 'Hosteller' },{ value: 'Day Scholar', label: 'Day Scholar' },]}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      //onChange={handleCommunityChange}
                    />
                  </div>
                </Form.Group>
              </div>
              <div className="col-md-4 mb-2">
                <Form.Group className="mb-3 instituteApproveRejectForm">
                  <div className="">
                    <span className="form-label lbl-font lbl-color">Disability Status</span>
                    <Select
                      //defaultValue={selectedOptions}
                      //isMulti
                      options={[{ value: 'Select', label: 'Select' },{ value: 'Yes', label: 'Yes' },{ value: 'No', label: 'No' },]}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={handledisabilityStatus}
                    />
                  </div>
                </Form.Group>
              </div>
              {
                disStatus && 
                <div className="col-md-4 mb-2">
                <Form.Group className="mb-3 instituteApproveRejectForm">
                  <div className="">
                    <span className="form-label lbl-font lbl-color">Disability Category</span>
                    <Select
                      //defaultValue={selectedOptions}
                      //isMulti
                      options={[ ...disabilityOptions]}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      //onChange={handleCommunityChange}
                    />
                  </div>
                </Form.Group>
              </div>
              }
              <div className='row'>
                <div className="col-md-4 mb-2 mt-2">
                  <a onClick={(e) => handleSave(e)} className="btn btn-success cus-btn">
                    <i className="bi bi-send-check"></i> Save </a>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
          <div className="row">
            <div className="col-lg-3">
              <div className="alert alert-warning">
                <div className="col-md-12 mb-2 mt-2">
                  <h4 className="page-title txt-red">
                    <i class="bi bi-funnel"></i> Filters
                  </h4>
                </div>
                <div className="col-md-12 mb-2">
                  <label for="inputEmail4" className="form-label lbl-font lbl-color">Department</label> {/* <select className="form-select" name="department">
                    <option value="">Select Department</option>
                    <option value="1" selected>Department A</option>
                  </select> */} <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault"> Department A </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                    <label class="form-check-label" for="flexCheckChecked"> Department B </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                    <label class="form-check-label" for="flexCheckDefault1"> Department C </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                    <label class="form-check-label" for="flexCheckDefault2"> Department D </label>
                  </div>
                </div>
                <div className="col-md-12 mb-2">
                  <label for="inputEmail4" className="form-label lbl-font lbl-color">Sub Department</label> {/* <select className="form-select" name="SubDepartment">
                    <option value="">Select Sub Department</option>
                    <option value="India" selected>Sub Department A</option>
                  </select> */} <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault5" />
                    <label class="form-check-label" for="flexCheckDefault5"> Sub Department A </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked6" checked />
                    <label class="form-check-label" for="flexCheckChecked6"> Sub Department B </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault17" />
                    <label class="form-check-label" for="flexCheckDefault17"> Sub Department C </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault28" />
                    <label class="form-check-label" for="flexCheckDefault28"> Sub Department D </label>
                  </div>
                </div>
                <div className="col-md-12 mb-2">
                  <label for="inputEmail4" className="form-label lbl-font lbl-color">Scheme Name</label> {/* <input type="text" className="form-control removespecialchar" value="Scheme Name A" /> */} <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" checked />
                    <label class="form-check-label" for="flexCheckDefault11"> Scheme Name A </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault22" />
                    <label class="form-check-label" for="flexCheckDefault22"> Scheme Name B </label>
                  </div>
                </div>
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button py-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> General Components </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <div className="col-md-12 mb-2">
                          <label for="inputEmail4" className="form-label lbl-font lbl-color">Institute Category</label> {/* <select className="form-select" name="InstituteCategory">
                            <option value="">Select Institute Category</option>
                            <option value="1" selected>Institute Category A</option>
                          </select> */} <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault111" checked />
                            <label class="form-check-label" for="flexCheckDefault111"> Institute Category A </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault112" />
                            <label class="form-check-label" for="flexCheckDefault112"> Institute Category B </label>
                          </div>
                        </div>
                        <div className="col-md-12 mb-2">
                          <label for="inputEmail4" className="form-label lbl-font lbl-color">Institute Type</label> {/* <select className="form-select" name="InstituteType">
                            <option value="">Select Institute Type</option>
                            <option value="1" selected>Institute Type A</option>
                          </select> */} <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1112" />
                            <label class="form-check-label" for="flexCheckDefault1112"> Institute Type A </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1113" checked />
                            <label class="form-check-label" for="flexCheckDefault1113"> Institute Type B </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1114" />
                            <label class="form-check-label" for="flexCheckDefault1114"> Institute Type C </label>
                          </div>
                        </div>
                        <div className="col-md-12 mb-2">
                          <label for="inputEmail4" className="form-label lbl-font lbl-color">Institute Name</label> {/* <select className="form-select" name="InstituteName">
                            <option value="">Select Institute Name</option>
                            <option value="1" selected>Institute Name A</option>
                          </select> */} <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11131" checked />
                            <label class="form-check-label" for="flexCheckDefault11131"> Institute Name A </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11132" />
                            <label class="form-check-label" for="flexCheckDefault11132"> Institute Name B </label>
                          </div>
                        </div>
                        <div className="col-md-12 mb-2">
                          <label for="inputEmail4" className="form-label lbl-font lbl-color">Community</label> {/* <select className="form-select" name="Community">
                            <option value="">Select Community</option>
                            <option value="1" selected>Community A</option>
                          </select> */} <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault77" />
                            <label class="form-check-label" for="flexCheckDefault77"> Community A </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault66" checked />
                            <label class="form-check-label" for="flexCheckDefault66"> Community B </label>
                          </div>
                        </div>
                        <div className="col-md-12 mb-2">
                          <label for="inputEmail4" className="form-label lbl-font lbl-color">Caste</label> {/* <select className="form-select" name="Caste">
                            <option value="">Select Caste</option>
                            <option value="1" selected>Caste A</option>
                          </select> */} <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault666" checked />
                            <label class="form-check-label" for="flexCheckDefault666"> Caste A </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault667" />
                            <label class="form-check-label" for="flexCheckDefault667"> Caste B </label>
                          </div>
                        </div>
                        <div className="col-md-12 mb-2">
                          <label for="inputEmail4" className="form-label lbl-font lbl-color">Student Category</label> {/* <select className="form-select" name="StudentCategory">
                            <option value="">Select Student Category</option>
                            <option value="1" selected>Student Category A</option>
                          </select> */} <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault123" />
                            <label class="form-check-label" for="flexCheckDefault123"> Student Category A </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault456" checked />
                            <label class="form-check-label" for="flexCheckDefault456"> Student Category B </label>
                          </div>
                        </div>
                        <div className="col-md-12 mb-2">
                          <label for="inputEmail4" className="form-label lbl-font lbl-color">Stream</label> {/* <select className="form-select" name="Stream">
                            <option value="">Select Stream</option>
                            <option value="1" selected>Stream A</option>
                          </select> */} <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4561" checked />
                            <label class="form-check-label" for="flexCheckDefault4561"> Stream A </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4562" />
                            <label class="form-check-label" for="flexCheckDefault4562"> Stream B </label>
                          </div>
                        </div>
                        <div className="col-md-12 mb-2">
                          <label for="inputEmail4" className="form-label lbl-font lbl-color">Course</label> {/* <select className="form-select" name="Course">
                            <option value="">Select Course</option>
                            <option value="1" selected>Course A</option>
                          </select> */} <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault45612" />
                            <label class="form-check-label" for="flexCheckDefault45612"> Course A </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault45613" checked />
                            <label class="form-check-label" for="flexCheckDefault45613"> Course A </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed py-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Maintenance Components </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <div className="col-md-12 mb-2">
                          <label for="inputEmail4" className="form-label lbl-font lbl-color">Student Residential Status</label> {/* <select className="form-select" name="StudentResidentialStatus">
                            <option value="">Select Student Residential Status</option>
                            <option value="1">Hosteller</option>
                            <option value="2" selected>Day Scholar</option>
                          </select> */} <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault456134" checked />
                            <label class="form-check-label" for="flexCheckDefault456134"> Hosteller </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault456137" />
                            <label class="form-check-label" for="flexCheckDefault456137"> Day Scholar </label>
                          </div>
                        </div>
                        <div className="col-md-12 mb-2">
                          <label for="inputEmail4" className="form-label lbl-font lbl-color">Physically Challenged</label> {/* <select className="form-select" name="PhysicallyChallenged">
                            <option value="">Select Physically Challenged</option>
                            <option value="1">Yes</option>
                            <option value="2" selected>No</option>
                          </select> */} <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4561341" checked />
                            <label class="form-check-label" for="flexCheckDefault4561341"> Yes </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4561342" />
                            <label class="form-check-label" for="flexCheckDefault4561342"> No </label>
                          </div>
                        </div>
                        <div className="col-md-12 mb-2">
                          <label for="inputEmail4" className="form-label lbl-font lbl-color">Sub Category Physically Challenged</label> {/* <select className="form-select" name="SubCategoryPhysicallyChallenged">
                            <option value="">Select Sub Category Physically Challenged</option>
                            <option value="1">Sub Category A</option>
                            <option value="2" selected>Sub Category B</option>
                          </select> */} <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault45613412" />
                            <label class="form-check-label" for="flexCheckDefault45613412"> Sub Category A </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault45613414" checked />
                            <label class="form-check-label" for="flexCheckDefault45613414"> Sub Category B </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="col-lg-12 mb-2">
                <div className="alert alert-success py-1">
                  <form className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                      <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Department </label>
                      <label htmlFor="toDate" className="form-label w-100 mb-0"> Department A </label>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1 ps-0">
                      <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Sub Department </label>
                      <label htmlFor="toDate" className="form-label w-100 mb-0"> Sub Department A </label>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1 ps-0">
                      <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Scheme Name </label>
                      <label htmlFor="toDate" className="form-label w-100 mb-0"> Scheme Name A </label>
                    </div>
                    <p className="viewmore mb-0 text-danger" onClick={()=> setShowMore(true)} style={{ display: showMore ? 'none' : 'block' }} > <i class="bi bi-arrows-angle-expand"></i> View More </p>
                    <div className={`viewmore-wrap row ${showMore ? 'show' : '' }`}>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Institute Category </label>
                        <label htmlFor="toDate" className="form-label w-100 mb-0"> Institute Category A </label>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Institute Type </label>
                        <label htmlFor="toDate" className="form-label w-100 mb-0"> Institute Type A </label>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Institute Name </label>
                        <label htmlFor="toDate" className="form-label w-100 mb-0"> Institute Name A </label>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Community </label>
                        <label htmlFor="toDate" className="form-label w-100 mb-0"> Community A </label>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Caste </label>
                        <label htmlFor="toDate" className="form-label w-100 mb-0"> Caste A </label>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Student Category </label>
                        <label htmlFor="toDate" className="form-label w-100 mb-0"> Student Category A </label>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Stream </label>
                        <label htmlFor="toDate" className="form-label w-100 mb-0"> Stream A </label>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Course </label>
                        <label htmlFor="toDate" className="form-label w-100 mb-0"> Course A </label>
                      </div>
                      <p className="lessmore mb-0 text-danger" onClick={()=> setShowMore(false)} > <i class="bi bi-arrows-angle-contract"></i> View Less </p>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div class="card">
                    <div class="card-body">
                      <div className="table-responsive">
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col" className="w-25">Fees</th>
                              <th scope="col" className="w-75">Scholarship</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="w-25">
                                <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0 text-danger"> ADW components </label>
                              </td>
                            </tr>
                            <tr>
                              <td className="w-25">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                  <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Exam Fees </label>
                                  <label for="toDate" class="form-label w-100 mb-0">5000</label> {/* <input type="text" class="form-control removespecialchar" placeholder="Enter Exam Fees" /> */}
                                </div>
                              </td>
                              <td className="w-75">
                                <div className="row m-0">
                                  <div className="col-lg-6">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                      <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Scholarship Amount </label>
                                      <input type="text" class="form-control removespecialchar" placeholder="Enter Scholarship Amount" />
                                    </div>
                                  </div>
                                  <div className="col-lg-5">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                      <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Fees Type </label> {/* <select class="form-select" aria-label="Default select fees type">
                                        <option selected>select Fees Type</option>
                                        <option value="1">Full</option>
                                        <option value="2">Fixed Ceiling</option>
                                        <option value="3">Partial</option>
                                      </select> */} <div>
                                        <select className="form-select" aria-label="Default select fees type" onChange={handleSelectChange}>
                                          <option value="">Select Fees Type</option>
                                          <option value="full">Full</option>
                                          <option value="fixedceiling">Fixed Ceiling</option>
                                          <option value="partial">Partial</option>
                                        </select> {selectedFeesType === 'full' && ( <input type="text" className="form-control fullfees" placeholder="Enter Full Fees" /> )} {selectedFeesType === 'fixedceiling' && ( <input type="text" className="form-control fixedceiling" placeholder="Enter Fixed Ceiling Fees" /> )} {selectedFeesType === 'partial' && ( <input type="text" className="form-control partialfees" placeholder="Enter Partial Fees" /> )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="w-25">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                  <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Tuition Fees </label>
                                  <label for="toDate" class="form-label w-100 mb-0">8000</label> {/* <input type="text" class="form-control removespecialchar" placeholder="Enter Exam Fees" /> */}
                                </div>
                              </td>
                              <td className="w-75">
                                <div className="row m-0">
                                  <div className="col-lg-6">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                      <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Scholarship Amount </label>
                                      <input type="text" class="form-control removespecialchar" placeholder="Enter Scholarship Amount" />
                                    </div>
                                  </div>
                                  <div className="col-lg-5">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                      <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Fees Type </label>
                                      <select class="form-select" aria-label="Default select fees type">
                                        <option selected>select Fees Type</option>
                                        <option value="1">Full</option>
                                        <option value="2">Fixed Ceiling</option>
                                        <option value="3">Partial</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="w-25">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                  <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Special Fees </label>
                                  <label for="toDate" class="form-label w-100 mb-0">6000</label> {/* <input type="text" class="form-control removespecialchar" placeholder="Enter Exam Fees" /> */}
                                </div>
                              </td>
                              <td className="w-75">
                                <div className="row m-0">
                                  <div className="col-lg-6">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                      <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Scholarship Amount </label>
                                      <input type="text" class="form-control removespecialchar" placeholder="Enter Scholarship Amount" />
                                    </div>
                                  </div>
                                  <div className="col-lg-5">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                      <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Fees Type </label>
                                      <select class="form-select" aria-label="Default select fees type">
                                        <option selected>select Fees Type</option>
                                        <option value="1">Full</option>
                                        <option value="2">Fixed Ceiling</option>
                                        <option value="3">Partial</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="w-25">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                  <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Library Fees </label>
                                  <label for="toDate" class="form-label w-100 mb-0">7000</label> {/* <input type="text" class="form-control removespecialchar" placeholder="Enter Exam Fees" /> */}
                                </div>
                              </td>
                              <td className="w-75">
                                <div className="row m-0">
                                  <div className="col-lg-6">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                      <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Scholarship Amount </label>
                                      <input type="text" class="form-control removespecialchar" placeholder="Enter Scholarship Amount" />
                                    </div>
                                  </div>
                                  <div className="col-lg-5">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                      <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Fees Type </label>
                                      <select class="form-select" aria-label="Default select fees type">
                                        <option selected>select Fees Type</option>
                                        <option value="1">Full</option>
                                        <option value="2">Fixed Ceiling</option>
                                        <option value="3">Partial</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="w-25">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                  <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Sports Fees </label>
                                  <label for="toDate" class="form-label w-100 mb-0">2000</label> {/* <input type="text" class="form-control removespecialchar" placeholder="Enter Exam Fees" /> */}
                                </div>
                              </td>
                              <td className="w-75">
                                <div className="row m-0">
                                  <div className="col-lg-6">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                      <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Scholarship Amount </label>
                                      <input type="text" class="form-control removespecialchar" placeholder="Enter Scholarship Amount" />
                                    </div>
                                  </div>
                                  <div className="col-lg-5">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                      <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Fees Type </label>
                                      <select class="form-select" aria-label="Default select fees type">
                                        <option selected>select Fees Type</option>
                                        <option value="1">Full</option>
                                        <option value="2">Fixed Ceiling</option>
                                        <option value="3">Partial</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="w-25">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                  <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Enroll Fees </label>
                                  <label for="toDate" class="form-label w-100 mb-0">5000</label> {/* <input type="text" class="form-control removespecialchar" placeholder="Enter Exam Fees" /> */}
                                </div>
                              </td>
                              <td className="w-75">
                                <div className="row m-0">
                                  <div className="col-lg-6">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                      <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Scholarship Amount </label>
                                      <input type="text" class="form-control removespecialchar" placeholder="Enter Scholarship Amount" />
                                    </div>
                                  </div>
                                  <div className="col-lg-5">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                      <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Fees Type </label>
                                      <select class="form-select" aria-label="Default select fees type">
                                        <option selected>select Fees Type</option>
                                        <option value="1">Full</option>
                                        <option value="2">Fixed Ceiling</option>
                                        <option value="3">Partial</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="w-25">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                  <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0 text-danger"> Total Fees </label>
                                  <input type="text" class="form-control removespecialchar" placeholder="Total Exam Fees" />
                                </div>
                              </td>
                              <td className="w-75">
                                <div className="row m-0">
                                  <div className="col-lg-5">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                      <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0 text-danger"> Total Scholarship Amount </label>
                                      <input type="text" class="form-control removespecialchar" placeholder="Total Scholarship Amount" />
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div> {/* <div className="col-lg-6"> Filter </div>
                <div className="col-lg-6"> Filter </div> */}
              </div>
              <div className="col-md-4 mb-2 mt-2">
                <a href="#" className="btn btn-success cus-btn">
                  <i className="bi bi-send-check"></i> Save </a>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
          <div className="col-lg-12 mb-2">
            <div className="alert alert-success py-1">
              <form className="row">
                <div class="col-md-12 mb-2 mt-2">
                  <h4 class="page-title txt-red">
                    <i class="bi bi-file-earmark-text"></i> Scheme Details
                  </h4>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                  <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Department </label>
                  <label htmlFor="toDate" className="form-label w-100 mb-0"> Department A </label>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1 ps-0">
                  <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Sub Department </label>
                  <label htmlFor="toDate" className="form-label w-100 mb-0"> Sub Department A </label>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1 ps-0">
                  <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Scheme Name </label>
                  <label htmlFor="toDate" className="form-label w-100 mb-0"> Scheme Name A </label>
                </div>
                <p className="viewmore mb-0 text-danger" onClick={()=> setShowMore(true)} style={{ display: showMore ? 'none' : 'block' }} > <i class="bi bi-arrows-angle-expand"></i> View More </p>
                <div className={`viewmore-wrap row ${showMore ? 'show' : '' }`}>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                    <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Institute Category </label>
                    <label htmlFor="toDate" className="form-label w-100 mb-0"> Institute Category A </label>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                    <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Institute Type </label>
                    <label htmlFor="toDate" className="form-label w-100 mb-0"> Institute Type A </label>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                    <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Institute Name </label>
                    <label htmlFor="toDate" className="form-label w-100 mb-0"> Institute Name A </label>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                    <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Community </label>
                    <label htmlFor="toDate" className="form-label w-100 mb-0"> Community A </label>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                    <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Caste </label>
                    <label htmlFor="toDate" className="form-label w-100 mb-0"> Caste A </label>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                    <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Student Category </label>
                    <label htmlFor="toDate" className="form-label w-100 mb-0"> Student Category A </label>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                    <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Stream </label>
                    <label htmlFor="toDate" className="form-label w-100 mb-0"> Stream A </label>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                    <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Course </label>
                    <label htmlFor="toDate" className="form-label w-100 mb-0"> Course A </label>
                  </div>
                  <p className="lessmore mb-0 text-danger" onClick={()=> setShowMore(false)} > <i class="bi bi-arrows-angle-contract"></i> View Less </p>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div class="col-md-12 mb-2 mt-2">
              <h4 class="page-title">
                <i class="bi bi-award"></i> Scholarship - Fee Details
              </h4>
            </div>
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" className="w-25">Fees</th>
                          <th scope="col" className="w-75">Scholarship</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="w-25">
                            <label for="toDate" className="form-label lbl-color w-100 mb-0 text-danger">ADW components</label>
                          </td>
                        </tr>
                        <tr>
                          <td className="w-25">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                              <label for="toDate" className="form-label lbl-color w-100 mb-0">Total Fees</label>
                              <label for="toDate" class="form-label w-100 mb-0">10000</label>
                            </div>
                          </td>
                          <td className="w-75">
                            <div className="row m-0">
                              <div className="col-lg-5">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                  <label for="toDate" className="form-label lbl-color w-100 mb-0">Total Scholarship Amount</label>
                                  <label for="toDate" class="form-label w-100 mb-0">4000</label>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-wrap">
            <form className="row">
              <div className="col-md-12 mb-2 mt-3">
                <h4 className="page-title">
                  <i className="bi bi-file-earmark-text"></i> General Components
                </h4>
              </div>
              <div className="col-md-4 mb-2">
                <label for="inputEmail4" className="form-label lbl-font lbl-color">Scheme </label>
                <select className="form-select" name="InstituteCategory">
                  <option value="">Select Scheme</option>
                  <option value="1">Inclusive</option>
                  <option value="2">Exclusive</option>
                </select>
              </div>
              <div className="col-md-4 mb-2">
                <label for="inputEmail4" className="form-label lbl-font lbl-color"> Frequency</label>
                <select className="form-select" name="InstituteName">
                  <option value="">Select Frequency</option>
                  <option value="1">Monthly</option>
                  <option value="1">Quarterly</option>
                  <option value="1">Half Year</option>
                  <option value="1">Yearly</option>
                </select>
              </div>
              <div className="col-md-4 mb-2">
                <label for="inputEmail4" className="form-label lbl-font w-100 lbl-color">Fixed Component</label>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label class="form-check-label" for="inlineRadio1">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label class="form-check-label" for="inlineRadio2">No</label>
                </div>
              </div>
              <div class="col-md-4 mb-2 mt-2">
                <a href="#" class="btn btn-success cus-btn">
                  <i class="bi bi-send-check"></i> Submit </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 
  </>
)} 
export default SchemeRegistration