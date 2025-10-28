import Navigation from '@/components/Navigation'
import Content from '@/components/sections'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="bg-navy text-lightest-slate min-h-screen font-sans">
      <Navigation />
      <Content />
      <Footer />
    </div>
  )
}
