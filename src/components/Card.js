import React, { Fragment } from 'react'
import "./styles.css";

import Logo from '../assets/logo.svg'


function Card() {
    return (
        <section className="container">
            <div className="card">
                <div>
                    <img className="logo" alt="Logo" src="https://cdn.worldvectorlogo.com/logos/ethereum-gold.svg"/>
                    <h3 className="title">COMPANY LOGO</h3>
                    <p className="slogan">YOUR SLOGAN HERE</p>
                    <div className="site">WWW.YOURCLUB.COM</div>
                </div>
            </div>
        </section>
    )
}

export default Card
