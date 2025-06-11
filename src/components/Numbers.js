import React from 'react';
import Button from '@mui/material/Button';

function Numbers({ numberSelected, handleClick, pickRandomButtons, handleClear }) {
const num = Array.from({ length: 20 }, (_, i) => i + 1); 

  return (
    <>
      <h4 style={{marginTop: 145, display: 'flex', justifyContent: 'center'}}>Select 5 Numbers</h4>
      <div className="numbers">
       {num.map((item) => (
        <button
          key={item}
          className="my-button"
          onClick={() => handleClick(item)}
          style={{
            border: numberSelected.includes(item)
              ? "5px solid darkorange"
              : "5px solid ",
          }}
        >
          {item}
        </button>
        ))}
      </div>
      <div className="random-clear">
        <Button
          variant="contained"
          color="primary"
          onClick={pickRandomButtons}
          sx={{marginRight: 2 , minWidth: '100px', fontWeight: 'bold', fontSize: '0.95rem' }}

        >
          Random
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClear}
          sx={{minWidth: '100px', fontWeight: 'bold', fontSize: '0.95rem' }}
        >
          Clear
        </Button>
      </div>
    </>
  );
}

export default Numbers;
