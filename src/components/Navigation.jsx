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
    return (
        <Container>
            <Navbar>
                <Logo />
                <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>About</MenuItem>
                    <MenuItem>RoadMap</MenuItem>
                    <MenuItem>Showcase</MenuItem>
                    <MenuItem>Team</MenuItem>
                    <MenuItem>Faq</MenuItem>
                </Menu>
                <Button text={"Connect Wallet"} link={""} />
            </Navbar>
        </Container>
    )
}

export default Navigation