import './App.css';
import Footer from './Components/footer/Footer';

import Navbaar from './Components/header/Navbaar';
import NewNav from './Components/header/NewNav';
import HomeMain from './Components/home/HomeMain';

import { Routes, Route } from "react-router-dom";
import SignUp from './Components/signUP_signIn/SignUp';
import AboutProduct from './Components/productDetals/AboutProduct';

const style = {

  background : '#2E3B55'
};

function App() {
  return (<>
  
  <Navbaar />
  {/* <NewNav /> */}
  <Routes>
  <Route path='/' element={<HomeMain />}></Route>
  <Route path='/signup' element={<SignUp />}></Route>
  <Route path='/aboutproduct/:id' element={<AboutProduct />}></Route>
  </Routes>
  <Footer />
  
  </>);
}

export default App;
