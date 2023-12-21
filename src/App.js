import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Explore from './components/Explore';
import Create from './components/Create';
import Notification from './components/Notification';
import Chats from './components/Chats';
import Profile from './components/Profile';
import More from './components/More';
import Footer from './components/Footer';
import EditProfile from './components/EditProfile';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Account from './components/Account';
import Visibility from './components/Visibility';
import TuneHome from './components/TuneHome';
import Claimed from './components/Claimed';
import Social from './components/Social';
import Notify from './components/Notify';
import Privacy from './components/Privacy';
import Security from './components/Security';
import Branded from './components/Branded';
import Left from './components/Left';
import Share from './components/Share';
import ViewPin from './components/ViewPin';
import Trial from './components/Trial';
import Signedin from './components/Signedin';
import Windows from './components/Windows';
import PrivacyPolicy from './components/PrivacyPolicy';
import Help from './components/Help';
import Service from './components/Service';
import Tester from './components/Tester';
import Logout from './components/Logout';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = '/'element = {[<Header/>, <Body/>]}/>
      <Route path = '/Home' element = {[<Header/>, <Body/>]}/>
      <Route path = '/Explore' element = {[<Header/>,<Explore/>]}/>
      <Route path = '/Create' element = {[<Header/>,<Create/>]}/>
      <Route path = '/Notification' element = {[<Header/>,<Body/>]}/>
      <Route path = '/Chats' element = {[<Header/>,<Chats/>]}/>
      <Route path = '/Profile' element = {[<Header/>,<Profile/>]}/>
      <Route path = '/More' element = {[<Header/>,<More/>]}/>
      <Route path = '/EditProfile' element = {[<Header/>,<EditProfile/>,<Footer/>]}/>
      <Route path = '/Account' element = {[<Header/>,<Account/>,<Footer/>]}/>
      <Route path = '/Visibility' element = {[<Header/>,<Visibility/>,<Footer/>]}/>
      <Route path = '/TuneHome' element = {[<Header/>,<TuneHome/>,<Footer/>]}/>
      <Route path = '/Claimed' element = {[<Header/>,<Claimed/>,<Footer/>]}/>
      <Route path = '/Social' element = {[<Header/>,<Social/>,<Footer/>]}/>
      <Route path = '/Notify' element = {[<Header/>,<Notify/>,<Footer/>]}/>
      <Route path = '/Privacy' element = {[<Header/>,<Privacy/>,<Footer/>]}/>
      <Route path = '/Security' element = {[<Header/>,<Security/>,<Footer/>]}/>
      <Route path = '/Branded' element = {[<Header/>,<Branded/>,<Footer/>]}/>
      <Route path = '/Share' element = {[<Header/>,<Share/>]}/>
      <Route path = '/ViewPin' element = {[<Header/>,<ViewPin/>]}/>
      <Route path = '/Trial' element={[<Header/>,<Trial/>]}/>
      <Route path = '/Signedin' element={[<Header/>,<Signedin/>]}/>
      <Route path = '/Windows' element={[<Header/>,<Windows/>]}/>
      <Route path = '/PrivacyPolicy' element={[<Header/>,<PrivacyPolicy/>]}/>
      <Route path = '/Help' element={[<Header/>,<Help/>]}/>
      <Route path = '/Service' element={[<Header/>,<Service/>]}/>
      <Route path = '/Tester' element={[<Header/>,<Tester/>]}/>
      <Route path = '/Logout' element={[<Header/>,<Logout/>]}/>

      
    
    
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
