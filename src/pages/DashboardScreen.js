import React from 'react'
import InstituteHome from '../components/InstituteDeptPages/InstituteHome'
import PageInProg from './PageInProg'

const DashboardScreen = (props) => {
  return (
    <div>
      {
        props.compName === 'studentComponent' && (
          <>
            <PageInProg />
          </>
        )
      }
      {
        props.compName === 'instituteComponent' && (
          <>
            <InstituteHome />
          </>
        )
      }
      {
        props.compName === 'departmentComponent' && (
          <>
            <PageInProg />
          </>
        )
      }
    </div>
  )
}

export default DashboardScreen