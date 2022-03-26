import React from 'react'
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
`

const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
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
`

const Navigation = () => {
    const scrollTo = (id) => {
        let element = document.getElementById(id)

        element.scrollIntoView({
            behavior: "smooth",
            block: 'start',
            inline: 'nearest'
        })
    }
    return (
        <Container id='navigation'>
            <Navbar>
                <Logo />
                <Menu>
                    <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
                    <MenuItem onClick={() => scrollTo('about')}>About</MenuItem>
                    <MenuItem onClick={() => scrollTo('roadmap')}>RoadMap</MenuItem>
                    <MenuItem onClick={() => scrollTo('showcase')}>Showcase</MenuItem>
                    <MenuItem onClick={() => scrollTo('team')}>Team</MenuItem>
                    <MenuItem onClick={() => scrollTo('faq')}>Faq</MenuItem>
                </Menu>
                <Button text={"Connect Wallet"} link={""} />
            </Navbar>
        </Container>
    )
}

export default Navigation