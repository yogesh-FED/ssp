import React from 'react'

const SelectComp = (props) => { debugger;
  return (
    <div>
      {
        Object.entries(props.comp).map(([key,val]) => { debugger;
          return (
            <option key={key} value={val.department_name}>
              {
                val.department_name
              }
            </option>
          )
        })
      }
    </div>
  )
}

export default SelectComp