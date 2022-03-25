import styled from "styled-components";

export const Container = styled.nav`

    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    z-index: 30;

`;

export const Wrapper = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10%;

    
    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
   

`;

export const Brand = styled.div`

@media screen and (max-width: 960px) {

    position: absolute;
    top:0;
    left: 0;
    padding: 20px;

}
    
    `;

export const BrandTittle = styled.h3`

    font-size: 1.5rem;
    font-weight: 400;

    `;

export const Menu = styled.ul`
    

@media screen and (max-width: 960px) {
   
   
    
    position: fixed;
    left: ${({ open }) => open ? "0" : "-100%"};
    top: 60px;
    width: 60vw;
    height: 100%;
    display: flex;
    text-align: center;
  
    justify-content: center;
    
    
    transition: .3s all ease-in-out;
    z-index: 50;

}`;

export const MenuItem = styled.li`

    list-style: none;
    
    
   
    
@media screen and (max-width: 960px) { 
    width: 100%;
    height: 70px;
    display:flex;
    flex-direction: column;
    line-height: 100px;
    
}

        &a {
            margin-right: 10px;
        text-decoration: none;
        cursor: pointer;

    
        font-size: 1rem;
        font-weight: 400;

        &:hover{
            color: var(--success);
            
        }

}
   

    `;

export const MenuItemLink = styled.a`

    margin-right: 10px;
    text-decoration: none;
    cursor: pointer;
    color: inherit;
    padding: 5px;

  
    font-size: 1rem;
    font-weight: 600;

    }
  


`;

export const BtnMenu = styled.button`
    background: none;
    border: none;
    font-size: 1.5rem;
    position: absolute;
    right: 0;
    top: 0;
    padding: 20px;
    display: none;
    outline: none;

    @media screen and (max-width: 960px) {
        display: block;
    }



`;