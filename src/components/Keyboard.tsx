import { IonIcon } from "@ionic/react";
import { backspaceOutline, arrowForwardCircleOutline } from "ionicons/icons"
import { Key } from "./Key"
import './Keyboard.css';
import { GameState } from "../lib/game";

interface Props {
    onClick: (char: string) => void
    onDelete: () => void
    onEnter: () => void
    gameState: GameState
}

const Keyboard: React.FC<Props> = ({ onClick, onDelete, onEnter, gameState }: Props) => {
    return (
        <div className="keyboard ion-display-flex ion-flex-column">
            <div className="ion-display-flex ion-align-items-center ion-justify-content-center keyboard-row">
                <Key char='Q' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
                <Key char='W' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
                <Key char='E' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
                <Key char='R' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
                <Key char='T' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
                <Key char='Y' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
                <Key char='U' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
                <Key char='I' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
                <Key char='O' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
                <Key char='P' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
            </div>
            <div className="ion-display-flex ion-align-items-center ion-justify-content-center keyboard-row">
                <Key char='A' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
                <Key char='S' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
                <Key char='D' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
                <Key char='F' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
                <Key char='G' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
                <Key char='H' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
                <Key char='J' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
                <Key char='K' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
                <Key char='L' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
            </div>
            <div className="ion-display-flex ion-align-items-center ion-justify-content-center keyboard-row">
                <Key char='' onClick={() => onEnter()} style={{ width: '12dvw' }} gameState={gameState}><IonIcon icon={arrowForwardCircleOutline} size="large"></IonIcon></Key>
                <Key char='Z' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
                <Key char='X' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
                <Key char='C' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
                <Key char='V' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
                <Key char='B' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
                <Key char='N' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
                <Key char='M' onClick={onClick} gameState={gameState} style={{ fontSize: 'x-large' }} />
                <Key char='' onClick={() => onDelete()} style={{ width: '12dvw' }} gameState={gameState}><IonIcon icon={backspaceOutline} size="large"></IonIcon></Key>
            </div>
        </div>
    );
};

export default Keyboard;