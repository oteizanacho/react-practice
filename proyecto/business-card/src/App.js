import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"
import './style.css'

import BusinessCard from "./BusinessCard"

export default function App() {
    return (
        <div className="container">
            {/*<Header />
            <MainContent />
            <Footer />*/}
            <BusinessCard />
        </div>
    )
}