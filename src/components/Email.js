import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import EmailImg from '../assets/images/email.jpg'

const Email = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <h1>Get crazy with us, and start living your best life.</h1>
        <p>Join our comunity.</p>
        <form action="#">
          <FormWrapper>
            <label htmlFor="email">
              <input type="text" id="email" placeholder="Enter your email" />
              <Button 
              css={`
              height: 48px; 
              @media screen and (max-width:768px) {
                width: 100%;
                min-width: 350px;
              }
              @media screen and (max-width:400px) {
                width: 100%;
                min-width: 250px;
              }
              `}
              as='button' type='submit' 
              primary="true" round="true">
                Sign Up
            </Button>
            </label>
          </FormWrapper>
        </form>
      </EmailContent>
    </EmailContainer>
  )
}

export default Email


const EmailContainer = styled.div`
  background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, 
  rgba(0,0,0,0.5) 35%, 
  rgba(0,0,0,0.1) 100% ), 
  url(${EmailImg}) no-repeat center;
  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`
const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 2.5vw, 1,5rem);
    padding: 0 1rem;
  }

  p{
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
  }

  form{
    z-index: 10;
  }
`
const FormWrapper = styled.div`
  input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 48px;
    border-radius: 50px;
    border: none;
    margin-right: 1rem;
  }

  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input{
      margin-bottom: 1rem;
      width: 100%;
      margin-right: 0;
    }
  }

`