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
}


const Tile: React.FC<Props> = ({ char, selected, state }) => {
    console.log('state: ', state)
    return (
        <div className={`tile ion-text-center ${state} ${selected && state == TileState.Unguessed ? 'selected' : ''}`}>
            {char}
        </div>
    );
};

export default Tile;