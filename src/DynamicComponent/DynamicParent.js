import React from 'react'

const DynamicParent = ({children}) => {

  return (
    <div>
        <p>DynamicParent</p>
        {children}
    </div>
  );
}

export default DynamicParent;