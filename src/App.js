
import MainNav from './Components/MainNav';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import MainFooter from './Components/MainFooter';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
  <BrowserRouter>
    <Provider store={store}>
      <MainNav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
      <MainFooter/>
    </Provider>
  </BrowserRouter>

  )
  
}

export default App;
