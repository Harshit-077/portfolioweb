import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../end/footer'
import MainContent from './main'
const page = () => {
    return (
        <>
            <header className="flex flex-col min-h-screen">
                <Navbar />
                <MainContent />
            </header>
            <Footer />
        </>
    )
}

export default page