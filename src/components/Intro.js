
import React from "react";
import { FaAngleDoubleDown} from 'react-icons/fa';
import wolfCodeVideo from '../video/wolfCode.mp4'




const VideoIntro = () => {


  

    return (
        <div>
            <section className="intro-video section" id="home">

                <video 
                className="video" 
                autoPlay
                loop 
                muted 
                
                >

            
                    <source src={wolfCodeVideo} type="video/mp4" />


                    Sorry, your browser doesn't support embedded videos.

                </video>

                <div className='btn-down'>

                <a href='#about'>
                    <FaAngleDoubleDown/>
                </a>

                </div>

            </section>



        </div>
    )
}

export default VideoIntro