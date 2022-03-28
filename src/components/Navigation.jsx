import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Button from './Button'

const Container = styled.div`
    width: 100vw;
    background-color: ${props => props.theme.body};
`

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 85%;
    margin: 0 auto;
    height: ${props => props.theme.navHeight};

    .mobile {
        display: none;
    }

    @media (max-width: 64em){
        .mobile {
            display: inline-block;
        }
        .desktop {
            display: none;
        }
    }
`

const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
   
   @media (max-width: 64em){
       position: fixed;
       top: ${props => props.theme.navHeight};
       left: 0;
       right: 0;
       bottom: 0;
       width: 100vw;
       height: ${props => `calc(100vh - ${props.theme.navHeight})`};
       z-index: 50;
       background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.85)`};
       flex-direction: column;
       justify-content: center;
       backdrop-filter: blur(2px);
       transform: ${props => props.click ? 'translateY(0)' : 'translateY(1000%)'};
       transition: all 0.3s ease;

       touch-action: none;
   }
`
const MenuItem = styled.li`
    margin: 0 1rem;
    color: ${props => props.theme.text};
    cursor: pointer;

    &::after {
        content: "";
        display: block;
        width: 0%;
        height: 2px;
        background-color: ${props => props.theme.text};
        transition: width 0.3s ease;
    }
    &:hover::after {
        width: 100%;
    }

    @media (max-width: 64em){
        margin: 1rem 0;

        &::after{
            display: none;
        }
    }
`
const HamburgerMenu = styled.span`
    width: ${props => props.click ? '2rem' : '1.5rem'};
    height: 2px;
    background-color: ${props => props.theme.text};
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)'};

    display: none;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    cursor: pointer;

    @media (max-width: 64em){
        display: flex;
    }
    &::after, &::before {
        content: '';
        width:  ${props => props.click ? '1rem' : '1.5rem'};
        right:  ${props => props.click ? '-2px' : '0'};
        height: 2px;
        background-color: ${props => props.theme.text};
        position: absolute;
        transition: all  0.3s ease;
    }
    &::after{
        top: ${props => props.click ? '0.3rem' : '0.5rem'};
        transform: ${props => props.click ? "rotate(-40deg)" : "rotate(0)"};
    }
    &::before{
        bottom: ${props => props.click ? '0.3rem' : '0.5rem'};
        transform: ${props => props.click ? "rotate(40deg)" : "rotate(0)"};
    }
`
const Navigation = () => {
    const [click, setClick] = useState(false)
    const scrollTo = (id) => {
        let element = document.getElementById(id)

        element.scrollIntoView({
            behavior: "smooth",
            block: 'start',
            inline: 'nearest'
        })
        setClick(false)
    }
    return (
        <Container id='navigation'>
            <Navbar>
                <Logo />
                <HamburgerMenu click={click} onClick={() => setClick(pre => !pre)}>
                    &nbsp;
                </HamburgerMenu>
                <Menu click={click}>
                    <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
                    <MenuItem onClick={() => scrollTo('about')}>About</MenuItem>
                    <MenuItem onClick={() => scrollTo('roadmap')}>RoadMap</MenuItem>
                    <MenuItem onClick={() => scrollTo('showcase')}>Showcase</MenuItem>
                    <MenuItem onClick={() => scrollTo('team')}>Team</MenuItem>
                    <MenuItem onClick={() => scrollTo('faq')}>Faq</MenuItem>
                    <MenuItem>
                        <div className="mobile">
                            <Button text={"Connect Wallet"} link={""} />
                        </div>
                    </MenuItem>
                </Menu>
                <div className="desktop">
                    <Button text={"Connect Wallet"} link={""} />
                </div>
            </Navbar>
        </Container>
    )
}

export default Navigation