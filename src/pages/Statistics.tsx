import { IonContent, IonHeader, IonPage } from '@ionic/react';
import { usePreferences } from '../components/PreferenceProvider';
import Toolbar from '../components/Toolbar';

const Statistics: React.FC = () => {

  const preferences = usePreferences();

  if (preferences == null) return;

  const { stats } = preferences;

  return (
    <IonPage>
      <IonHeader>
        <Toolbar/>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        <pre>{JSON.stringify(stats, null, 4)}</pre>
      </IonContent>
    </IonPage>
  );
};

export default Statistics;
