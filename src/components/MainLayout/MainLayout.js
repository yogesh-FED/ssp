import React from 'react'
import Index from '../../pages/Index'

const MainLayout = ({children, compName}) => {
  return (
    <div>
      <Index compName={compName}>
        {children}
      </Index>
    </div>
  )
}

export default MainLayout