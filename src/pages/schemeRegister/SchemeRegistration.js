import axios from 'axios';
import React, { useEffect, useState } from 'react' ; 
import Select from 'react-select';
import Form from 'react-bootstrap/Form';
const SchemeRegistration = () => {
  const PRODUCTION_END_POINT_API = 'https://tngis.tnega.org/';
  const IP_END_POINT_API = 'http://192.168.4.251/';
  const [formData, setFormData] = useState({
    department: [],subDepartment: [],schemeName: '',schemeCode: '',education: [],
    instituteType: [],instituteCategory: [],universityType: [],university: [],
    instituteName: [],studentCategory: [],class: [],schoolCategory: [],
    schoolType: [],schoolName: [],schoolClass: [],stream: [],course: [],
    courseType: [],medium: [],religion: [],community: [],caste: [],gender: [],income: [],
    residentalStatus: [], disabilityStatus:[], disabilityCategory: [], schemeFeeType: [], instituteOwnership: []
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
  const [instOwnership, setInstOwnership] = useState([]);
  const [disable, setDisable] = useState(true);
  const [inst, setInst] = useState([]);
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    'X-APP-KEY': 'te$t',
  };
  useEffect(() => { debugger;
    const fetchData = async () => {
      try {
        const DEPT_API = await axios.post(IP_END_POINT_API+'ssp_backend/api/v1/get_department', { user_id: 1 }, {headers: headers});
        const COMMUNITY_API = await axios.post(IP_END_POINT_API+'ssp_backend/api/v1/get_community', { user_id: 1 }, {headers: headers});
        const RELIGION_API = await axios.post(IP_END_POINT_API+'ssp_backend/api/v1/get_dropdown_values', {user_id:1, category:'Religion'}, {headers: headers});
        const EDU_API = await axios.post(IP_END_POINT_API+'ssp_backend/api/v1/get_dropdown_values', {user_id:1, category:'EducationType'}, {headers: headers});
        const STREAM_API = await axios.post(IP_END_POINT_API+'ssp_backend/api/v1/get_streams', {user_id:1}, {headers: headers});
        const COURSE_TYPE_API = await axios.post(IP_END_POINT_API+'ssp_backend/api/v1/get_course_types', {user_id:1}, {headers: headers});
        const GENDER_API = await axios.post(IP_END_POINT_API+'ssp_backend/api/v1/get_dropdown_values', {user_id:1, category:'Gender'}, {headers: headers});
        const INCOME_API = await axios.post(IP_END_POINT_API+'ssp_backend/api/v1/get_income_ranges', {user_id: 1, category:'Income'}, {headers: headers});
        setIncome(INCOME_API.data?.data || []);
        setGender(GENDER_API.data?.data || []);
        setCourseTyp(COURSE_TYPE_API.data?.data || []);
        setStream(STREAM_API.data?.data || []);
        setEducation(EDU_API.data?.data || []);
        setDepartmentData(DEPT_API.data?.data || []);
        setCommunity(COMMUNITY_API.data?.data || []);
        setReligion(RELIGION_API.data?.data || []);
      } catch (error) {
        console.log('Error fetching department data:', error);
      }
    };
    fetchData();
}, []);
const [showINEX, setShowINEX] = useState(false);
const handleINEX = (e) => { debugger;
  if(e.target.value === "1") {
    setShowINEX(true)
  } else {
    setShowINEX(false)
  }
}
const [active, setActive] = useState('home-tab-pane');
const handleSave = (e, tabId) => { debugger;
  setActive(tabId)
  e.preventDefault();
  console.log('Form Data:', formData.department);
  {
    formData.instituteType.map((value, index) => {
      return value
    })
  }
};
const [forCourse, setForCourse] = useState([]);
const handleSchemeName = (e) => {
  const name = e.target.value;
  setFormData({ ...formData, schemeName: name });
}
const handleSchemeCode = (e) => {
  const code = e.target.value;
  setFormData({ ...formData, schemeName: code });
}
const [school, setSchool] = useState(false);
const [college, setCollege] = useState(false);
// const handleEducationChange = (e) => {
//   setFormData({ ...formData, education: e });
// }
const getCheckedValue = (e) => {
  const t = e.target.value;
}
const [selectedOptions, setSelectedOptions] = useState([]);
const handleSubDeptChange = (selected) => {
  setSelectedOptions(selected);
    const allOptionSelected = selected.some(option => option.value === 'all');
    if (allOptionSelected) {
      setSelectedOptions(subdeptOptions);
      setFormData({ ...formData, subDepartment: subdeptOptions });
    }
    else {
      setFormData({ ...formData, subDepartment: selected });
    }
}
const instOwnershipOptions = Object.entries(instOwnership).map(([key, val]) => {
  return(
    {
      value: val.id,
      label: val.ownership
    }
  )
})
const univOptions = Object.entries(univ).map(([key, val]) => {
  return(
    {
      value: val.id,
      label: val.university_name
    }
  )
})
const courseTypOption = Object.entries(courseTyp).map(([key, val]) => {
  return(
    {
      value: val.id,
      label: val.course_type
    }
  )
})
const incomeOptions = Object.entries(income).map(([key, val]) => {
  return(
    {
      value: val.id,
      label: val.income_range
    }
  )
})
const religionOptions = Object.entries(religion).map(([key, val]) => {
  return(
    {
      value: val.id,
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
      value: val.id,
      label: val.display_text
    }
  )
})
const instTypOptions = Object.entries(instTyp).map(([key, val]) => {
  return(
    {
      value: val.id,
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
      value: val.id,
      label: val.subdepartment_name
    }
  )
})

const communityOptions = Object.entries(community).map(([key, val]) => {
  return(
    {
      value: val.id,
      label: val.community_name
    }
  )
})
const casteOptions = Object.entries(caste).map(([key, val]) => {
  return(
    {
      value: val.id,
      label: val.caste_name
    }
  )
})
const eduOptions = Object.entries(education).map(([key, val]) => {
  return(
    {
      value: val.id,
      label: val.display_text
    }
  )
})
const insCtOptions = Object.entries(institutionCat).map(([key, val]) => {
  return(
    {
      value: val.id,
      label: val.institute_category
    }
  )
})
const streamOptions = Object.entries(stream).map(([key, val]) => {
  return(
    {
      value: val.id,
      label: val.stream_name
    }
  )
})
const univTypOptions = Object.entries(univTyp).map(([key, val]) => {
  return(
    {
      value: val.id,
      label: val.university_type
    }
  )
})
const disabilityOptions = Object.entries(disability).map(([key, val]) => {
  return(
    {
      value: val.id,
      label: val.disability_name
    }
  )
})
const instOptions = Object.entries(inst).map(([key, val]) => {
  return(
    {
      value: val.id,
      label: val.institution_name
    }
  )
})
const [feeType, setFeeType] = useState(true);
const [streamId, setStreamId] = useState([]);
const callInstApifunc = async (instTypeId, instOId, instCtId, univsId) => { debugger;
  try {
    const instResponse = await axios.post(
      IP_END_POINT_API+'ssp_backend/api/v1/get_institutions',
      { user_id: 1, education_type_id: 1, institution_type_id: instTypeId.length === 0 ? [0] : instTypeId, institution_ownership_id: instOId.length === 0 ? [0] : instOId, institution_category_id: instCtId.length === 0 ? [0] : instCtId, university_id: univsId.length === 0 ? [0] : univsId},
      { headers: headers }
    );
    setInst(instResponse.data?.data || []);
  }
  catch (err) {
    console.log(err);
  }
}
const callApiFun = async (courseTypeId, streamId) => {
  try {
    const courseResponse = await axios.post(
      IP_END_POINT_API+'ssp_backend/api/v1/get_courses',
      { user_id: 1, course_type_id: courseTypeId.length === 0 ? [0] : courseTypeId, stream_id: streamId.length === 0 ? [0] : streamId },
      { headers: headers }
    );
    setCourse(courseResponse.data?.data || []);
  } catch (error) {
    console.log('Error', error);
  }
}
const [getCourseTypeId ,setGetCourseTypeId] = useState([]);
const [instTypeId, setInstTypeId] = useState([]);
const [instCtId, setInstCtId] = useState([]);
const [instOId, setInstOId] = useState([]);
const [univsId, setUnivsId] = useState([]);
const handleOptionsChange = async (e, name) => { debugger;
  if (name === 'university') {
    const univsIds = e.map(option => option.value);
    const univsId = univsIds.map((univsId) => {
      return univsId
    });
    setUnivsId(univsId);
    callInstApifunc(instTypeId, instOId, instCtId, univsId);
  }
  else if (name === 'education') {
    if(e.label === 'School') {
      setSchool(true);
      setCollege(false);
    }
    else if(e.value === 0) {
      setCollege(false);
      setSchool(false);
    }
    else {
      setCollege(true);
      setSchool(false);
      try {
        const INST_CTG_API = await axios.post(IP_END_POINT_API+'ssp_backend/api/v1/get_institute_category', {user_id:1}, {headers: headers});
        const INST_TYP_API = await axios.post(IP_END_POINT_API+'ssp_backend/api/v1/get_institutetypes', {user_id:1}, {headers: headers});
        const OWNERSHIP_API = await axios.post(IP_END_POINT_API+'ssp_backend/api/v1/get_ownerships',{id:0}, {headers: headers});
        setInstOwnership(OWNERSHIP_API.data?.data || []);
        setInstTyp(INST_TYP_API.data?.data || []);
        setInstitutionCat(INST_CTG_API.data?.data || []);
      }
      catch(err) {
        console.log('err', err);
      }
    }
  }
  else if (name === 'universityType') {
    try {
      const univIds = e.map(option => option.value);
      const univId = univIds.map((univId) => {
        return univId
      });
      const univResponse = await axios.post(
        IP_END_POINT_API+'ssp_backend/api/v1/get_universities',
        { user_id: 1, university_type_id: univId.length === 0 ? [0] : univId },
        { headers: headers }
      );
      setUniv(univResponse.data?.data || []);
    } catch (error) {
      console.log('Error', error);
    }
  }
  else if (name === 'instituteType') {
    const instTypIds = e.map(option => option.value);
    const instTypId = instTypIds.map((instTypId) => {
      return instTypId
    });
    setInstTypeId(instTypId);
    callInstApifunc(instTypId, instOId, instCtId, univsId);
  }
  else if (name === 'instituteCategory') {
    const instCtIds = e.map(option => option.value);
    const instCtId = instCtIds.map((instCtId) => {
      return instCtId
    });
    setInstCtId(instCtId);
    callInstApifunc(instTypeId, instOId, instCtId, univsId);
  }
  else if(name === 'instituteOwnership') {
    try {
      const instOwnIds = e.map(option => option.value);
      const instOwnId = instOwnIds.map((instOwnId) => {
        return instOwnId
      });
      setInstOId(instOwnId);
      const instOwnResponse = await axios.post(
        IP_END_POINT_API+'ssp_backend/api/v1/get_university_types',
        { user_id: 1, ownership_id: instOwnId.length === 0 ? [0] : instOwnId },
        { headers: headers }
      );
      setUnivTyp(instOwnResponse.data?.data || []);
      callInstApifunc(instTypeId, instOwnId, instCtId, univsId);
    } catch (error) {
      console.log('Error', error);
    }
  }
  else if(name === 'community') {
    if(e.some(option => option.value === 'all')) {
      setFormData({ ...formData, [name]: communityOptions});
    } else {
      setFormData({ ...formData, [name]: e });
    }
    try {
      const communityIds = e.map(option => option.value);
      const communityId = communityIds.map((communityId) => {
        return communityId
      });
      const casteResponse = await axios.post(
        IP_END_POINT_API+'ssp_backend/api/v1/get_caste',
        { user_id: 1, community_id: communityId.length === 0 ? [0] : communityId },
        { headers: headers }
      );
      setCaste(casteResponse.data?.data || []);
    } catch (error) {
      console.log('Error fetching sub department data:', error);
    }
  }
  else if(name === 'stream') {
      const streamIds = e.map(option => option.value);
      const streamId = streamIds.map((streamId) => {
        return streamId
      });
      setStreamId(streamId)
      callApiFun(getCourseTypeId, streamId);
  }
  else if(name === 'courseType') {
    const courseTypeIds = e.map(option => option.value);
      const courseTypeId = courseTypeIds.map((courseTypeId) => {
        return courseTypeId
      });
      setGetCourseTypeId(courseTypeId)
      callApiFun(courseTypeId, streamId);
  }
  else if(name === 'department') {
    setDisable(false);
    setFormData({ ...formData, [name]: e.label });
    try {
      const casteResponse = await axios.post(
        IP_END_POINT_API+'ssp_backend/api/v1/get_sub_department',
        { user_id: 1, department_id: [e.value] },
        { headers: headers }
      );
      setSubDepartmentData(casteResponse.data?.data || []);
    } catch (error) {
      console.log('Error', error);
    }
  }
  else if(name === 'schemeFeeType') {
    if(e.value === 'Fixed') {
      setFeeType(false);
    } else {
      setFeeType(true);
    }
  }
  else if (name === 'disabilityStatus') {
    setFormData({ ...formData, [name]: e.value });
    if(e.value === 'Yes') {
      setDisStatus(true);
      try {
        const disabilityResponse = await axios.post(
          IP_END_POINT_API+'ssp_backend/api/v1/get_differentlyabled',
          { user_id: 1},
          { headers: headers }
        );
        setDisability(disabilityResponse.data?.data || []);
      } catch (error) {
        console.log('Error', error);
      }
    } else {
      setDisStatus(false);
    }
  }
  else {
    if (e.some(option => option.value === 'all')) {
      setFormData({ ...formData, [name]: name === 'caste' ? casteOptions :
        name === 'subDepartment' ? subdeptOptions : name === 'instituteType' ? instTypOptions : 
        name === 'instituteCategory' ? insCtOptions : name === 'universityType' ? univTypOptions : name === 'university' ? univOptions : name === 'universityType' ? univTypOptions : name === 'university' ? univOptions : name === 'stream' ? streamOptions : name === 'courseType' ? courseTypOption : name === 'religion' ? religionOptions : name === 'caste' ? casteOptions : name === 'gender' ? genderOptions : name === 'income' ? incomeOptions : ''
      });
    }
    else {
      setFormData({ ...formData, [name]: e });
    }
  }
}
  const [showMore, setShowMore] = useState(false); 
  const [selectedFeesType, setSelectedFeesType] = useState(''); 
  const handleSelectChange = (event) => { setSelectedFeesType(event.target.value); }; 
  const [disStatus, setDisStatus] = useState(false);
  const handleTabClick = (tabId) => {
    setActive(tabId);
  };
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
          <button onClick={() => handleTabClick('home-tab-pane')} class={`nav-link ${active === 'home-tab-pane' ? 'active' : ''}`} id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
            <i class="bi bi-file-earmark-text"></i> Scheme Details </button>
        </li>
        <li class="nav-item mx-2" role="presentation">
          <button onClick={() => handleTabClick('profile-tab-pane')} class={`nav-link mx-2 ${active === 'profile-tab-pane' ? 'active' : ''}`} id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
            <i class="bi bi-award"></i> Scholarship - Fee Details </button>
        </li>
        <li class="nav-item" role="presentation">
          <button onClick={() => handleTabClick('contact-tab-pane')} class={`nav-link ${active === 'contact-tab-pane' ? 'active' : ''}`} id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
            <i class="bi bi-check2-circle"></i> Scheme Characteristics </button>
        </li>
      </ul>
      <div class="tab-content my-3" id="myTabContent">
        <div className={`tab-pane fade ${active === 'home-tab-pane' ? 'show active' : ''}`} id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
          <form className="row">
            <div className="col-md-4 mb-2">
              <Form.Group className="mb-3 instituteApproveRejectForm">
                <div className="">
                  <span className="form-label lbl-font lbl-color">Department</span>
                  <Select
                    //defaultValue={selectedOptions}
                    //isMulti
                    options={[...deptOptions]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    //onChange={handleDepartmentChange}
                    onChange={(e) => handleOptionsChange(e, 'department')}
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
                    onChange={handleSubDeptChange}
                    isDisabled = {disable}
                  />
                </div>
              </Form.Group>
            </div>
            <div className="col-md-4 mb-2">
              <label for="inputEmail4" className="form-label lbl-font lbl-color">Scheme Name</label>
              <input type="text" className="form-control removespecialchar" placeholder="Enter Scheme Name" onChange={(e) => handleSchemeName(e)} />
            </div>
            <div className="col-md-4 mb-2">
                <label for="inputEmail4" className="form-label lbl-font lbl-color">Scheme Code</label>
                <input type="text" class="form-control removespecialchar" placeholder="Enter Scheme Code" onChange={(e) => handleSchemeCode(e)}/>
              </div>
              <div className="col-md-4 mb-2">
                  <Form.Group className="mb-3 instituteApproveRejectForm">
                  <div className="">
                    <span className="form-label lbl-font lbl-color">Scheme Fee Type</span>
                    <Select
                      //defaultValue={selectedOptions}
                      //isMulti
                      options={[{ value: 'Fixed', label: 'Fixed' }, { value: 'Part', label: 'Part' }]}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={(e) => handleOptionsChange(e, 'schemeFeeType')}
                    />
                  </div>
                  </Form.Group>
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
                    onChange={(e) => handleOptionsChange(e, 'education')}
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
                            onChange={(e) => handleOptionsChange(e, 'schoolCategory')}
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
                            onChange={(e) => handleOptionsChange(e, 'schoolType')}
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
                          onChange={(e) => handleOptionsChange(e, 'schoolName')}
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
                          <span className="form-label lbl-font lbl-color">Institute Ownership</span>
                          <Select
                            //defaultValue={selectedOptions}
                            isMulti
                            options={[{ value: 'all', label: 'All' }, ...instOwnershipOptions]}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={(e) => handleOptionsChange(e, 'instituteOwnership')}
                          />
                        </div>
                      </Form.Group>
                    </div>
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
                            onChange={(e) => handleOptionsChange(e, 'instituteType')}
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
                            onChange={(e) => handleOptionsChange(e, 'instituteCategory')}
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
                            onChange={(e) => handleOptionsChange(e, 'universityType')}
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
                            onChange={(e) => handleOptionsChange(e, 'university')}
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
                          options={[{ value: 'all', label: 'All' }, ...instOptions]}
                          className="basic-multi-select"
                          classNamePrefix="select"
                          onChange={(e) => handleOptionsChange(e, 'instituteName')}
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
                          onChange={(e) => handleOptionsChange(e, 'studentCategory')}
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
                    <Form.Group className="mb-3 instituteApproveRejectForm">
                        <div className="">
                          <span className="form-label lbl-font lbl-color">Stream</span>
                          <Select
                            //defaultValue={selectedOptions}
                            isMulti
                            options={[{ value: 'all', label: 'All' }, ...streamOptions]}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            //onChange={handleStreamChange}
                            onChange={(e) => handleOptionsChange(e, 'stream')}
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
                      //onChange={handleCourseTypeChange}
                      onChange={(e) => handleOptionsChange(e, 'courseType')}
                    />
                  </div>
                </Form.Group>
              </div>
              <div className="col-md-4 mb-2">
                <Form.Group className="mb-3 instituteApproveRejectForm">
                <div className="">
                  <span className="form-label lbl-font lbl-color">Course</span>
                  <Select
                    //defaultValue={selectedOptions}
                    isMulti
                    options={[{ value: 'all', label: 'All' }, ...courseOptions]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) => handleOptionsChange(e, 'course')}
                  />
                </div>
              </Form.Group>
              </div>
              
              
              <div className="col-md-4 mb-2">
                <Form.Group className="mb-3 instituteApproveRejectForm">
                  <div className="">
                    <span className="form-label lbl-font lbl-color">Medium of Instruction</span>
                    <Select
                      //defaultValue={selectedOptions}
                      isMulti
                      options={[{ value: 'all', label: 'All' },{ value: 'English', label: 'English' },{ value: 'Tamil', label: 'Tamil' },]}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={(e) => handleOptionsChange(e, 'medium')}
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
                    onChange={(e) => handleOptionsChange(e, 'religion')}
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
                    //onChange={handleCommunityChange}
                    onChange={(e) => handleOptionsChange(e, 'community')}
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
                    //isDisabled = {disable}
                    onChange={(e) => handleOptionsChange(e, 'caste')}
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
                    onChange={(e) => handleOptionsChange(e, 'gender')}
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
                    onChange={(e) => handleOptionsChange(e, 'income')}
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
                      onChange={(e) => handleOptionsChange(e, 'residentalStatus')}
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
                      //onChange={handledisabilityStatus}
                      onChange={(e) => handleOptionsChange(e, 'disabilityStatus')}
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
                      onChange={(e) => handleOptionsChange(e, 'disabilityCategory')}
                    />
                  </div>
                </Form.Group>
              </div>
              }
              <div className='row'>
                <div className="col-md-4 mb-2 mt-2">
                  <a onClick={(e) => handleSave(e, 'profile-tab-pane')} className="btn btn-success cus-btn">
                    <i className="bi bi-send-check"></i> Save </a>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className={`tab-pane fade ${active === 'profile-tab-pane' ? 'show active' : ''}`} id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
          <div className="row">
            {
              feeType && (
                <div className="col-lg-3">
                  <div className="alert alert-warning">
                    <div className="col-md-12 mb-2 mt-2">
                      <h4 className="page-title txt-red">
                        <i class="bi bi-funnel"></i> Filters
                      </h4>
                    </div>
                    <div class="accordion" id="accordionExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button py-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> General Components </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <div className="col-md-12 mb-2">
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">Institute Category</label> 
                              {
                                formData.instituteCategory.map((value, index) => {
                                  return (
                                    <div class="form-check">
                                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault111" />
                                      <label class="form-check-label" for="flexCheckDefault111"> {
                                        value.label} </label>
                                    </div>
                                  )
                                })
                              }
                            </div>
                            <div className="col-md-12 mb-2">
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">Institute Type</label>
                              {
                                formData.instituteType.map((value, index) => {
                                  return (
                                    <div class="form-check">
                                      <input class="form-check-input" type="checkbox" value={value.label} id="flexCheckDefault1112" />
                                      <label class="form-check-label" for="flexCheckDefault1112"> {value.label} </label>
                                    </div>
                                  )
                                })
                              }
                            </div>
                            <div className="col-md-12 mb-2">
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">Institute Name</label>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11131" checked />
                                <label class="form-check-label" for="flexCheckDefault11131"> Institute Name A </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11132" />
                                <label class="form-check-label" for="flexCheckDefault11132"> Institute Name B </label>
                              </div>
                            </div>
                            <div className="col-md-12 mb-2">
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">Community</label> 
                              {
                                formData.community.map((value, i) => {
                                  return (
                                    <div class="form-check">
                                      <input class="form-check-input" type="checkbox" value= {value.label} id="flexCheckDefault77" />
                                      <label class="form-check-label" for="flexCheckDefault77"> {value.label} </label>
                                    </div>
                                  )
                                })
                              }
                            </div>
                            <div className="col-md-12 mb-2">
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">Caste</label>
                              {
                                formData.caste.map((value, i) => {
                                  return (
                                    <div class="form-check">
                                      <input class="form-check-input" type="checkbox" value={value.label} id="flexCheckDefault666" checked />
                                      <label class="form-check-label" for="flexCheckDefault666"> {value.label} </label>
                                    </div>
                                  )
                                })
                              }
                            </div>
                            <div className="col-md-12 mb-2">
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">Student Category</label> 
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault123" />
                                <label class="form-check-label" for="flexCheckDefault123"> Student Category A </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault456" checked />
                                <label class="form-check-label" for="flexCheckDefault456"> Student Category B </label>
                              </div>
                            </div>
                            <div className="col-md-12 mb-2">
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">Stream</label> 
                                {
                                  formData.stream.map((value, i) => { debugger;
                                    return (
                                      <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value={value.label}id="flexCheckDefault4561" onClick={(e) => getCheckedValue(e)}/>
                                        <label class="form-check-label" for="flexCheckDefault4561"> {value.label} </label>
                                      </div>
                                    )
                                  })
                                }
                            </div>
                            <div className="col-md-12 mb-2">
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">Course</label> 
                              {
                                formData.course.map((value, i) => {
                                  return (
                                    <div class="form-check">
                                      <input class="form-check-input" type="checkbox" value={value.label} id="flexCheckDefault45612" />
                                      <label class="form-check-label" for="flexCheckDefault45612"> {value.label} </label>
                                    </div>
                                  )
                                })
                              }
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
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">Student Residential Status</label> 
                              {
                                formData.residentalStatus.map((value, i) => {
                                  return (
                                    <div class="form-check">
                                      <input class="form-check-input" type="checkbox" value={value.label} id="flexCheckDefault456134" />
                                      <label class="form-check-label" for="flexCheckDefault456134"> {value.label} </label>
                                    </div>
                                  )
                                })
                              }
                            </div>
                            <div className="col-md-12 mb-2">
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">Disability Status</label> 
                              {
                                formData.disabilityStatus.length === 0 ? '' :
                                <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value={formData.disabilityStatus} id="flexCheckDefault4561341" />
                                  <label class="form-check-label" for="flexCheckDefault4561341"> {formData.disabilityStatus} </label>
                                </div>
                              }
                            </div>
                            <div className="col-md-12 mb-2">
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">Disability Category</label> 
                              {
                                formData.disabilityCategory.map((value, i) => {
                                  return (
                                    <div class="form-check">
                                      <input class="form-check-input" type="checkbox" value={value.label} id="flexCheckDefault45613412"/>
                                      <label class="form-check-label" for="flexCheckDefault45613412"> {value.label} </label>
                                    </div>
                                  )
                                })
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            <div className="col-lg-9">
              <div className="col-lg-12 mb-2">
                <div className="alert alert-success py-1">
                  <form className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                      <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Department </label>
                      <label htmlFor="toDate" className="form-label w-100 mb-0"> {formData.department} </label>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1 ps-0">
                      <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Sub Department </label> 
                      {
                        formData.subDepartment.map((value, index) => { debugger;
                          return (
                              <label htmlFor="toDate" className="form-label w-100 mb-0"> {value.label} </label>
                          )
                        })
                      }
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1 ps-0">
                      <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Scheme Name </label>
                      <label htmlFor="toDate" className="form-label w-100 mb-0"> {formData.schemeName} </label>
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
                            {
                              feeType && (
                                <>
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
                                            <input type="text" class="form-control removespecialchar" placeholder="Enter Scholarship Amount"  />
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
                                              <select  className="form-select" aria-label="Default select fees type" onChange={handleSelectChange}>
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
                                            <input type="text" class="form-control removespecialchar" placeholder="Enter Scholarship Amount"  />
                                          </div>
                                        </div>
                                        <div className="col-lg-5">
                                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Fees Type </label>
                                            <select  class="form-select" aria-label="Default select fees type">
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
                                            <input type="text" class="form-control removespecialchar" placeholder="Enter Scholarship Amount"  />
                                          </div>
                                        </div>
                                        <div className="col-lg-5">
                                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Fees Type </label>
                                            <select  class="form-select" aria-label="Default select fees type">
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
                                            <input type="text" class="form-control removespecialchar" placeholder="Enter Scholarship Amount"  />
                                          </div>
                                        </div>
                                        <div className="col-lg-5">
                                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Fees Type </label>
                                            <select  class="form-select" aria-label="Default select fees type">
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
                                            <input type="text" class="form-control removespecialchar" placeholder="Enter Scholarship Amount"  />
                                          </div>
                                        </div>
                                        <div className="col-lg-5">
                                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Fees Type </label>
                                            <select  class="form-select" aria-label="Default select fees type">
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
                                            <input type="text" class="form-control removespecialchar" placeholder="Enter Scholarship Amount"  />
                                          </div>
                                        </div>
                                        <div className="col-lg-5">
                                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                            <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Fees Type </label>
                                            <select  class="form-select" aria-label="Default select fees type">
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
                                </>
                              )
                             }
                            <tr>
                              {
                                feeType && (
                                  <td className="w-25">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                      <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0 text-danger"> Total Fees </label>
                                      <input type="text" class="form-control removespecialchar" placeholder="Total Exam Fees" />
                                    </div>
                                  </td>
                                )
                              }
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
        <div className={`tab-pane fade ${active === 'contact-tab-pane' ? 'show active' : ''}`} id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
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
                <select className="form-select" name="InstituteCategory" onChange={(e) => handleINEX(e)}>
                  <option value="">Select Scheme</option>
                  <option value="1">Inclusive</option>
                  <option value="2">Exclusive</option>
                </select>
              </div>
              {
                showINEX && (
                  <div className="col-md-4 mb-2">
                    <label for="inputEmail4" className="form-label lbl-font lbl-color">Scheme Name </label>
                    <select className="form-select" name="InstituteCategory">
                      <option value="">Select Scheme</option>
                      <option value="1">Scheme name 1</option>
                      <option value="2">Scheme name 2</option>
                    </select>
                  </div>
                )
              }
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
              <div class="col-md-12 mb-2 mt-2">
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