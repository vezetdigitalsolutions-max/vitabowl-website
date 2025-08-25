import { whyChooseData } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function WhyChooseVitabowl() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-12 md:mb-16">
        <Badge className="mb-3 md:mb-4 bg-primary/10 text-primary hover:bg-primary/10 text-sm">
          ⭐ Premium Choice
        </Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-800 px-4">
          Why Choose Vitabowl?
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
          We're committed to bringing you the healthiest, most delicious veggie chips made with love in India
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
        {whyChooseData.map((item, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
          >
            <CardContent className="p-8 text-center">
              <div className="mb-6 relative">
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>
        ))}
      </div>
      
      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <Card className="p-4 md:p-6 text-center hover:shadow-lg transition-shadow">
          <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">100%</div>
          <div className="text-xs md:text-sm text-gray-600">Natural</div>
        </Card>
        <Card className="p-4 md:p-6 text-center hover:shadow-lg transition-shadow">
          <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">0</div>
          <div className="text-xs md:text-sm text-gray-600">Preservatives</div>
        </Card>
        <Card className="p-4 md:p-6 text-center hover:shadow-lg transition-shadow">
          <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">Fresh</div>
          <div className="text-xs md:text-sm text-gray-600">Daily Made</div>
        </Card>
        <Card className="p-4 md:p-6 text-center hover:shadow-lg transition-shadow">
          <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">India</div>
          <div className="text-xs md:text-sm text-gray-600">Made With Love</div>
        </Card>
      </div>
    </div>
  )
}
