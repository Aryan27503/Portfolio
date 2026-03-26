import Hero from '../components/Hero'
import About from '../components/About'
import CaseStudyList from '../components/CaseStudyList'
import Projects from '../components/Projects'
import ProductTeardown from '../components/ProductTeardown'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home(){
  return (
    <>
      <Hero />
      <About />
      <CaseStudyList />
      <Projects />
      <ProductTeardown />
      <Skills />
      <Contact />
    </>
  )
}
