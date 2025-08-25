import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee, Salad, Utensils, Pizza, Sandwich, Cookie } from "lucide-react"

export default function SnackIdeas() {
  const snackIdeasWithIcons = [
    {
      icon: Coffee,
      title: "Breakfast Boost",
      text: "Crumble on yogurt, smoothie bowls, or oatmeal",

    },
    {
      icon: Utensils,
      title: "Dip & Enjoy",
      text: "Perfect with hummus, guac, or cream cheese",

    },
    {
      icon: Salad,
      title: "Salad Topper",
      text: "Add crunch to any salad or soup",

    },
    {
      icon: Pizza,
      title: "Party Snack",
      text: "Serve at gatherings with cheese boards",

    },
    {
      icon: Sandwich,
      title: "Lunch Crunch",
      text: "Layer in sandwiches or wraps for texture",

    },
    {
      icon: Cookie,
      title: "Sweet Treat",
      text: "Mix into trail mix or granola",

    },
  ]

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="text-center mb-12 md:mb-16">
        <Badge className="mb-3 md:mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100 text-sm">
          🍽️ Recipe Ideas
        </Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-800 px-4">
          Creative Snack Ideas
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
          Discover delicious ways to enjoy your Vitabowl chips beyond just snacking
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {snackIdeasWithIcons.map((idea, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
          >
            <CardContent className="p-8 text-center">
              <div className="mb-6 relative">
                <div className="w-20 h-20 mx-auto bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                  <idea.icon className="h-10 w-10 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                {idea.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {idea.text}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Call to Action */}
      <div className="mt-12 md:mt-16 text-center bg-orange-50 rounded-2xl p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-800">Got Your Own Creative Idea?</h3>
        <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">Share your unique ways of enjoying Vitabowl chips with our community!</p>
        <Badge className="bg-orange-600 text-white hover:bg-orange-700 text-sm">
          #VitabowlCreations
        </Badge>
      </div>
    </div>
  )
}
