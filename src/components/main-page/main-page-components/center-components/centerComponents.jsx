import GameBox from '../game-box/gameBox'
import './index.css'

// renderiza os componentes do centro da tela principal de jogo.

const CenterComponents = () => {
  return(
    <div id='center-components'>
      <p id='score-p-text'>SCORE</p>
      <GameBox />
    </div>
  )
}

export default CenterComponents