import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import { Route } from 'react-router';
import Settings from './pages/Settings';
import PreferenceProvider, { usePreferences } from './components/PreferenceProvider';
import Statistics from './pages/Statistics';
import { Theme } from './lib/preferences';
import { useEffect } from 'react';

setupIonicReact();

const AppContent: React.FC = () => {
  const preferences = usePreferences();
  let theme = preferences?.settings.theme == Theme.light ? 'light' : 'dark';

  useEffect(() => {
    theme = preferences?.settings.theme == Theme.light ? 'light' : 'dark';
  }, [preferences?.stats])

  return (<IonApp className={theme}>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/settings"}>
            <Settings />
          </Route>
          <Route exact path={"/statistics"}>
            <Statistics />
          </Route>
        </IonRouterOutlet>
      </IonTabs>
    </IonReactRouter>
  </IonApp>)
};

const App: React.FC = () => (
  <PreferenceProvider>
    <AppContent />
  </PreferenceProvider>
)

export default App;
