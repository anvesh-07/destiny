
import React from "react"
import { HeroHeader } from "@/components/landingPage/heroHeader"
import { Hero } from "@/components/landingPage/hero"
import { KeyFeatures } from "@/components/landingPage/keyFeatures"
import { HowItWorks } from "@/components/landingPage/hoeItWorks"
import { About } from "@/components/landingPage/about"
import { CTA } from "@/components/landingPage/cta"
import { Footer } from "@/components/landingPage/footer"
import { Testimonials } from "@/components/landingPage/testimonials"
import ProblemAndSolution from "@/components/landingPage/problemAndSolution"



export default function Home() {
  return (

    <>
      <HeroHeader />

      <main className="overflow-hidden">
        {/* Hero Section */}
        <Hero/>

        {/* Problem & Solution Section */}
        <ProblemAndSolution />

        {/* Key Features Section */}
        <KeyFeatures />

        {/* How It Works Section */}
        <HowItWorks />

        {/* About Section */}
        <About />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Final CTA Section */}
        <CTA />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}





