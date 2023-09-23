import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./styles/index.css";
// import Layout from "./components/layouts";
import Home from "./pages/home";
import SerachIcon from "./assets/icons/search.svg";
import EspaceIcon from "./assets/icons/espace-icon.svg";
import Twitter from "./assets/icons/twitter.svg";
import Facebook from "./assets/icons/facebook.svg";
import Instagram from "./assets/icons/instagram.svg";
import Youtube from "./assets/icons/youtube.svg";
import NotFound from "./components/global/NotFound";
import SignIn from "./pages/signin"
import Login from "./pages/login"
import ComixView from "./pages/comixView"
import Abonnement from "./pages/abonnement"
import Hamburger from 'hamburger-react'
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} /> */}
          <Route path="/comix/:id" element={<ComixView />} />
          <Route path="/abonnement" element={<Abonnement />} />
        </Route>
        
        {/* For not fount pages */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  );
}

function Layout() {
   const [isOpen, setOpen] = useState(false)
  return (
    <div >
      <nav className="flex items-center justify-between px-10 py-5 bg-orange">
         <div className="flex items-center w-2/3">
            <h2 className="text-2xl montserrat-extrabold">
               <Link Link to="/">KuumbaComix.</Link>
            </h2>
            <ul className="flex justify-around w-2/3 ml-5 montserrat-regular mobile-hide">
               <li>
                  <Link to="/">Acceuil</Link>
               </li>
               <li>
                  <Link to="/">Catégorie</Link>
               </li>
               <li>
                  <Link to="/abonnement">Abonnement</Link>
               </li>
               <li>
                  <Link to="/">Communauté</Link>
               </li>
            </ul>
         </div>

         <ul className="flex items-center justify-around w-1/5 montserrat-regular mobile-hide">
            <div>
               <input type="text" name="" id="" className="hidden" />
               <li>
                  <Link to="/">
                     <img src={SerachIcon} alt="" />
                  </Link>
               </li>
            </div>
            <li className="flex items-center px-2 py-2 text-white border border-white rounded-lg">
               <img src={EspaceIcon} alt="account" />
               <Link to="/signin" className="px-2">Mon Espace</Link>
            </li>
         </ul>
         <div className="desktop-hide">
            <Hamburger toggled={isOpen}  size={25} color="white" onToggle={toggled => {
               if(toggled){
                  document.querySelector('.nav-hamburger').classList.add('mobile-block')
               }else{
                  document.querySelector('.nav-hamburger').classList.remove('mobile-block')
               }
               setOpen(toggled)
            }}  />
            <div className="nav-hamburger mobile-w-full mobile-hide">
               <ul className="my-5 bg-orange montserrat-regular mobile-w-full">
                  <li>
                     <Link to="/">Acceuil</Link>
                  </li>
                  <li>
                     <Link to="/">Catégorie</Link>
                  </li>
                  <li>
                     <Link to="/">Abonnement</Link>
                  </li>
                  <li>
                     <Link to="/">Communauté</Link>
                  </li>
                  <li className="flex items-center p-2 text-white border border-white rounded-lg max-w-max">
                     <img src={EspaceIcon} alt="account" className="mobile-hide" />
                     <Link to="/signin" className="">Mon Espace</Link>
                  </li>
               </ul>
            </div>
         </div>
         



      </nav>

      <div>
         <Outlet />
      </div>

      <footer className="flex py-5 justify-evenly bg-orange-light montserrat-semibold mobile-block mobile-px-20 ">
         <div className="flex icons mobile-absolute mobile-flex-end min-mobile-w-95">
            <img src={Twitter} alt="Twitter" />
            <img src={Facebook} alt="Facebook" />
            <img src={Youtube} alt="Youtube" />
            <img src={Instagram} alt="Instagram" />
         </div>
         <ul>
            <li>A propos</li>
            <li>Contact</li>
            <li>Mentions légales</li>
         </ul>
         <ul>
            <li>CGU</li>
            <li>Confidentialité</li>
            <li>Charte de cookies</li>
         </ul>
         <ul>
            <li>Gérer mes cookies</li>
            <li>Applications mobiles</li>
            <li>Nous rejoindre</li>
         </ul>
         <ul>
            <li>Presse</li>
         </ul>
      </footer>
    </div>
  );
}
