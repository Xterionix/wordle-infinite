import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow } from '@ionic/react';
import { useEffect } from 'react';
import Tile from '../components/Tile'
import './Home.css';
import Keyboard from '../components/Keyboard';
import game, { getTileState } from '../lib/game';
import Toolbar from '../components/Toolbar';

const Home: React.FC = () => {

  const g = game();

  if (!g) return;

  const { gameState, chooseRandomWord, handleLetterInput, handleDelete, handleEnter, resetShakeRow, incrementFlipTile } = g;

  useEffect(() => {
    if (gameState.answer == '') chooseRandomWord()
  }, [gameState.answer])

  return (
    <IonPage>
      <IonHeader>
        <Toolbar />
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        <div className='correct-answer' style={{ display: !gameState.hasWon && gameState.current > 5 ? '' : 'none' }}>
          <div id='answer'>{gameState.answer}</div>
        </div>
        <IonGrid>
          {
            gameState.guesses.map((guess, i) => {
              return <IonRow key={i} className={i == gameState.shakeRow ? 'shake bouncer' : 'bouncer'} onAnimationEnd={resetShakeRow}>
                {Array.from({ length: 5 }, (_, j) => guess[j] ?? '').map((letter, j) => (
                  <IonCol key={j} className={gameState.hasWon && !gameState.isFlipping && i == gameState.current - 1 ? 'bounce' : ''}>
                    <Tile gameState={gameState} char={letter.toUpperCase()} flip={gameState.flipTile == j && gameState.current > i} onAnimationEnd={incrementFlipTile} selected={false} state={getTileState(gameState, guess, letter, j, i)} />
                  </IonCol>
                ))}
              </IonRow>
            })
          }
        </IonGrid>
        <Keyboard onClick={handleLetterInput} onDelete={handleDelete} onEnter={handleEnter} gameState={gameState}></Keyboard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
