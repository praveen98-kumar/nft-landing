import React, { useRef, useLayoutEffect } from 'react'
import { useWindowScroll } from 'react-use'
import styled from 'styled-components'

const Up = styled.div`
    width: 3rem;
    height: 3rem;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.body};

    font-size: ${props => props.theme.fontxl};
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.2s ease;
    &:hover {
        transform: scale(1.2);
    }
    &:active {
        transform: scale(0.9);
    }
`

const ScrollToTop = () => {
    const ref = useRef(null)
    const { y } = useWindowScroll()

    useLayoutEffect(() => {
        if (y > 200) {
            ref.current.style.display = 'flex'
        } else {
            ref.current.style.display = 'none'
        }
    }, [y])
    const scrollToTop = () => {
        let element = document.getElementById("navigation")

        element.scrollIntoView({
            behavior: "smooth",
            block: 'start',
            inline: 'nearest'
        })
    }
    return (
        <Up onClick={() => scrollToTop()} ref={ref} >
            &#x2191;
        </Up>
    )
}

export default ScrollToTop