import { createContext, useContext } from 'react';

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

    const onToggleMode = () => {
        setSettings({
            ...settings,
            themeMode: settings.themeMode === 'light' ? 'dark' : 'light',
        });
        if (settings.themeMode === 'light') {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
    };

    const onChangeMode = (event) => {
        setSettings({
            ...settings,
            themeMode: event.target.value,
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
                ...settings,
                onToggleMode,
                onChangeMode,
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
