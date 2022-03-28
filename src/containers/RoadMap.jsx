import gsap from 'gsap'
import React, { useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { DrawSvg } from '../components'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Section = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.body};
    position: relative;
`

const Title = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: ${props => props.theme.text};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem auto;
    border-bottom: 1px solid ${props => props.theme.text};
    width: fit-content;

    @media (max-width: 64em){
        width: 80%;
    }
    @media (max-width: 48em){
        width: 90%;
    }
`
const Container = styled.div`
    width: 70%;
    height: 200vh;    
    background-color: ${props => props.theme.body};
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const SvgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Items = styled.ul`
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 48em){
        width: 90%;
    }

    &>*:nth-of-type(2n+1){
        justify-content: start;
        p {
            border-radius: 0 40px 0 40px;
        }

        div {
            border-radius: 0 50px 0 50px;
            text-align: right;
        }
        
    }
    &>*:nth-of-type(2n){
        justify-content: end;
        p {
            border-radius: 40px 0 40px 0;
        }

        div {
            border-radius: 50px 0 50px 0;
            text-align: left;
        }
    }
`

const Item = styled.li`
    width: 100%;
    height: 100%;
    display: flex;
`
const ItemContainer = styled.div`
    width: 40%;
    height: fit-content;
    padding: 1rem;
    border: 3px solid ${props => props.theme.text};
`
const Box = styled.p`
    height: fit-content;
    background-color: ${props => props.theme.carouselColor};
    color: ${props => props.theme.text};
    padding: 1rem;
    position: relative;
    border: 1px solid ${props => props.theme.text};
`

const SubTitle = styled.span`
    display: block;
    font-size: ${props => props.theme.fontxl};
    text-transform: capitalize;
    color: ${props => props.theme.text};
`
const Text = styled.span`
   display: block;
    font-size: ${props => props.theme.fontsm};
    text-transform: capitalize;
    color: ${props => props.theme.text};
    font-weight: 400;
    margin: 0.5rem 0;
`
const RoadMapItem = ({ title, subTitle, addToRef }) => {
    return (
        <Item ref={addToRef}>
            <ItemContainer>
                <Box>
                    <SubTitle>{title}</SubTitle>
                    <Text>{subTitle}</Text>
                </Box>
            </ItemContainer>
        </Item>
    )
}

const RoadMap = () => {

    const revelRefs = useRef([])

    revelRefs.current = []

    gsap.registerPlugin(ScrollTrigger)

    const addToRefs = (el) => {
        if (el && !revelRefs.current.includes(el)) {
            revelRefs.current.push(el)
        }
    }

    useLayoutEffect(() => {
        let t1 = gsap.timeline()
        revelRefs.current.forEach((el, index) => {
            t1.fromTo(
                el.childNodes[0],
                {
                    y: '0'
                }, {
                y: '-30%',
                scrollTrigger: {
                    id: `section-${index + 1}`,
                    trigger: el,
                    start: 'top center',
                    end: "bottom bottom",
                    scrub: true,
                }
            }
            )
        })

        return () => {
            if (t1) t1.kill()
        }
    }, [])

    return (
        <Section id='roadmap'>
            <Title>RoadMap</Title>
            <Container>
                <SvgContainer>
                    <DrawSvg />
                </SvgContainer>
                <Items>
                    <Item>&nbsp;</Item>
                    <RoadMapItem addToRef={addToRefs} title={"Grand Opening"} subTitle={"Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."} />
                    <RoadMapItem addToRef={addToRefs} title={"Great Benefits"} subTitle={"Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."} />
                    <RoadMapItem addToRef={addToRefs} title={"Early Access"} subTitle={"Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."} />
                    <RoadMapItem addToRef={addToRefs} title={"New Merch"} subTitle={"Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."} />
                    <RoadMapItem addToRef={addToRefs} title={"Holders Ranking"} subTitle={"Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."} />
                </Items>
            </Container>
        </Section>
    )
}

export default RoadMap