import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>Have fUn</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, repellat.</p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Contatc Us</FooterLinkTitle>
          <FooterLink to='#'>Instagram</FooterLink>
          <FooterLink to='#'>Twitter</FooterLink>
          <FooterLink to='#'>Facebook</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: clacl((100vw - 1200px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #fafafb;
`
const FooterLinksWrapper = styled.div`
  margin-top: 2rem;
  padding: 0 2rem;

  h1{
    margin-left: 2rem;
    margin-bottom: 3rem;
    color: #c7265e;
  }

  p {
    margin-bottom: 3rem;
    color: #404040;
    font-size: 20px;
    font-weight: "600"
  }
  @media screen and (max-width: 400px){
    padding: 1rem;
  }
`
const FooterDesc = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820pxpx){
    grid-template-columns: 1fr;
  }
`
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px){
    padding: 1rem;
  }
`
const FooterLinkTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
  color: #616161;
`
const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 14px;
  color: #c7265e;

  &:hover{
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`