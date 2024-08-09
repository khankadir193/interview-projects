import React from 'react'

const ChildComp = ({handleClick}) => {
    const obj = {
        childContent:'childContent sending to parent component',
        createdBy:'Abdul Kadir Khan'
    }
  return (
    <div>
      <button onClick={(event) => handleClick(obj)}>ChildComp</button>
    </div>
  )
};

export default ChildComp;