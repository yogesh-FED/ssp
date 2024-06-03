import React from 'react'
import Filter from '../components/uicomponents/Filter'
import Stats from '../components/uicomponents/Stats'
import Institute from '../components/uicomponents/Institute'
import MainLayout from '../components/MainLayout/MainLayout'

const Sample = () => {
  return (
    <MainLayout>
      <div>
      <div id="test">test</div>
            {/* filter starts */}
            {/* <FilterOne /> */}
            {/* filter ends */}

            {/* filter starts */}
            <Filter />
            {/* filter ends */}

            {/* dashboard stats starts */}
            <Stats />
            {/* dashboard stats ends */}

            {/* bar chart starts */}
            {/* <BarChart /> */}
            {/* bar charts ends */}

            <Institute/>

            {/* grid starts */}
            {/* <Grid /> */}
            {/* grid ends */}
    </div>
    </MainLayout>
  )
}

export default Sample