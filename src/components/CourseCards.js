import React from 'react'
import CourseCardeItem from './CourseCardeItem'
import styled from 'styled-components'
import iosImg from "../images/Ios.webp"
import reactImg from "../images/React.webp"
import pythonImg from "../images/python.webp"
import advPythonImg from "../images/advanced-python.webp"
import cybersecurityImg from "../images/cybersecurity.webp"
import totImg from "../images/tot.webp"
import blockchainImg from "../images/blockchain.webp"
import devopsImg from "../images/devops.webp"
import informSecurityImg from "../images/informationSecurity.webp"
export default function CourseCards() {
  return (
    <Main>
      <MainTitle>სასწავლო კურსები</MainTitle>
        <MainBox>
            <CourseCardeItem img={iosImg} title="IOS Development"/>
            <CourseCardeItem img={reactImg} title="React"/>
            <CourseCardeItem img={pythonImg} title="Intro to Python"/>
            <CourseCardeItem img={advPythonImg} title="Advanced Python"/>
            <CourseCardeItem img={cybersecurityImg} title="Advanced Cybersecurity Course"/>
            <CourseCardeItem img={totImg} title="ToT - Training of Trainers"/>
            <CourseCardeItem img={blockchainImg} title="Blockchain"/>
            <CourseCardeItem img={devopsImg} title="DevOps"/>
            <CourseCardeItem img={informSecurityImg} title="Information Security Governance"/>
        </MainBox>
    </Main>
  )
}
const Main = styled.div`
    width: 100%;
    background-color: rgba(22,22,22);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


const MainBox = styled.div`
width: 100%;
max-width: 1000px;
display: flex;
flex-wrap: wrap;
justify-content: center;
row-gap: 20px;
column-gap: 30px;
margin-bottom: 50px;

`

const MainTitle = styled.h1`
color: #f4f4f4;
margin:40px 0 60px 0 ;
font-family: wfont_643d94_dd28b3957391427eb54de1c9eff7cfb1,wf_dd28b3957391427eb54de1c9e,orig_tbc_x_regular;
width: 95%;
max-width: 1000px;
margin-left: 5%;
`
