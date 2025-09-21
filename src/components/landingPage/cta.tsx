import { AnimatedGroup } from "../general/animated-group"
import { Button } from "../ui/button"


export const CTA = () => {
  return (
            <section className="py-20 bg-[#6D28D9]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedGroup preset="fade" className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">
                Ready to Plan Your Next Adventure?
              </h2>
              <p className="mt-6 text-lg text-white/90 text-pretty">
                Let our AI craft your dream trip today. It&apos;s fast, easy, and free to start.
              </p>
              <div className="mt-8">
                <Button size="lg" className="bg-white text-[#6D28D9] hover:bg-white/90 font-semibold">
                  Start Planning Now
                </Button>
              </div>
            </AnimatedGroup>
          </div>
        </section>
  )
}