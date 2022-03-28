import React, { useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { Accordian } from '../components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Section = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.text};
    position: relative;
    /* height: auto; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: ${props => props.theme.body};
   
    margin: 1rem auto;
    border-bottom: 1px solid ${props => props.theme.body};
    width: fit-content;

    @media (max-width:48em){
        font-size: ${props => props.theme.fontxl};
    }
`
const Container = styled.div`
    width: 75%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width:  64em){
        width: 80%;
    }
    @media (max-width: 48em){
        width: 90%;
        flex-direction: column;

        &>*:last-child {
            &>*:first-child{
                margin-top: 0;
            }
        }
    }
`

const Box = styled.div`
    width: 45%;
    @media (max-width: 64em){
        width: 90%;
        align-self: center;
    }
`

const FAQ = () => {
    const ref = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useLayoutEffect(() => {
        let ele = ref.current

        ScrollTrigger.create({
            trigger: ele,
            start: 'top top',
            end: 'bottom top',
            pin: true,
            pinSpacing: false,
            scrub: true,
        })

        return () => {
            ScrollTrigger.kill()
        }
    }, [])

    return (
        <Section id='faq' ref={ref}>
            <Title>FAQ</Title>
            <Container>
                <Box>
                    <Accordian title={"WHERE CAN I VIEW MY NFTS?"}>
                        Once minted or bought simply connect to your OpenSea account to view your NFTs.
                    </Accordian>
                    <Accordian title={"WHAT IS THE METAVERSE?"}>
                        A metaverse is a network of 3D virtual worlds focused on social connection. In futurism and science fiction, it is often described as a hypothetical iteration of the Internet as a single, universal virtual world that is facilitated by the use of virtual and augmented reality headsets.
                    </Accordian>
                    <Accordian title={"WHY DO WE NEED ROYALTIES?"}>
                        The amount of royalties was fixed at 5% to finance the Weirdos Club's projects. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of entrepreneurs and investors with the same mindset and common interests.
                    </Accordian>
                </Box>

                <Box>
                    <Accordian title={"HOW CAN I USE MY NFT?"}>
                        You will be able to use your NFT as an avatar in the Metaverse and our future video game. Holding also means that you are part of an exclusive network of investors and entrepreneurs.
                    </Accordian>
                    <Accordian title={"WHAT ARE THE WEIRDOS?"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in.
                    </Accordian>
                    <Accordian title={"WHAT IS THE FUSION PROCESS?"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel enim veritatis iusto officia. Exercitationem, ducimus reiciendis. Rem, maxime, similique neque minus aliquam dolore doloremque laboriosam, facilis quibusdam unde sint officia.
                    </Accordian>
                </Box>
            </Container>
        </Section>
    )
}

export default FAQ