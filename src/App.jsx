import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PhotoStrip from './components/PhotoStrip'
import Strengths from './components/Strengths'
import Diary from './components/Diary'
import Journey from './components/Journey'
import Career from './components/Career'
import Collabs from './components/Collabs'
import Metrics from './components/Metrics'
import Revenue from './components/Revenue'
import AIAutomation from './components/AIAutomation'
import Lectures from './components/Lectures'
import TechStack from './components/TechStack'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#080808] text-[#e0e0e0] min-h-screen font-sans">
      <Navbar />
      <Hero />
      <PhotoStrip />
      <Strengths />
      <Diary />
      <Journey />
      <Career />
      <Collabs />
      <Metrics />
      <Revenue />
      <AIAutomation />
      <Lectures />
      <TechStack />
      <Footer />
    </div>
  )
}
