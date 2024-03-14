import React from 'react';
import Titlelogo from '../img/titleLogo.png';
import { Search } from './Body';

export const Title = () =>
{
    return(
        <>
             <a href="/">
           <img src={Titlelogo} alt="Logo Image" id="LogoImg" />
           </a>
        </>
    );
}




const Header =()=>
{
    return(
        <div className="header">
           <Title/>
           <div className="nav-items">
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Cart</a></li>
            </ul>
           </div>
           <Search/>
        </div>
    );
}

export default Header;