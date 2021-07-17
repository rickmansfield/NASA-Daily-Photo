import React from 'react';
import styled from  'styled-components';
import '../App.css';
export default function Header(){
    // const {title} = props;
    
    return (
        <Headers>
            <div>
            <h1>Picture of The Day From</h1>
            </div>
            
            <section className="logo">
            <img id='logo1' src="https://stoic-jones-8cfd50.netlify.app/static/media/nasa-logo-web-rgb-1.43be7d63.png" alt="NASA Logo"></img>
            </section>
            <nav className="home-login-subscribe">
                <a href="index.html">HOME</a>
                <a href="index.html">LogIn/Out</a>
                <a href="index.html">Subscribe</a>
            </nav>
        </Headers>
    )
}

const Headers = styled.div`

    h1{
        font-family: 'Chelsea Market', cursive;
        font-size: 2rem;
        color: white;
        padding-left: 2%;
        margin: 1%;
        
    }
    
    h2{
        font-family: 'Chelsea Market', cursive;
        font-size: 4rem;
        color: black;
        padding-left: 2%;
    }

    a{
        text-decoration: none;
        background-color: rgb(179, 170, 170);
        padding: 1%;
        border-radius: 25%;
        margin: 0 1%;
    &:hover{
        background-color: rgb(11, 223, 57);
        transform:scale(2);
        transition: all 0.5s ease-in-out;
    }
        transition: all 0.5s ease-in-out;
    
    nav{
        display:flex;
        flex-direction: row;
        justify-content:flex-start;
        margin: 1%;	
    }

    .logo{
        margin: 5%;
    }
    #logo1{
        margin 5%padding-left;
    }

    `;
