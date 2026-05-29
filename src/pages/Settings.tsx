import { IonButtons, IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {settings} from "ionicons/icons";
import { useHistory } from 'react-router';

const Settings: React.FC = () => {

  const history = useHistory()
  
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
      </IonContent>
    </IonPage>
  );
};

export default Settings;
