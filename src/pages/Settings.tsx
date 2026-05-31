import { IonButtons, IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import { settings as settingsIcon } from "ionicons/icons";
import { useHistory } from 'react-router';
import { AnimationSpeed, applySetting, saveSettings, Theme } from '../lib/preferences';
import type { Settings } from '../lib/preferences';
import { usePreferences } from '../components/PreferenceProvider';

const Settings: React.FC = () => {

  const history = useHistory();
  const preferences = usePreferences();

  if (preferences == null) return;

  const { settings, stats } = preferences;

  function updateSetting<K extends keyof Settings>(key: K, value: Settings[K]) {
    settings[key] = value
    saveSettings(settings)
    applySetting(key, value)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='title' onClick={() => history.push('/')} style={{ cursor: 'pointer' }}>WORDLE INFINITE</IonTitle>
          <IonButtons slot="end">
            <IonButton fill="clear" routerLink="/settings">
              <IonIcon slot='icon-only' icon={settingsIcon}></IonIcon>
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
        <IonList>
          <IonItem>
            <IonSelect label='Theme' value={settings.theme} onIonChange={(e) => { updateSetting('theme', e.detail.value) }}>
              <IonSelectOption value={Theme.dark}>Dark</IonSelectOption>
              <IonSelectOption value={Theme.light}>Light</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonSelect label='Animation Speed' value={settings.animationSpeed} onIonChange={(e) => { updateSetting('animationSpeed', e.detail.value) }}>
              <IonSelectOption value={AnimationSpeed.none}>None</IonSelectOption>
              <IonSelectOption value={AnimationSpeed.normal}>Default</IonSelectOption>
              <IonSelectOption value={AnimationSpeed.fast}>Fast</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
