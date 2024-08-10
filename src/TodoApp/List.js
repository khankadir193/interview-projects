import React from 'react';
import './todos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


function List({ item }) {
  console.log('data...', item);
  return (
    <div className='list-container'>
      <div className='subList-container'>
        <span>{item}</span>
        <div className='icons'>
          <FontAwesomeIcon icon={faEdit} />
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>

      </div>
    </div>
  );
};

export default List;