import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect } from 'react';
import Tile from '../components/Tile'
import './Tab1.css';
import Keyboard from '../components/Keyboard';
import game, { getTileState } from '../lib/game';

const Tab1: React.FC = () => {

  const { gameState, chooseRandomWord, handleLetterInput, handleDelete, handleEnter } = game()

  useEffect(() => {
    chooseRandomWord()
  }, [])


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
        <IonGrid>
          {
            gameState.guesses.map((guess, i) => {
              return <IonRow key={i}>
                {Array.from({ length: 5 }, (_, j) => guess[j] ?? '').map((letter, j) => (
                  <IonCol key={j}><Tile char={letter.toUpperCase()} selected={false} state={getTileState(gameState, guess, letter, j)} /></IonCol>
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
