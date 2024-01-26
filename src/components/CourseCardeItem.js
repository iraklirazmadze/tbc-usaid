import React from 'react'
import styled from 'styled-components'
import arrowSvg from "../images/arrow.svg"
export default function CourseCardeItem({img,title}) {
  return (
    <MainBox>
        <Img src={img}></Img>
        <Title>{title}</Title>
        <Regisration>რეგისტრაცია დასრულებულია</Regisration>
        <CourseDetails>
            <ArrowImg src={arrowSvg}></ArrowImg>
            <Paragraph>კურსის დეტალები</Paragraph>
        </CourseDetails>
    </MainBox>
  )
}

const MainBox = styled.div`
    width: 300px;
    border: 1px solid rgb(244,244,244,0.5);;
    height: 416px;
    border-radius: 10px;

`

const Img = styled.img`
border-radius: 10px 10px 0 0 ;
`

const Title = styled.div`
color: white;
margin: 30px 0 0 20px;
font-size: 23px;
`

const Regisration = styled.div`
color: rgb(244,244,244);
margin: 30px 0 0 20px;

`

const CourseDetails = styled.div`
display: flex;
margin: 90px 0 0 20px;
align-items: center;
cursor: pointer;
& :hover{
  color: darkblue;
}
`

const ArrowImg = styled.img`
  
`

const Paragraph = styled.div`
color: #3869cc;
margin-left: 10px;
`
