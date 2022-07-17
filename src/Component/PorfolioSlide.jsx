import React from 'react'
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import styled from "styled-components"
import uptown from "../img/uptown.png"
import facebook from "../img/facebook.png"
import amazon from "../img/amazon.png"
import spotify from "../img/spotify.png"
import netflix from "../img/netflix.png"
import telegram from "../img/telegram.png"
import tesla from "../img/tesla.png"
import ricive from '../img/ricive.png';
import pathscape from '../img/pathscape.png';
import zuri from '../img/zuri.png';
import robinhood from "../img/robinhood.png"
import { Button } from '@material-ui/core'
import { Language, Android, Apple } from '@material-ui/icons';

const Slide = styled.div`
    overflow: hidden;
    width: 100%;
    justify-content: center;

    span {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 50px;
        // align-items: center;
        
        h1 {
            color: #000;
            position: relative;
            // text-align: center;
            font-size: 22px;
            justify-content: flex-start;

        }
        h4{
            font-size: 14px;
            font-weight: 500;
            margin-top: 20px; 
        }
    }
    .sliderimg{
        width: 100%;
        height: 400px;
        border-radius: 8px;
        cursor: pointer;
        object-fit: contain;
    }

    @media (max-width: 820px){
        align-items: center;
        justify-content: center;
        place-item: center;
        margin: auto;



        h1 {
            color: #000;
            text-align: center;
        }

        h4{
            text-align: center;
        }

        span {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        div {
            align-items: center;
            justify-content: center; 
        }

        a{ 
            margin-left: 70px;
        }

        button {
            align-items: center;
        }
    }

    
    @media (max-width: 420px) {
        margin-top: -250px;
        width: 100%;
        align-items: center;
        justify-content: center;
        margin-left: -60px;

        .alice-carousel__dots {
            margin-left: 100px;
        }

        span{
            text-align: center;
            width: 100%;
            justify-content: center;
            align-items: center;
            
        }

        h1{
            font-size: 16px;
        }

        h4 {
            width: 300px;
            align-items: center;
            text-align: center;
            font-size: 14px;
            margin-left: -55px;
        }

        a{
            // margin-right: 10px;
            
            
        }

        button{
            width: 14px;
            margin-left: -40px;
            
        }
    }
   
   
    }
    
`;

