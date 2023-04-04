import styled from 'styled-components'
import { StyledButton } from '../Button/style'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  max-width: 1000px;
  width: ${({ width }: any) => width};
  word-wrap: break-word;
  ${({ selected }: any) =>
    selected
      ? 'background-color: rgb(71, 252, 255);'
      : 'background-color: #fff;'};
  background-clip: border-box;
  border: 1px solid black;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 0.25rem;
  box-shadow: 0 0.225rem 1.25rem rgba(0, 0, 0, 0.8);
  overflow: hidden;
  ${({ hovered }: any) =>
    hovered
      ? `
    &:hover {
    cursor: pointer;
    background-color: rgb(71, 252, 255);
    }
    `
      : ''}
`

export const Body = styled.div`
  /* display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 1px; */
`

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 'bold';
  margin: 0;
`

export const Text = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: black;
  opacity: 0.9;
`

export const Image = styled.img`
  width: 100%;
`

export const Button = StyledButton

export const ButtonContainer = styled.div`
  display: flex;
  margin: 15px;
  justify-content: center;
`
