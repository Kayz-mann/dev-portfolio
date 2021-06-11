import React from 'react'
import styled from "styled-components"
import PortfolioSlide from './PorfolioSlide';

const Header = styled.div`
    //   margin-top: -400px;
        margin-top: 300px;
        margin-right: 300px;
        float:right;
        justify-content: center;
        place-items: center;
        width: 50%;
        
        

        
     

      
     h1 {
         color: #fff;
         left: 0;
         margin-left: 50px;
         
        }

        @media (max-width: 1026px){
            width:90%;
            height: 400px;
            margin-right: 40px;
            h1 {
                margin-top: -80px;
            }
        }

        @media (max-width: 770px){
            
            h1 {
                color: #000;
            }
        }

        @media (max-width: 420px){
            margin-top: 200px;
            width: 100%;
            height: 40px;
            margin-right: 0px;

            h1 {
                color: #000;
                text-align: center;
                justify-content: center;
                align-items: center;
                margin-left: 125px;
                margin-top: -10px;
            }

            

            
        }

`;

function Portfolio() {
    return (
        <Header>
            <h1 id="portfolio">Portfolio</h1>
            <PortfolioSlide className="slide" />
        </Header>
    )
}

export default Portfolio
