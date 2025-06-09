import React from 'react'
import Button from '@mui/material/Button';

function Cash() {
    const handleClick = (amount) => {
        // if (selectedNumbers.length < 5) {
        //   alert("Please select 5 numbers first.");
        //     } else {
        //     setCashTotal(cashTotal + amount);
        // }
    };

    return (
        <div className="cash-input">
            <h2>Cash Input</h2>
            <Button variant="contained" color="primary" onClick={() => handleClick(1)}>$1</Button>
            <Button variant="contained" color="primary" onClick={() => handleClick(5)}>$5</Button>
            <Button variant="contained" color="primary" onClick={() => handleClick(10)}>$10</Button>
            <Button variant="contained" color="primary" onClick={() => handleClick(20)}>$20</Button>
        </div>
    );
}

export default Cash
