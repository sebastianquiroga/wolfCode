
import React, { useState } from 'react';
import { Brand, BrandTittle, BtnMenu, Container, Menu, MenuItem, MenuItemLink, Wrapper } from './NavbarElements.js';
import {FaBars, FaTimes} from 'react-icons/fa';



const NavBar = (e) => {

  const [showMenu, setShowMenu] = useState(false);

  const [NavBackground, setNavBackground] = useState(false);

  const [LinkActive, setLinkActive] = useState(false);

  const changeBackground = () => {

    if(window.scrollY >= 600) {

        setNavBackground(true);

    } else {

        setNavBackground(false);

    }

  }

  window.addEventListener('scroll', changeBackground)







  return (
    <>
 <Container className={NavBackground ? 'navBarActive' : 'navBar'}>
   <Wrapper>
        <Brand>
        <BrandTittle>
        wolf<b>Code</b>
        </BrandTittle>

        </Brand>

        <Menu open={showMenu} className={NavBackground ? 'MenuActive' : 'Menu'}>
          <MenuItem>
            <MenuItemLink onClick={()=> setShowMenu(!showMenu)} 
            href="#home" 
            className={LinkActive ? 'link' : 'linkActive'}>
           
              Home

 
              
            </MenuItemLink>
            <MenuItemLink onClick={()=> setShowMenu(!showMenu)} href="#about">
          
              About
              
            </MenuItemLink>
            <MenuItemLink onClick={()=> setShowMenu(!showMenu)} href="#skills">
          
              Skill-set
              
            </MenuItemLink>
            <MenuItemLink onClick={()=> setShowMenu(!showMenu)} href="#portfolio">
          
              Portfolio
              
            </MenuItemLink>
            <MenuItemLink onClick={()=> setShowMenu(!showMenu)} href="#contact">
          
              Contact
              
            </MenuItemLink>
          </MenuItem>
        </Menu>
        <BtnMenu onClick={()=> setShowMenu(!showMenu)} >
           {
             showMenu ? <FaTimes className={NavBackground ? 'SvgActive' : 'Svg'}/> : <FaBars className={NavBackground ? 'SvgActive' : 'Svg'}/>
           }
        </BtnMenu>


   </Wrapper>

   
 </Container>



</>
  )
}

export default NavBar