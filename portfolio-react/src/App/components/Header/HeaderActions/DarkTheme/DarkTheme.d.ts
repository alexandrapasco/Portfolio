import React from 'react';
import './DarkTheme.scss';
interface DarkThemeProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}
declare const DarkTheme: React.FC<DarkThemeProps>;
export default DarkTheme;
