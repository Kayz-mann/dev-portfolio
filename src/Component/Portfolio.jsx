import React from 'react'
import styled from "styled-components"
import PortfolioSlide from './PorfolioSlide';

const Layout = styled.div`
     margin-bottom: 300px;

     @media (max-width: 820px){
       margin-top: -650px;
    }

    @media (max-width: 420px) {
        margin-top: -150px;
    }

`;

const Header = styled.div`
    //   margin-top: -400px;
        margin-top: 300px;
        margin-bottom: 100px;
        margin-right: 300px;
        justify-content: center;
        place-items: center;
        align-items: center;
        width: 100%;
        overflow: hidden;
        
     h1 {
         color: #fff;
         left: 0;
         margin-left: 50px;
         margin-top: 200;
         
        }

        @media (max-width: 1026px){
            width:90%;
            height: 400px;
            margin-right: 40px;
            h1 {
                margin-top: -80px;
            }
        }

        @media (max-width: 820px){
            h1 {
                color: #000;
                margin-top: 500px;
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
        <Layout>
        <Header>
            <h1 id="portfolio">Portfolio</h1>
        </Header>
        <PortfolioSlide className="slide" />
        </Layout>
    )
}

export default Portfolio
