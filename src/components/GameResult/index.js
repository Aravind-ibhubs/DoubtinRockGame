import {
  ResultContainer,
  RowContainer,
  PlayerName,
  PlayerImage,
  PlayerChoiceContainer,
  ResultName,
  PlayAgainButton,
} from './styledComponents'

const GameResult = props => {
  const {
    playerOption,
    opponentOption,
    result,
    pictureList,
    refreshFunction,
  } = props

  const getPlayerImage = () => {
    const filteredArray = pictureList.filter(
      eachCard => eachCard.id === playerOption,
    )
    const playerArray = {...filteredArray}
    return playerArray[0].image
  }

  const getOpponentImage = () => {
    const filteredArray = pictureList.filter(
      eachCard => eachCard.id === opponentOption,
    )
    const playerArray = {...filteredArray}
    return playerArray[0].image
  }

  return (
    <ResultContainer>
      <RowContainer>
        <PlayerChoiceContainer>
          <PlayerName>YOU</PlayerName>
          <PlayerImage src={getPlayerImage()} alt="your choice" />
        </PlayerChoiceContainer>
        <PlayerChoiceContainer>
          <PlayerName>OPPONENT</PlayerName>
          <PlayerImage src={getOpponentImage()} alt="opponent choice" />
        </PlayerChoiceContainer>
      </RowContainer>
      <PlayerChoiceContainer>
        <ResultName>{result}</ResultName>
        <PlayAgainButton type="button" onClick={refreshFunction}>
          PLAY AGAIN
        </PlayAgainButton>
      </PlayerChoiceContainer>
    </ResultContainer>
  )
}

export default GameResult
