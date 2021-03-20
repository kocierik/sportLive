import {useState } from 'react';
import React from 'react'
import './App.scss';
import "./components/static/img/image.jpg"
import AccessPage from "./components/accessPage"
import Header from "./components/header"
import Footer from "./components/footer"
import CommentArea from "./components/commentArea"

function App() {
  const [sign,onSign] = useState(true)
  const onChangeSign = () =>{
    sign ? onSign(false) : onSign(true)
  } 

  return (
    <div className="container">
      <Header change={onChangeSign} log={sign}/>
      <div className="line-title"></div>
      <div className="container__content">
        <CommentArea />
        <AccessPage sign={sign}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
