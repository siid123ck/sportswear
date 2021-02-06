import React from 'react';
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
                        <a href="">home</a>
                    </div>
                    <div className="nav-item">
                        <a href="">shop</a>
                    </div>
                    <div className="nav-item">
                        <a href="">men</a>
                    </div>
                    <div className="nav-item">
                        <a href="">women</a>
                    </div>
                
                    <div className="nav-item">
                        <a href="">register</a>
                    </div>
                    <div className="nav-item cart-icon">
                      <BagIcon className="cart-icon-bag"/>
                      <span className="cart-icon-count">0</span>
                    </div>
                </ul>
            </div>
        </div>
    )
}
