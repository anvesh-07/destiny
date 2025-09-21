import { AnimatedGroup } from "../general/animated-group"


export const HowItWorks = () => {
  return (
            <section id="how-it-works" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedGroup preset="fade" className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#0F0F0F] sm:text-4xl text-balance">
                Your Dream Trip in 3 Simple Steps
              </h2>
            </AnimatedGroup>

            <AnimatedGroup preset="bounce" className="grid md:grid-cols-3 gap-8 lg:gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6D28D9] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0F0F0F] mb-4">Tell Us Your Dream Trip</h3>
                <p className="text-gray-600 text-pretty">
                  Describe your destination, budget, interests, and travel style.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0F0F0F] mb-4">Get Your Instant AI Itinerary</h3>
                <p className="text-gray-600 text-pretty">
                  Watch as Destiny builds a complete, day-by-day plan in seconds.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#14B8A6] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0F0F0F] mb-4">Confirm & Travel Smarter</h3>
                <p className="text-gray-600 text-pretty">
                  Finalize your plan, book everything in one click, and get live support on your journey.
                </p>
              </div>
            </AnimatedGroup>
          </div>
        </section>
  )
}