function PorfolioSlide() 
{
    return (
        <Slide>
            <AliceCarousel autoPlay autoPlayInterval="23000">
                <span>
                    <a target="_blank" rel="noreferrer" href="https://ricive.com/"><img src={ricive} className="sliderimg" alt="/uptown luxury" rel="noreferrer" /></a>
                    <div style={{ justifyContent: 'center', paddingLeft: 30, paddingRight: 30, width: '40%'}}>
                        <h1>Ricive Laundry</h1>
                        <h4>An all in one laundry platform built on Web and Mobile operating system for merchants and customer built on ReactJS and React Native</h4>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginLeft: '-20px'}}>
                            <a style={{ color: '#fff', textDecoration: 'none', alignItems: 'center'}} target="_blank" rel="noreferrer" href="https://ricive.com/">
                                <Button style={{ padding: '8px', height: '32px', marginTop: '50px', justifyContent: 'center', backgroundColor: '#000' }}>
                                    <Language style={{ color: '#fff'}} />
                                </Button>   
                            </a>
                            <a style={{ color: '#fff', textDecoration: 'none', alignItems: 'center'}} target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.ricive.ricivelaundry">
                                <Button style={{ padding: '8px', height: '32px', marginTop: '50px', justifyContent: 'base-line', backgroundColor: '#000' }}>
                                    <Android style={{ color: '#fff'}} />
                                </Button>   
                            </a>
                            <a style={{ color: '#fff', textDecoration: 'none', alignItems: 'center'}} target="_blank" rel="noreferrer" href="https://apps.apple.com/ng/app/ricive-laundry/id1618944180">
                                <Button style={{ padding: '8px', height: '32px', marginTop: '50px', justifyContent: 'base-line', backgroundColor: '#000' }}>
                                    <Apple style={{ color: '#fff'}} />
                                </Button>   
                            </a>
                        </div>
                        
                    </div>
                </span>
                <span>
                    <a target="_blank" rel="noreferrer" href="https://www.pathscape.app/"><img src={pathscape} className="sliderimg" alt="/uptown luxury" rel="noreferrer" /></a>
                    <div style={{ justifyContent: 'center', paddingLeft: 30, paddingRight: 30, width: '40%'}}>
                        <h1>PathScape ERP software</h1>
                        <h4>A project management software for businesses</h4>
                        <a style={{ color: '#fff', textDecoration: 'none', alignItems: 'center', width: '100%'}} target="_blank" rel="noreferrer" href="https://www.pathscape.app/">
                            <Button style={{ padding: '8px', height: '32px', marginTop: '50px', justifyContent: 'center', backgroundColor: '#000' }}>
                                <Language style={{ color: '#fff'}} />
                            </Button>   
                         </a>
                        
                    </div>
                </span>
                <span>
                    <a target="_blank" rel="noreferrer" href="https://www.zuri.chat/"><img src={zuri} className="sliderimg" alt="/uptown luxury" rel="noreferrer" /></a>
                    <div style={{ justifyContent: 'flex-start', paddingLeft: 30, paddingRight: 30, width: '40%'}}>
                        <h1>Zuri Chat</h1>
                        <h4>A web3 software that powers remote work while having a free work around in the environment</h4>
                        <a style={{ color: '#fff', textDecoration: 'none', alignItems: 'center'}} target="_blank" rel="noreferrer" href="https://www.zuri.chat/">
                            <Button style={{ padding: '8px', height: '32px', marginTop: '50px', justifyContent: 'base-line', backgroundColor: '#000' }}>
                                <Language style={{ color: '#fff'}} />
                            </Button>   
                         </a>
                        
                    </div>
                </span>
                <span>
                    <a target="_blank" rel="noreferrer" href="https://uptown-luxury.herokuapp.com/"><img src={uptown} className="sliderimg" alt="/uptown luxury" rel="noreferrer" /></a>
                    <div style={{ justifyContent: 'flex-start', paddingLeft: 30, paddingRight: 30, width: '40%'}}>
                        <h1>E-commerce App</h1>
                        <h4>An E-commerce app for a clothing line</h4>
                        <a style={{ color: '#fff', textDecoration: 'none', alignItems: 'center'}} target="_blank" rel="noreferrer" href="https://uptown-luxury.herokuapp.com/">
                            <Button style={{ padding: '8px', height: '32px', marginTop: '50px', justifyContent: 'base-line', backgroundColor: '#000' }}>
                                <Language style={{ color: '#fff'}} />
                            </Button>   
                         </a>
                        
                    </div>
                </span>
                <span>
                <a target="_blank" rel="noreferrer" href="https://robinhood-clone-17d92.web.app/"><img src={robinhood} className="sliderimg" alt="/robinhood" rel="noreferrer" /></a>
                <div style={{ justifyContent: 'flex-start', paddingLeft: 30, paddingRight: 30, width: '40%'}}>
                    <h1>Robinhood-UI</h1>
                    <h4>A crypto platform UI</h4>
                        <a style={{ color: '#fff', textDecoration: 'none', alignItems: 'center'}} target="_blank" rel="noreferrer" href="https://robinhood-clone-17d92.web.app/">
                            <Button style={{ padding: '8px', height: '32px', marginTop: '50px', justifyContent: 'base-line', backgroundColor: '#000' }}>
                                <Language style={{ color: '#fff'}} />
                            </Button>   
                         </a>
                    </div>
                </span>
                {/* <span>
                <a target="_blank" rel="noreferrer" href="https://facebook-messenger-clone-f93a1.web.app/"><img src={facebook} className="sliderimg" alt="/facebook" rel="noreferrer" /></a>
                    <h1>Facebook Clone</h1>
                    <a style={{ color: '#fff', textDecoration: 'none', alignItems: 'center'}} target="_blank" rel="noreferrer" href="https://facebook-messenger-clone-f93a1.web.app/">
                            <Button style={{ padding: '8px', height: '32px', marginTop: '50px', justifyContent: 'base-line', backgroundColor: '#000' }}>
                                <Language style={{ color: '#fff'}} />
                            </Button>   
                    </a>
                </span> */}
                <span>
                    <a target="_blank" rel="noreferrer" href="https://clone-react-ce3d8.firebaseapp.com/"><img src={amazon} className="sliderimg" alt="/amazon" rel="noreferrer" /></a>
                    <div style={{ justifyContent: 'flex-start', paddingLeft: 30, paddingRight: 30, width: '40%'}}>
                        <h1>Amazon Clone</h1>
                        <a style={{ color: '#fff', textDecoration: 'none', alignItems: 'center'}} target="_blank" rel="noreferrer" href="https://clone-react-ce3d8.firebaseapp.com/">
                                <Button style={{ padding: '8px', height: '32px', marginTop: '50px', justifyContent: 'base-line', backgroundColor: '#000' }}>
                                    <Language style={{ color: '#fff'}} />
                                </Button>   
                        </a>
                    </div>
                </span>
                <span>
                <a target="_blank" rel="noreferrer" href="https://spotifyng-clone.herokuapp.com/"><img src={spotify} className="sliderimg" alt="/spotify" rel="noreferrer" /></a>
                <div style={{ justifyContent: 'flex-start', paddingLeft: 30, paddingRight: 30, width: '40%'}}>
                        <h1>Spotify-UI</h1>
                        <a style={{ color: '#fff', textDecoration: 'none', alignItems: 'center'}} target="_blank" rel="noreferrer" href="https://spotifyng-clone.herokuapp.com/">
                                <Button style={{ padding: '8px', height: '32px', marginTop: '50px', justifyContent: 'base-line', backgroundColor: '#000' }}>
                                    <Language style={{ color: '#fff'}} />
                                </Button>   
                        </a>
                   </div>
                </span>
                <span>
                <a target="_blank" rel="noreferrer" href="https://netflix-clone-react-bab60.web.app/"><img src={netflix} className="sliderimg" alt="/netflix" rel="noreferrer" /></a>
                <div style={{ justifyContent: 'flex-start', paddingLeft: 30, paddingRight: 30, width: '40%'}}>
                        <h1>Netflix Clone</h1>
                        <a style={{ color: '#fff', textDecoration: 'none', alignItems: 'center'}} target="_blank" rel="noreferrer" href="https://netflix-clone-react-bab60.web.app/">
                                <Button style={{ padding: '8px', height: '32px', marginTop: '50px', justifyContent: 'base-line', backgroundColor: '#000' }}>
                                    <Language style={{ color: '#fff'}} />
                                </Button>   
                        </a>
                   </div>
                </span>
                <span>
                <a target="_blank" rel="noreferrer" href="https://telegram-snippet.web.app/"><img src={telegram} className="sliderimg" alt="/telegram" rel="noreferrer" /></a>
                <div style={{ justifyContent: 'flex-start', paddingLeft: 30, paddingRight: 30, width: '40%'}}>
                        <h1>Telegram Clone</h1>
                        <a style={{ color: '#fff', textDecoration: 'none', alignItems: 'center'}} target="_blank" rel="noreferrer" href="https://telegram-snippet.web.app/">
                                <Button style={{ padding: '8px', height: '32px', marginTop: '50px', justifyContent: 'base-line', backgroundColor: '#000' }}>
                                    <Language style={{ color: '#fff'}} />
                                </Button>   
                        </a>
                 </div>
                </span>
                {/* <span>
                <a target="_blank" rel="noreferrer" href="https://tesla-clone-48e03.web.app/"><img src={tesla} className="sliderimg" alt="/tesla" rel="noreferrer" /></a>
                 <h1>Tesla UI</h1>
                </span> */}
            </AliceCarousel>
            
        </Slide>
    )
}

export default PorfolioSlide
