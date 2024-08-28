import React, { useState } from 'react'
import ChildComp from './ChildComp';

const ParentComp = () => {
    const [children,setChildren] = useState([]);
    const addChild = () => {
        setChildren(prevChildren => {
            const id = prevChildren.length + 1;
            const newChildren = [...prevChildren, { name: `child${id}`, id }];
            console.log('children....', newChildren);
            return newChildren;
        });
    }
  return (
    <div>
        <button onClick={addChild}>Parent</button>
        {
            children.map((child) => {
                return <ChildComp children={child} key={child.id}/>
                
            })
        }
    </div>
  )
}

export default ParentComp