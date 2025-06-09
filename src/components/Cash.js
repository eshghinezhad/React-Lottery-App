import React, { useState } from 'react'
import Button from '@mui/material/Button';

function Cash() {
    // Define isDisabled as needed, for example always enabled:
    const [isDisabled, setIsDisabled] = useState(false);
    const [amount, setAmount] = useState(0);
    const [numOfPress, setNumOfPress] = useState(0);



    const handleClick = (amount) => {
        // if (selectedNumbers.length < 5) {
        //   alert("Please select 5 numbers before adding cash value.");
        //     } else {
        //     setCashTotal(cashTotal + amount);
        // }
    };
  const addMoney = (event) => {
    if (numOfPress < 5) {
      alert("You haven't selected all buttons yet!");
    } else {
      const value = parseInt(event.target.innerText.replace("$", ""), 10);
      setAmount((prevTotal) => prevTotal + value);
    }


  }
    return (
        <>
        <div className="cash">
            <h2>Cash Input</h2>
            <Button variant="contained" color="primary" onClick={() => handleClick(1)}>$1</Button>
            <Button variant="contained" color="primary" onClick={() => handleClick(5)}>$5</Button>
            <Button variant="contained" color="primary" onClick={() => handleClick(10)}>$10</Button>
            <Button variant="contained" color="primary" onClick={() => handleClick(20)}>$20</Button>
        </div>
        <hr />
        <div className="grid grid-cols-4 gap-2">
              {["$1", "$5", "$10", "$20"].map((amount) => (
                  <button
                      key={amount}
                      disabled={isDisabled}
                      className={"big-button"}
                      onClick={addMoney}
                  >
                      {amount}
                  </button>
              ))}
          </div>
          </>
    );
}

export default Cash
