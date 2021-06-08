import React from 'react'
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import styled from "styled-components"
import uptown from "../img/uptown.png"
import facebook from "../img/facebook.png"
import amazon from "../img/amazon.png"
import spotify from "../img/spotify.png"
import netflix from "../img/netflix.png"

const Slide = styled.div`

    span {
        display: flex;
        
        h1 {
            color: #000;
            margin-top: 375px;
            text-align: center;
            margin-left: 20px;
            font-size: 22px;
        }
    }
    .sliderimg{
        width: 100%;
        height: 400px;
        border-radius: 8px;
        cursor: pointer;
        object-fit: contain;
    }

   
    }
    
    `;

function PorfolioSlide() 
{
    return (
        <Slide>
            <AliceCarousel autoPlay autoPlayInterval="23000">
                <span>
                <a target="_blank" rel="noreferrer" href="https://uptown-luxury.herokuapp.com/"><img src={uptown} className="sliderimg" alt="/uptown luxury" rel="noreferrer" /></a>
                 <h1>E-commerce App</h1>
                </span>
                <span>
                <a target="_blank" rel="noreferrer" href="https://facebook-messenger-clone-f93a1.web.app/"><img src={facebook} className="sliderimg" alt="/facebook" rel="noreferrer" /></a>
                 <h1>Facebook Clone</h1>
                </span>
                <span>
                <a target="_blank" rel="noreferrer" href="https://clone-react-ce3d8.firebaseapp.com/"><img src={amazon} className="sliderimg" alt="/amazon" rel="noreferrer" /></a>
                 <h1>Amazon Clone</h1>
                </span>
                <span>
                <a target="_blank" rel="noreferrer" href="https://spotifyng-clone.herokuapp.com/"><img src={spotify} className="sliderimg" alt="/spotify" rel="noreferrer" /></a>
                 <h1>Spotify-UI</h1>
                </span>
                <span>
                <a target="_blank" rel="noreferrer" href="https://netflix-clone-react-bab60.web.app/"><img src={netflix} className="sliderimg" alt="/netflix" rel="noreferrer" /></a>
                 <h1>Netflix Clone</h1>
                </span>
            </AliceCarousel>
            
        </Slide>
    )
}

export default PorfolioSlide
