import React from 'react'
import styled from 'styled-components'
import tbcWhiteLogo from "../images/tbcWhiteLogo.webp"
import fbLogo from "../images/fbLogo.webp"
import youtubeLogo from "../images/youtubeLogo.webp"
export default function Footer() {
  return (
    <FooterBox>
        <InfoBox>
            <LeftBox>
                <img src={tbcWhiteLogo}></img>
                <div>© 2023 ყველა უფლება დაცულია</div>
                <div>წესები და პირობები</div>
            </LeftBox>
            <RightBox>
                <Logos>
                    <img src={fbLogo}></img>
                    <img src={youtubeLogo}></img>
                </Logos>
                <button>მოგვწერეთ</button>
            </RightBox>
        </InfoBox>
    </FooterBox>
  )
}

const FooterBox = styled.div`
display: flex;
width: 100%;
background-color: rgb(26,30,31);
justify-content: center;
font-family: wfont_643d94_dd28b3957391427eb54de1c9eff7cfb1,wf_dd28b3957391427eb54de1c9e,orig_tbc_x_regular;
`

const InfoBox = styled.div`
width: 100%;
max-width: 1000px;
display: flex;
justify-content: space-between;
padding: 40px 0;
`

const LeftBox = styled.div`
display: flex;
flex-direction: column;
height: 100px;
justify-content: space-between;
 & > img{
    width: 106px;
    cursor:pointer;
 }

 & >div{
    color:white;
 }
`

const RightBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: end;

    & > button{
        width: 162px;
        height: 40px;
        color:white;
        background-color: #00cefcf5;
        border:0;
        cursor:pointer;
        border-radius: 10px;
        &:hover{
            color:black;
            background-color: #f3e1e3f5;
        }
    }
`

const Logos = styled.div`
display: flex;
column-gap: 10px;

 & > img{
    cursor: pointer;
 }
`