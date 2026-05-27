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
    hasWon: boolean;
    shakeRow: number;
}

const emptyGameData: GameData = {
    answer: '',
    guesses: ['', '', '', '', '', ''],
    current: 0,
    unguessedLetters: 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split(''),
    correctLetters: [],
    semiCorrectLetters: [],
    incorrectLetters: [],
    hasWon: false,
    shakeRow: -1
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

            if (prev.hasWon) return prev;
            if (prev.current > 5) return prev;
            if (prev.guesses[prev.current].length >= 5) return {
                ...prev,
                shakeRow: prev.current
            }

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

            if (prev.hasWon || prev.current > 5) return structuredClone(emptyGameData)

            if (!allowedGuesses.includes(prev.guesses[prev.current].toLowerCase())) return {
                ...prev,
                shakeRow: prev.current
            }

            let nextUnguessedLetters = [...prev.unguessedLetters]
            const currentGuess = prev.guesses[prev.current]
            currentGuess.split('').forEach((letter, i) => {
                switch (getKeyState(prev, currentGuess, letter, i)) {
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
                current: nextIndex,
                hasWon: lastGuess()?.toLowerCase() == gameState.answer
            }
        })
    }

    function handleDelete() {
        setGameState(prev => {
            
            if (prev.guesses[prev.current].length <= 0) return {
                ...prev,
                shakeRow: prev.current
            }

            if (prev.hasWon) return prev;

            const nextGuesses = [...prev.guesses]
            nextGuesses[prev.current] = nextGuesses[prev.current].slice(0, nextGuesses[prev.current].length - 1)

            return {
                ...prev,
                guesses: nextGuesses,
            }
        })
    }

    function resetShakeRow() {
        setGameState(prev => ({
            ...prev,
            shakeRow: -1
        }))
    }

    function lastGuess() {
        for (let i = 5; i >= 0; i--) {
            const guess = gameState.guesses[i]
            console.log('guess ', i, guess)
            if (guess === '') continue;
            return guess
        }
    }

    return { gameState, setGameState, chooseRandomWord, handleLetterInput, handleDelete, handleEnter, resetShakeRow }

}

export function getTileState(state: GameData, guess: string, letter: string, letterIndex: number, guessIndex: number) {

    if (letter == '' || guessIndex == state.current) return TileState.Unguessed;
    return getKeyState(state, guess, letter, letterIndex);

}

export function getKeyState(state: GameData, guess: string, letter: string, letterIndex: number) {
    if (!state.answer.toUpperCase().includes(letter)) return TileState.Incorrect;
    if (state.answer.toUpperCase()[letterIndex] == letter) return TileState.Correct;
    
    const answerLetterCount = state.answer.toUpperCase().split('').filter(x => x == letter).length
    const guessLetterCount = guess.split('').filter(x => x == letter).length

    if (answerLetterCount == guessLetterCount && answerLetterCount == 1) return TileState.SemiCorrect

    const matchingLetterLocations = guess.split('').map((x, i) => x == letter ? i : -1).filter(x => x != -1)
    for (let i = 0; i < answerLetterCount; i++) {
       if (matchingLetterLocations[i] == letterIndex) return TileState.SemiCorrect 
    }

    return TileState.Incorrect

}

export function findLetterState(state: GameData, letter: string) {
    if (state.correctLetters.includes(letter)) return TileState.Correct
    if (state.semiCorrectLetters.includes(letter)) return TileState.SemiCorrect
    if (state.incorrectLetters.includes(letter)) return TileState.Incorrect
    return TileState.Unguessed
}