import { testimonialsData } from "@/lib/data"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12 text-gray-800">
        What Our Snackers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <Card
            key={index}
            className="p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-lg italic text-gray-700 mb-4">"{testimonial.quote}"</p>
            <p className="font-semibold text-gray-800">- {testimonial.name}</p>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-lg font-medium">
          <div className="flex items-center mr-2">
            <Star className="h-5 w-5 fill-primary text-primary" />
            <Star className="h-5 w-5 fill-primary text-primary" />
            <Star className="h-5 w-5 fill-primary text-primary" />
            <Star className="h-5 w-5 fill-primary text-primary" />
            <Star className="h-5 w-5 fill-primary text-primary" />
          </div>
          {"4.9/5 rating from 2,000+ snack lovers"}
        </div>
      </div>
    </div>
  )
}
