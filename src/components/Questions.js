import React, { useState } from 'react'
import questionsData from '../questionsData'
import styled from 'styled-components'
import arrow from "../images/white-arrow-png-41944.png"
import arrowUp from "../images/186407_arrow_up_icon.png"
export default function Questions() {
  const [visibleAnswerIndex,setVisibleAnswerIndex] = useState(null)
  
  function handleClick(index){
    if(visibleAnswerIndex == index){
      setVisibleAnswerIndex(null);
    }else{
      setVisibleAnswerIndex(index);
    }

  }
  
  
  return (
    <MainDiv>
        <QuestionsBox>
            {questionsData.map((item,index) => (
                <QuestionAndAnswer key={index}>
                  <QuestionAndArrow onClick={() => handleClick(index)}>
                    <Question >{item[0]}</Question>
                    <Arrow src={visibleAnswerIndex === index ?arrowUp : arrow}></Arrow>
                  </QuestionAndArrow>
                  <Answer style={{ display: visibleAnswerIndex === index ? 'block' : 'none' }}>{item[1]}
                  </Answer>
                </QuestionAndAnswer>
            ))}
        </QuestionsBox>
    </MainDiv>
  )
}

const MainDiv = styled.div`
background-color: rgba(22,22,22);
display: flex;
flex-direction: column;
align-items: center;
font-family: wfont_643d94_dd28b3957391427eb54de1c9eff7cfb1,wf_dd28b3957391427eb54de1c9e,orig_tbc_x_regular;
@media screen and (min-width: 700px) {
    font-size: 23px;
  
}
`

const QuestionsBox = styled.div`
margin:0 5% 70px 5%;
width: 90%;
max-width: 1000px;
`

const QuestionAndAnswer = styled.div`
border-bottom: 1px solid rgb(243,243,243,0.3);
`

const Question = styled.div`
color: rgb(244,244,244);
margin: 40px 0;
font-size: 22px;

`

const Answer = styled.div`
color:#f4f4f4;
margin-bottom: 40px;

`


const QuestionAndArrow = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
`

const Arrow = styled.img`
  width: 15px;
  height: 15px;
`