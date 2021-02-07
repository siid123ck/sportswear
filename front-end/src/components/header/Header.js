import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as BagIcon} from  "../../assets/shopping-bag.svg";
import './header.scss';

export default function Header() {
    return (
        <div className="header">
            <div className="logo">Sportswear</div>
            <div className="nav">
                <ul className="nav-list">
                 <div className="nav-item searchbar">
                   <input type="text" placeholder="Search"/>   
                   <ion-icon  className="search-icon" name="search-outline"></ion-icon>
                  </div>
                    <div className="nav-item">
                        <Link to="">home</Link>
                    </div>
                    
                    <div className="nav-item">
                        <Link to="">shop</Link>
                    </div>
                    <div className="nav-item">
                        <Link to="">men</Link>
                    </div>
                    <div className="nav-item">
                        <Link to="">women</Link>
                    </div>
                
                    <div className="nav-item">
                        <Link to="">register</Link>
                    </div>
                   
                </ul>
            </div>
            <div className=" cart-icon">
                      <BagIcon className="cart-icon-bag"/>
                      <span className="cart-icon-count">0</span>
           </div>
        </div>
    )
}
