import { testimonialsData } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-12 md:mb-16">
        <Badge className="mb-3 md:mb-4 bg-yellow-100 text-yellow-800 hover:bg-yellow-100 text-sm">
          💬 Customer Reviews
        </Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-800 px-4">
          What Our Snackers Say
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
          Real feedback from our happy customers who love healthy snacking
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
        {testimonialsData.map((testimonial, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
          >
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-200 transition-colors duration-300">
                  <Quote className="h-8 w-8 text-yellow-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">Verified Customer</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Overall Rating */}
      <div className="bg-yellow-50 rounded-2xl p-6 md:p-8 text-center">
        <div className="flex justify-center mb-3 md:mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-6 w-6 md:h-8 md:w-8 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2">4.9/5</h3>
        <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">Based on 500+ happy customers</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
          <div className="bg-white rounded-lg p-3 md:p-4 shadow-sm">
            <div className="text-xl md:text-2xl font-bold text-yellow-600 mb-1">98%</div>
            <div className="text-xs md:text-sm text-gray-600">Would Recommend</div>
          </div>
          <div className="bg-white rounded-lg p-3 md:p-4 shadow-sm">
            <div className="text-xl md:text-2xl font-bold text-yellow-600 mb-1">500+</div>
            <div className="text-xs md:text-sm text-gray-600">Happy Customers</div>
          </div>
          <div className="bg-white rounded-lg p-3 md:p-4 shadow-sm">
            <div className="text-xl md:text-2xl font-bold text-yellow-600 mb-1">5⭐</div>
            <div className="text-xs md:text-sm text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  )
}
