import { useState } from "react";
import { allowedGuesses } from '../../public/lists/all'
import { answers } from '../../public/lists/answers'
import { TileState } from "../components/Tile";

export interface GameData {
    answer: string;
    guesses: string[];
    current: number;
    unguessedLetters: string[];
    correctLetters: string[];
    semiCorrectLetters: string[];
    incorrectLetters: string[];
}

const emptyGameData: GameData = {
    answer: '',
    guesses: ['', '', '', '', '', ''],
    current: 0,
    unguessedLetters: 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split(''),
    correctLetters: [],
    semiCorrectLetters: [],
    incorrectLetters: []
}

export default function game() {

    const [gameState, setGameState] = useState(emptyGameData)


    function chooseRandomWord() {
        setGameState(prev => ({
            ...prev,
            answer: answers[Math.floor(Math.random() * answers.length)],
            guesses: ['', '', '', '', '', ''],
            current: 0,
        }))
    }

    function handleLetterInput(letter: string) {
        setGameState(prev => {

            if (prev.current > 5) return prev;
            if (prev.guesses[prev.current].length >= 5) return prev;

            const nextGuesses = [...prev.guesses]
            nextGuesses[prev.current] = `${nextGuesses[prev.current]}${letter}`

            return {
                ...prev,
                guesses: nextGuesses
            }
        })
    }

    function handleEnter() {
        setGameState(prev => {

            if (prev.guesses[prev.current].length < 5) return prev;

            if (!allowedGuesses.includes(prev.guesses[prev.current].toLowerCase())) { console.log('invalid guess'); return prev };

            let nextUnguessedLetters = [...prev.unguessedLetters]
            const currentGuess = prev.guesses[prev.current]
            currentGuess.split('').forEach((letter, i) => {
                switch (getKeyState(prev, letter, i)) {
                    case TileState.Correct:
                        if (!prev.correctLetters.includes(letter)) prev.correctLetters.push(letter);
                        break;
                    case TileState.Incorrect:
                        if (!prev.incorrectLetters.includes(letter)) prev.incorrectLetters.push(letter);
                        break;
                    case TileState.SemiCorrect:
                        if (!prev.semiCorrectLetters.includes(letter)) prev.semiCorrectLetters.push(letter);
                        break;
                }
                nextUnguessedLetters = nextUnguessedLetters.filter(x => x !== letter)
            });

            const nextIndex = prev.current + 1

            return {
                ...prev,
                current: nextIndex
            }
        })
    }

    function handleDelete() {
        setGameState(prev => {
            if (prev.guesses[prev.current].length <= 0) return prev;

            const nextGuesses = [...prev.guesses]
            nextGuesses[prev.current] = nextGuesses[prev.current].slice(0, nextGuesses[prev.current].length - 1)

            return {
                ...prev,
                guesses: nextGuesses,
            }
        })
    }

    return { gameState, setGameState, chooseRandomWord, handleLetterInput, handleDelete, handleEnter }

}

export function getTileState(state: GameData, guess: string, letter: string, letterIndex: number) {

    if (letter == '' || state.guesses.lastIndexOf(guess) == state.current) return TileState.Unguessed;
    return getKeyState(state, letter, letterIndex);

}

export function getKeyState(state: GameData, letter: string, letterIndex: number) {
    if (!state.answer.toUpperCase().includes(letter)) return TileState.Incorrect;
    if (state.answer.toUpperCase()[letterIndex] == letter) return TileState.Correct;
    return TileState.SemiCorrect
}

export function findLetterState(state: GameData, letter: string) {
    if (state.correctLetters.includes(letter)) return TileState.Correct
    if (state.semiCorrectLetters.includes(letter)) return TileState.SemiCorrect
    if (state.incorrectLetters.includes(letter)) return TileState.Incorrect
    return TileState.Unguessed
}