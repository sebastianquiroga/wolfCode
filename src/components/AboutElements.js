import styled from "styled-components";

export const Card = styled.div`
width: 100%;
    height: 100vh;
    padding:50px;

    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 50px;

    position: relative;

    background: var(--primary); 
    box-shadow: var(--shadow);

    @media  screen and (max-width:960px){

        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 0px;


    }

    

`;

export const CardImg = styled.div`
display:flex;
justify-content: center;
align-items: center;

grid-column: 1/2;
grid-row: 1/-1;

@media  screen and (max-width:960px){


    display:flex;
        justify-content: center;
        align-items: center;
    
        grid-column: 1/-1;
        grid-row: 1/2;
}

`;

export const CardText = styled.div`
    grid-column: 2/3;

    text-align: start;
    align-self: center;
    
    font-size: 1rem;

    width: 80%;
    

    padding-right: 120px;
    justify-self: center;

    @media  screen and (max-width:960px){

        grid-column: 1/-1;
        grid-row: 2/3;
    
        text-align: start;
        align-self: center;
      
        width: 100%;
        padding-right: 0;
    }

@media  screen and (max-width:380px){
    font-size: .8rem;
}

`;

export const BtnNext = styled.div`

grid-column: 2/3;
position: absolute;
top: 50%;
right: 15%;

`;

export const BtnBack = styled.div`

grid-column: 2/3;
position: absolute;
top: 50%;
left: -5%;

@media  screen and (max-width:960px){
    grid-column: 1/-1;

    left: -15%;

}

`;