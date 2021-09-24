import styled from 'styled-components'

export const BarContainer = styled.div`
  width: 95vw;
  min-height: 20vh;
  border: 1px solid #ffffff;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #223a5f;
  margin: auto;
  padding: 10px;
  @media screen and (min-width: 768px) {
    width: 80vw;
  }
`

export const BarRightContainer = styled.div`
  background-color: #ffffff;
  height: 25vh;
  max-width: 10vw;
  min-width: 20vw;
  border-radius: 15px;
`

export const WhiteHeading = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 20px;
  display: flex;
  flex-direction: column;
`

export const BlueHeading = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  text-align: center;
`

export const BarLeftContainer = styled.div`
  height: 9vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const ScoreCount = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 45px;
  text-align: center;
  font-weight: 600;
`
