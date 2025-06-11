import React from 'react';
import Button from '@mui/material/Button';

function Numbers({ numberSelected, handleClick, pickRandomButtons, handleClear }) {
const num = Array.from({ length: 20 }, (_, i) => i + 1); 

  return (
    <>
      <h4 style={{marginTop: 145, display: 'flex', justifyContent: 'center'}}>Select 5 Numbers</h4>
      <div className="numbers">
       {num.map((number) => (
        <button
          key={number}
          className="my-button"
          onClick={() => handleClick(number)}
          style={{
            border: numberSelected.includes(number)
              ? "5px solid darkorange"
              : "5px solid transparent",
          }}
        >
          {number}
        </button>
        ))}
      </div>
      <div className="random-clear">
        <Button
          variant="contained"
          color="primary"
          onClick={pickRandomButtons}
          sx={{ marginRight: 2 }}
        >
          Random
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClear}
        >
          Clear
        </Button>
      </div>
    </>
  );
}

export default Numbers;
