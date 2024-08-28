import React from 'react'

const ChildComp = ({children}) => {
    console.log('children...?????',children);
  return (
    <div>
        <p>{children.id}</p>
    </div>
  )
}

export default ChildComp