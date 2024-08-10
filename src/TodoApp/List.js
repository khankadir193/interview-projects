import React from 'react';
import './todos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


function List({ data }) {
  console.log('data...', data);
  return (
    <div className='list-container'>
      <div className='subList-container'>
        <span>{data}</span>
        <FontAwesomeIcon icon={faEdit} />
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
    </div>
  );
};

export default List;