import styled from "styled-components";


export const WrapperGallery = styled.div`


`;




export const Container = styled.div`
width: 95%;
max-width: 1200px;
margin: auto;


display: grid;
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  

`;


export const ProjectContainer = styled.div`

height: 350px;
display: flex;
flex-direction: column;
align-items: center;  
justify-content: center;


`;


export const ImgGallery = styled.img`

width: 100%;
    height: 350px;
    -o-object-fit: cover;
       object-fit: cover;
    -webkit-filter: ${({ overlay }) => overlay ? "brightness(0.3)" : "brightness(0.7)"}; 
            filter: ${({ overlay }) => overlay ? "brightness(0.3)" : "brightness(0.7)"}; 
    transition: .5s all ease-in-out;
    
    `;


export const BtnContainer = styled.div`
position: absolute;
display: ${({ overlay }) => overlay ? "flex" : "none"}; ;
justify-content: space-around;
align-items: center;
   
    
    


`;




export const WrapperModal = styled.div`

    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .8);

    display: flex;
    align-items: center;
    justify-content: center;

    
    
    
    z-index: 60;
`;




export const ModalContainer = styled.div`

    width: 600px;
    min-height: 100px;
    background: var(--secondary);
    color: var(--primary);
    position: relative;
    border-radius: 5px;
    box-shadow: var(--shadow);
    padding: 20px;

    

`;

export const ModalHeader = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--success);

    h3 {
        font-weight: 500;
        font-size: 1.5rem;
        
    }

`;

export const CloseHeader = styled.button`
    
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px
    height: 30px;
    border: none;
    background:none;
    outline: none;
    cursor: pointer;

    svg{
        height: 40px;
        fill: var(--primary);
        
    }

     
&:hover svg{
    fill: var(--success);
}

`;

export const ModalImg = styled.img`

    width: 85%;
    display:block;
    margin: auto;

`;


export const ModalDescription = styled.div`

    width: 100%;
    padding: 20px;
    
  
`;

export const BtnModalContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
aling-items: center;


`;


export const BtnModal = styled.a`
color: inherit;
text-decoration: none;
display:flex;
align-items: center;

 
&:hover {
    color: var(--success);
}

`;

