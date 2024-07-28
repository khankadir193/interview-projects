import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Accordion.css';

const accordianTitle = {
  background: "black",
  color: 'white',
  width: '50%',
  height: '4vh',
  display: 'flex',
  justifyContent: 'space-between', // Space between title and icon
  alignItems: 'center', // Center items vertically
  padding: '0 10px', // Add padding for spacing
  margin: '3vw auto',
  cursor: 'pointer' // Indicate clickable area
};

const AccordianComp = ({ name, content }) => {
  const [open, setOpen] = useState(false);

  const toggleAccordion = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div onClick={toggleAccordion} style={accordianTitle}>
        <span>{name}</span>
        <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
      </div>
      {open && (
        <div className='content'>
          <p>
            {content}
          </p>
        </div>
      )}
    </div>
  );
};

export default AccordianComp;
