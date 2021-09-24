import styled from 'styled-components'

export const MainHomeContainer = styled.div`
  background-color: #223a5f;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
`

export const ImagesContainer = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

export const RulesButton = styled.button`
  color: #223a5f;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  font-family: 'Bree Serif';
  align-self: flex-end;
  border: none;
  outline: none;
`

export const ModalContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
`

export const CloseButton = styled.button`
  border: none;
  outline: none;
  align-self: flex-end;
  margin-top: 25px;
  cursor: pointer;
`

export const RulesImage = styled.img`
  width: 65%;
  height: 60%;
`
