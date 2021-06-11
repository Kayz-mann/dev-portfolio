import React from 'react'
import html from "../svg/html.png"
import css from "../svg/css.png"
import javascript from "../svg/javascript.png"
import react from "../svg/react.png"
import firebase from "../svg/firebase.png"
import node from "../svg/node.png"
import mongodb from "../svg/mongodb.png"
import sql from "../svg/sql.png"
import arduino from "../svg/arduino.png"
import raspberry from "../svg/raspberry.png"
import styled from 'styled-components';


const SkillHeader = styled.div`
   margin-top: 300px;
   margin-bottom: 100px;
   
   h1 {
      
      color: #000;
      margin-left: 50px;
      margin-top: -100px;
      
   }

   h2 {
       margin-left: 50px;
       margin-top:50px;
       margin-bottom: 30px;
   }

   p{
    margin-left: 50px;
   }

   @media (max-width: 1030px){
      margin-top:650px;

      h1{
          margin-top: -50px;
          
          
      }
   }

   @media (max-width: 770px){
       margin-top:900px;
    }

   @media (max-width: 420px){
       margin-top: 1100px;
    text-align: center;
    justify-content: center;
    align-items: center;
       h1{
           text-align: center;
           justify-content: center;
           align-items: center;
           margin-left:155px;
       }
       p{
        margin-left:5px;  
        width:95%;
       }

       h2{
           margin-left:-190px;
           margin-top:80px;
       }
   }
`;

const Flex = styled.div`
   display: flex;
   
   justify-content: space-between;

   img {
       height: 80px;
       margin-top: 40px;
       
   }

   @media (max-width: 460px){
    img{
        height: 40px;
        display: flex;
        flex-direction: column;
    }
}
`;

const FlexCol = styled.div`
   display: flex;
   justify-content: space-between;

   img {
       height: 80px;
       margin-top: 40px;
       margin-left: 10px;
   }
   

   @media (max-width: 460px){
       img{
           height: 30px !important;
           width: 50%;
       }

       
   }

   @media (max-width: 482px){
    img{
        height: 35px !important;
        margin-left: 30px;
        
    }

    
}


`;

function Skills() {
    return (
        <SkillHeader>
            <h1 id="skills">Skills</h1>
            <p>My work flow is based on the MERN stack.
                <br />Below are the technologies I have worked with.
            </p>
            <h2>Frontend</h2>
            <Flex>
            <img src={html} alt="/html" />
            <img src={css} alt="/css" />
            <img src={javascript} alt="/javascript" />
            <img src={react} alt="/react" />
            </Flex>
            <h2>Backend</h2>
            <p>I am able to setup the serverside , create REST-APIs and perform user authentications</p>
            <Flex>
            <img src={node} alt="/node" />
            </Flex>
            <h2>Database</h2>
            <p>I succesfully created a two way asynchronus database connection to achieve a real time application.<br />
            I also tried out a case where an application can work with two databases at once in case the server of a db is down using mongo and firebase</p>
            <FlexCol>
                <img src={mongodb} alt="/mongodb" />
                <img src={firebase} alt="/firebase" />
                <img src={sql} alt="/sql" />
            </FlexCol>
            <h2>IoT</h2>
            <p>I have a full grasp of the working principles of a micro-controller. My learning process is still in review as I am looking forward to getting above the basic electronic stages.</p>
            <Flex>
                <img src={arduino} alt="/arduino" />
                <img src={raspberry} alt="/raspberrypi" />
            </Flex>
        </SkillHeader>
    )
}

export default Skills
