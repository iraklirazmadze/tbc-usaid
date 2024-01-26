import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring';
import tegetaImg from "../images/tegeta.webp"
import ufcImg from "../images/ufc.webp"
import spectreImg from "../images/pectre.webp"
import usaidImg from "../images/usaid-xalxi.webp"
import spaceImg from "../images/space.webp"
import tinetiImg from "../images/tineti.webp"
import lizingImg from "../images/lizing.webp";
import nextIcon from "../images/nextIcon.svg"
import prevIcon from "../images/prevIcon.svg"
import styled, { keyframes } from 'styled-components'

export default function Partners() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const imgs = [usaidImg,spaceImg,tinetiImg,tegetaImg,spectreImg,lizingImg,ufcImg];
    const [num,setNum]= useState([1]);
    const [timer,setTimer] = useState("on");
    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
   
    useEffect(() => {
    if (screenWidth < 750) {
      setNum([1]);
    } else if (screenWidth >= 750 && screenWidth < 1100) {
      setNum([1, 2]);
    } else {
      setNum([1, 2, 3]);
    }
  }, [screenWidth]);
 
 let interval;
  useEffect(() => {
     interval = setInterval(() => {
      handleClickNext();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [num]);

  function handleClickNext(){
    if(screenWidth <750){
        if(num[0]==7){
            setNum([1])
        }else{setNum([num[0]+1])}
    }else if(screenWidth >= 750 && screenWidth < 1100){
        if(num[0]==1){
            setNum([3,4]);
        }else if(num[0]==3){
            setNum([5,6])
        }else if(num[0]==5){
            setNum([7])}else{setNum([1,2])}
    }else{
        if(num[0]==1){setNum([4,5,6])
        }else if(num[0] == 7){
            setNum([1,2,3])}else{setNum([7])}
  }}

  function handleClickPrev(){
    if(screenWidth <750){
        if(num[0]==1){
            setNum([7])
        }else{setNum([num[0]-1])}
    }else if(screenWidth >= 750 && screenWidth < 1100){
        if(num[0]==1){
            setNum([7]);
        }else if(num[0]==3){
            setNum([1,2])
        }else if(num[0]==5){
            setNum([3,4])}else{setNum([5,6])}
    }else{
        if(num[0]==1){setNum([7])
        }else if(num[0] == 7){
            setNum([4,5,6])}else{setNum([1,2,3])}
    }
    
  }

  function stopTimer(){
    clearInterval(interval);
  }
  function startTimer(){
    interval = setInterval(() => {
      handleClickNext();
    }, 3000);
  }
  
    
      
    
  
    
  return (
    <MainDiv onMouseOver={()=> stopTimer()} onMouseLeave={() => startTimer()} >
        <Title>პროექტის პარტნიორები</Title>
        <Logos>
            {num.map((item,index) =>(
                <Logo key={index} src={imgs[item - 1]} alt={`Logo ${item}`} />
            ))}
            <NextIcon onMouseOver={()=> stopTimer()} src={nextIcon} onClick={() => handleClickNext()}></NextIcon>
            <PrevIcon onMouseOver={()=> stopTimer()} src={prevIcon} onClick={() => handleClickPrev()}></PrevIcon>
        </Logos>
    </MainDiv>
  )
}


const MainDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(43,43,43);
`

const Title = styled.h1`
    color: #f4f4f4;
    margin:40px 0 40px 0;
    margin-left: 5%;
    max-width: 1000px;
    text-align: center;
    
`

const Logos = styled.div`
display: flex;
width: 100%;
max-width: 1000px;
align-items: center;
justify-content: center;
column-gap: 60px;
position: relative;
height: 100px;
margin-bottom: 70px;

`



const Logo = styled.img`
`

const NextIcon = styled.img`
    width: 38px;
    height: 50px;
    position:absolute;
    right:2%;
    cursor:pointer;
`

const PrevIcon = styled.img`
    width: 38px;
    height: 50px;
    position:absolute;
    left: 2%;
    cursor:pointer
`