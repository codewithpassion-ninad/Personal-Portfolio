import React, { useState, useEffect, Fragment } from 'react'
import { AiOutlineDownload } from 'react-icons/ai';
import {  SiHackerrank, SiKaggle } from 'react-icons/si';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import pdf from './Ninad Resume.pdf';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);
  return (
    <Fragment>
        <div className="row">
                <div className="text-center" style={{ justifyContent: "left", paddingRight: "400px", paddingTop: "30px"}}>
                <h4 className="ff-jose ls-2">PROFILE</h4>
                <h1>
                    <a href="https://www.kaggle.com/ninadsugandhi" target="/blank" className="text-white text-decoration-none mx-2">
                        <SiKaggle className="zoom-on-hover"/>
                    </a> 
                    <a href="https://www.hackerrank.com/ninadsugandhi" target="/blank" className="text-white text-decoration-none mx-2">
                        <SiHackerrank className="zoom-on-hover"/>
                    </a> 
                </h1>
                </div>
                <div>
                    <br />
                    <br />
                    <Row style={{ justifyContent: "left", paddingLeft: "200px", paddingBottom: "30px"}}>
                    <Button
                        variant="primary"
                        href={pdf}
                        style={{ maxWidth: "700px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                    </Row>

                    <Row className="resume">
                    <Document file={pdf} className="justify-content-center">
                        <Page pageNumber={1} scale={width > 786 ? 1.8 : 1.2} />
                    </Document>
                    </Row>

                    <Row className="resume">
                    <Document file={pdf} className="justify-content-center">
                        <Page pageNumber={2} scale={width > 786 ? 1.8 : 1.2} />
                    </Document>
                    </Row>
                </div>
        </div>
        
    </Fragment>
  )
}

export default Resume