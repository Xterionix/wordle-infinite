import { Preferences } from '@capacitor/preferences';

export interface Stats {
    gamesPlayed: number;
    wins: number;
    currentStreak: number;
    maxStreak: number;
    scoreDistribution: [number, number, number, number, number, number]
}

let initialStats: Stats = {
    gamesPlayed: 0,
    wins: 0,
    currentStreak: 0,
    maxStreak: 0,
    scoreDistribution: [0, 0, 0, 0, 0, 0]
}

export enum Theme {
    light = 'light',
    dark = 'dark'
}

let initialTheme = 'dark'

export async function loadPreferences() {
    const { value } = await Preferences.get({ key: 'stats' })

    if (value == null) { saveStats(initialStats); return loadPreferences() }

    const stats = JSON.parse(value)
    const { value: themeValue } = await Preferences.get({ key: 'theme' })

    if (!themeValue) { saveTheme(Theme.dark); return loadPreferences() }

    return { stats, themeValue }
}

export async function saveStats(stats: Stats) {
    await Preferences.set({ key: 'stats', value: JSON.stringify(stats) })
}

export async function saveTheme(theme: Theme) {
    await Preferences.set({ key: 'stats', value: theme })
}