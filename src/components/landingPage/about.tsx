import { AnimatedGroup } from "../general/animated-group"


export const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0F0F0F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedGroup preset="fade" className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">Why We Built Destiny</h2>
          <p className="mt-6 text-lg text-white/90 text-pretty">
            Our mission is to make travel smarter, more inclusive, and stress-free. We combine AI personalization
            with multilingual support to help you discover authentic local experiences, saving you time and money
            while boosting local tourism.
          </p>
        </AnimatedGroup>
      </div>
    </section>
  )
}