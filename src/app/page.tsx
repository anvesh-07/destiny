"use client";

import React, { useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { HeroHeader } from "@/components/landingPage/heroHeader";
import { Hero } from "@/components/landingPage/hero";
import { KeyFeatures } from "@/components/landingPage/keyFeatures";
import { HowItWorks } from "@/components/landingPage/hoeItWorks";
import { About } from "@/components/landingPage/about";
import { CTA } from "@/components/landingPage/cta";
import { Footer } from "@/components/landingPage/footer";
import { Testimonials } from "@/components/landingPage/testimonials";
import ProblemAndSolution from "@/components/landingPage/problemAndSolution";
import JourneyPlanner from "@/components/journey/JourneyPlanner";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Or a proper loading spinner
  }

  return (
    <>
      {user ? (
        <JourneyPlanner />
      ) : (
        <>
          <HeroHeader />
          <main className="overflow-hidden">
            {/* Hero Section */}
            <Hero />

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
      )}
    </>
  );
}
