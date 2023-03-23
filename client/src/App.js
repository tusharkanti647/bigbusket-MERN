
import Footer from './Components/footer/Footer';

import Navbaar from './Components/header/Navbaar';
import HomeMain from './Components/home/HomeMain';

import { Routes, Route } from "react-router-dom";
import SignUp from './Components/signUP_signIn/SignUp';
import AboutProduct from './Components/productDetals/AboutProduct';
import Basket from './Components/basket/Basket';
import ProductPage from './Components/products/ProductPage';


const style = {

  background: '#2E3B55'
};

function App() {

 

  return (<>

    <Navbaar />
    {/* <NewNav /> */}
    <Routes>
    
      <Route path='/' element={<HomeMain />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/aboutproduct/:id' element={<AboutProduct />}></Route>
      <Route path="/basket" element={<Basket />}></Route>
      <Route path='/products' element={<ProductPage />}></Route>
    </Routes>
    <Footer />

  </>);
}

export default App;
