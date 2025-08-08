import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar, { type NavbarProps } from './components/Navbar'
import Payment from './components/Payment'
import Schedule from './components/Schedule'
import Speaker from './components/Speaker'
import { useEffect, useRef, useState } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState<NavbarProps['activeMenu']>("home")

  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    speaker: useRef<HTMLElement>(null),
    schedule: useRef<HTMLElement>(null),
    payment: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id')
            if (id) setActiveSection(id as NavbarProps["activeMenu"])
          }
        })
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 } // tengah layar
    )

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    console.log("Section aktif: ", activeSection);
  }, [activeSection])

  return (
    <>
      <header>
        <Navbar activeMenu={activeSection as NavbarProps["activeMenu"]} />
      </header>
      <main>
        <section ref={sectionRefs.hero} id="home"><Hero /></section>
        <section ref={sectionRefs.about} id="about"><About /></section>
        <section ref={sectionRefs.speaker} id="speaker"><Speaker /></section>
        <section ref={sectionRefs.schedule} id="schedule"><Schedule /></section>
        <section ref={sectionRefs.payment} id="payment"><Payment /></section>
      </main>
      <footer>
        <section ref={sectionRefs.contact} id="contact"><Contact /></section>
      </footer>
    </>
  )
}

export default App
