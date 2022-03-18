import React, {useState, useEffect, useRef } from 'react'
import { links, social } from "./data";
import { FaBars } from 'react-icons/fa';
import logo from "./logo.png";
import "./App.css";


export default function Navbar() {
    const linkRef = useRef(null);
    const linkContainerRef = useRef(null);
    const [showLinks, setShowLinks] = useState(false);

    const toggle = ()=>{
        setShowLinks(!showLinks);
    }
    useEffect(()=>{
        if(window.innerWidth >= 800){
            linkContainerRef.current.style.display = "block";
            console.log("done");
        }
        else{
        if(showLinks){
            console.log('opened');
            linkContainerRef.current.style.display = "block";
        }
        else{
        console.log('closed');
        linkContainerRef.current.style.display = "none";

        }
    }

    },[showLinks])
    return (
        <nav>
        <div className="outer-container">
          <div className="header-container">
            <img src={logo} alt="" />
            <button className="toggle" onClick={toggle}>
                <FaBars />
            </button>
          </div>
          <div className="link-container" ref={linkContainerRef}>
            <ul className="links" ref={linkRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    {" "}
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="social-icons">
            {social.map((icons) => {
              const { id, url, icon } = icons;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    )
}
