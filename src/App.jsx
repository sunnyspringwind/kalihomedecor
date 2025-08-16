import Header from './components/header'
import Hero from './components/hero'
import About from './components/about'
import Products from './components/products'
import Services from './components/services'
import ContactForm from './components/contact-form'
import ContactInfo from './components/contact-info'
import Footer from './components/footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        
          <ContactInfo />
      
      </main>
      <Footer />
    </div>
  )
}

export default App
