import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

import { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

export default function Header() {
    const {theme, handleClick} = useContext(ThemeContext)

    return (
        <header className='flex min-h-[4rem] items-center'>
            <FontAwesomeIcon onClick={() => handleClick()} className='text-[32px] text-jet dark:text-white cursor-pointer' 
            icon=
            {theme == 'dark' 
                ? faMoon
                : faSun
            }/>
        </header>
    );
}