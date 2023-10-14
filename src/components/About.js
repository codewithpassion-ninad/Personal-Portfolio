import React, { Fragment } from 'react'
import { ImPointRight } from "react-icons/im";

function About() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center about-image"> 

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-green slide-in-top">About me</h1>
                            <hr></hr>
                            <p className='slide-in-bottom'>I am a Student at Vellore Instiute Of Technology, Pursuing 3rd year B.tech in Computer Science and Engineering.
                            </p>
                            <p className='slide-in-bottom'>
                                Currently looking for new opportunities in industry and willing<br></br>
                                to work on challenging and diverse projects with the latest technologies.
                            </p>
                            <p className='slide-in-bottom'>
                                Currently learning and exploring in the world of DevOps.
                            </p>
                            <p>Apart from coding, some other activities that I love to do!</p>
                            <ul>
                                <ImPointRight /> Feeling Music
                                <br />
                                <ImPointRight /> Playing Sports
                                <br />
                                <ImPointRight /> Practising Karate
                                <br />
                            </ul>

                            <p className='quote'>
                                "Be consistent and keep learning always!"
                            </p>
                            <footer className="blockquote-footer">Ninad</footer>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-about" src="../images/nomad-amico.png" alt="..."></img>
                    </div>



                </div>
            </div>

            
        </div>
    </Fragment>
  )
}

export default About