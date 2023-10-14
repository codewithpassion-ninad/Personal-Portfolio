import React, { Fragment } from 'react'
import Type from "./Type";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <Fragment>
        <div className="col py-3 d-flex align-items-center"> 
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                  <div>
                    <h1 className="m-0 font-big slide-in-top">Hi there, 👋🏻</h1>
                    <h1 className="m-0 font-big animate-charcter">I'm Ninad Sugandhi,</h1>
                    <div className="m-0 font-big animate-charcter">
                      <Type />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                  <img className="img-fluid" src="../images/nomad-bro.png" alt="..."></img>
                </div>
              </div>
            </div>
        </div>
      </Fragment>

      <div>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={6} className="home-about-description">
              <h1 style={{ fontSize: "2.6em", fontWeight: "bolder" }} className='text-green'>
                A SHORT INTRODUCTION ABOUT MYSELF
              </h1>
              <br>
              </br>
              <ul className="home-about-body">
              <li>Passionate about programming and have been exploring various technologies. 🧑‍💻</li>
              <li>Currently pursuing B.Tech. in Computer Science and Engineering at Vellore Institute of Technology.</li>
              <li>Proficient in classics like<b> Python, C++ and Java. </b></li>
                <br />
              </ul>
            </Col>
            { <Col md={4} className="myAvtar">
                <img src='../images/avatar.jpg' className="avatar-img" alt="avatar" />
            </Col> }
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1 style={{ fontSize: "2.6em", fontWeight: "bolder" }} className='text-green'>FIND ME ON THESE PLATFORMS</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
                  <a
                    href="https://github.com/codewithpassion-ninad"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub size={70}/>
                  </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    href="mailto:ninadsugandhi@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <MdEmail size={80}/>
                  </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    href="https://www.linkedin.com/in/ninad-sugandhi/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn size={70}/>
                  </a>
                  
                  <br />
            </Col>
          </Row>
        </Container>
        </Container>
      </div>
      <Footer />
    </div>
  )
};

export default Home;