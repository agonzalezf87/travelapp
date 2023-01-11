import { NavBar } from "../containers/NavBar"
import { TabBar } from "../containers/TabBar"
import { Hero } from "../containers/Hero"
import { Suggestions } from "../containers/Suggestions"
import { Featured } from "../containers/Featured"
import { Faqs } from "../containers/Faqs"
import { Footer } from "../containers/Footer"

const Home = () => {
  return (
    <>
      <NavBar />
      <section className="w-full h-screen">
        <Hero />
        <Suggestions />
        <Featured />
        <Faqs />
        <Footer />
      </section>
      <TabBar />
    </>
  )
}

export { Home }