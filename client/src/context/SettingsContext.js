import { createContext, useContext, useEffect } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';
import attribute from '../utils/attribute';

export const SettingsContext = createContext();

const initialState = {
    themeMode: 'light',
    themeColor: 'blue',
};

export const SettingsProvider = ({ children }) => {
    const [settings, setSettings] = useLocalStorage('settings', initialState);
    useEffect(() => {
        if (!localStorage.getItem('settings')) {
            localStorage.setItem('settings', JSON.stringify(initialState));
        }
    }, []);

    useEffect(() => {
        attribute('data-theme', settings.themeMode);
    }, [settings.themeMode]);

    useEffect(() => {
        attribute('data-color', settings.themeColor);
    }, [settings.themeColor]);

    const onToggleMode = () => {
        setSettings({
            ...settings,
            themeMode: settings.themeMode === 'light' ? 'dark' : 'light',
        });
    };

    const onChangeColor = (color) => {
        setSettings({
            ...settings,
            themeColor: color,
        });
    };

    const onResetSetting = () => {
        setSettings(initialState);
    };

    return (
        <SettingsContext.Provider
            value={{
                ...settings,
                onToggleMode,
                onChangeColor,
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
