import '../css/App.css';
import Header from './Header';
import Numbers from './Numbers';
import Cash from './Cash';  
import Final from './Final';

function App() {
  return (
    <div className="App">
      <Header />
      <Numbers />
      <Cash />
      <Final />
    </div>
  );
}

export default App;
