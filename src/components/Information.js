import React from 'react'
import bgImg from "../images/93e8a3_9fa23196ddf6427a9da574e2b31a13d2~mv2.webp"
import styled from 'styled-components'

export default function Information() {
  return (
    <MainBox>
        <Title>
            <H1>TBC x USAID</H1>
            <H2>ტექნოლოგიური განათლებისთვის</H2>
        </Title>
        <InfoBox>
            <Info>„ TBC x USAID - ტექნოლოგიური განათლებისთვის “ პროგრამა  საინფორმაციო ტექნოლოგიებით დაინტერესებულ ადამიანებს გთავაზობთ სრულად დაფინანსებულ ონლაინ საგანმანათლებლო პრაქტიკულ კურსებს  სხვადასხვა ICT მიმართულებით. წარმატებულ კურსდამთავრებულებს ეძლევათ შესაძლებლობა დასაქმდნენ თიბისისა და მის პარტნიორ კომპანიებში.
            </Info>
        </InfoBox>
    </MainBox>
  )
}

const MainBox = styled.div`
width:100%;
display: flex;
flex-direction: column;
align-items: center;
`

const Title = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


background-image:url(${bgImg});
background-repeat:no-repeat;
background-size:100%;
height: 30vw;
`

const H1 = styled.h1`
    color:white;
    margin:0;
    margin-left: 5%;
    max-width: 1000px;
    width: 100%;
    font-size: 30px;
    @media screen and (min-width: 800px) {
    font-size: 48px;
  
}
`
const H2 = styled.h2`
    color:white;
    margin-left: 5%;
    max-width: 1000px;
    width: 100%;
    margin: 0;
    margin-left: 5%;
    font-size: 20px;
    @media screen and (min-width: 800px) {
    font-size: 38px;
  
}
`
const InfoBox = styled.div`
    background-color: rgb(43,43,43);
    width: 100%;
    display: flex;
    justify-content: center;
    @media screen and (min-width: 700px) {
    font-size: 28px;
  
}
`

const Info = styled.div`
font-family: wfont_643d94_dd28b3957391427eb54de1c9eff7cfb1,wf_dd28b3957391427eb54de1c9e,orig_tbc_x_regular;
color: rgb(244,244,244);
    margin:30px 5%;
    max-width: 1000px;
`