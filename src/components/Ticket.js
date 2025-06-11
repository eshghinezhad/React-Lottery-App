import React from 'react';

function Ticket({ numberSelected, amount, isDisabled, addMoney }) {
  return (
    <div className="ticket-box">
      <h4>Numbers Selected:</h4>
      <hr />
      <p>
        <ol>
          {numberSelected.length > 0
            ? numberSelected.map((num) => <li key={num}> Number  {num }</li>) // Add 1 to each selected number
            : ""}
        </ol>
      </p>
      <p style={{ fontSize: '1.1rem', padding: 25, position: 'fixed',top:490}} >
        Total: ${amount}
      </p>
    </div>
  );
}

export default Ticket;
