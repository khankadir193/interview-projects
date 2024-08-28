import React from 'react'

const ChildComp = ({children}) => {
    console.log('children...?????',children);
  return (
    <div style={{display:'flex',padding:'2vw',justifyContent:'space-between'}}>
        <p>Name:{children.name}-id:${children.id}</p>
    </div>
  )
}

export default ChildComp