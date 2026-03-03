import React from 'react';
import AddIcon from '@mui/icons-material/Add';

export const CreateNote = () => {
  return (
    <div className='main_note'>
      <form>
        <input type='text' placeholder='Title' />
        
        <textarea
          rows="5"
          cols="30"
          placeholder="Write a note..."
        ></textarea>

        <button type="submit" className="plus_sign">
          <AddIcon />
        </button>
      </form>
    </div>
  );
};