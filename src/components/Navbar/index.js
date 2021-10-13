import React from 'react';
import { FaBars } from 'react-icons/fa';
import { 
    Nav,
    NavContainer, 
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
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
                    <NavItem>
                        <NavLinks to="discover">Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">Sign Up</NavLinks>
                    </NavItem>

                    <NavBtn>
                        <NavBtnLink to="/signin">
                            Sign In
                        </NavBtnLink>
                    </NavBtn>
                </NavMenu>

            </NavContainer>
        </Nav>
       </>
    )
}

export default Navbar
