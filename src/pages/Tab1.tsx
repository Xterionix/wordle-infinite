import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect } from 'react';
import Tile from '../components/Tile'
import './Tab1.css';
import Keyboard from '../components/Keyboard';
import game, { getTileState } from '../lib/game';

const Tab1: React.FC = () => {

  const { gameState, chooseRandomWord, handleLetterInput, handleDelete, handleEnter, resetShakeRow, incrementFlipTile } = game()

  useEffect(() => {
    if (gameState.answer == '') chooseRandomWord()
  }, [gameState.answer])

  console.log(gameState)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='ion-text-center title'>WORDLE INFINITE</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle className='ion-text-center title'>WORDLE INFINITE</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='correct-answer' style={{display: !gameState.hasWon && gameState.current > 5 ? '' : 'none'}}>
          <div id='answer'>{gameState.answer}</div>
        </div>
        <IonGrid>
          {
            gameState.guesses.map((guess, i) => {
              return <IonRow key={i} className={i == gameState.shakeRow ? 'shake' : ''} onAnimationEnd={resetShakeRow}>
                {Array.from({ length: 5 }, (_, j) => guess[j] ?? '').map((letter, j) => (
                  <IonCol key={j}>
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

export default Tab1;
