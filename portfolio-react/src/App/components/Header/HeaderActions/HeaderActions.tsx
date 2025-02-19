import './HeaderActions.scss';
import DarkTheme from './DarkTheme/DarkTheme';

interface HeaderActionsProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

function HeaderActions({ isDarkMode, toggleDarkMode }: HeaderActionsProps) {
  return (
    <aside className="header__actions">
      {/* Intégration du DarkMode avec le composant DarkTheme */}
      <DarkTheme isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </aside>
  );
}

export default HeaderActions;
