import React from 'react';

const getOptions = (props) => { debugger;
  const Options = Object.entries(props.opt).map(([key, val]) => {
    return(
      {
        value: val.university_type,
        label: val.university_type
      }
    )
  })
  return (
    console.log('Options', Options)
  )
  
}

export default getOptions