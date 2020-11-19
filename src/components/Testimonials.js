import React from 'react'
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa";

const Testimonials = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {name: {in: ["guy1", "girl1"]}, ext: {regex: "/(jpg)|(jpeg)|(png)/"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  `)
  return (
    <TestimonialsContainer>
      <Description>
        Testimonials
      </Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline css={`color: #f9b19b; font-size: 2rem; margin-bottom: 1rem;`} />
            <h3>Isla Fisher</h3>
            <p>Having fun with JS, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, explicabo!</p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb css={`color: #3fffa8; font-size: 2rem; margin-bottom: 1rem;`} />
            <h3>Daniel Craig</h3>
            <p>Having fun with JS, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, explicabo!</p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
          {data.allFile.edges.map((item, i) => (
            <Images key={i} fluid={item.node.childImageSharp.fluid} />
          ))}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials


const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem clac((100vw - 1300px) / 2);
  height: 100%;
  margin-bottom: 1rem;
`
const Description = styled.p`
  text-align: center;
  padding-left: 2rem;
  margin-bottom: 2rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  } 
`
const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
     margin-bottom: 1rem;
     font-size: 1.5rem;
     font-style: italic;
  } 

  p {
    color: #3b3b3b;
  }
`
const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;

`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px){
    grid-template-columns: 1fr; 
  }
  
`
const Images = styled(Img)`
  border-radius: 10px;
  height: 100%;
` 