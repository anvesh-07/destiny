import { AnimatedGroup } from "../general/animated-group"
import { DestinyAppPreview } from "../general/DestinyAppPreview"
import { Button } from "../ui/button"
import { transitionVariants } from "../varients/transitionVariants"

export const Hero = () => {
  return (
    <section className="relative">
      <div className="relative bg-gradient-to-br from-[#6D28D9] via-[#2563EB] to-[#0F0F0F] min-h-screen flex items-center">
        <div className="relative mx-auto max-w-6xl px-6 py-32 lg:py-48">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <h1 className="text-balance text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                Plan Your Perfect Trip with <span className="text-[#14B8A6]">AI</span>
              </h1>

              <p className="mt-6 max-w-2xl text-pretty text-lg text-white/90">
                Personalized itineraries tailored to your budget, interests, and time — in seconds.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-[#6D28D9] hover:bg-white/90 font-semibold">
                  Start Planning Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </AnimatedGroup>

            <div className="relative">
              <div className="relative mx-auto w-80 lg:w-96">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6D28D9] to-[#2563EB] rounded-3xl blur-3xl opacity-30"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <DestinyAppPreview />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}