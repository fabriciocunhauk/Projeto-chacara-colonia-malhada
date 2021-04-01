import React from 'react';
import { menuData } from '../../data/MenuData';

import {
    DropdownContainer,
    Icon,
    CloseIcon,
    DropdownWraper,
    DropdownMenu,
    DropdownLink,
} from './dropdown.styles';

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWraper>
                <DropdownMenu>
                    {menuData.map((item, index) => {
                        return (
                            <DropdownLink to={item.link} key={index} onClick={toggle}>
                                {item.title}
                            </DropdownLink>
                        )
                    })}
                </DropdownMenu>
            </DropdownWraper>
        </DropdownContainer>
    )
}

export default Dropdown;
