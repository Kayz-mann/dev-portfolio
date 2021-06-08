import React, { useState } from 'react';
import styled from 'styled-components';
import LeftNav from './LeftNav';



const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  
  z-index: 999;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    position: sticky;
    margin-top: 20px;
    margin-left: 20px;
    background-color: #fff;
    padding: 8px;
    border-radius: 999px;
    color: #1E133C;
    
  }

  div {
    width: 2.0rem;
    height: 0.1rem;
    background-color: ${({ open }) => open ? '#1E133C' : '#1E133C'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    margin-left: ${({ open }) => open ? '4px' : '0px'};
    

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)



  
  
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)} >
        <div />
        <div />
        <div />
      </StyledBurger>
      <LeftNav open={open}/>
    </>
  )
}

export default Burger
