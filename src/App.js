
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path=''></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
