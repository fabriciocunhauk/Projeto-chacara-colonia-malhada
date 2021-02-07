import React from 'react';

import { menuData } from '../../data/MenuData';

import { Nav, Logo, MenuBars, NavMenu, NavBtn, NavMenuLinks } from './navbar-styles';
import { Button } from '../button.component/Button';

const NavBar = ({ toggle }) => {
    return (
        <Nav>
            <Logo to='/' >Chacara</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index} smooth={true} duration={500}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'>
                    Contato
                </Button>
            </NavBtn>
        </Nav>
    )
}

export default NavBar;
