import React,{useState} from 'react';
import './todos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
// import {ContentEditable,suppressContentEditableWarning} from 'react-contenteditable';


function List({ item }) {
  const [edit,setEdit] = useState(false);
  const handleEdit = () => {
    console.log('edit...');
    setEdit(true);
  };

  const handleSave = (e) => {
    console.log('save...', e.target.innerText);
    setEdit(false);
  }
  console.log('data...', item);
  return (
    <div className='list-container'>
      <div className='subList-container'>
        <span
          contentEditable={edit}
          suppressContentEditableWarning={true}
          onBlur={handleSave}
        >
          {item}
        </span>
        <div className='icons'>
          <FontAwesomeIcon icon={faEdit} onClick={handleEdit} />
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>

      </div>
    </div>
  );
};

export default List;