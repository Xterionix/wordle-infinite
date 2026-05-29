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

enum Theme {
    light = 'light',
    dark = 'dark'
}

enum AnimationSpeed {
    none = 0,
    normal = 0.8,
    fast = 0.2
}

export interface Settings {
    theme: Theme,
    animationSpeed: AnimationSpeed
}

let initialSettings = {
    theme: Theme.dark,
    animationSpeed: AnimationSpeed.normal
}

export async function loadPreferences() {
    const { value } = await Preferences.get({ key: 'stats' })

    if (value == null) saveStats(initialStats)

    const stats = value == null ? initialStats : JSON.parse(value)
    const { value: value2 } = await Preferences.get({ key: 'settings' })

    if (value2 == null) saveSettings(initialSettings);
    const settings = value2 == null ? initialSettings : JSON.parse(value2)

    return { stats, settings }
}

export async function saveStats(stats: Stats) {
    await Preferences.set({ key: 'stats', value: JSON.stringify(stats) })
}

export async function saveSettings(settings: Settings) {
    await Preferences.set({ key: 'stats', value: JSON.stringify(settings) })
}