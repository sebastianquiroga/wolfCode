
import React from "react";
import { FaAngleDoubleDown } from 'react-icons/fa';
import wolfCodeMp4 from '../video/wolfCode.mp4'
import wolfCodeWbm from '../video/wolfCode.webm'
import wolfCodeOgv from '../video/wolfCode.ogv'




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

                    <source src={wolfCodeWbm} type="video/webm" />
                    <source src={wolfCodeOgv} type="video/ogv" />
                    <source src={wolfCodeMp4} type="video/mp4" />


                    Sorry, your browser doesn't support embedded videos.

                </video>

                <div className='btn-down'>

                    <a href='#about'>
                        <FaAngleDoubleDown />
                    </a>

                </div>

            </section>



        </div>
    )
}

export default VideoIntro