import { useEffect, useState } from 'react';
import './Tile.css';
import { GameState, TileState } from '../lib/game';

interface Props {
    char: string;
    selected: boolean
    state: TileState
    flip: boolean,
    gameState: GameState
    onAnimationEnd: () => void
}


const Tile: React.FC<Props> = ({ char, selected, state, flip, gameState, onAnimationEnd }) => {

    const [hasAnimated, setAnimated] = useState(false)
    const [pop, setPop] = useState(false)

    useEffect(() => {
        setAnimated(false)
    }, [gameState.answer])

    useEffect(() => {
        if (char != '') setPop(true)
    }, [char])

    return (
        <div className={`tile ${pop ? 'pop' : ''}`} onAnimationEnd={() => setPop(false)}>
            <div className={`tile-inner ${(flip && !hasAnimated) || hasAnimated ? 'flip' : ''}`} onAnimationEnd={() => { onAnimationEnd(); setAnimated(true) }}>
                <div className={`tile-front ion-display-flex ion-justify-content-center ion-align-items-center ${TileState.Unguessed}${char.length == 1 ? '-full' : '-empty'}`}>
                    {char}
                </div>
                <div className={`tile-back ion-display-flex ion-justify-content-center ion-align-items-center ${state}`}>
                    {char}
                </div>
            </div>
        </div>
    );
};

export default Tile;