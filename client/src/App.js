import './App.css';

import Navbaar from './Components/header/Navbaar';
import HomeMain from './Components/home/HomeMain';

const style = {

  background : '#2E3B55'
};

function App() {
  return (<>
  <Navbaar />
  <HomeMain />
  </>);
}

export default App;
