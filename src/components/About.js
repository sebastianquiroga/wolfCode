import React, { useState } from 'react'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import AboutCardText from './AboutCardText';
import { BtnNext, Card, CardImg, BtnBack } from './AboutElements';

const AboutMe = () => {

    const [nextCard, setNextCard] = useState(true);
    const [backCard, setBackCard] = useState(false);

    

    const NextCard = () => {

        let next = document.querySelector('.btn-next');
        let back = document.querySelector('.btn-back');

            if(nextCard == true){

                setNextCard(!nextCard);
                setBackCard(!backCard);

                next.style.display= "none";
                back.style.display= "block";
            }

    }


    
    const BackCard = () => {

        let next = document.querySelector('.btn-next');
        let back = document.querySelector('.btn-back');

        if(backCard == true){

            setNextCard(!nextCard);
            setBackCard(!backCard);

            next.style.display= "block";
            back.style.display= "none";
            
        }

}
 
    return (
        <div>

            <section className="about " id="about">

                <div className="about-me ">

                    <h1 className="about__tittle ">Hi<span className="dot">!</span> <br />
                        I'm Sebastián Quiroga<span className="dot">.</span> </h1>
                    <h2 className="about__subtittle ">Junior FrontEnd developer<span className="dot">.</span></h2>
                </div>


            </section>

            <section className="about-card ">

                <Card>

                    <CardImg>

                        <img loading="lazy" className="card-img" src="resources/ilustrations/Logo-wolf1-min.svg" />

                    </CardImg>

                    <AboutCardText 
                        
                        state={nextCard}
                        setNext={setNextCard}
                        p1="I'm a self-taught student, I'm passionate about technology and creative environments."
                        p2="I have built a few projects to test my skills and continue learning."
                        p4="Are you a recruiter? Would you like to work with me? "
                        strong="Contact me!"


                    />

                    <BtnNext>
                        <button className='btn-next' onClick={NextCard}>
                            <FaAngleRight />
                        </button>
                    </BtnNext>


                    <AboutCardText
                        state={backCard}
                        setNext={setBackCard}
                        p1="wolfCode It's a project with identity that seeks to represent my learning process as a developer."
                        p2="In the isotype you can see the HTML tags in a striking color; as they are usually seen in code editors."
                        p3="Currently I don't have much experience, but I would love to be part of a work group that shares a passion for technology and grow professionally."
                        p4="I'm still developing :)"
                       


                    />


                    <BtnBack>
                        <button className='btn-back' onClick={BackCard}>
                            <FaAngleLeft />
                        </button>
                    </BtnBack>

                </Card>

            </section>
        </div>
    )

}




export default AboutMe