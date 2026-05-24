import { IonIcon } from "@ionic/react";
import { backspaceOutline } from "ionicons/icons"
import { Key } from "./Key"
import './Keyboard.css';

const Keyboard: React.FC = () => {
    return (
        <div className="keyboard ion-display-flex ion-flex-column">
            <div className="ion-display-flex ion-align-items-center ion-justify-content-center keyboard-row">
                <Key char='Q' />
                <Key char='W' />
                <Key char='E' />
                <Key char='R' />
                <Key char='T' />
                <Key char='Y' />
                <Key char='U' />
                <Key char='I' />
                <Key char='O' />
                <Key char='P' />
            </div>
            <div className="ion-display-flex ion-align-items-center ion-justify-content-center keyboard-row">
                <Key char='A' />
                <Key char='S' />
                <Key char='D' />
                <Key char='F' />
                <Key char='G' />
                <Key char='H' />
                <Key char='J' />
                <Key char='K' />
                <Key char='L' />
            </div>
            <div className="ion-display-flex ion-align-items-center ion-justify-content-center keyboard-row">
                <Key char='ENTER' style={{width: '2.5rem', fontSize: 'x-small'}}></Key>
                <Key char='Z' />
                <Key char='X' />
                <Key char='C' />
                <Key char='V' />
                <Key char='B' />
                <Key char='N' />
                <Key char='M' />
                <Key char='' style={{width: '2.5rem'}}><IonIcon icon={backspaceOutline} size="large"></IonIcon></Key>
            </div>
        </div>
    );
};

export default Keyboard;