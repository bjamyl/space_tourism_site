import './App.css';
import { Home, Destination, Crew, Technology} from './pages'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <Destination />
      <Crew />
      <Technology />
    </div>
  );
}

export default App;
