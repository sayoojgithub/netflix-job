import logo from './logo.svg';
import './App.css';
import {originals,action,comedy,horror,romance} from './Urls'
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Rowpost url={originals} title='Netflix Originals'/>
    <Rowpost url={action} title='Action' isSmall/>
    <Rowpost url={comedy} title='Comedy' isSmall/>
    <Rowpost url={horror} title='Horror' isSmall/>
    <Rowpost url={romance} title='Romannce' isSmall/>
      
    </div>
  );
}

export default App;
