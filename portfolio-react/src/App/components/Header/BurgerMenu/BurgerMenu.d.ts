import './BurgerMenu.scss';
interface BurgerMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
    ariaLabel?: string;
    ariaExpanded?: boolean;
}
declare function BurgerMenu({ isOpen, toggleMenu }: BurgerMenuProps): import("react/jsx-runtime").JSX.Element;
export default BurgerMenu;
