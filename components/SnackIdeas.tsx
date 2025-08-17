import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Coffee, Salad, Utensils } from "lucide-react"

export default function SnackIdeas() {
  const snackIdeasWithIcons = [
    {
      icon: Coffee,
      text: "Crumble on top of yogurt bowls",
    },
    {
      icon: Utensils,
      text: "Pair with hummus or guac",
    },
    {
      icon: Salad,
      text: "Toss into your salad for crunch",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12 text-gray-800">
        Creative Snack Ideas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {snackIdeasWithIcons.map((idea, index) => (
          <Card
            key={index}
            className="text-center p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="pb-4">
              <idea.icon className="h-12 w-12 text-primary mb-4" />
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium text-gray-700">{idea.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
