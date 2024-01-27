import React from 'react'
import styled from 'styled-components'
import logo from "../images/pngwing.com.png"

export default function Header() {
  return (
    <MainBox>
        <Box>
        <LogoTitleBox>
            <Logo src={logo}></Logo>
            <Title>x აკადემია</Title>
        </LogoTitleBox>
        <NavbarBox>
            <div>მთავარი</div>
            <div>TBC IT</div>
            <div style={{color:'#3869cc'}}>TBC x USAID</div>
            <div>რისკები</div>
        </NavbarBox>
        </Box>
    </MainBox>
  )
}

const MainBox = styled.div`
    background-color: rgb(26,30,31,0.95);
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: sticky;
    z-index: 1;
    top:0;
    padding: 10px 0;
    
`

const Box = styled.div`
    display: flex;
    width: 100%;
    max-width: 1000px;
    justify-content: space-between;
    align-items: center;
`
const LogoTitleBox = styled.div`
    display: flex;
    align-items: center;
    margin-left: 5%;
    width: 182px;
`

const Logo = styled.img`
width: 40px;
height: 40px;
`

const Title = styled.div`
    color: white;
    margin-left: 10px;
    font-weight:500;
    font-size: 23px;
    width: 135px;
`

const NavbarBox = styled.div`
display: flex;
flex-wrap: wrap;
color: rgb(244,244,244);
margin-left: 5%;
column-gap: 20px;
margin-right: 5%;


 & > * {
    &:hover{
        cursor: pointer;
        color: #3869cc;
    }
 }
`