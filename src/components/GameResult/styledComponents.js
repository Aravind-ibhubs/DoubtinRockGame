import styled from 'styled-components'

export const ResultContainer = styled.div`
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const PlayerName = styled.p`
  color: #ffffff;
  font-family: "Roboto"
  font-weight: 500;
`

export const PlayerImage = styled.img`
  width: 15vw;
  height: 15vh;
`

export const PlayerChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const ResultName = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  border: none;
  outline: none;
  border-radius: 15px;
  padding: 15px;
`
