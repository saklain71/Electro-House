
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './Component/AddItems/AddItems';
import Blog from './Component/Blog/Blog';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import ItemsDetails from './Component/ItemsDetails/ItemsDetails';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register';
import ManageInventory from './Component/ManageInventory/ManageInventory';
import MyItems from './Component/MyItems/MyItems';
import NotFound from './Component/NotFound/NotFound';
import RequiredAuth from './Component/RequiredAuth/RequiredAuth';
import UpdateItem from './Component/UpdateItem/UpdateItem';

function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/items/:id" element={
          <RequiredAuth>
            <ItemsDetails></ItemsDetails>
          </RequiredAuth>
        }></Route>
        <Route path="/inventory" element={
          <RequiredAuth>
            <ManageInventory></ManageInventory>
          </RequiredAuth>
        
        }></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/additem" element={<AddItems></AddItems>}></Route>
        <Route path="/myitem" element={<MyItems></MyItems>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/update" element={<UpdateItem></UpdateItem>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
