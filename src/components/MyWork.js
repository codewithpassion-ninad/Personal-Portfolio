import React, { Fragment } from 'react'
import { GrPrevious, GrNext, GrTextAlignCenter } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';

function MyWork() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose text-green fw-bold ls-2">Something I've Built</h2>
                        <h4 className="ff-jose text-green fw-bold ls-2">Here are few projects on which I have worked recently</h4>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-4 text-center my-2">                            
                            <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <img src="../portfolio-images/nextword.webp" className="d-block w-100" alt="..."/>
                                    </div>
                                </div>
                            </div>
                            <h5 className="ff-jose my-1">Next Word Predictor</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/codewithpassion-ninad/LGM-TASKS/blob/main/Next%20Word%20Prediction.ipynb" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Source Code</a>
                            </div>
                    </div>
                    
                    <div className="col-md-4 text-center my-2">
                        <div id="carouselExampleControls1" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/handwritingdetection.jpeg" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                            <h5 className="ff-jose my-1">Handwriting Detection System</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/codewithpassion-ninad/LGM-TASKS/blob/main/Detect%20Handwriting.ipynb" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Source Code</a>
                            </div>
                    </div>

                    <div className="col-md-4 text-center my-2">
                        <div id="carouselExampleControls1" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/handwriting.jpeg" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                            <h5 className="ff-jose my-1">Handwriting Equation Solver</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/codewithpassion-ninad/LGM-TASKS/blob/main/Handwritten%20Equation%20Solver1.ipynb" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Source Code</a>
                            </div>
                    </div>

                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls2" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/speech.webp" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5 className="ff-jose my-1">Speech Emotion Detection System</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/codewithpassion-ninad/CVIP-Data-Science/blob/main/Speech%20Emotion%20Detection.ipynb" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Source Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/stock.webp" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                            <h5 className="ff-jose my-1">Stock Price Prediction</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/codewithpassion-ninad/TechnoHacks-Internship-Tasks/blob/main/Stock%20Prediction.ipynb" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>

                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/movie.jpg" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                            <h5 className="ff-jose my-1">Movies Recommendation System</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/codewithpassion-ninad/INFO-AIDTECH/blob/main/Movies%20Recommendation%20System.ipynb" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>

                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/fraud.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                            <h5 className="ff-jose my-1">Credit Card Fraud Detection System</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/codewithpassion-ninad/INFO-AIDTECH/blob/main/Credit%20Card%20Fraud%20Detection.ipynb" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>

                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/elephant.jpg" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                            <h5 className="ff-jose my-1">African vs Asian Elephants Classification</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/codewithpassion-ninad/African-vs-Asian-Elephant-Classification" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>

                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/subgen.png" className="d-block w-100" height={200} alt="..."/>
                                </div>
                            </div>
                        </div>
                            <h5 className="ff-jose my-1">SubGenerator AI</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/codewithpassion-ninad/SubGeneratorAI/blob/main/Transcribe%20new.ipynb" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>

                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="../portfolio-images/imgtosketch.jpg" className="d-block w-100" alt="..."/>
                                </div>
                            </div>

                        </div>
                        <h5 className="ff-jose my-1">Image to Pencil Sketch Generator</h5>
                        <div className="row d-flex justify-content-center">
                            <a href="https://github.com/codewithpassion-ninad/LGM-TASKS/blob/main/Image%20to%20Sketch.ipynb" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Source Code</a>
                        </div>
                        
                    </div>

                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/spam.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                            <h5 className="ff-jose my-1">Spam Detection System</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/codewithpassion-ninad/CVIP-Data-Science/blob/main/Email%20Spam%20Detection%20System.ipynb" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>

                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/cancer c.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                            <h5 className="ff-jose my-1">Breast Cancer Prediction</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/codewithpassion-ninad/CVIP-Data-Science/blob/main/Breast%20Cancer%20Prediction.ipynb" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>

                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/house.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                            <h5 className="ff-jose my-1">House Price Prediction</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/codewithpassion-ninad/Bharat-Intern-Tasks/blob/main/House%20Price%20Prediction.ipynb" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>

                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/iris.jpeg" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                            <h5 className="ff-jose my-1">Iris Classification</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/codewithpassion-ninad/INFO-AIDTECH/blob/main/Iris%20Classification.ipynb" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>


                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls4" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/eda.webp" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                            <h5 className="ff-jose my-1">Exploratory Data Analysis on Global Terrorism Activities</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/codewithpassion-ninad/Exploratory-Data-Analysis-on-Global-Terrorism/blob/main/Exploratory_Data_Analysis_on_Global_Terrorism_Dataset.ipynb" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>

                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls5" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/drum.jpg" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                        <h5 className="ff-jose my-1">Drumming Symphony</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://codewithpassion-ninad.github.io/Drumming-Symphony/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Demo</a>
                                <a href="https://github.com/codewithpassion-ninad/Drumming-Symphony" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>


                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls5" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/dice.jpeg" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                        <h5 className="ff-jose my-1">Dice Game</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://codewithpassion-ninad.github.io/Dice-Game/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Demo</a>
                                <a href="https://github.com/codewithpassion-ninad/Dice-Game" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls6" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/demo.jpeg" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/happy.jpg" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/neutral.jpg" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/suprise.jpg" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls6" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls6" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                            <h5 className="ff-jose my-1">Face Expression Recognition System</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/codewithpassion-ninad/LGM-TASKS/blob/main/Facial%20Expressions%20Recognition%20%F0%9F%98%82%E2%98%B9%EF%B8%8F%F0%9F%98%A1.ipynb" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default MyWork