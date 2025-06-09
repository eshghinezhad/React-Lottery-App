import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function Numbers() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  // Handles number button click
  const onNumberClick = (number) => {
    setSelectedNumbers(prev =>
      prev.includes(number)
        ? prev.filter(n => n !== number)
        : [...prev, number]
    );
  };

  // Placeholder checkout function
  const checkout = () => {
    // Implement your checkout logic here
    alert('Checkout clicked!');
  };

  // Placeholder random numbers function
  const onRandomNumbers = () => {
    // Implement your random number logic here
    alert('Random numbers clicked!');
  };

  // Placeholder clear numbers function
  const onClearNumbers = () => {
    setSelectedNumbers([]);
    alert('Clear clicked!');
  };

  return (
    <div>
      <div className="number-selector">
        {[...Array(20).keys()].map(i => (
            <Button variant = "contained"
            key={i + 1}
            className={`number-button ${selectedNumbers.includes(i + 1) ? 'selected' : ''}`}
            onClick={() => onNumberClick(i + 1)}
            >
            {i+1}
            </Button>
        ))}

      </div>
      <div className = "reset-random-button"  style = {{marginTop: '20px', alignItems: 'center'}}>
            <ButtonGroup variant = "contained">
                <Button variant = "contained" color = "error" onClick={onClearNumbers}>Clear</Button>
                <Button variant = "contained" onClick={onRandomNumbers}>Random</Button>
                <Button variant = "contained" color = "success" onClick = {checkout} >Cash</Button>
            </ButtonGroup>
      </div>
    </div>
  )
}

export default Numbers
