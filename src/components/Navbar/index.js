import React from 'react';
import { 
    Nav,
    NavContainer, 
    NavLogo,
    MobileIcon
} from './Navbar.elements' 


const Navbar = () => {
    return (
       <>
        <Nav>
            <NavContainer>
                <NavLogo to='/'>Dolla</NavLogo>
                <MobileIcon>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavContainer>
        </Nav>
       </>
    )
}

export default Navbar
