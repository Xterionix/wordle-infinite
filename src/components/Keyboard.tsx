import { IonIcon } from "@ionic/react";
import { backspaceOutline } from "ionicons/icons"
import { Key } from "./Key"
import './Keyboard.css';

interface Props {
    onClick: (char: string) => void
    onDelete: () => void
    onEnter: () => void
}

const Keyboard: React.FC<Props> = ({ onClick, onDelete, onEnter }: Props) => {
    return (
        <div className="keyboard ion-display-flex ion-flex-column">
            <div className="ion-display-flex ion-align-items-center ion-justify-content-center keyboard-row">
                <Key char='Q' onClick={onClick} />
                <Key char='W' onClick={onClick} />
                <Key char='E' onClick={onClick} />
                <Key char='R' onClick={onClick} />
                <Key char='T' onClick={onClick} />
                <Key char='Y' onClick={onClick} />
                <Key char='U' onClick={onClick} />
                <Key char='I' onClick={onClick} />
                <Key char='O' onClick={onClick} />
                <Key char='P' onClick={onClick} />
            </div>
            <div className="ion-display-flex ion-align-items-center ion-justify-content-center keyboard-row">
                <Key char='A' onClick={onClick} />
                <Key char='S' onClick={onClick} />
                <Key char='D' onClick={onClick} />
                <Key char='F' onClick={onClick} />
                <Key char='G' onClick={onClick} />
                <Key char='H' onClick={onClick} />
                <Key char='J' onClick={onClick} />
                <Key char='K' onClick={onClick} />
                <Key char='L' onClick={onClick} />
            </div>
            <div className="ion-display-flex ion-align-items-center ion-justify-content-center keyboard-row">
                <Key char='ENTER' onClick={() => onEnter()} style={{ width: '2.5rem', fontSize: 'x-small' }}></Key>
                <Key char='Z' onClick={onClick} />
                <Key char='X' onClick={onClick} />
                <Key char='C' onClick={onClick} />
                <Key char='V' onClick={onClick} />
                <Key char='B' onClick={onClick} />
                <Key char='N' onClick={onClick} />
                <Key char='M' onClick={onClick} />
                <Key char='' onClick={() => onDelete()} style={{ width: '2.5rem' }}><IonIcon icon={backspaceOutline} size="large"></IonIcon></Key>
            </div>
        </div>
    );
};

export default Keyboard;