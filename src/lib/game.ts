import { useState } from "react";
import { allowedGuesses } from '../../public/lists/all'
import { answers } from '../../public/lists/answers'
import { TileState } from "../components/Tile";

interface GameData {
    answer: string;
    guesses: string[];
    current: number
}

const emptyGameData: GameData = {
    answer: '',
    guesses: ['', '', '', '', '', ''],
    current: 0
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
            if (prev.guesses[prev.current].length >= 5) return prev;

            const nextGuesses = [...prev.guesses]
            nextGuesses[prev.current] = `${nextGuesses[prev.current]}${letter}`

            return {
                ...prev,
                guesses: nextGuesses,
            }
        })
    }

    function handleEnter() {
        setGameState(prev => {

            if (prev.guesses[prev.current].length < 5) return prev;

            if (!allowedGuesses.includes(prev.guesses[prev.current].toLowerCase())) {console.log('invalid guess'); return prev};

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
    if (!state.answer.toUpperCase().includes(letter)) return TileState.Incorrect;
    if (state.answer.toUpperCase()[letterIndex] == letter) return TileState.Correct;
    return TileState.SemiCorrect

}