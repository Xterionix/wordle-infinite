import { IonContent, IonHeader, IonPage, IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import { AnimationSpeed, Theme } from '../lib/preferences';
import type { Settings } from '../lib/preferences';
import { usePreferences } from '../components/PreferenceProvider';
import Toolbar from '../components/Toolbar';

const Settings: React.FC = () => {

  const preferences = usePreferences();

  if (preferences == null) return;

  const { settings, updateSettings } = preferences;

  function updateSetting<K extends keyof Settings>(key: K, value: Settings[K]) {
    updateSettings(key, value)
  }

  return (
    <IonPage>
      <IonHeader>
        <Toolbar/>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
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
