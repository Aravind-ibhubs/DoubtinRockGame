import {
  BarContainer,
  BarRightContainer,
  WhiteHeading,
  BlueHeading,
  BarLeftContainer,
  ScoreCount,
} from './styledComponents'

const ScoreBar = props => {
  const {playerScore} = props

  return (
    <BarContainer>
      <BarLeftContainer>
        <WhiteHeading>ROCK PAPER SCISSORS</WhiteHeading>
      </BarLeftContainer>
      <BarRightContainer>
        <BlueHeading>SCORE</BlueHeading>
        <ScoreCount>{playerScore}</ScoreCount>
      </BarRightContainer>
    </BarContainer>
  )
}

export default ScoreBar
