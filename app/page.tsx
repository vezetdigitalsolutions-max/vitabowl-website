import HeroSection from "@/components/HeroSection"
import ProductShowcase from "@/components/ProductShowcase"
import WhyChooseVitabowl from "@/components/WhyChooseVitabowl"
import SustainabilityCommitment from "@/components/SustainabilityCommitment"
import SnackIdeas from "@/components/SnackIdeas"
import Testimonials from "@/components/Testimonials"
import FAQsSection from "@/components/FAQsSection"
import EmailCapture from "@/components/EmailCapture"
import Footer from "@/components/Footer"
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton"
import AddToHomeScreenPrompt from "@/components/AddToHomeScreenPrompt"
import Navbar from "@/components/Navbar"
import { organizationSchema, websiteSchema } from "./structured-data"

export default function Home() {
  return (
    <div className="relative">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      
      <Navbar />
      <HeroSection />
      <main className="relative z-10 bg-background">
        <section id="products" className="py-8 lg:py-12">
          <ProductShowcase />
        </section>
        <section className="py-8 lg:py-12 bg-muted/20">
          <WhyChooseVitabowl />
        </section>
        <section className="py-8 lg:py-12">
          <SustainabilityCommitment />
        </section>
        <section className="py-8 lg:py-12 bg-muted/20">
          <SnackIdeas />
        </section>
        <section className="py-8 lg:py-12">
          <Testimonials />
        </section>
        <section id="faqs" className="py-8 lg:py-12">
          <FAQsSection />
        </section>
        <section className="py-8 lg:py-12 bg-muted/20">
          <EmailCapture />
        </section>
      </main>
      <WhatsAppFloatingButton />
      <AddToHomeScreenPrompt />
      <Footer />
    </div>
  )
}
