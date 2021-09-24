import {Component} from 'react'

import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import ScoreBar from '../ScoreBar/index'
import GameResult from '../GameResult/index'
import ButtonElement from '../ButtonElement/index'

import './index.css'

import {
  MainHomeContainer,
  ImagesContainer,
  RulesButton,
  ModalContainer,
  CloseButton,
  RulesImage,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {
    isGameRunning: true,
    score: 0,
    playerOption: '',
    opponentOption: '',
    gameResult: '',
  }

  setOpponent = () => {
    const opponent =
      choicesList[Math.floor(Math.random() * choicesList.length)].id
    this.setState({opponentOption: opponent})
  }

  resultWin = () => {
    this.setState(prevState => ({
      score: prevState.score + 1,
      gameResult: 'YOU WON',
    }))
  }

  resultLoss = () => {
    this.setState(prevState => ({
      score: prevState.score - 1,
      gameResult: 'YOU LOSE',
    }))
  }

  resultDraw = () => {
    this.setState({gameResult: 'IT IS DRAW'})
  }

  changeScore = () => {
    this.setOpponent()
    const {playerOption, opponentOption} = this.state

    if (playerOption === 'ROCK') {
      if (opponentOption === 'SCISSORS') {
        this.resultWin()
      } else if (opponentOption === 'PAPER') {
        this.resultLoss()
      } else {
        this.resultDraw()
      }
    } else if (playerOption === 'PAPER') {
      if (opponentOption === 'ROCK') {
        this.resultWin()
      } else if (opponentOption === 'SCISSORS') {
        this.resultLoss()
      } else {
        this.resultDraw()
      }
    } else if (playerOption === 'SCISSORS') {
      if (opponentOption === 'ROCK') {
        this.resultLoss()
      } else if (opponentOption === 'PAPER') {
        this.resultWin()
      } else {
        this.resultDraw()
      }
    }
  }

  choiceOfPlayer = id => {
    this.setState({playerOption: id, isGameRunning: false})
    this.changeScore()
  }

  renderGamePage = () => (
    <ImagesContainer>
      {choicesList.map(eachCard => (
        <ButtonElement
          details={eachCard}
          key={eachCard.id}
          choiceFunction={this.choiceOfPlayer}
        />
      ))}
    </ImagesContainer>
  )

  onclickRefresh = () => {
    this.setState({isGameRunning: true})
  }

  render() {
    const {
      isGameRunning,
      score,
      playerOption,
      opponentOption,
      gameResult,
    } = this.state

    return (
      <MainHomeContainer>
        <ScoreBar playerScore={score} />
        {isGameRunning ? (
          this.renderGamePage()
        ) : (
          <GameResult
            playerOption={playerOption}
            opponentOption={opponentOption}
            result={gameResult}
            pictureList={choicesList}
            refreshFunction={this.onclickRefresh}
          />
        )}
        <Popup
          modal
          trigger={<RulesButton type="button">Rules</RulesButton>}
          className="popup-container"
        >
          {close => (
            <ModalContainer>
              <CloseButton type="button" onClick={() => close()}>
                <RiCloseLine size="30" />
              </CloseButton>
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </ModalContainer>
          )}
        </Popup>
      </MainHomeContainer>
    )
  }
}

export default Home
