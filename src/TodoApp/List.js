import React from 'react';
import './todos.css';
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';


function List({ data }) {
  console.log('data...', data);
  return (
    <div className='list-container'>
      <div className='subList-container'>
        <h3>{data}</h3>
        <FontAwesomeIcon icon={faTrashAlt} />
        <FontAwesomeIcon icon={faEdit} />
        <FontAwesomeIcon icon={faTrashAlt} />
        <FontAwesomeIcon icon={faEdit} />
        {/* <i className="fas fa-trash-alt"></i>
        <i className="fas fa-edit"></i>
        <i class="fas fa-trash-alt"></i>
        <i class="fas fa-edit"></i> */}
      </div>
    </div>
  );
};

export default List;