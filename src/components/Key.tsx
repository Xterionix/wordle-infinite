import { CSSProperties, ReactNode } from 'react';
import './Key.css';
import { findLetterState, GameData } from '../lib/game';

interface Props {
    char: string;
    children?: ReactNode;
    style?: CSSProperties;
    gameState: GameData
    onClick: (char: string) => void
}

export function Key({ char, children, style, gameState, onClick }: Props) {

    return (
        <div className={`key ion-display-flex ion-align-items-center ion-justify-content-center ${char.length == 1 ? findLetterState(gameState, char) : 'unguessed'}-key`} style={style} onClick={() => onClick(char)}>
            {children ?? char}
        </div>
    );
};