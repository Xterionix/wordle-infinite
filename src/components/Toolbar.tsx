import { IonButton, IonButtons, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import { settings, statsChart } from "ionicons/icons";
import { useHistory } from "react-router";

export default function Toolbar() {

    const history = useHistory()

    return <IonToolbar>
        <IonTitle className='title' onClick={() => history.push('/')} style={{ cursor: 'pointer' }}>WORDLE INFINITE</IonTitle>
        <IonButtons slot="end">
            <IonButton fill="clear" routerLink="/settings">
                <IonIcon slot='icon-only' icon={settings}></IonIcon>
            </IonButton>
            <IonButton fill="clear" routerLink="/statistics">
                <IonIcon slot='icon-only' icon={statsChart}></IonIcon>
            </IonButton>
        </IonButtons>
    </IonToolbar>
}