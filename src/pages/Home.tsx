import { IonButtons, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { settings } from "ionicons/icons";
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import Tile from '../components/Tile'
import './Home.css';
import Keyboard from '../components/Keyboard';
import game, { getTileState } from '../lib/game';

const Home: React.FC = () => {

  const { gameState, chooseRandomWord, handleLetterInput, handleDelete, handleEnter, resetShakeRow, incrementFlipTile, fetchPreferences } = game()
  const history = useHistory()

  useEffect(() => {
    async function fetchingPreferences() {
      await fetchPreferences()
    }
    fetchingPreferences()
  }, [])

  useEffect(() => {
    if (gameState.answer == '') chooseRandomWord()
  }, [gameState.answer])

  console.log(gameState)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='title' onClick={() => history.push('/')} style={{ cursor: 'pointer' }}>WORDLE INFINITE</IonTitle>
          <IonButtons slot="end">
            <IonButton fill="clear" routerLink="/settings">
              <IonIcon slot='icon-only' icon={settings}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle className='ion-text-center title' onClick={() => history.push('/')} style={{ cursor: 'pointer' }}>WORDLE INFINITE</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='correct-answer' style={{ display: !gameState.hasWon && gameState.current > 5 ? '' : 'none' }}>
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

export default Home;
