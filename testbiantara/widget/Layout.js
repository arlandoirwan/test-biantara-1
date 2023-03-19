import Navigation from '../componets/Navigation'
import { Navbar } from 'flowbite-react'
import Foooter from '../componets/Footer'
import Hero from '../componets/Hero'
export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <Hero />

      <div
        className="container p-5 mx-auto
      "
      >
        {children}
      </div>

      <Foooter />
    </>
  )
}
