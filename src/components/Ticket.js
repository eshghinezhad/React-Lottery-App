import React from 'react';

function Ticket({ numberSelected, amount, isDisabled, addMoney }) {
  return (
    <div className="ticket-box">
      <h3>Numbers Selected:</h3>
      <hr />
      <p>
        <ol>
          {numberSelected.length > 0
            ? numberSelected.map((num) => <li key={num}> Number  {num + 1}</li>) // Add 1 to each selected number
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
