
import React from 'react'
import './App.css';
import NavBar from "./components/NavBar.js";
import VideoIntro from "./components/Intro.js";
import AboutMe from "./components/About.js";
import SkillsSet from "./components/SkillsSet.js";
import ProjectsGallery from "./components/ProjectsGallery.js";
import ContactForm from "./components/ContactForm.js";
import ButtonUp from "./components/ButtonUp.js";





function App() {
    return (

        <>

            <NavBar />

            <VideoIntro />



            <AboutMe />



            <SkillsSet />

            <div className="empty-space" />



            <ProjectsGallery />

            <div className="empty-space" />


            <ContactForm />



            <div className="empty-space" />
            <div className="empty-space" />
            <footer>
                <section className="footer-container">

                    <h4 className="footer-tittle">© 2021 wolfCode® powered by Sebastián Quiroga. </h4> <br />
                    <h4 className="footer-tittle">Made with love, some cups of coffee and using React</h4>


                </section>
            </footer>


            <ButtonUp />






        </>



    );
}

export default App;
