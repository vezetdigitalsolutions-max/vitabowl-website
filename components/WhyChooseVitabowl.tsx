import { whyChooseData } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WhyChooseVitabowl() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12 text-gray-800">
        Why Choose Vitabowl?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {whyChooseData.map((item, index) => (
          <Card
            key={index}
            className="text-center p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="pb-4">
              <item.icon className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold text-gray-800">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
