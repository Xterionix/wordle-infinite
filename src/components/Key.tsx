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
    const [nextState, setNextState] = useState(TileState.Unguessed)
    const [state, setState] = useState(TileState.Unguessed)

    useEffect(() => {
        if (gameState.isFlipping && !isFlipping) { setFlipping(true); setNextState(findLetterState(gameState, char)) }
        else if (isFlipping && !gameState.isFlipping) { setState(nextState); setFlipping(false) }
    }, [gameState.isFlipping])

    return (
        <div title={`${hasBeenRevealed}`} className={`key ion-display-flex ion-align-items-center ion-justify-content-center ${char.length == 1 ? state : 'unguessed'}`} style={style} onClick={() => onClick(char)}>
            {children ?? char}
        </div>
    );
};