import './App.css';
<<<<<<< HEAD
import {Routes,Route} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Skills from './components/Skills';
import Resume from './components/Resume';
import MyWork from './components/MyWork';
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container container-fluid">
      <div className="row flex-nowrap">
        
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={ <Home/> } exact></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
          <Route path="/resume" element={<Resume/>}></Route>
          <Route path="/mywork" element={<MyWork/>}></Route>

        </Routes>
        <br />
        <br />
      </div>
      {/* <Footer /> */}
=======
import React from 'react';
import WordCounter from './components/WordCounter';
function App() {
  return (
    <div>
      <WordCounter />
>>>>>>> 7624fcce87b61c13e91df89d5b28b504b9e0d551
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 7624fcce87b61c13e91df89d5b28b504b9e0d551
