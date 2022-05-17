
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register';
import ManageInventory from './Component/ManageInventory/ManageInventory';
import NotFound from './Component/NotFound/NotFound';
import RequiredAuth from './Component/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventory" element={
          <RequiredAuth>
            <ManageInventory />
          </RequiredAuth>


        }></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
