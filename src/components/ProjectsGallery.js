import React, { useState } from 'react';
import { Container, ImgGallery, WrapperGallery, BtnContainer, ProjectContainer } from './ModalGallery.elements.js';
import ProjectsJson from './Projects.json';

import Modal from './Modal.js';


const ProjectsGallery = () => {


    let projects = [ProjectsJson];

    const [modalOne, setModalOne] = useState(false);
    const [modalOneOverlay, setModalOneOverlay] = useState(false);


    const [modalTwo, setModalTwo] = useState(false);
    const [modalTwoOverlay, setModalTwoOverlay] = useState(false);

    const [modalThree, setModalThree] = useState(false);
    const [modalThreeOverlay, setModalThreeOverlay] = useState(false);

    const [modalFour, setModalFour] = useState(false);
    const [modalFourOverlay, setModalFourOverlay] = useState(false);

    const [modalFive, setModalFive] = useState(false);
    const [modalFiveOverlay, setModalFiveOverlay] = useState(false);

    const [modalSix, setModalSix] = useState(false);
    const [modalSixOverlay, setModalSixOverlay] = useState(false);




    return (
        <>
            <section className="projects-container section " id="portfolio">

                <h2 className="subtittle revealSection" id="subtittle">PORTFOLIO<span className="dot">.</span></h2>

                {projects.map((project)=> 
                
                

            <WrapperGallery key={project[0].id}>
                <Container>
                    <ProjectContainer 
                    onMouseEnter={() => setModalOneOverlay(!modalOneOverlay)} 
                    onMouseLeave={() => setModalOneOverlay(!modalOneOverlay)}
                    
                    >

                        <ImgGallery 
                        src={project[0].img} 
                        overlay={modalOneOverlay}
                        />

                        <BtnContainer className='dark-btn' 
                        onClick={()=> setModalOne(!modalOne)}
                        overlay={modalOneOverlay}
                        >

  
                            SEE PROJECT
  
                        </BtnContainer>
  
                        <Modal 
                        state={modalOne}
                        setState={setModalOne}
                        setOverlay={setModalOneOverlay}
                        tittle={project[0].tittle}
                        img={project[0].img}
                        description={project[0].description}
                        demo={project[0].demo}
                        repo={project[0].repo}
                        />


                    </ProjectContainer>

                    <ProjectContainer 
                     onMouseEnter={() => setModalTwoOverlay(!modalTwoOverlay)} 
                     onMouseLeave={() => setModalTwoOverlay(!modalTwoOverlay)}
                     
                    >

                        <ImgGallery 
                        overlay={modalTwoOverlay}
                        src={project[1].img}
                        />

                        <BtnContainer 
                        className='dark-btn' 
                        onClick={()=> setModalTwo(!modalTwo)}
                        overlay={modalTwoOverlay}
                        >

  
                            SEE PROJECT
  
                        </BtnContainer>
  
                        <Modal 
                        state={modalTwo}
                        setState={setModalTwo}
                        setOverlay={setModalTwoOverlay}
                        tittle={project[1].tittle}
                        img={project[1].img}
                        description={project[1].description}
                        demo={project[1].demo}
                        repo={project[1].repo}
                        />



                    </ProjectContainer>

                    <ProjectContainer 
                     onMouseEnter={() => setModalThreeOverlay(!modalThreeOverlay)} 
                     onMouseLeave={() => setModalThreeOverlay(!modalThreeOverlay)}
                     
                    >

                        <ImgGallery 
                        src={project[2].img}
                        overlay={modalThreeOverlay}
                        />

                        <BtnContainer 
                        className='dark-btn' 
                        onClick={()=> setModalThree(!modalThree)}
                        overlay={modalThreeOverlay}
                        >
                        
                            SEE PROJECT
                        
                        </BtnContainer>
                        <Modal 
                        state={modalThree}
                        setState={setModalThree}
                        setOverlay={setModalThreeOverlay}
                        tittle={project[2].tittle}
                        img={project[2].img}
                        description={project[2].description}
                        demo={project[2].demo}
                        repo={project[2].repo}
                        />
                        

                    </ProjectContainer>

                    <ProjectContainer 
                     onMouseEnter={() => setModalFourOverlay(!modalFourOverlay)} 
                     onMouseLeave={() => setModalFourOverlay(!modalFourOverlay)}
                    
                    >

                        <ImgGallery 
                        src={project[3].img}
                        overlay={modalFourOverlay}
                        />

                        <BtnContainer 
                        className='dark-btn' 
                        onClick={()=> setModalFour(!modalFour)}
                        overlay={modalFourOverlay}
                        >

                            SEE PROJECT

                        </BtnContainer>

                        <Modal 
                        state={modalFour}
                        setState={setModalFour}
                        setOverlay={setModalFourOverlay}
                        tittle={project[3].tittle}
                        img={project[3].img}
                        description={project[3].description}
                        demo={project[3].demo}
                        repo={project[3].repo}
                        />

                    </ProjectContainer>

                    <ProjectContainer 
                     onMouseEnter={() => setModalFiveOverlay(!modalFiveOverlay)} 
                     onMouseLeave={() => setModalFiveOverlay(!modalFiveOverlay)}
                    
                    >

                        <ImgGallery 
                        src={project[4].img}
                        overlay={modalFiveOverlay}
                        />

                        <BtnContainer 
                        className='dark-btn' 
                        onClick={()=> setModalFive(!modalFive)}
                        overlay={modalFiveOverlay}
                        >

                            SEE PROJECT

                        </BtnContainer>

                        <Modal 
                        state={modalFive}
                        setState={setModalFive}
                        setOverlay={setModalFiveOverlay}
                        tittle={project[4].tittle}
                        img={project[4].img}
                        description={project[4].description}
                        demo={project[4].demo}
                        repo={project[4].repo}
                        />



                    </ProjectContainer>

                    <ProjectContainer 
                     onMouseEnter={() => setModalSixOverlay(!modalSixOverlay)} 
                     onMouseLeave={() => setModalSixOverlay(!modalSixOverlay)}
               
                    >

                        <ImgGallery 
                        src={project[5].img}
                        overlay={modalSixOverlay}
                        />

                        <BtnContainer 
                        className='dark-btn' 
                        onClick={()=> setModalSix(!modalSix)}
                        overlay={modalSixOverlay}
                        >

                            SEE PROJECT
                            
                        </BtnContainer>

                        <Modal 
                        state={modalSix}
                        setState={setModalSix}
                        setOverlay={setModalSixOverlay}
                        tittle={project[5].tittle}
                        img={project[5].img}
                        description={project[5].description}
                        demo={project[5].demo}
                        repo={project[5].repo}
                        />

                    </ProjectContainer>


                </Container>


            </WrapperGallery>

                )}

        </section>
        
        </>
    )
}

export default ProjectsGallery