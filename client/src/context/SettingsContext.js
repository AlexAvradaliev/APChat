import { createContext, useContext, useEffect } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

const defaultSettings = {
    themeMode: 'light',
};

const initialState = {
    ...defaultSettings,
};

export const SettingsContext = createContext(initialState);

export const SettingsProvider = ({ children }) => {
    const [settings, setSettings] = useLocalStorage('settings', {
        themeMode: initialState.themeMode,
    });

    const theme = settings.themeMode;

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    },[theme])

    const onToggleMode = () => {
        setSettings({
            ...settings,
            themeMode: settings.themeMode === 'light' ? 'dark' : 'light',
        });
      
    };

    const onResetSetting = () => {
        setSettings({
            themeMode: initialState.themeMode,
        });
    };

    return (
        <SettingsContext.Provider
            value={{
                theme,
                onToggleMode,
                onResetSetting,
            }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettingsContext = () => {
    const settingsState = useContext(SettingsContext);

    return settingsState;
};
