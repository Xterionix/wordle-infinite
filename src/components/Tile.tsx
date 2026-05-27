import { useEffect, useState } from 'react';
import './Tile.css';

export const enum TileState {
    Unguessed = 'unguessed', // Transparent
    Incorrect = 'incorrect', // Grayed out
    Correct = 'correct', // Green
    SemiCorrect = 'semi-correct' // Yellow
}

interface Props {
    char: string;
    selected: boolean
    state: TileState
    flip: boolean,
    onAnimationEnd: () => void
}


const Tile: React.FC<Props> = ({ char, selected, state, flip, onAnimationEnd }) => {

    const [hasAnimated, setAnimated] = useState(false)

    return (
        <div className='tile'>
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