import { INavButtonProps } from "../../../types/types";

const NavButton = ({ direction }: INavButtonProps) => {
    return (
        <button className={`swiper_button ${direction}`}>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" >
                <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2"/>
            </svg>
        </button>
    );
};

export default NavButton;