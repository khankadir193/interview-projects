import React,{useState} from 'react';
import './todos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
// import {ContentEditable,suppressContentEditableWarning} from 'react-contenteditable';


function List({ item,index, data,  handleDelete }) {

  const [edit,setEdit] = useState(false);

  const handleEdit = (event) => {
    setEdit(true);
  };
  const handleSave = (e) => {
    const editedText = e.target.innerText;
    data[index] = editedText;
    setEdit(false);
  };
  

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
          <FontAwesomeIcon icon={faTrashAlt} onClick={() => handleDelete(item,index)} />
        </div>
      </div>
    </div>
  );
};

export default List;