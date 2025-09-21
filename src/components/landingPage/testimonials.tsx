import { TestimonialsSection } from "../general/testimonials-section"


export const Testimonials = () => {
  return (
            <TestimonialsSection
          title="What Travelers Say"
          description="Join thousands who've discovered the future of travel planning"
          testimonials={[
            {
              author: {
                name: "Sarah M.",
                location: "Tokyo Explorer",
                icon: "tokyo",
              },
              text: "I used to spend weeks researching destinations and still missed the best spots. Destiny's AI found hidden gems I never would have discovered and planned everything perfectly.",
            },
            {
              author: {
                name: "Michael R.",
                location: "Europe Family Trip",
                icon: "europe",
              },
              text: "Planning a family trip to Europe was overwhelming until I found Destiny. The AI considered everyone's interests and created an itinerary that kept both kids and adults happy.",
            },
            {
              author: {
                name: "Priya K.",
                location: "Solo Adventurer",
                icon: "solo",
              },
              text: "As a solo female traveler, I was nervous about safety and logistics. Destiny's AI recommended safe neighborhoods, reliable transport, and even suggested local women's groups to connect with.",
            },
            {
              author: {
                name: "James L.",
                location: "Budget Traveler",
                icon: "budget",
              },
              text: "I'm terrible with budgets and always overspend on trips. Destiny's AI created a realistic budget breakdown and helped me stick to it without sacrificing experiences.",
            },
            {
              author: {
                name: "Amanda Chen",
                location: "Business Traveler",
                icon: "business",
              },
              text: "Last-minute business trip to Tokyo - I had zero time to plan. Destiny's AI created a perfect 3-day itinerary in under 5 minutes, including restaurant reservations.",
            },
            {
              author: {
                name: "Robert D.",
                location: "Accessible Travel",
                icon: "accessible",
              },
              text: "I have dietary restrictions and mobility issues. Most travel apps ignore this, but Destiny's AI found accessible restaurants and attractions that matched my needs perfectly.",
            },
          ]}
        />
  )
}