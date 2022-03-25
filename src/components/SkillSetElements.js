import styled from "styled-components";

export const Container = styled.section`

            width: 100%;
            height: 100vh;
            padding: 50px;
            max-width: 1600px;

            display: flex;
            flex-direction: column;
            place-content: center;

            text-align: center;
            background: var(--secondary);


          color: var(--primary);
`;



export const SkillSet = styled.ul`
            padding-top: 50px;
            width:100%;



`;

export const Skill = styled.li`
            display: flex;
            width: 50%;
            margin: auto;
            justify-content: space-between;
            align-items: center;
            list-style: none;
            cursor: pointer;

            &:hover {
              color: var(--success);
              
            }
 
         
            


`;

export const ImgSkill = styled.div`

            -webkit-animation:  ${({ animated }) => animated ? "jello-horizontal 1.5s infinite both" : "none"};
                        animation:  ${({ animated }) => animated ? "jello-horizontal 1.5s infinite both" : "none"}; 



`;
