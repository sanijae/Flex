import Toolbar from './Component/Navbar/Toolbar';
import {Routes, Route} from 'react-router-dom' 
import Radium from 'radium';
import './App.css'
import './Pages/style.css'
import Footer from './Component/Footer/Footer';
import Home from './Pages/Home/Home';
import Voice from './Pages/Voice';
import Data from './Pages/Data';
import Bills from './Pages/Bills';
import Pins from './Pages/Pins';
import TVs from './Pages/TV';
import Wallet from './Pages/wallet/Wallet';
import Auths from './Component/Auths/Auths';
import ForgotPassword from './Component/Auths/ForgetPassword';
import Profile from './Component/Profile/Profile';
 
function App() {
  return (
    <div className='app'>
      <Toolbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/airtime-recharge' element={<Voice/>} />
        <Route path='/data-subscriptions' element={<Data/>} />
        <Route path='/bills-payments' element={<Bills/>} />
        <Route path='/cable-tv-subscriptions' element={<TVs/>} />
        <Route path='/e-pins' element={<Pins/>} />
        <Route path='/wallet' element={<Wallet/>} />
        <Route path='/user-accounts' element={<Profile/>} />
        <Route path='/authentication' element={<Auths/>} />
        <Route path='/update-your-password' element={<ForgotPassword/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default Radium(App);
