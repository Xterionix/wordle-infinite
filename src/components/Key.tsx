import { CSSProperties, ReactNode, useEffect, useState } from 'react';
import './Key.css';
import { findLetterState, GameData } from '../lib/game';
import { TileState } from './Tile';

interface Props {
    char: string;
    children?: ReactNode;
    style?: CSSProperties;
    gameState: GameData
    onClick: (char: string) => void
}

export function Key({ char, children, style, gameState, onClick }: Props) {

    const [hasBeenRevealed, setRevealed] = useState(false);
    const [isFlipping, setFlipping] = useState(false);

    useEffect(() => {
        if (gameState.isFlipping && !isFlipping) setFlipping(true);
        else if (isFlipping && !gameState.isFlipping && findLetterState(gameState, char) != TileState.Unguessed) setRevealed(true)
    }, [gameState.isFlipping])

    return (
        <div title={`${hasBeenRevealed}`} className={`key ion-display-flex ion-align-items-center ion-justify-content-center ${char.length == 1 && (!gameState.isFlipping || hasBeenRevealed) ? findLetterState(gameState, char) : 'unguessed'}`} style={style} onClick={() => onClick(char)}>
            {children ?? char}
        </div>
    );
};