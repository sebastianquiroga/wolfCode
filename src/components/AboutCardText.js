import React from 'react'
import { CardText } from './AboutElements';

const AboutCardText = ({ p1, p2, p3, p4, strong, setNext, setBack, state }) => {
    return (
        <>

            {state &&

                <CardText>

                    <p>

                        {p1}

                    </p> <br />

                    <p>

                        {p2}

                    </p> <br />

                    <p>

                        {p3}

                    </p> <br /><br />

                    <p>

                        {p4}

                        <span className="btn-about">

                            <a href="#contact" className="link">

                                <strong>
                                    {strong}
                                </strong>
                                
                            </a>

                        </span>

                    </p>


                </CardText>





            }

        </>
    )
}

export default AboutCardText