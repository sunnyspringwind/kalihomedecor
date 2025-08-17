import Header from '../components/header'
import Hero from '../components/hero'
import About from '../components/about'
import Services from '../components/servicies'
import ContactInfo from '../components/contact-info'
import Footer from '../components/footer'
import Facilities from '../components/facilitaties'
import { useEffect } from 'react'
import {scrollToSection} from '../components/ScrollToSection'

export default function Home() {

// Add this useEffect in your home page component to handle navigation from other pages
useEffect(() => {
  const scrollTarget = sessionStorage.getItem("scrollToSection");
  if (scrollTarget && window.location.pathname === '/') {
    const sectionId = scrollTarget.substring(1); // Remove the '#'
    
    // Small delay to ensure the page has rendered
    setTimeout(() => {
      scrollToSection(sectionId);
      sessionStorage.removeItem("scrollToSection");
    }, 100);
  }
}, []);

  return (
<div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Facilities />
        
          <ContactInfo />
      
      </main>
      <Footer />

      </div>
  )}