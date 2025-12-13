import React, { useState } from 'react'
import ChildA from './ChildA';
import ChildB from './ChildB';
import './dynamicStyle.css';

const ParentInterviewComp = () => {
    const [selectedComp, setSelectedComp] = useState('');

    const renderContent = () => {
        switch (selectedComp) {
            case 'A':
                return <ChildA />
            case 'B':
                return <ChildB />
            default:
                return null;

        }
    }

    return (
        <div className='dynamic-container'>
            <select onChange={(e) => setSelectedComp(e.target.value)}>
                <option>Select</option>
                <option value='A'>Child A</option>
                <option value='B'>Child B</option>
            </select>
            {
                 renderContent() 
            }
        </div>
    )
}

export default ParentInterviewComp