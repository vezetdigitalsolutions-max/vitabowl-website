import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { faqsData } from "@/lib/data"

export default function FAQsSection() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-12 md:mb-16">
        <Badge className="mb-3 md:mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100 text-sm">
          ❓ Help Center
        </Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-800 px-4">
          Frequently Asked Questions
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
          Find answers to common questions about our healthy veggie chips
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
          {faqsData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-4 md:px-6 py-2 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold text-gray-800 hover:no-underline text-left hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-gray-700 leading-relaxed pt-2 pb-3 md:pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
