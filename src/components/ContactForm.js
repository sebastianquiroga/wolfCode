import React, {useState} from 'react'
import {FaGoogle, FaGithub, FaLinkedinIn} from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';



const ContactForm = () => {

    const [submitForm, setSubmitForm] = useState(false);

    return (
        <>
            <section className="contact" id="contact">

                <h2 className="subtittle" id="subtittle">CONTACT<span className="dot">.</span></h2>
                <div className="contact-card">
                    <div className="card-2 ">
                        <div className="contact-text">
                            <h5 className="contact-tittle">Work with me!</h5><br />
                            <ul className="contact-links">
                                <li className="contact-button">
                                    <a href="https://www.linkedin.com/in/juan-sebasti%C3%A1n-quiroga-pe%C3%B1a-6230941b8/" target="_blank"> <FaLinkedinIn/> See my profile on Linkedin</a>
                                </li>
                                <li className="contact-button">
                                    <a href="https://github.com/sebastianquiroga" target="_blank"> <FaGithub/> Take a look at my GitHub profile</a>
                                </li>
                                <li className="contact-button">
                                    <a href="mailto:wolfcode.contact@gmail.com?subject=He visitado tu website&" target="_blank"> <FaGoogle/> Send me an email</a>
                                </li>
                            </ul>
                        </div>


                    <Formik

                        initialValues={{
                            name: '',
                            email: '',
                            message: ''
                        }}
                        validate={(values) => {
                            let dateNull = {};

                          
                            if(!values.name){

                                    dateNull.name = 'Please enter a name.'

                            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){

                                    dateNull.name = 'The name can only contain letters and spaces.'
                            }


                            if(!values.email){

                                dateNull.email = 'Please enter a valid email.'

                            }else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){

                                dateNull.email = 'Mail can only contain letters, numbers, periods, and hyphens.'

                            }

                            return dateNull;

                        
                        }}



                        onSubmit={(values, {resetForm}) => {
                            resetForm();
                         
                            setSubmitForm(true);
                            setTimeout(()=> setSubmitForm(false), 5000)

                        }}

                        
                    
                    >



                        {({errors}) => (

                        <Form  className="contact-form"
                        name="form" 
                        data-netlify="true"           
                        >

                            <div>
                            <input type="hidden" name="form-name" value="contact-form" />

                            <Field 
                            className="contact-name " 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Name" 
                            
                            /> <br/>

                            <ErrorMessage name="name" component={()=>(
                            <div className="error">{errors.name}</div>
                            )}/>

                            </div><br/>

                            <div>

                           

                            <Field 
                            className="contact-email"  
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Email" 
                            
                            /> <br/>
                            <ErrorMessage name="email" component={()=>(
                            <div className="error">{errors.email}</div>
                            )}/><br/>
                            
                            
                            

                            </div>

                      
                                <div>


                            <Field className="contact-textArea spanish" name="message" as="textarea" id="c-text" rows="8" placeholder=" Message."/>

                                </div><br/>

                            <button type="submit" className={submitForm ? 'smtBtn' : 'dark-btn'}><span className="dark-text">Send message</span></button>
                            {submitForm && <p className='submitForm'>Thank you for your message :)</p>}
                        </Form>



                        )}
                        </Formik>
                    </div>
                </div>

            </section>
        </>
    )
}

export default ContactForm