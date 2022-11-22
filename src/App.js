import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import DashBoard from './components/DashBoard/DashBoard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
      <Route path='/'element={<Home></Home>}></Route>
      <Route path='/review'element={<Reviews></Reviews>}></Route>
      <Route path='/dashboard'element={<DashBoard></DashBoard>}></Route>
      <Route path='/blogs'element={<Blogs></Blogs>}></Route>
      <Route path='/about'element={<About></About>}></Route>
      <Route path='*'element={<NotFoundPage></NotFoundPage>}></Route>
     </Routes>
    </div>
  );
}

export default App;
