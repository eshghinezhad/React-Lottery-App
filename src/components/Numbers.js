import React from 'react';
import Button from '@mui/material/Button';

function Numbers({ buttonState, isDisabled, handleClick, pickRandomButtons, handleClear }) {
  return (
    <>
      <h4 style={{marginTop: 145, display: 'flex', justifyContent: 'center'}}>Select 5 Numbers</h4>
      <div className="numbers-container">
        {buttonState.map((isClicked, index) => (
          <button
            key={index}
            disabled={isDisabled}
            className="my-button"
            onClick={() => handleClick(index)}
            style={{
              border: isClicked ? "5px solid darkorange" : "5px solid transparent",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="cash-clear">
        <Button
          variant="contained"
          color="primary"
          onClick={pickRandomButtons}
          disabled={isDisabled}
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
