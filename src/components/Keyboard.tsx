import { IonIcon } from "@ionic/react";
import { backspaceOutline } from "ionicons/icons"
import { Key } from "./Key"
import './Keyboard.css';
import { GameData } from "../lib/game";

interface Props {
    onClick: (char: string) => void
    onDelete: () => void
    onEnter: () => void
    gameState: GameData
}

const Keyboard: React.FC<Props> = ({ onClick, onDelete, onEnter, gameState }: Props) => {
    return (
        <div className="keyboard ion-display-flex ion-flex-column">
            <div className="ion-display-flex ion-align-items-center ion-justify-content-center keyboard-row">
                <Key char='Q' onClick={onClick} gameState={gameState} />
                <Key char='W' onClick={onClick} gameState={gameState} />
                <Key char='E' onClick={onClick} gameState={gameState} />
                <Key char='R' onClick={onClick} gameState={gameState} />
                <Key char='T' onClick={onClick} gameState={gameState} />
                <Key char='Y' onClick={onClick} gameState={gameState} />
                <Key char='U' onClick={onClick} gameState={gameState} />
                <Key char='I' onClick={onClick} gameState={gameState} />
                <Key char='O' onClick={onClick} gameState={gameState} />
                <Key char='P' onClick={onClick} gameState={gameState} />
            </div>
            <div className="ion-display-flex ion-align-items-center ion-justify-content-center keyboard-row">
                <Key char='A' onClick={onClick} gameState={gameState} />
                <Key char='S' onClick={onClick} gameState={gameState} />
                <Key char='D' onClick={onClick} gameState={gameState} />
                <Key char='F' onClick={onClick} gameState={gameState} />
                <Key char='G' onClick={onClick} gameState={gameState} />
                <Key char='H' onClick={onClick} gameState={gameState} />
                <Key char='J' onClick={onClick} gameState={gameState} />
                <Key char='K' onClick={onClick} gameState={gameState} />
                <Key char='L' onClick={onClick} gameState={gameState} />
            </div>
            <div className="ion-display-flex ion-align-items-center ion-justify-content-center keyboard-row">
                <Key char='ENTER' onClick={() => onEnter()} style={{ width: '2.5rem', fontSize: 'x-small' }} gameState={gameState}></Key>
                <Key char='Z' onClick={onClick} gameState={gameState} />
                <Key char='X' onClick={onClick} gameState={gameState} />
                <Key char='C' onClick={onClick} gameState={gameState} />
                <Key char='V' onClick={onClick} gameState={gameState} />
                <Key char='B' onClick={onClick} gameState={gameState} />
                <Key char='N' onClick={onClick} gameState={gameState} />
                <Key char='M' onClick={onClick} gameState={gameState} />
                <Key char='' onClick={() => onDelete()} style={{ width: '2.5rem' }} gameState={gameState}><IonIcon icon={backspaceOutline} size="large"></IonIcon></Key>
            </div>
        </div>
    );
};

export default Keyboard;