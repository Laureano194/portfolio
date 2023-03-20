import React from 'react'
import Navbar from '../Navbar/Navbar'
import Container from '../Container'

const Header = () => {
  return (
    <header className="h-screen">
        <Container>
            <div className="flex flex-col h-full">
                <Navbar />
                <div className="my-auto">
                    <h1 className="">Header</h1>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header