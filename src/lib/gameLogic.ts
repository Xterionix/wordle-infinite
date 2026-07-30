export interface GameState {
    answer: string;
    guesses: string[];
    current: number;
    unguessedLetters: string[];
    correctLetters: string[];
    semiCorrectLetters: string[];
    incorrectLetters: string[];
    hasWon: boolean;
    shakeRow: number;
    flipTile: number;
    isFlipping: boolean;
}

export const enum TileState {
    Unguessed = 'unguessed',// Transparent
    Incorrect = 'incorrect',// Grayed out
    Correct = 'correct',// Green
    SemiCorrect = 'semi-correct' // Yellow
}

export function getTileState(state: GameState, guess: string, letter: string, letterIndex: number, guessIndex: number) {

    if (letter == '' || guessIndex == state.current) return TileState.Unguessed;
    return getKeyState(state, guess, letter, letterIndex);

}

export function getKeyState(state: GameState, guess: string, letter: string, letterIndex: number) {
    if (!state.answer.toUpperCase().includes(letter)) return TileState.Incorrect;
    if (state.answer.toUpperCase()[letterIndex] == letter) return TileState.Correct;

    const guessSplit = guess.split('');
    const answerLetterCount = state.answer.toUpperCase().split('').filter(x => x == letter).length;
    const guessLetterCount = guessSplit.filter(x => x == letter).length;

    // If X only exists once within the answer and once within the guess, then as it's not (in)correct it's SemiCorrect
    if (answerLetterCount == guessLetterCount && answerLetterCount == 1) return TileState.SemiCorrect;

    const alreadyCorrectLocations = guessSplit.map((x, i) => x == letter && state.answer.toUpperCase()[i] == letter ? i : undefined);
    const matchingLetterLocations = guessSplit.map((x, i) => x == letter ? i : -1).filter(x => x != -1).filter(x => !alreadyCorrectLocations.includes(x));
    const alreadyCorrectAnswers = (guessSplit.map((x, i) => x == letter && state.answer.toUpperCase()[i] == letter ? 1 : 0) as number[]).reduce((a, b) => a + b, 0);

    // If guess has 2 correctly use X twice and X appears in the answer twice only, the loop won't run
    for (let i = 0; i < answerLetterCount - alreadyCorrectAnswers; i++) { // If guess has misplaced X
        if (matchingLetterLocations[i] == letterIndex) return TileState.SemiCorrect; // Then from the remaining locations mark yellow
    }

    return TileState.Incorrect;

}

export function findLetterState(state: GameState, letter: string) {
    if (state.correctLetters.includes(letter)) return TileState.Correct;
    if (state.semiCorrectLetters.includes(letter)) return TileState.SemiCorrect;
    if (state.incorrectLetters.includes(letter)) return TileState.Incorrect;
    return TileState.Unguessed;
}