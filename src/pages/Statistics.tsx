import { IonCol, IonContent, IonGrid, IonHeader, IonList, IonPage, IonProgressBar, IonRow } from '@ionic/react';
import { usePreferences } from '../components/PreferenceProvider';
import Toolbar from '../components/Toolbar';

import './Statistics.css';

const Statistics: React.FC = () => {

  const preferences = usePreferences();

  if (preferences == null) return;

  const { stats } = preferences;

  const maxStat = Math.max(...stats.scoreDistribution) + 5

  return (
    <IonPage>
      <IonHeader>
        <Toolbar />
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        <div className='ion-display-flex ion-justify-content-center ion-align-items-center' style={{height: 'calc(100% - 10%)'}}>
          <IonGrid className='stats' fixed={true}>
            <IonRow>
              <IonCol className='stat-value ion-display-flex ion-justify-content-center'>{stats.gamesPlayed}</IonCol>
              <IonCol className='stat-value ion-display-flex ion-justify-content-center'>{Math.floor((stats.wins / stats.gamesPlayed) * 100)}</IonCol>
              <IonCol className='stat-value ion-display-flex ion-justify-content-center'>{(stats.scoreDistribution.reduce((prev, curr, i) => i * curr + (i == 0 ? 0 : prev)) / stats.gamesPlayed).toFixed(1)}</IonCol>
              <IonCol className='stat-value ion-display-flex ion-justify-content-center'>{stats.gamesPlayed - stats.wins}</IonCol>
            </IonRow>
            <IonRow style={{ 'marginBottom': '2dvh' }}>
              <IonCol className='stat-label ion-display-flex ion-justify-content-center'>Played</IonCol>
              <IonCol className='stat-label ion-display-flex ion-justify-content-center'>Win %</IonCol>
              <IonCol className='stat-label ion-display-flex ion-justify-content-center'>Average Guesses</IonCol>
              <IonCol className='stat-label ion-display-flex ion-justify-content-center'>Lost</IonCol>
            </IonRow>
            {
              stats.scoreDistribution.map((value, i) => {
                return <IonRow key={i} className='ion-display-flex ion-align-items-center'>
                  <IonCol size='1'>{i + 1}</IonCol>
                  <IonCol className=''>
                    <div className='progress-bar ion-text-right stat-label' style={{ width: `calc(${(value / maxStat) * 100}% + 2.5ch)` }}>
                      {value}
                    </div>
                  </IonCol>
                </IonRow>
              })
            }
            <IonRow style={{'marginTop': '3dvh'}}>
              <IonCol className='stat-value ion-display-flex ion-justify-content-center'>{stats.currentStreak}</IonCol>
              <IonCol className='stat-value ion-display-flex ion-justify-content-center'>{stats.maxStreak}</IonCol>
              </IonRow>
            <IonRow style={{ 'marginBottom': '2dvh' }}>
              <IonCol className='stat-label ion-display-flex ion-justify-content-center'>Streak</IonCol>
              <IonCol className='stat-label ion-display-flex ion-justify-content-center'>Best Streak</IonCol>
              </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Statistics;
