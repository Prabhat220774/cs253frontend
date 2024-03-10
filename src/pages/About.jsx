import React from "react";
import Contacts from "./contact";
import Card from "./Card";

function About(){
    return (
        <div>
        <div className='cont'>
          { Contacts.map((item) => {
            return (
              <Card 
              name = {item.name}
              phone ={item.phone}
              email ={item.email}
              image ={item.image}
              />
              );
           })}
           <Card />
           <Card />
        </div>
        </div>
      );
}

export default About;