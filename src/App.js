
import * as React from "react";
import AppRouter from "./AppRouter";
import "./index.css"
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer/>
    </>
  )


}



    