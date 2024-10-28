import { useState } from 'react'
import pingpong from './assets/image.png'

function App() {
  const [stScore, setStScore] = useState(0);
  const [ndScore, setNdScore] = useState(0);
  const [winningScoreSelect, setWinningScoreSelect] = useState(4);
  const [isGameOver, setIsGameOver] = useState(false);

  const reset = () => {
    setNdScore(0);
    setStScore(0);
    setIsGameOver(false);
  }

  const p1handleClick = () => {
    if (!isGameOver) {
      if (stScore + 1 === parseInt(winningScoreSelect)) {
        setIsGameOver(true);
      }
      setStScore(prev => prev + 1);
    }
  }

  const p2handleClick = () => {
    if (!isGameOver) {
      if (ndScore + 1 === parseInt(winningScoreSelect)) {
        setIsGameOver(true);
      }
      setNdScore(prev => prev + 1);
    }
  }

  const getScoreClass = (playerScore) => {
    if (isGameOver) {
      return playerScore === parseInt(winningScoreSelect) ? 'winner' : 'loser';
    }
    return '';
  }

  return (
    <div className='container'>
      <img src={pingpong} alt="" />
      <h2>Ping Pong Score Keeper</h2>
      <div className='setStuff'>
        <h1 className={getScoreClass(stScore)}>{stScore}</h1>
        <p>VS</p>
        <h1 className={getScoreClass(ndScore)}>{ndScore}</h1>
      </div>
      <p>Use the buttons below to keep score</p>
      <div className='a7a'>
        <p>playing to:</p>
        <select
          name=""
          value={winningScoreSelect}
          id="playto"
          onChange={(e) => setWinningScoreSelect(e.target.value)}
        >
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
        </select>
      </div>
      <div className='controls'>
        <button onClick={p1handleClick}>+1 Player One</button>
        <button onClick={p2handleClick}>+1 Player Two</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}



export default App
