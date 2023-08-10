import React from 'react';
import { BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom'; // Import components from version 6
 import Client from "./post/client"
import Login from './post/login';
import Register from './post/registration';
import Case from "./post/case"
import Viewclients from './get/allclients';
import Showcases from './get/allcases';
import Findclient from './get/findclient';
import Noutfound from './404';
import Findbyid from './get/findbyid';
import Findcasebyid from './get/getcasebyid';
import Navigation from './nav';
import Findclientbysecondname from './get/findbysecondname';


function App() {
 


  return (
    <div>
  <BrowserRouter>
      <Routes>

  







      <Route path="*" element={<Noutfound/>}/> 
      <Route path="/secondname" element={<Findclientbysecondname/>}/> 
      <Route path="/navigation" element={<Navigation/>}/>
        <Route path="/casedetails" element={<Findcasebyid/>}/>
        <Route path="/id" element={<Findbyid/>}/>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/client" element={<Client />} />
        <Route path ="/case"  element={<Case/>}/> 
        <Route path="/allclients" element={<Viewclients/>}/>
        <Route path="/allcases" element={<Showcases/>}/>
        <Route path="/clientlist" element={<Findclient/>}/>
        <Route path="/secondname" element={<Findclientbysecondname/>}/>
 
      </Routes>
    </BrowserRouter>


    </div>
  

    
  );
}

export default App;
