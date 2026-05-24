import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import Tile, { TileState } from '../components/Tile'
import './Tab1.css';
import Keyboard from '../components/Keyboard';

const Tab1: React.FC = () => {
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
          <IonRow>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
          </IonRow>
          <IonRow>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
          </IonRow>
          <IonRow>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
          </IonRow>
          <IonRow>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
          </IonRow>
          <IonRow>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
          </IonRow>
          <IonRow>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
            <IonCol><Tile char='' selected={false} state={TileState.Unguessed}/></IonCol>
          </IonRow>
        </IonGrid>
        <Keyboard></Keyboard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
