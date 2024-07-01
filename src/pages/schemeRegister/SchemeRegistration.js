import axios from 'axios';
import React, { useEffect, useState } from 'react' ;
import { Container, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import Form from 'react-bootstrap/Form';
import Popup from '../../components/Popup/Popup';
import { AgGridReact } from 'ag-grid-react';
import Aggridcomp from '../../components/Aggrid/Aggridcomp';
const SchemeRegistration = () => {
  const PRODUCTION_END_POINT_API = 'https://tngis.tnega.org/';
  const IP_END_POINT_API = 'http://192.168.4.251/';
  const initialFormData = {
    department: [], subDepartment: [], schemeName: '', schemeCode: '', education: [], instituteType: [],
    instituteCategory: [], universityType: [], university: [], instituteText: [], studentCategory: [],
    class: [], schoolCategory: [], schoolType: [], schoolName: [], schoolClass: [], stream: [], course: [],
    courseType: [], medium: [], religion: [], community: [], caste: [], gender: [], income: [],
    residentalStatus: [], disabilityStatus: [], disabilityCategory: [], schemeFeeType: [], instituteOwnership: []
  };
  const [schemeRegisteredState, setSchemeRegisteredState] = useState(false);
  const [schemeRegisteredErrState, setSchemeRegisteredErrState] = useState(false);
  const [formData, setFormData] = useState({...initialFormData});
  const [filterFormData, setFilterFormData] = useState({...initialFormData});
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
  const [inst, setInst] = useState([]);
  const [univIdVal, setUnivIdVal] = useState([]);
  const [getCourseTypeId ,setGetCourseTypeId] = useState([]);
  const [instTypeId, setInstTypeId] = useState([]);
  const [instCtId, setInstCtId] = useState([]);
  const [instOId, setInstOId] = useState([]);
  const [univsId, setUnivsId] = useState([]);
  const [feeType, setFeeType] = useState(true);
  const [streamId, setStreamId] = useState([]);
  const [communityAll, setCommunityAll] = useState([]);
  const [streamAll, setStreamAll] = useState([]);
  const [univAll, setUnivAll] = useState([]);
  const [instCtAll, setInstCtAll] = useState([]);
  const [instTyAll, setInstTyAll] = useState([]);
  const [instOwnAll, setInstOwnAll] = useState([]);
  const [univTyAll, setUnivTyAll] = useState([]);
  const [instNameAll, setInstNameAll] = useState([]);
  const [courseTyAll, setCourseTyAll] = useState([]);
  const [courseAll, setCourseAll] = useState([]);
  const [mediumAll, setMediumAll] = useState([]);
  const [religionAll, setReligionAll] = useState([]);
  const [casteAll, setCasteAll] = useState([]);
  const [genderAll, setGenderAll] = useState([]);
  const [incomeAll, setIncomeAll] = useState([]);
  const [resStsAll, setResStsAll] = useState([]);
  const [createScheme, setCreateScheme] = useState([]);
  const [mediumData, setMediumData] = useState([
    { value: 'English', label: 'English' },
    { value: 'Tamil', label: 'Tamil' }
  ])
  const [resSta, setResSta] = useState([
    { value: 'Hosteller', label: 'Hosteller' },
    { value: 'Day Scholar', label: 'Day Scholar' }
  ])
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    'X-APP-KEY': 'te$t',
  };
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);
  const handleCreateScheme = async (e) => {
    try {
      const CREATE_SCHEME_API = await axios.post('https://tngis.tnega.org/ssp_backend/api/v1/create_user_scheme', 
        { 
        active
        : 
        true,
        created_user
        : 
        44,
        department_id
        : 
        1,
        frequency
        : 
        1,
        max_slab_present
        : 
        true,
        mutually_exclusive
        : 
        1,
        rule_name
        : 
        "Eligibility Rule",
        scheme_category
        : 
        "Education",
        scheme_code
        : 
        "EDU2303",
        scheme_name
        : 
        "National Scholarship",
        scholarship_slab
        : 
        2,
        slab_type
        : 
        4,
        slab_value
        : 
        15000.00,
        sub_scheme_name
        : 
        "Science Students",
        sub_department_id
        : 
        1,
        updated_user
        : 
        44 }, 
      {headers: headers});
      setCreateScheme(CREATE_SCHEME_API.data?.data || [])
      if(createScheme) {
        setSchemeRegisteredState(true);
      }
    }
    catch (error) {
      console.log('Error fetching department data:', error);
      setSchemeRegisteredState(false);
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const DEPT_API = await axios.post(PRODUCTION_END_POINT_API+'ssp_backend/api/v1/get_department', { user_id: 1 }, {headers: headers});
        const COMMUNITY_API = await axios.post(PRODUCTION_END_POINT_API+'ssp_backend/api/v1/get_community', { user_id: 1 }, {headers: headers});
        const RELIGION_API = await axios.post(PRODUCTION_END_POINT_API+'ssp_backend/api/v1/get_dropdown_values', {user_id:1, category:'Religion'}, {headers: headers});
        const EDU_API = await axios.post(PRODUCTION_END_POINT_API+'ssp_backend/api/v1/get_dropdown_values', {user_id:1, category:'EducationType'}, {headers: headers});
        const STREAM_API = await axios.post(PRODUCTION_END_POINT_API+'ssp_backend/api/v1/get_streams', {user_id:1}, {headers: headers});
        const COURSE_TYPE_API = await axios.post(PRODUCTION_END_POINT_API+'ssp_backend/api/v1/get_course_types', {user_id:1}, {headers: headers});
        const GENDER_API = await axios.post(PRODUCTION_END_POINT_API+'ssp_backend/api/v1/get_dropdown_values', {user_id:1, category:'Gender'}, {headers: headers});
        const INCOME_API = await axios.post(PRODUCTION_END_POINT_API+'ssp_backend/api/v1/get_income_ranges', {user_id: 1, category:'Income'}, {headers: headers});
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
const handleNxtPrv = (e, tabId) => {
  setActive(tabId)
  e.preventDefault();
  console.log('Form Data:', formData);
};
const handleCalc = (e) => {
  console.log(filterFormData);
}

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
const generateOptions = (obj) => {
  return Object.entries(obj).map(([key, val]) => ({
    value: val.id,
    label: val.label || val.display_text || val.course_name || val.university_name || val.ownership || val.course_type || val.income_range || val.department_name || val.institute_type || val.subdepartment_name || val.community_name || val.caste_name || val.stream_name || val.university_type || val.institute_category || val.disability_name || val.institution_name,
  }));
}

const univOptions = generateOptions(univ);
const courseTypOption = generateOptions(courseTyp);
const incomeOptions = generateOptions(income);
const resStatusOptions = generateOptions(resSta);
const religionOptions = generateOptions(religion);
const deptOptions = generateOptions(departmentData);
const genderOptions = generateOptions(gender);
const instTypOptions = generateOptions(instTyp);
const courseOptions = generateOptions(course);
const subdeptOptions = generateOptions(subDepartmentData);
const communityOptions = generateOptions(community);
const casteOptions = generateOptions(caste);
const eduOptions = generateOptions(education);
const insCtOptions = generateOptions(institutionCat);
const streamOptions = generateOptions(stream);
const univTypOptions = generateOptions(univTyp);
const disabilityOptions = generateOptions(disability);
const instOptions = generateOptions(inst);
const mediumOptions = generateOptions(mediumData);
const callInstApifunc = async (instTypeId, instOId, instCtId, univsId) => {
  if(instTypeId.length !==0 && instOId.length !==0 && instCtId.length !==0 && univsId.length !==0) {
    try {
      const instResponse = await axios.post (
        PRODUCTION_END_POINT_API+'ssp_backend/api/v1/get_institutions',
        { user_id: 1, education_type_id: 1, institution_type_id: instTypeId[0] === 'all' ? ['all'] : instTypeId, institution_ownership_id: instOId[0] === 'all' ? ['all'] : instOId, institution_category_id: instCtId[0] === 'all' ? ['all'] : instCtId, university_id: univsId[0] === 'all' ? ['all'] : univsId},
        { headers: headers }
      );
      setInst(instResponse.data?.data || []);
    }
    catch (err) {}
  }
}
const callApiFun = async (courseTypeId, streamId) => {
  if(courseTypeId.length !== 0 && streamId.length !==0 ) {
    try {
      const courseResponse = await axios.post(
        PRODUCTION_END_POINT_API+'ssp_backend/api/v1/get_courses',
        { user_id: 1, course_type_id: courseTypeId[0] === 'all' ? ['all'] : courseTypeId, stream_id: streamId[0] === 'all' ? ['all'] : streamId },
        { headers: headers }
      );
      setCourse(courseResponse.data?.data || []);
    } catch (error) {}
  }
}
const [subDepartmentAll, setSubDepartmentAll] = useState([]);
const callAllOptionFn = (e, name) => {
  const hasAllOption = e.some((option) => {
    return option.value === 'all';
  });
  if (hasAllOption) {
    setFormData({ 
      ...formData, [name]: name === 'stream' ? streamOptions : name === 'university' ? univOptions : name === 'instituteCategory' ? insCtOptions : name === 'instituteType' ? instTypOptions : name === 'instituteOwnership' ? generateOptions(instOwnership) : name === 'universityType' ? univTypOptions : name === 'instituteText' ? instOptions : name === 'courseType' ? courseTypOption : name === 'course' ? courseOptions : name === 'medium' ? mediumOptions : name === 'religion' ? religionOptions : name === 'caste' ? casteOptions : name === 'gender' ? genderOptions : name === 'income' ? incomeOptions : name === 'residentalStatus' ? resStatusOptions : name === 'subDepartment' ? subdeptOptions :
      ''
     });
    const allOption = e.find((option) => option.value === 'all');
    if (allOption) {
      return name === 'stream' ? setStreamAll(allOption.value) : name === 'university' ? setUnivAll(allOption.value) : name === 'instituteCategory' ? setInstCtAll(allOption.value) : name === 'instituteType' ? setInstTyAll(allOption.value) : name === 'instituteOwnership' ? setInstOwnAll(allOption.value) : name === 'universityType' ? setUnivTyAll(allOption.value) : name === 'instituteText' ? setInstNameAll(allOption.value) : name === 'courseType' ? setCourseTyAll(allOption.value) : name === 'course' ? setCourseAll(allOption.value) : name === 'medium' ? setMediumAll(allOption.value) : name === 'religion' ? setReligionAll(allOption.value) : name === 'caste' ? setCasteAll(allOption.value) : name === 'gender' ? setGenderAll(allOption.value) : name === 'income' ? setIncomeAll(allOption.value) : name === 'residentalStatus' ? setResStsAll(allOption.value) : name === 'subDepartment' ? setSubDepartmentAll(allOption.value) :
      ''
    }
  }
  else {
    setFormData({ ...formData, [name]: e });
    return name === 'stream' ? setStreamAll('') : name === 'university' ? setUnivAll('') : name === 'instituteCategory' ? setInstCtAll('') : name === 'instituteType' ? setInstTyAll('') : name === 'instituteOwnership' ? setInstOwnAll('') : name === 'universityType' ? setUnivTyAll('') : name === 'instituteText' ? setInstNameAll('') : name === 'courseType' ? setCourseTyAll('') : name === 'course' ? setCourseAll('') : name === 'medium' ? setMediumAll('') : name === 'religion' ? setReligionAll('') :name === 'caste' ? setCasteAll('') : name === 'gender' ? setGenderAll('') : name === 'income' ? setIncomeAll('') : name === 'residentalStatus' ? setResStsAll('') : name === 'subDepartment' ? setSubDepartmentAll('') :
    ''
  }
}
const [communityId, setCommunityId] = useState([]);
const handleOptionsChange = async (e, name) => { debugger;
  if (name === 'university') {
    callAllOptionFn(e, name);
    const univsIds = e.map(option => option.value);
    const univsId = univsIds.map((univsId) => {
      return univsId
    });
    setUnivsId(univsId);
    callInstApifunc(instTypeId, instOId, instCtId, univsId);
  }
  else if (name === 'instituteText' || name === 'medium' || name === 'religion' || name === 'caste' || name === 'gender' || name === 'income' || name === 'residentalStatus' || name === 'subDepartment') {
    callAllOptionFn(e, name);
  }
  else if (name === 'education') {
      setFormData({ ...formData, [name]: e.label });
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
        const INST_CTG_API = await axios.post(PRODUCTION_END_POINT_API+'ssp_backend/api/v1/get_institute_category', {user_id:1}, {headers: headers});
        const INST_TYP_API = await axios.post(PRODUCTION_END_POINT_API+'ssp_backend/api/v1/get_institutetypes', {user_id:1}, {headers: headers});
        const OWNERSHIP_API = await axios.post(PRODUCTION_END_POINT_API+'ssp_backend/api/v1/get_ownerships',{id:0}, {headers: headers});
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
    callAllOptionFn(e, name);
    try {
      const univIds = e.map(option => option.value);
      const univId = univIds.map((univId) => {
        return univId
      });
      setUnivIdVal(univId);
      const univResponse = await axios.post(
        PRODUCTION_END_POINT_API+'ssp_backend/api/v1/get_universities',
        { user_id: 1, university_type_id: univId[0] === 'all' ? ['all'] : univId },
        { headers: headers }
      );
      setUniv(univResponse.data?.data || []);
    } catch (error) {
      console.log('Error', error);
    }
  }
  else if (name === 'instituteType') {
    callAllOptionFn(e, name);
    const instTypIds = e.map(option => option.value);
    const instTypId = instTypIds.map((instTypId) => {
      return instTypId
    });
    setInstTypeId(instTypId);
    callInstApifunc(instTypId, instOId, instCtId, univsId);
  }
  else if (name === 'instituteCategory') {
    callAllOptionFn(e,name);
    const instCtIds = e.map(option => option.value);
    const instCtId = instCtIds.map((instCtId) => {
      return instCtId
    });
    setInstCtId(instCtId);
    callInstApifunc(instTypeId, instOId, instCtId, univsId);
  }
  else if(name === 'instituteOwnership') {
    callAllOptionFn(e, name);
    try {
      const instOwnIds = e.map(option => option.value);
      const instOwnId = instOwnIds.map((instOwnId) => {
        return instOwnId
      });
      setInstOId(instOwnId);
      const instOwnResponse = await axios.post(
        PRODUCTION_END_POINT_API+'ssp_backend/api/v1/get_university_types',
        { user_id: 1, ownership_id: instOwnId[0] === 'all' ? ['all'] : instOwnId },
        { headers: headers }
      );
      setUnivTyp(instOwnResponse.data?.data || []);
      callInstApifunc(instTypeId, instOwnId, instCtId, univsId);
    } catch (error) {
      console.log('Error', error);
    }
  }
  else if(name === 'community') {
    const hasAllOption = e.some((option) => {
      return option.value === 'all';
    });
    if (hasAllOption) {
      setFormData({ ...formData, [name]: communityOptions});
      const allOption = e.find((option) => option.value === 'all');
      if (allOption) {
        setCommunityAll(allOption.value);
      }
    }
    else {
      setFormData({ ...formData, [name]: e });
      setCommunityAll('');
    }
    try {
      const communityIds = e.map(option => option.value);
      const communityId = communityIds.map((communityId) => {
        return communityId
      });
      setCommunityId(communityId);
      const casteResponse = await axios.post(
        PRODUCTION_END_POINT_API+'ssp_backend/api/v1/get_caste',
        { user_id: 1, community_id: communityId[0] === 'all' ? ['all'] : communityId },
        { headers: headers }
      );
      setCaste(casteResponse.data?.data || []);
    } catch (error) {
      console.log('Error fetching sub department data:', error);
    }
  }
  else if(name === 'stream') {
    callAllOptionFn(e, name);
    // if(e.some(option => option.value === 'all')) {
    //   setFormData({ ...formData, [name]: streamOptions});
    // } else {
    //   setFormData({ ...formData, [name]: e });
    // }
    const streamIds = e.map(option => option.value);
    const streamId = streamIds.map((streamId) => {
      return streamId
    });
    setStreamId(streamId)
    callApiFun(getCourseTypeId, streamId);
  }
  else if(name === 'courseType') {
    callAllOptionFn(e, name);
    const courseTypeIds = e.map(option => option.value);
      const courseTypeId = courseTypeIds.map((courseTypeId) => {
        return courseTypeId
      });
      setGetCourseTypeId(courseTypeId)
      callApiFun(courseTypeId, streamId);
  }
  else if(name === 'course') {
    callAllOptionFn(e, name);
  }
  else if(name === 'department') {
    setFormData({ ...formData, [name]: e.label });
    try {
      const casteResponse = await axios.post(
        PRODUCTION_END_POINT_API+'ssp_backend/api/v1/get_sub_department',
        { user_id: 1, department_id: [e.value] },
        { headers: headers }
      );
      setSubDepartmentData(casteResponse.data?.data || []);
    } catch (error) {
      console.log('Error', error);
    }
  }
  else if(name === 'schemeFeeType') {
    setFormData({ ...formData, [name]: e.value });
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
          PRODUCTION_END_POINT_API+'ssp_backend/api/v1/get_differentlyabled',
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
      setFormData({ ...formData, [name]:
        name === 'subDepartment' ? subdeptOptions : name === 'instituteType' ? instTypOptions : 
        name === 'instituteCategory' ? insCtOptions : name === 'universityType' ? univTypOptions : name === 'university' ? univOptions : name === 'universityType' ? univTypOptions : name === 'university' ? univOptions : name === 'stream' ? streamOptions : name === 'courseType' ? courseTypOption : name === 'religion' ? religionOptions : name === 'caste' ? casteOptions : name === 'gender' ? genderOptions : name === 'income' ? incomeOptions : name === 'course' ? courseOptions : name === 'instituteOwnership' ? generateOptions(instOwnership) : ''
      });
    }
    else {
      setFormData({ ...formData, [name]: e });
    }
  }
}
  const [showMore, setShowMore] = useState(false); 
  const [enterFeeDetails, setEnterFeeDetails] = useState(false);
  const [selectedFeesType, setSelectedFeesType] = useState(''); 
  const handleSelectChange = (event) => { setSelectedFeesType(event.target.value); }; 
  const [disStatus, setDisStatus] = useState(false);
  const handleTabClick = (tabId) => {
    setActive(tabId);
  };
  const [selectedInstituteCategories, setSelectedInstituteCategories] = useState([]);
  const handleEnterFeeCta = () => { debugger;
    const selectedValBoxes = document.querySelectorAll('.selectedValBox');
    let allSpanValues = [];
    selectedValBoxes.forEach((box) => {
      const category = box.dataset.category;
      const spans = box.querySelectorAll('span.form-label');
      spans.forEach((span) => {
        const value = span.textContent.trim();
        allSpanValues.push({
          category: category,
          value: value
        });
      });
    });

    console.log('All span values:', allSpanValues);
    const instituteCategories = allSpanValues.filter(item => item.category === 'Institute Category');
    setSelectedInstituteCategories(instituteCategories);
    setEnterFeeDetails(true);
  }
  const handleCheckBox = (e, name) => {
    const isChecked = e.target.checked;
    const value = e.target.value;

    if (isChecked) {
      setFilterFormData(prevState => ({
        ...prevState,
        [name]: [...prevState[name], value]
      }));
    } else {
      setFilterFormData(prevState => ({
        ...prevState,
        [name]: prevState[name].filter(item => item !== value)
      }));
    }
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
        <li class="nav-item mx-2" role="presentation">
          <button onClick={() => handleTabClick('list-tab-pane')} class={`nav-link mx-2 ${active === 'list-tab-pane' ? 'active' : ''}`} id="list-tab" data-bs-toggle="tab" data-bs-target="#list-tab-pane" type="button" role="tab" aria-controls="list-tab-pane" aria-selected="false">
          <i class="bi bi-list"></i> Scheme List </button>
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
                    value={subDepartmentAll === 'all' ? [{ value: 'all', label: 'All' }] : formData.subDepartment}
                    isMulti
                    options={(subdeptOptions.length === 0 || subDepartmentAll === 'all') ? [] : [{ value: 'all', label: 'All' }, ...subdeptOptions]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) =>  
                      {
                        if (e.some(option => option.value === 'all')) {
                          handleOptionsChange([{ value: 'all', label: 'all' }], 'subDepartment');
                        } else {
                          handleOptionsChange(e, 'subDepartment');
                        }
                      }
                    }
                    //subDepartment
                  />
                </div>
              </Form.Group>
            </div>
            <div className="col-md-4 mb-2">
              <label for="inputEmail4" className="form-label lbl-font lbl-color">Scheme Name</label>
              <input type="text" className="form-control removespecialchar" placeholder="Enter Scheme Name" onChange={(e) => handleSchemeName(e)} />
            </div>
            <div className="col-md-4 mb-2">
              <label for="inputEmail4" className="form-label lbl-font lbl-color">Sub Scheme Name</label>
              <input type="text" className="form-control removespecialchar" placeholder="Enter Sub Scheme Name"/>
            </div>
            <div className="col-md-4 mb-2">
              <label for="inputEmail4" className="form-label lbl-font lbl-color">Sub Scheme Category</label>
              <input type="text" className="form-control removespecialchar" placeholder="Enter Scheme Category"/>
            </div>
            {/* <div className="col-md-4 mb-2">
              <label for="inputEmail4" className="form-label lbl-font lbl-color">Scholarship Slab</label>
              <input type="text" className="form-control removespecialchar" placeholder="Enter Scholarship Slab"/>
            </div> */}
            <div className="col-md-4 mb-2">
              <label for="inputEmail4" className="form-label lbl-font lbl-color">Max Slab</label>
              <Select
                    //defaultValue={selectedOptions}
                    //isMulti
                    options={[{ value: 'Yes', label: 'Fixed' }, { value: 'Part', label: 'Part' }]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) => handleOptionsChange(e, 'schemeFeeType')}
                  />
            </div>
            
            <div className="col-md-4 mb-2">
              <label for="inputEmail4" className="form-label lbl-font lbl-color">Slab Value</label>
              <input type="number" className="form-control removespecialchar" placeholder="Enter Slab Value"/>
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
            <div className='row'>
                <div className="col-md-12 mb-2 mt-2 text-end">
                  <a onClick={(e) => handleNxtPrv(e, 'profile-tab-pane')} className="btn btn-success cus-btn">
                  <i class="bi bi-arrow-right"></i> Submit </a>
                </div>
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
                            value={instOwnAll === 'all' ? [{ value: 'all', label: 'All' }] : formData.instituteOwnership}
                            isMulti
                            options={ instOwnAll === 'all' ? [] : [{ value: 'all', label: 'All' }, ...generateOptions(instOwnership)]}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={(e) =>  
                              {
                                if (e.some(option => option.value === 'all')) {
                                  handleOptionsChange([{ value: 'all', label: 'all' }], 'instituteOwnership');
                                } else {
                                  handleOptionsChange(e, 'instituteOwnership');
                                }
                              }
                            }
                          />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4 mb-2">
                      <Form.Group className="mb-3 instituteApproveRejectForm">
                        <div className="">
                          <span className="form-label lbl-font lbl-color">Institute Type</span>
                          <Select
                            value={instTyAll === 'all' ? [{ value: 'all', label: 'All' }] : formData.instituteType}
                            isMulti
                            options={instTyAll === 'all' ? [] : [{ value: 'all', label: 'All' }, ...instTypOptions]}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={(e) =>  
                              {
                                if (e.some(option => option.value === 'all')) {
                                  handleOptionsChange([{ value: 'all', label: 'all' }], 'instituteType');
                                } else {
                                  handleOptionsChange(e, 'instituteType');
                                }
                              }
                            }
                          />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4 mb-2">
                      <Form.Group className="mb-3 instituteApproveRejectForm">
                        <div className="">
                          <span className="form-label lbl-font lbl-color">Institute Category</span>
                          <Select
                            value={instCtAll === 'all' ? [{ value: 'all', label: 'All' }] : formData.instituteCategory}
                            isMulti
                            options={instCtAll === 'all' ? [] : [{ value: 'all', label: 'All' }, ...insCtOptions]}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={(e) =>  
                              {
                                if (e.some(option => option.value === 'all')) {
                                  handleOptionsChange([{ value: 'all', label: 'all' }], 'instituteCategory');
                                } else {
                                  handleOptionsChange(e, 'instituteCategory');
                                }
                              }
                            }
                          />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4 mb-2">
                      <Form.Group className="mb-3 instituteApproveRejectForm">
                        <div className="">
                          <span className="form-label lbl-font lbl-color">University Type</span>
                          <Select
                            value={univTyAll === 'all' ? [{ value: 'all', label: 'All' }] : formData.universityType}
                            isMulti
                            options={ (instOId.length === 0 || univTyAll === 'all') ? [] : [{ value: 'all', label: 'All' }, ...univTypOptions]}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={(e) =>  
                              {
                                if (e.some(option => option.value === 'all')) {
                                  handleOptionsChange([{ value: 'all', label: 'all' }], 'universityType');
                                } else {
                                  handleOptionsChange(e, 'universityType');
                                }
                              }
                            }
                          />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4 mb-2">
                      <Form.Group className="mb-3 instituteApproveRejectForm">
                        <div className="">
                          <span className="form-label lbl-font lbl-color">University</span>
                          <Select
                            value={univAll === 'all' ? [{ value: 'all', label: 'All' }] : formData.university}
                            isMulti
                            options={(univIdVal.length === 0 || univAll === 'all') ? [] : [{ value: 'all', label: 'All' }, ...univOptions]}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={(e) =>  
                              {
                                if (e.some(option => option.value === 'all')) {
                                  handleOptionsChange([{ value: 'all', label: 'all' }], 'university');
                                } else {
                                  handleOptionsChange(e, 'university');
                                }
                              }
                            }
                          />
                        </div>
                      </Form.Group>
                    </div>
                  <div className="col-md-4 mb-2">
                    <Form.Group className="mb-3 instituteApproveRejectForm">
                      <div className="">
                        <span className="form-label lbl-font lbl-color">Institute Name</span>
                        <Select
                          value={instNameAll === 'all' ? [{ value: 'all', label: 'All' }] : formData.instituteText}
                          isMulti
                          options={(instTypeId.length === 0 || instOId.length === 0 || instOId.length === 0 || instCtId.length === 0 || univsId.length === 0 || instNameAll === 'all' ) ? [] : [{ value: 'all', label: 'All' }, ...instOptions]}
                          className="basic-multi-select"
                          classNamePrefix="select"
                          onChange={(e) =>  
                            {
                              if (e.some(option => option.value === 'all')) {
                                handleOptionsChange([{ value: 'all', label: 'all' }], 'instituteText');
                              } else {
                                handleOptionsChange(e, 'instituteText');
                              }
                            }
                          }
                        />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-4 mb-2">
                    <Form.Group className="mb-3 instituteApproveRejectForm">
                      <div className="">
                        <span className="form-label lbl-font lbl-color">Student Category</span>
                        <Select
                          //value={incomeAll === 'all' ? [{ value: 'all', label: 'All' }] : formData.income}
                          isMulti
                          options={[{ value: 'all', label: 'All' }]}
                          className="basic-multi-select"
                          classNamePrefix="select"
                          onChange={(e) => handleOptionsChange(e, 'studentCategory')}
                          // onChange={(e) =>  
                          //   {
                          //     if (e.some(option => option.value === 'all')) {
                          //       handleOptionsChange([{ value: 'all', label: 'all' }], 'income');
                          //     } else {
                          //       handleOptionsChange(e, 'income');
                          //     }
                          //   }
                          // }
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
                            value={streamAll === 'all' ? [{ value: 'all', label: 'All' }] : formData.stream}
                            isMulti
                            options={streamAll === 'all' ? [] : [{ value: 'all', label: 'All' }, ...streamOptions]}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={(e) =>  
                              {
                                if (e.some(option => option.value === 'all')) {
                                  handleOptionsChange([{ value: 'all', label: 'all' }], 'stream');
                                } else {
                                  handleOptionsChange(e, 'stream');
                                }
                              }
                            }
                          />
                        </div>
                      </Form.Group>
              </div>
              <div className="col-md-4 mb-2">
                <Form.Group className="mb-3 instituteApproveRejectForm">
                  <div className="">
                    <span className="form-label lbl-font lbl-color">Course Type</span>
                    <Select
                      value={courseTyAll === 'all' ? [{ value: 'all', label: 'All' }] : formData.courseType}
                      isMulti
                      options={courseTyAll === 'all' ? [] : [{ value: 'all', label: 'All' }, ...courseTypOption]}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={(e) =>  
                        {
                          if (e.some(option => option.value === 'all')) {
                            handleOptionsChange([{ value: 'all', label: 'all' }], 'courseType');
                          } else {
                            handleOptionsChange(e, 'courseType');
                          }
                        }
                      }
                    />
                  </div>
                </Form.Group>
              </div>
              <div className="col-md-4 mb-2">
                <Form.Group className="mb-3 instituteApproveRejectForm">
                  <div className="">
                    <span className="form-label lbl-font lbl-color">Course</span>
                    <Select
                      value={courseAll === 'all' ? [{ value: 'all', label: 'All' }] : formData.course}
                      isMulti
                      options={(getCourseTypeId.length === 0 || streamId.length === 0 || courseAll === 'all') ? []  :  [{ value: 'all', label: 'All' }, ...courseOptions]}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={(e) =>  
                        {
                          if (e.some(option => option.value === 'all')) {
                            handleOptionsChange([{ value: 'all', label: 'all' }], 'course');
                          } else {
                            handleOptionsChange(e, 'course');
                          }
                        }
                      }
                    />
                  </div>
                </Form.Group>
              </div>
              
              
              <div className="col-md-4 mb-2">
                <Form.Group className="mb-3 instituteApproveRejectForm">
                  <div className="">
                    <span className="form-label lbl-font lbl-color">Medium of Instruction</span>
                    <Select
                      value={mediumAll === 'all' ? [{ value: 'all', label: 'All' }] : formData.medium}
                      isMulti
                      options={mediumAll === 'all' ? [] : [{ value: 'all', label: 'All' }, ...mediumOptions]}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={(e) =>  
                        {
                          if (e.some(option => option.value === 'all')) {
                            handleOptionsChange([{ value: 'all', label: 'all' }], 'medium');
                          } else {
                            handleOptionsChange(e, 'medium');
                          }
                        }
                      }
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
                    value={religionAll === 'all' ? [{ value: 'all', label: 'All' }] : formData.religion}
                    isMulti
                    options={religionAll === 'all' ? [] : [{ value: 'all', label: 'All' }, ...religionOptions]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) =>  
                      {
                        if (e.some(option => option.value === 'all')) {
                          handleOptionsChange([{ value: 'all', label: 'all' }], 'religion');
                        } else {
                          handleOptionsChange(e, 'religion');
                        }
                      }
                    }
                  />
                </div>
              </Form.Group>
              </div>
              <div className="col-md-4 mb-2">
                <Form.Group className="mb-3 instituteApproveRejectForm">
                <div className="">
                  <span className="form-label lbl-font lbl-color">Community</span>
                  <Select
                    value={communityAll === 'all' ? [{ value: 'all', label: 'All' }] : formData.community}
                    isMulti
                    options={communityAll === 'all' ? [] : [{ value: 'all', label: 'All' }, ...communityOptions]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) =>  
                      {
                        if (e.some(option => option.value === 'all')) {
                          handleOptionsChange([{ value: 'all', label: 'all' }], 'community');
                        } else {
                          handleOptionsChange(e, 'community');
                        }
                      }
                    }
                  />
                </div>
              </Form.Group>
              </div>
              <div className="col-md-4 mb-2">
                <Form.Group className="mb-3 instituteApproveRejectForm">
                <div className="">
                  <span className="form-label lbl-font lbl-color">Caste</span>
                  <Select
                    value={casteAll === 'all' ? [{ value: 'all', label: 'All' }] : formData.caste}
                    isMulti
                    options={(communityId.length === 0 || casteAll === 'all' ) ? [] : [{ value: 'all', label: 'All' }, ...casteOptions]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) =>  
                      {
                        if (e.some(option => option.value === 'all')) {
                          handleOptionsChange([{ value: 'all', label: 'all' }], 'caste');
                        } else {
                          handleOptionsChange(e, 'caste');
                        }
                      }
                    }
                  />
                </div>
              </Form.Group>
              </div>
              <div className="col-md-4 mb-2">
              <Form.Group className="mb-3 instituteApproveRejectForm">
                <div className="">
                  <span className="form-label lbl-font lbl-color">Gender</span>
                  <Select
                    value={genderAll === 'all' ? [{ value: 'all', label: 'All' }] : formData.gender}
                    isMulti
                    options={genderAll === 'all' ? [] : [{ value: 'all', label: 'All' }, ...genderOptions]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) =>  
                      {
                        if (e.some(option => option.value === 'all')) {
                          handleOptionsChange([{ value: 'all', label: 'all' }], 'gender');
                        } else {
                          handleOptionsChange(e, 'gender');
                        }
                      }
                    }
                  />
                </div>
              </Form.Group>
              </div>
              <div className="col-md-4 mb-2">
              <Form.Group className="mb-3 instituteApproveRejectForm">
                <div className="">
                  <span className="form-label lbl-font lbl-color">Income</span>
                  <Select
                    value={incomeAll === 'all' ? [{ value: 'all', label: 'All' }] : formData.income}
                    isMulti
                    options={incomeAll === 'all' ? [] : [{ value: 'all', label: 'All' }, ...incomeOptions]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) =>  {
                      if (e.some(option => option.value === 'all')) {
                        handleOptionsChange([{ value: 'all', label: 'all' }], 'income');
                      } else {
                        handleOptionsChange(e, 'income');
                      }
                    }}
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
                      value={resStsAll === 'all' ? [{ value: 'all', label: 'All' }] : formData.residentalStatus}
                      isMulti
                      options={resStsAll === 'all' ? [] : [{ value: 'all', label: 'All' }, ...resStatusOptions]}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={(e) => {
                        if (e.some(option => option.value === 'all')) { debugger;
                            handleOptionsChange([{ value: 'all', label: 'all' }], 'residentalStatus');
                        } else {
                            handleOptionsChange(e, 'residentalStatus');
                        }
                    }}
                      //onChange={(e) => handleOptionsChange(e, 'residentalStatus')}
                      //formatOptionLabel={(option) => option.value === 'all' ? 'All' : option.label}
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
                      isMulti
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
                  <a onClick={(e) => handleNxtPrv(e, 'profile-tab-pane')} className="btn btn-success cus-btn">
                  <i class="bi bi-arrow-right"></i> Next </a>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className={`tab-pane fade ${active === 'list-tab-pane' ? 'show active' : ''}`} id="list-tab-pane" role="tabpanel" aria-labelledby="list-tab" tabindex="0">
          <div className='row'>
              <div className='col-lg-12'>
                <div className='allSchemeList'>
                  <Row>
                    <Col lg={12}>
                      <Row className='listStyle'>
                        <h5>Fixed Fee List</h5>
                        <Aggridcomp  comp={'schemeFixedList'}/>
                      </Row>
                    </Col>
                    <Col lg={12}>
                      <Row className='listStyle'>
                        <h5>Component Fee List</h5>
                        <Aggridcomp  comp={'schemeCompList'}/>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>
          </div>
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
                          <button class="accordion-button py-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Institute Components </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <div className="col-md-12 mb-2">
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">Institute Category</label> 
                              {
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
                              }
                            </div>
                            <div className="col-md-12 mb-2">
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">Institute Ownership</label>
                              {
                                formData.instituteOwnership.map((value, index) => {
                                  return (
                                    <div class="form-check">
                                      <input class="form-check-input" type="checkbox" value={value.label} id="instOwn" onClick={(e) => handleCheckBox(e, 'instituteOwnership')}
                                      checked={filterFormData.instituteOwnership.includes(value.label)}/>
                                      <label class="form-check-label" for="instOwn"> {value.label} </label>
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
                                      <input class="form-check-input" type="checkbox" value={value.label} id="instTy" onClick={(e) => handleCheckBox(e, 'instituteType')}
                                      checked={filterFormData.instituteType.includes(value.label)}/>
                                      <label class="form-check-label" for="instTy"> {value.label} </label>
                                    </div>
                                  )
                                })
                              }
                            </div>
                            <div className="col-md-12 mb-2">
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">University Type</label>
                              {
                                formData.universityType.map((value, index) => {
                                  return (
                                    <div class="form-check">
                                      <input class="form-check-input" type="checkbox" value={value.label} id="univTy" onClick={(e) => handleCheckBox(e, 'universityType')}
                                      checked={filterFormData.universityType.includes(value.label)}/>
                                      <label class="form-check-label" for="univTy"> {value.label} </label>
                                    </div>
                                  )
                                })
                              }
                            </div>
                            <div className="col-md-12 mb-2">
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">University</label>
                              {
                                formData.university.map((value, index) => {
                                  return (
                                    <div class="form-check">
                                      <input class="form-check-input" type="checkbox" value={value.label} id="univ" onClick={(e) => handleCheckBox(e, 'university')}
                                      checked={filterFormData.university.includes(value.label)} />
                                      <label class="form-check-label" for="univ"> {value.label} </label>
                                    </div>
                                  )
                                })
                              }
                            </div>
                            <div className="col-md-12 mb-2">
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">Institute Name</label>
                              {
                                formData.instituteText.map((value, index) => {
                                  return (
                                    <div class="form-check">
                                      <input class="form-check-input" type="checkbox" value={value.label} id="instName" onClick={(e) => handleCheckBox(e, 'instituteText')}
                                      checked={filterFormData.instituteText.includes(value.label)}/>
                                      <label class="form-check-label" for="instName"> {value.label} </label>
                                    </div>
                                  )
                                })
                              }
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
                              {
                                formData.stream.map((value, i) => {
                                  return (
                                    <div class="form-check">
                                      <input class="form-check-input" type="checkbox" value={value.label} id="stream" onClick={(e) => handleCheckBox(e, 'stream')}
                                      checked={filterFormData.stream.includes(value.label)}/>
                                      <label class="form-check-label" for="stream"> {value.label} </label>
                                    </div>
                                  )
                                })
                              }
                            </div>
                            <div className="col-md-12 mb-2">
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">Course Type</label> 
                              {
                                formData.courseType.map((value, i) => {
                                  return (
                                    <div class="form-check">
                                      <input class="form-check-input" type="checkbox" value={value.label} id="courseTy" onClick={(e) => handleCheckBox(e, 'courseType')}
                                      checked={filterFormData.courseType.includes(value.label)}/>
                                      <label class="form-check-label" for="courseTy"> {value.label} </label>
                                    </div>
                                  )
                                })
                              }
                            </div>
                            <div className="col-md-12 mb-2">
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">Medium Of Instruction</label> 
                              {
                                formData.medium.map((value, i) => {
                                  return (
                                    <div class="form-check">
                                      <input class="form-check-input" type="checkbox" value={value.label} id="medium" onClick={(e) => handleCheckBox(e, 'medium')}
                                      checked={filterFormData.medium.includes(value.label)}/>
                                      <label class="form-check-label" for="medium"> {value.label} </label>
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
                                      <input class="form-check-input" type="checkbox" value={value.label} id="course" onClick={(e) => handleCheckBox(e, 'course')}
                                      checked={filterFormData.course.includes(value.label)}/>
                                      <label class="form-check-label" for="course"> {value.label} </label>
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
                          <button class="accordion-button collapsed py-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Socio Economic Components </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <div className="col-md-12 mb-2">
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">Religion</label> 
                              {
                                formData.religion.map((value, i) => {
                                  return (
                                    <div class="form-check">
                                      <input class="form-check-input" type="checkbox" value={value.label} id="religion" onClick={(e) => handleCheckBox(e, 'religion')}
                                      checked={filterFormData.religion.includes(value.label)}/>
                                      <label class="form-check-label" for="religion"> {value.label} </label>
                                    </div>
                                  )
                                })
                              }
                            </div>
                            <div className="col-md-12 mb-2">
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">Community</label> 
                              {
                                formData.community.map((value, i) => {
                                  return (
                                    <div class="form-check">
                                      <input class="form-check-input" type="checkbox" value={value.label} id="community" onClick={(e) => handleCheckBox(e, 'community')}
                                      checked={filterFormData.community.includes(value.label)}/>
                                      <label class="form-check-label" for="religion"> {value.label} </label>
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
                                      <input class="form-check-input" type="checkbox" value={value.label} id="caste" onClick={(e) => handleCheckBox(e, 'caste')}
                                      checked={filterFormData.caste.includes(value.label)}/>
                                      <label class="form-check-label" for="caste"> {value.label} </label>
                                    </div>
                                  )
                                })
                              }
                            </div>
                            <div className="col-md-12 mb-2">
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">Gender</label> 
                              {
                                formData.gender.map((value, i) => {
                                  return (
                                    <div class="form-check">
                                      <input class="form-check-input" type="checkbox" value={value.label} id="gender" onClick={(e) => handleCheckBox(e, 'gender')}
                                      checked={filterFormData.gender.includes(value.label)} />
                                      <label class="form-check-label" for="gender"> {value.label} </label>
                                    </div>
                                  )
                                })
                              }
                            </div>
                            <div className="col-md-12 mb-2">
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">Income</label> 
                              {
                                formData.income.map((value, i) => {
                                  return (
                                    <div class="form-check">
                                      <input class="form-check-input" type="checkbox" value={value.label} id="income" onClick={(e) => handleCheckBox(e, 'income')}
                                      checked={filterFormData.income.includes(value.label)} />
                                      <label class="form-check-label" for="income"> {value.label} </label>
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
                          <button class="accordion-button collapsed py-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> Maintenance Components </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <div className="col-md-12 mb-2">
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">Student Residential Status</label> 
                              {
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
                              }
                            </div>
                            <div className="col-md-12 mb-2">
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">Disability Status</label> 
                              {
                                formData.disabilityStatus.length === 0 ? '' :
                                <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value={formData.disabilityStatus} id="disSt" onClick={(e) => handleCheckBox(e, 'disabilityStatus')}
                                      checked={filterFormData.disabilityStatus.includes(formData.disabilityStatus)} />
                                  <label class="form-check-label" for="disSt"> {formData.disabilityStatus} </label>
                                </div>
                              }
                            </div>
                            <div className="col-md-12 mb-2">
                              <label for="inputEmail4" className="form-label lbl-font lbl-color">Disability Category</label> 
                                {
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
                                }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className='col-lg-12 calcBtn'>
                      <a className="btn btn-success cus-btn" onClick={(e) => handleCalc(e)}>
                        <i class="bi bi-send-check"></i> Calculate 
                      </a>
                    </div> */}
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
                      <div className='selectedValBox' data-category='Department'>
                        <span htmlFor="toDate" className="form-label w-100 mb-0"> {formData.department} </span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1 ps-0">
                      <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Sub Department </label> 
                      <div className='selectedValBox' data-category='Sub Department'>
                      {
                        formData.subDepartment.map((value, index) => {
                          return (
                              <span htmlFor="toDate" className="form-label w-100 mb-0"> {value.label} </span>
                          )
                        })
                      }
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1 ps-0">
                      <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Scheme Name </label>
                      <div className='selectedValBox' data-category='Scheme Name'>
                      <span htmlFor="toDate" className="form-label w-100 mb-0"> { formData.schemeName } </span>
                      </div>
                    </div>
                    <p className="viewmore mb-0 text-danger" onClick={()=> setShowMore(true)} style={{ display: showMore ? 'none' : 'block' }} > <i class="bi bi-arrows-angle-expand"></i> View More </p>
                    <div className={`viewmore-wrap row ${showMore ? 'show' : '' }`}>
                      <h6 style={{marginTop: '1rem'}}><b><u>Institute Component</u></b></h6>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Institute Ownership </label>
                        <div className='selectedValBox'  data-category='Institute Ownership'>
                        {
                          filterFormData.instituteOwnership.map((val,i) => {
                            return (
                              <span htmlFor="toDate" className="form-label w-100 mb-0"> {val + ','} </span>
                            )
                          })
                        }
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Institute Category </label>
                        <div className='selectedValBox' data-category='Institute Category'>
                        {
                          filterFormData.instituteCategory.map((val,i) => {
                            return (
                              <span htmlFor="toDate" className="form-label w-100 mb-0"> {val + ','} </span>
                            )
                          })
                        }
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Institute Type </label>
                        <div className='selectedValBox' data-category='Institute Type'>
                        {
                          filterFormData.instituteType.map((val,i) => {
                            return (
                              <span htmlFor="toDate" className="form-label w-100 mb-0"> {val + ','} </span>
                            )
                          })
                        }
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> University Type </label>
                        <div className='selectedValBox' data-category='University Type'>
                        {
                          filterFormData.universityType.map((val,i) => {
                            return (
                              <span htmlFor="toDate" className="form-label w-100 mb-0"> {val + ','} </span>
                            )
                          })
                        }
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> University </label>
                        <div className='selectedValBox' data-category='University'>
                        {
                          filterFormData.university.map((val,i) => {
                            return (
                              <span htmlFor="toDate" className="form-label w-100 mb-0"> {val + ','} </span>
                            )
                          })
                        }
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Institute Name </label>
                        <div className='selectedValBox' data-category='Institute Name'>
                        {
                          filterFormData.instituteText.map((val,i) => {
                            return (
                              <span htmlFor="toDate" className="form-label w-100 mb-0"> {val + ','} </span>
                            )
                          })
                        }
                        </div>
                      </div>
                      <h6 style={{marginTop: '1rem'}}><b><u>Course Component</u></b></h6>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Stream </label>
                        <div className='selectedValBox' data-category='Stream'>
                        {
                          filterFormData.stream.map((val,i) => {
                            return (
                              <span htmlFor="toDate" className="form-label w-100 mb-0"> {val + ','} </span>
                            )
                          })
                        }
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Course Type </label>
                        <div className='selectedValBox' data-category='Course Type'>
                        {
                          filterFormData.courseType.map((val,i) => {
                            return (
                              <span htmlFor="toDate" className="form-label w-100 mb-0"> {val + ','} </span>
                            )
                          })
                        }
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Medium of Instruction </label>
                        <div className='selectedValBox' data-category='Medium'>
                        {
                          filterFormData.medium.map((val,i) => {
                            return (
                              <span htmlFor="toDate" className="form-label w-100 mb-0"> {val + ','} </span>
                            )
                          })
                        }
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Course </label>
                        <div className='selectedValBox' data-category='Course'>
                        {
                          filterFormData.course.map((val,i) => {
                            return (
                              <span htmlFor="toDate" className="form-label w-100 mb-0"> {val + ','} </span>
                            )
                          })
                        }
                        </div>
                      </div>
                      <h6 style={{marginTop: '1rem'}}><b><u>Socio Economic Components</u></b></h6>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Religion </label>
                        <div className='selectedValBox' data-category='Religion'>
                        {
                          filterFormData.religion.map((val,i) => {
                            return (
                              <span htmlFor="toDate" className="form-label w-100 mb-0"> {val + ','} </span>
                            )
                          })
                        }
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Community </label>
                        <div className='selectedValBox' data-category='Community'>
                        {
                          filterFormData.community.map((val,i) => {
                            return (
                              <span htmlFor="toDate" className="form-label w-100 mb-0"> {val + ','} </span>
                            )
                          })
                        }
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Caste </label>
                        <div className='selectedValBox' data-category='Caste'>
                        {
                          filterFormData.caste.map((val,i) => {
                            return (
                              <span htmlFor="toDate" className="form-label w-100 mb-0"> {val + ','} </span>
                            )
                          })
                        }
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Gender </label>
                        <div className='selectedValBox' data-category='Gender'>
                        {
                          filterFormData.gender.map((val,i) => {
                            return (
                              <span htmlFor="toDate" className="form-label w-100 mb-0"> {val + ','} </span>
                            )
                          })
                        }
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Income </label>
                        <div className='selectedValBox' data-category='Income'>
                        {
                          filterFormData.income.map((val,i) => {
                            return (
                              <span htmlFor="toDate" className="form-label w-100 mb-0"> {val + ','} </span>
                            )
                          })
                        }
                        </div>
                      </div>
                      <h6 style={{marginTop: '1rem'}}><b><u>Maintance Component</u></b></h6>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Residential Status </label>
                        <div className='selectedValBox' data-category='Residential Status'>
                        {
                          filterFormData.residentalStatus.map((val,i) => {
                            return (
                              <span htmlFor="toDate" className="form-label w-100 mb-0"> {val + ','} </span>
                            )
                          })
                        }
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Disability Status </label>
                        <div className='selectedValBox' data-category='Disability Status'>
                        {
                          filterFormData.disabilityStatus.map((val,i) => {
                            return (
                              <span htmlFor="toDate" className="form-label w-100 mb-0"> {val + ','} </span>
                            )
                          })
                        }
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-1">
                        <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0"> Disability Category </label>
                        <div className='selectedValBox' data-category='Disability Category'>
                        {
                          filterFormData.disabilityCategory.map((val,i) => {
                            return (
                              <span htmlFor="toDate" className="form-label w-100 mb-0"> {val + ','} </span>
                            )
                          })
                        }
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                        <p className='enterFee' onClick={handleEnterFeeCta}>Enter Fee Details</p>
                      </div>
                      <p className="lessmore mb-0 text-danger" onClick={()=> setShowMore(false)} > <i class="bi bi-arrows-angle-contract"></i> View Less </p>
                    </div>
                  </form>
                </div>
              </div>
             {
              enterFeeDetails && (
                <>
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
                                            <input type="number" class="form-control removespecialchar" placeholder="Enter Scholarship Amount"  />
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
                                            <input type="number" class="form-control removespecialchar" placeholder="Enter Scholarship Amount"  />
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
                                            <input type="number" class="form-control removespecialchar" placeholder="Enter Scholarship Amount"  />
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
                                            <input type="number" class="form-control removespecialchar" placeholder="Enter Scholarship Amount"  />
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
                                            <input type="number" class="form-control removespecialchar" placeholder="Enter Scholarship Amount"  />
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
                                            <input type="number" class="form-control removespecialchar" placeholder="Enter Scholarship Amount"  />
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
                                      <input type="number" class="form-control removespecialchar" placeholder="Total Exam Fees" />
                                    </div>
                                  </td>
                                )
                              }
                              <td className="w-75">
                                <div className="row m-0">
                                  <div className="col-lg-5">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                      <label htmlFor="toDate" className="form-label lbl-color w-100 mb-0 text-danger"> Total Scholarship Amount </label>
                                      <input type="number" class="form-control removespecialchar" placeholder="Total Scholarship Amount" />
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
                </>
              )
             }
              <div className="col-md-4 mb-2 mt-2">
                <a className="btn btn-success cus-btn" onClick={(e) => handleNxtPrv(e, 'contact-tab-pane')}>
                Save <i class="bi bi-arrow-right"></i> </a>
                <a  className="btn btn-success cus-btn" onClick={(e) => handleNxtPrv(e, 'home-tab-pane')}>
                Save & Proceed <i class="bi bi-arrow-right"></i>  </a>
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
                <a  className="btn btn-success cus-btn" onClick={(e) => handleNxtPrv(e, 'profile-tab-pane')}>
                <i class="bi bi-arrow-left"></i> Prev </a>
                <a class="btn btn-success cus-btn" onClick={(e) => handleCreateScheme(e)}>
                <i class="bi bi-send-check"></i> Submit </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 
      {
        schemeRegisteredState &&
        <div className='text-center appliedSchemeScreen'>
          <Popup isOpen={isOpen} closePopup={closePopup} comp='studentView'>
            <h5>SCHEME REGISTERED SUCCESSFULLY</h5>
            <p onClick={closePopup} className='okClick'>Ok</p>
          </Popup>
        </div>
      }
      {
        schemeRegisteredErrState &&
        <div className='text-center appliedSchemeScreen'>
          <Popup isOpen={isOpen} closePopup={closePopup} comp='studentView'>
            <h5>SCHEME REGISTERED FAILED</h5>
            <p onClick={closePopup} className='okClick'>Ok</p>
          </Popup>
        </div>
      }
  </>
)} 
export default SchemeRegistration