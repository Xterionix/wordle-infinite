import { createContext, useContext, useEffect, useState } from "react";
import { applySettings, loadPreferences, saveSettings, saveStats, Settings, Stats } from "../lib/preferences";
import { IonSpinner } from "@ionic/react";

type PreferencesContext = {
    stats: Stats
    settings: Settings
    updateSettings: <K extends keyof Settings>(key: K, value: Settings[K]) => void
    updateStats: (stats: Stats) => void
}

const PreferencesContext = createContext<PreferencesContext | null>(null);

const PreferenceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [stats, setStats] = useState({} as Stats);
    const [settings, setSettings] = useState({} as Settings);
    const [loading, setLoading] = useState(true);

    function updateSettings<K extends keyof Settings>(key: K, value: Settings[K]) {
        setSettings(prev => {
            const next = { ...prev, [key]: value } as Settings
            applySettings(next)
            saveSettings(next)
            return next
        })
    }

    function updateStats(stats: Stats) {
        setStats(() => {
            saveStats(stats)
            return stats
        })
    }

    async function reloadPreferences() {
        const data = await loadPreferences();
        setStats(data.stats);
        setSettings(data.settings)
        applySettings(data.settings)
        setLoading(false);
    }

    useEffect(() => {
        async function callReload() {
            await reloadPreferences()
        }
        callReload();
    }, [])

    return (
        <PreferencesContext.Provider value={{ stats, settings, updateSettings, updateStats }}>
            {loading ? <IonSpinner style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '10vh', width: '10vh' }} /> : children}
        </PreferencesContext.Provider>
    );
};

export function usePreferences() {
    return useContext(PreferencesContext)
}

export default PreferenceProvider;