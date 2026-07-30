import { TileState, GameState, getKeyState } from "../src/lib/gameLogic"

const C = TileState.Correct
const I = TileState.Incorrect
const S = TileState.SemiCorrect

test("exact match", () => {
    expect(testStates('APPLE', 'APPLE')).toEqual([C, C, C, C, C])
})

test("no match", () => {
    expect(testStates('APPLE', 'BIRDS')).toEqual([I, I, I, I, I])
})

test("all letters but all wrong positions", () => {
    expect(testStates('HEART', 'EARTH')).toEqual([S, S, S, S, S])
})

test("duplicate with one correct", () => {
    expect(testStates('BEECH', 'XXEEX')).toEqual([I, I, C, S, I])
})

test("more than 2 duplicate with all correct", () => {
    expect(testStates('EERIE', 'EEEEE')).toEqual([C, C, I, I, C])
})

test("more than 2 duplicate with two correct", () => {
    expect(testStates('EERIE', 'EEEEX')).toEqual([C, C, S, I, I])
})

function testStates(answer: string, guess: string) {
    const state = { answer: answer } as GameState
    return getStates(state, guess)
}

function getStates(state: GameState, guess: string) {
    return guess.split('').map((x, i) => getKeyState(state, guess, x, i))
}