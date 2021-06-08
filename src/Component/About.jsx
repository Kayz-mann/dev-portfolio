import { CloudDownload, GitHub, Instagram, LinkedIn } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { pdf, Document, Page } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';




const Header = styled.div`
   margin-top: 150px;
   margin-left: 50px;
   display: flex;
   flex-direction: column;
   h1 {
       color: #fff;
   }

   h3 {
       color: #afa8b7;
       margin-top: 50px;
       font-weight: 500;
       font-size: 22px;
   }
   p{
    color: #afa8b7; 
   }

   span {
       display: flex;
       flex-direction: column;
       
   }

   .MuiSvgIcon-root {
       color: #fff;
       font-size: 30px;
       margin-top: 30px;
       margin-bottom: px;
       cursor: pointer;
       transition: transform 150ms;
    }

   .MuiSvgIcon-root:hover {
    transform: scale(1.09);
  }

   @media (max-width: 768px) {
       p{
           width: 55%;
           margin-top: 5px;
           color: #afa8b7;
       }
   }

   @media (max-width: 670px) {
    .thirdMobile-white {
        color: #1E133C ;
    }
    .fourthMobile-white {
        color: #1E133C ;
    }
   }

   @media (max-width: 530px){
      
    .mobile-white {
        color: #1E133C;
    }
    .secondMobile-white {
     color: #1E133C;
 }
   }

   @media (max-width: 500px) {
       margin-top: 70px;
       margin-left:20px;
       font-size: 12px;

       span {
           margin-top: -170px;
           z-index: 1;
       }

       .MuiSvgIcon-root{
           color: #000;
        }
        

       h3 {
           font-size: 18px;
       }

       p{
           width: 80%;
           text-align: center;
           justify-content: center;
           align-self: center;
           margin-top:120px;
       }
   }

   @media (max-width: 380px){
       .mobile-white {
           color: #fff;
       }
       .secondMobile-white {
        color: #1E133C !important;
    }
    .thirdMobile-white {
        color: #1E133C ;
    }
    .fourthMobile-white {
        color: #1E133C ;
    }
   }

   @media (max-width: 420px) {
       .mobile-white {
           color: #fff;
       }
       .secondMobile-white {
           color:#fff;
       }
       .thirdMobile-white {
        color: #1E133C ;
       }
        .fourthMobile-white {
            color: #1E133C ;
        }

       p{
           margin-top: 125px;
       }
   }


   
    
}
`;

const DocumentPdf = ({ someString }) => (
    <Document>
      <Page>
          {/* <a href="../svg/pdf/kayode.pdf"></a> */}
        {/* <Text>Hey look at this string: {someString}</Text> */}
      </Page>
    </Document>
  );
  
  const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));
  
  async function getProps() {
    await delay(1_000);
    return ({
      someString: 'You waited 1 second for this',
    });
  }

function About() {
    return (
        <Header>
            <Reveal effect="fadeInUp">
            <h1 id="about">Hello I'm Kayode</h1>
            <h3>A Software Developer</h3>
            <p>I create interfaces between client and serverside rendering of an application <br />
             I am also a huge fan of IoT technologies as I am looking to broaden my skills in Artificial Intelligence </p>
             </Reveal>
             <Fade bottom>
            <span>
             <a href ="https://www.instagram.com/kayz_mann/" target="_blank" rel="noreferrer"><Instagram className="mobile-white" /></a>
             <a href ="https://github.com/Kayz-mann?tab=repositories" target="_blank" rel="noreferrer"><GitHub  className="secondMobile-white" /></a>
             <a href="https://www.linkedin.com/in/balogun-kayode-b29438170/" target="_blank" rel="noreferrer"><LinkedIn className="thirdMobile-white" /></a>
             <CloudDownload 
             className="fourthMobile-white"
             onClick={async () => {
                const props = await getProps();
                const doc = <DocumentPdf {...props} />;
                const asPdf = pdf([]); 
                asPdf.updateContainer(doc);
                const blob = await asPdf.toBlob();
                saveAs(blob, 'document.pdf');
              }} 
             />
            </span>
            </Fade>
        </Header>
    )
}

export default About
