import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Contact from './components/Contact'

function AirApp(){
    return (
        <div>
            <Navbar />
            <Hero />
            <Card />
        </div>
    )
}


function ContactApp() {
    return (
      <div className="contacts">
           <Contact 
                img="./images/mr-cat-1.png" 
                name="Mr. David"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img="./images/mr-cat-2.png"
                name="Michal"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img="./images/mr-cat-3.png"
                name="Shiva"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="./images/mr-cat-4.png"
                name="Jimmy"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
      </div>
    )
  }
ReactDOM.render(
    <ContactApp />,
    document.getElementById('root')
)

