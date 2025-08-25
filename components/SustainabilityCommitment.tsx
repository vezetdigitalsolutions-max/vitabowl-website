import { sustainabilityData } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SustainabilityCommitment() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-12 md:mb-16">
        <Badge className="mb-3 md:mb-4 bg-green-100 text-green-800 hover:bg-green-100 text-sm">
          🌱 Eco-Friendly
        </Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-800 px-4">
          Our Commitment to Sustainability
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
          We believe in creating delicious snacks while protecting our planet for future generations
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
        {sustainabilityData.map((item, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
          >
            <CardContent className="p-8 text-center">
              <div className="mb-6 relative">
                <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                  <item.icon className="h-10 w-10 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Environmental Impact */}
      <div className="bg-green-50 rounded-2xl p-6 md:p-8 text-center">
        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Our Environmental Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1 md:mb-2">100%</div>
            <div className="text-xs md:text-sm text-gray-600">Biodegradable Packaging</div>
          </div>
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1 md:mb-2">Zero</div>
            <div className="text-xs md:text-sm text-gray-600">Food Waste</div>
          </div>
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1 md:mb-2">Local</div>
            <div className="text-xs md:text-sm text-gray-600">Sourcing</div>
          </div>
        </div>
      </div>
    </div>
  )
}
