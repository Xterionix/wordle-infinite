import { createContext, useContext, useEffect, useState } from "react";
import { applySettings, loadPreferences, Settings, Stats } from "../lib/preferences";

type PreferencesContext = {
    stats: Stats
    settings: Settings
}

const PreferencesContext = createContext<PreferencesContext | null>(null);

const PreferenceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [stats, setStats] = useState({} as Stats);
    const [settings, setSettings] = useState({} as Settings);

    async function reloadPreferences() {
        const data = await loadPreferences();
        setStats(data.stats);
        setSettings(data.settings)
        applySettings(data.settings)
    }

    useEffect(() => {
        async function callReload() {
            await reloadPreferences()
        }
        callReload();
    }, [])

    return (
        <PreferencesContext.Provider value={{ stats, settings }}>
            {children}
        </PreferencesContext.Provider>
    );
};

export function usePreferences() {
    return useContext(PreferencesContext)
}

export default PreferenceProvider;