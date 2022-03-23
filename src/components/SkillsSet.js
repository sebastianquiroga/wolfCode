import React, { useState } from 'react';
import { Container, ImgSkill, Skill, SkillSet } from './SkillSetElements.js';



const SkillsSet = (e) => {


    const [animatedHTML, setAnimatedHTML] = useState(false);
    const [animatedCss, setAnimatedCss] = useState(false);
    const [animatedSass, setAnimatedSass] = useState(false);
    const [animatedBoots, setAnimatedBoots] = useState(false);
    const [animatedJs, setAnimatedJs] = useState(false);
    const [animatedReact, setAnimatedReact] = useState(false);
    const [animatedIl, setAnimatedIl] = useState(false);
    const [animatedPs, setAnimatedPs] = useState(false);
    const [animatedPre, setAnimatedPre] = useState(false);


    return (



        <>

            <Container id="skills">
     

                    <h2 className="subtittle " id="subtittle">SKILL SET<span className="dot">.</span></h2>

                    <SkillSet>

                        <Skill onMouseEnter={() => setAnimatedHTML(!animatedHTML)} onMouseLeave={() => setAnimatedHTML(!animatedHTML)} >
                            HTML
                            <ImgSkill animated={animatedHTML}>
                                <img loading="lazy" className="img-skill htmlImg" src="resources/skills/html.png" alt="" />
                            </ImgSkill>

                        </Skill>

                        <Skill onMouseEnter={() => setAnimatedCss(!animatedCss)} onMouseLeave={() => setAnimatedCss(!animatedCss)} >
                            CSS
                            <ImgSkill animated={animatedCss}>
                                <img loading="lazy" className="img-skill cssImg" src="resources/skills/css.png" alt="" />
                            </ImgSkill>

                        </Skill>

                        <Skill onMouseEnter={() => setAnimatedSass(!animatedSass)} onMouseLeave={() => setAnimatedSass(!animatedSass)}  >
                            SASS
                            <ImgSkill animated={animatedSass}>
                                <img loading="lazy" className="img-skill sassImg" src="resources/skills/sass.png" alt="" />
                            </ImgSkill>

                        </Skill>

                        <Skill onMouseEnter={() => setAnimatedBoots(!animatedBoots)} onMouseLeave={() => setAnimatedBoots(!animatedBoots)}  >
                            BOOTSTRAP
                            <ImgSkill animated={animatedBoots}>
                                <img loading="lazy" className="img-skill htmlImg" src="resources/skills/bootstrap.png" alt="" />
                            </ImgSkill>

                        </Skill>

                        <Skill onMouseEnter={() => setAnimatedJs(!animatedJs)} onMouseLeave={() => setAnimatedJs(!animatedJs)}  >
                            JAVASCRIPT
                            <ImgSkill animated={animatedJs}>
                                <img loading="lazy" className="img-skill htmlImg" src="resources/skills/javascript.png" alt="" />
                            </ImgSkill>

                        </Skill>

                        <Skill onMouseEnter={() => setAnimatedReact(!animatedReact)} onMouseLeave={() => setAnimatedReact(!animatedReact)}  >
                            REACT
                            <ImgSkill animated={animatedReact}>
                            <img loading="lazy" className="img-skill htmlImg" src="resources/skills/react-js.png" alt="" />
                            </ImgSkill>

                        </Skill>

                        <Skill onMouseEnter={() => setAnimatedIl(!animatedIl)} onMouseLeave={() => setAnimatedIl(!animatedIl)}  >
                            ILUSTRATOR
                            <ImgSkill animated={animatedIl}>
                                <img loading="lazy" className="img-skill htmlImg" src="resources/skills/ilustrator.png" alt="" />
                            </ImgSkill>

                        </Skill>

                        <Skill onMouseEnter={() => setAnimatedPs(!animatedPs)} onMouseLeave={() => setAnimatedPs(!animatedPs)}  >
                            PHOTOSHOP
                            <ImgSkill animated={animatedPs}>
                                <img loading="lazy" className="img-skill htmlImg" src="resources/skills/photoshop.png" alt="" />
                            </ImgSkill>

                        </Skill>

                        <Skill onMouseEnter={() => setAnimatedPre(!animatedPre)} onMouseLeave={() => setAnimatedPre(!animatedPre)}  >
                            PREMIERE
                            <ImgSkill animated={animatedPre}>
                                <img loading="lazy" className="img-skill htmlImg" src="resources/skills/premiere.png" alt="" />
                            </ImgSkill>

                        </Skill>

                    </SkillSet>

            </Container>






        </>
    )

}

export default SkillsSet