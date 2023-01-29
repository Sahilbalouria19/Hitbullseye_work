import './App.css';
import Heading from './components/Heading';
import {Section1,Section2,Secttion3} from './components/Section1';


function App() {
  return (
      <div className='App'>
        <Heading />
          <p>
            Hello, How are you?
          </p>
        <Section1 /> 
        <Section2/>
        <Secttion3/>
      </div>
  );
}

export default App;
