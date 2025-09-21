import { Brain, CreditCard, RefreshCw, Settings, Wallet } from "lucide-react"
import { AnimatedGroup } from "../general/animated-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"


export const KeyFeatures = () => {
  return (
          <section id="features" className="py-20 bg-[#F5F5F5]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedGroup preset="blur-slide" className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#0F0F0F] sm:text-4xl text-balance">
                Everything You Need for the Perfect Journey
              </h2>
            </AnimatedGroup>

            <AnimatedGroup preset="scale" className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#6D28D9]/10 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-[#6D28D9]" />
                  </div>
                  <CardTitle className="text-[#0F0F0F]">Smart Itinerary & Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Builds live, personalized trip plans with AI suggestions and community-recommended local spots.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#2563EB]/10 rounded-lg flex items-center justify-center mb-4">
                    <RefreshCw className="h-6 w-6 text-[#2563EB]" />
                  </div>
                  <CardTitle className="text-[#0F0F0F]">Flexible Editing & Real-Time Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Easily edit plans anytime, with instant changes and alerts for disruptions like weather or delays.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#14B8A6]/10 rounded-lg flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-[#14B8A6]" />
                  </div>
                  <CardTitle className="text-[#0F0F0F]">All-in-One Booking & Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Seamlessly book hotels, transport, and activities with quick, secure payments and instant
                    confirmations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#6D28D9]/10 rounded-lg flex items-center justify-center mb-4">
                    <Settings className="h-6 w-6 text-[#6D28D9]" />
                  </div>
                  <CardTitle className="text-[#0F0F0F]">Easy Onboarding & Preferences</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Simplifies signup and preference setup (food, travel style, interests) to customize your experience
                    from the start.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#14B8A6]/10 rounded-lg flex items-center justify-center mb-4">
                    <Wallet className="h-6 w-6 text-[#14B8A6]" />
                  </div>
                  <CardTitle className="text-[#0F0F0F]">Budget & Expense Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Tracks costs against your budget, offers smart saving tips, and monitors your expenses throughout
                    the trip.
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedGroup>
          </div>
        </section>
  )
}