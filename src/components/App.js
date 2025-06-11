import { useState } from 'react'
import '../css/App.css'
import Header from './Header';
import Cash from './Cash';
import Numbers from './Numbers';
import Ticket from './Ticket'; 

function App() {
  const [numberSelected, setNumberSelected] = useState([]);
  const [amount, setAmount] = useState(0);

  const handleClick = (number) => {
    if (numberSelected.includes(number)) {
      setNumberSelected(numberSelected.filter(n => n !== number));
    } else if (numberSelected.length < 5) {
      setNumberSelected([...numberSelected, number]);
    } else {
      alert("You can only select up to 5 numbers.");
    }
  };

  const handleClear = () => {
      setAmount(0);
      setNumberSelected([]); 
  }

  const handleRandom = () => {
    handleClear();
    const numbers = [];
    while (numbers.length < 5) {
      const number = Math.floor(Math.random() * 20) + 1;
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    setNumberSelected(numbers);
  };
    
  const handleMoney = (value) => {
    if (numberSelected.length < 5) {
      alert("\n   Sorry!\n   You must select 5 numbers before selecting the money!");
    } else {
      setAmount((prevTotal) => prevTotal + value);
    }
  };
  const handleCash = () => {
     if (numberSelected.length < 5) {
      alert("\n   Sorry!\n   You must select 5 numbers before cashing out!");
    } else if (amount === 0) {
      alert("\n   Sorry!\n   You must select a money amount before cashing out!");
    }
    else {
      alert(`  Thank you for your perchase. \n  The total amount is $${amount}.\n  The selected numbers are:    ${numberSelected.join(", ")}.\n\n   Good Bye.`) 
      handleClear();
    }
  }

  return (
    <>
      <Header />
      <h1 className="title">Lottery Game</h1>
      <Numbers
        numberSelected={numberSelected}
        handleClick={handleClick}
        pickRandomButtons={handleRandom}
        handleClear={handleClear}
      />
      <Cash handleMoney={handleMoney} handleCash={handleCash} />
      <Ticket numberSelected={numberSelected} amount={amount} />
    </>
  )
}

export default App
