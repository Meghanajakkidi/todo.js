import logo from './logo.svg';
import './App.css';
import Createtodo from './pages/Createtodo';
import Tododispaly from './pages/Tododispaly';

function App() {
  
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
     <Createtodo/>
     <Tododispaly/>
    </div>
  );
}

export default App;
