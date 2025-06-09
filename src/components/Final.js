import React from 'react'

function Final() {
  return (
    <div>
      <div className="lottery-ticket">
            <h2>Numbers Selected</h2>
            <ul className = "number-list">
                {selectedNumbers.map((number, index) => (
                    <li key={index}> Derek: {number}</li>
                ))}
            </ul>
            <p className = "total"> Total: ${cashTotal}</p>
        </div>
    </div>
  )
}

export default Final
