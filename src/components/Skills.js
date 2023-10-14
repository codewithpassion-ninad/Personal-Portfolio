import React, { Fragment } from 'react'
import {SiJavascript,SiNodedotjs,SiReact,SiHtml5,SiCss3,SiBootstrap,SiC,SiMongodb, SiPython, SiJava, SiWindows, SiGooglecolab, SiMysql, SiKaggle, SiCplusplus, SiVisualstudio, SiScikitlearn, SiTensorflow, SiMicrosoftoffice} from 'react-icons/si'
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Skills() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-green slide-in-top">Technical Skillset</h1>
                            <hr></hr>

                            <div className="row my-2">

                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiPython className='fs-4'/> Python</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiC className='fs-4'/> C</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiCplusplus className='fs-4'/> C++</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiJava className='fs-4'/> Java</span>
                                </div>
                                
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiHtml5 className='fs-4'/> HTML</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiCss3 className='fs-4'/> CSS</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiBootstrap className='fs-4'/> Bootstrap</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiJavascript className='fs-4'/> JavaScript</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiNodedotjs className='fs-4'/> Node.js</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiReact className='fs-4'/> React</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiMysql className='fs-4'/> Mysql</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiMongodb className='fs-4'/> MongoDB</span>
                                </div>
                            </div>

                            <br />
                            <br />
                            <h1 className="font-big text-green slide-in-top">Tools I Use</h1>
                            <hr></hr>
                            <div className="row my-2">
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiWindows className='fs-4'/> Windows OS</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiGooglecolab className='fs-4'/> Colab</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiKaggle className='fs-4'/> Kaggle</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiScikitlearn className='fs-4'/> Scikit Learn</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiTensorflow className='fs-4'/> Tensorflow</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiVisualstudio className='fs-4'/> Visual Studio Code</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiMicrosoftoffice className='fs-4'/> Microsoft Office</span>
                                </div>
                            </div>

                            <br />
                            <br />
                            <h1 className="font-big text-green slide-in-top">GitHub Contributions</h1>
                            <hr></hr>
                            <GitHubCalendar
                                username="codewithpassion-ninad"
                                blockSize={15}
                                blockMargin={2}
                                color="#c084f5"
                                fontSize={20}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="../images/Development-pana.png" alt="..."></img>
                    </div>
                </div>
            </div>
            
        </div>
    </Fragment>
  )
}

export default Skills