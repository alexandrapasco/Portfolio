import './Header.scss';
interface HeaderProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}
declare function Header({ isDarkMode, toggleDarkMode }: HeaderProps): import("react/jsx-runtime").JSX.Element;
export default Header;
