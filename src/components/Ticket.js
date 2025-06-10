import React from 'react'

function Ticket({ numberSelected, amount, isDisabled, addMoney }) {
  return (
    <div className="lottery-ticket">
      <h3>Numbers Selected</h3>
        <p>
          <ul>
           {numberSelected.length > 0
            ? numberSelected.map((num) => <li key={num}>Mark: {num + 1}</li>) // Add 1 to each selected number
            : ""}
          </ul>
        </p>
      <p style={{ position: 'fixed',top:500}} >Total: ${amount}</p>
    </div>
  )
}

export default Ticket
