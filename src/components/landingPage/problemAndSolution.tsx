"use client";

import React, { useMemo } from 'react';
import { motion, easeInOut, backOut, easeOut } from 'framer-motion';
import { MapPin, Sparkles, Users, Calendar, Star, ArrowRight } from 'lucide-react';

interface ProblemAndSolutionProps {
  className?: string;
}

const ProblemAndSolution: React.FC<ProblemAndSolutionProps> = ({ 
  className = "" 
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeInOut
      }
    }
  };

  const iconVariants = {
    hidden: { 
      opacity: 0, 
      rotate: -180,
      scale: 0
    },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: backOut
      }
    }
  };

  const backgroundVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: easeOut
      }
    }
  };

  const problemPoints = [
    {
      icon: Users,
      text: "Generic itineraries that feel like everyone else's vacation"
    },
    {
      icon: Calendar,
      text: "Hours spent researching destinations and activities"
    },
    {
      icon: MapPin,
      text: "Missing hidden gems and authentic local experiences"
    }
  ];

  const solutionPoints = [
    {
      icon: Sparkles,
      text: "AI-powered personalized travel recommendations"
    },
    {
      icon: Star,
      text: "Curated experiences based on your unique preferences"
    },
    {
      icon: ArrowRight,
      text: "Instant itineraries with insider local knowledge"
    }
  ];

  return (
    <div className={`relative min-h-screen bg-background overflow-hidden ${className}`}>
      {/* Animated Background Elements */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Floating Particles (hydration-safe) */}
      {useMemo(() => {
        const particles = Array.from({ length: 6 }, (_, i) => ({
          left: `${(i * 17 + 13) % 100}%`,
          top: `${(i * 29 + 37) % 100}%`,
          duration: 3 + (i * 0.5),
          delay: i * 0.3,
        }));
        return particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{ left: p.left, top: p.top }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ));
      }, [])}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-6 py-20"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Problem Side */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl blur-xl"
                variants={backgroundVariants}
              />
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
                <motion.h2
                  variants={itemVariants}
                  className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
                >
                  Tired of{' '}
                  <motion.span
                    className="text-red-500 relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Cookie-Cutter
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-red-500/30 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1, duration: 0.8, ease: easeInOut }}
                    />
                  </motion.span>{' '}
                  Trips?
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-lg text-muted-foreground mb-8 leading-relaxed"
                >
                  Stop settling for boring, one-size-fits-all travel experiences that leave you feeling like just another tourist.
                </motion.p>

                <motion.div
                  variants={containerVariants}
                  className="space-y-6"
                >
                  {problemPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-start space-x-4 group"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        variants={iconVariants}
                        className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center group-hover:bg-red-500/20 transition-colors duration-300"
                      >
                        <point.icon className="w-6 h-6 text-red-500" />
                      </motion.div>
                      <motion.p
                        variants={itemVariants}
                        className="text-muted-foreground leading-relaxed pt-2"
                      >
                        {point.text}
                      </motion.p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl blur-xl"
                variants={backgroundVariants}
              />
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
                <motion.h2
                  variants={itemVariants}
                  className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
                >
                  Meet{' '}
                  <motion.span
                    className="text-primary relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Destiny
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.2, duration: 0.8, ease: easeInOut }}
                    />
                  </motion.span>
                  .{' '}
                  <motion.span
                    className="block text-3xl lg:text-4xl text-muted-foreground mt-2"
                    variants={itemVariants}
                  >
                    Your Personal Travel Genius.
                  </motion.span>
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-lg text-muted-foreground mb-8 leading-relaxed"
                >
                  Experience travel planning reimagined with AI that understands your unique style and creates unforgettable journeys.
                </motion.p>

                <motion.div
                  variants={containerVariants}
                  className="space-y-6"
                >
                  {solutionPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-start space-x-4 group"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        variants={iconVariants}
                        className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                      >
                        <point.icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <motion.p
                        variants={itemVariants}
                        className="text-muted-foreground leading-relaxed pt-2"
                      >
                        {point.text}
                      </motion.p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="mt-8 pt-6 border-t border-border"
                >
                  <motion.button
                    className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Start Your Journey
                    <motion.span
                      className="inline-block ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        ease: easeInOut
                      }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProblemAndSolution;
