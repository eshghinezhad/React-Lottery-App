import { useState } from 'react'
import '../css/App.css'
import Header from './Header';
import Cash from './Cash';
import Numbers from './Numbers';
import Ticket from './Ticket'; // <-- Add this import

function App() {
  const [numOfPress, setNumOfPress] = useState(0);
  const [buttonState, setButtonState] = useState(Array(20).fill(false));
  const [numberSelected, setNumberSelected] = useState([]);
  const [amount, setAmount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = (index) => {
    if (buttonState[index] === false) {
      if (numOfPress >= 5) {
        alert("Already click 5 times");
      } else {
        const newButtonState = [...buttonState];
        newButtonState[index] = true;
        setNumberSelected((prevButton) => [...prevButton, index]);
        setButtonState(newButtonState);
        setNumOfPress(prevState => prevState + 1);
      }
    } else {
      const newButtonState = [...buttonState];
      newButtonState[index] = false;
      setButtonState(newButtonState);
      setNumOfPress(prevState => prevState - 1);
      setNumberSelected((prevButton) =>
        prevButton.includes(index)
          ? prevButton.filter((num) => num !== index) // Remove if already present
          : [...prevButton, index] // Add if not present
      );
    }

    // Logs: 1 'number'
  };

    const handleClear = () => {
        setNumOfPress(0);
        setAmount(0);
        setNumberSelected([]);
        setButtonState(Array(20).fill(false));
     }

    const handleRandom = () => {
        // Clear previous selections
        handleClear();

        //  5 unique random numbers
        const numbers = new Set();
        while (numbers.size < 5) {
            numbers.add(Math.floor(Math.random() * 20));
        }
        const randomIndexes = Array.from(numbers);

        // Update button state and selected numbers
        const newButtonState = Array(20).fill(false);
        randomIndexes.forEach(idx => {
            newButtonState[idx] = true;
        });

        setButtonState(newButtonState);
        setNumOfPress(5);
        setNumberSelected(randomIndexes);
    };
    
  const handleMoney = (value) => {
    if (numOfPress < 5) {
      alert("\n   Sorry!\n   You must select 5 numbers before selecting the money!");
    } else {
      setAmount((prevTotal) => prevTotal + value);
    }
 };
  const handleCash = () => {
      // Example dynamic amount
      alert(`  Thank you for your perchase. \n  The total amount is $${amount}.\n  The selected numbers are:    ${numberSelected.join(", ")}.\n\n   Good Bye.`) 
      handleClear();
  }



  return (
    <>
      <Header />
      <Numbers
        buttonState={buttonState}
        isDisabled={isDisabled}
        handleClick={handleClick}
        pickRandomButtons={handleRandom}
        handleClear={handleClear}
      />


      <Cash isDisabled={isDisabled} handleMoney={handleMoney} />
      <div>
          <button onClick={handleCash}>Cash</button>
      </div>

      <Ticket numberSelected={numberSelected} amount={amount} />
    </>
  )
}

export default App
