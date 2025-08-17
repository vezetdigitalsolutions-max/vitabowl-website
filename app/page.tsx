import HeroSection from "@/components/HeroSection"
import ProductShowcase from "@/components/ProductShowcase"
import WhyChooseVitabowl from "@/components/WhyChooseVitabowl"
import SustainabilityCommitment from "@/components/SustainabilityCommitment"
import SnackIdeas from "@/components/SnackIdeas"
import Testimonials from "@/components/Testimonials"
import FAQsSection from "@/components/FAQsSection"
import EmailCapture from "@/components/EmailCapture"
import Footer from "@/components/Footer"
// Removed: import { CartProvider } from "@/components/CartProvider" // No longer needed here
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton"
import AddToHomeScreenPrompt from "@/components/AddToHomeScreenPrompt"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <main className="relative z-10 bg-background">
        <section id="products" className="py-16 lg:py-24">
          <ProductShowcase />
        </section>
        <section className="py-16 lg:py-24 bg-muted/20">
          <WhyChooseVitabowl />
        </section>
        <section className="py-16 lg:py-24">
          <SustainabilityCommitment />
        </section>
        <section className="py-16 lg:py-24 bg-muted/20">
          <SnackIdeas />
        </section>
        <section className="py-16 lg:py-24">
          <Testimonials />
        </section>
        <section id="faqs" className="py-16 lg:py-24">
          <FAQsSection />
        </section>
        <section className="py-16 lg:py-24 bg-muted/20">
          <EmailCapture />
        </section>
      </main>
      <WhatsAppFloatingButton />
      <AddToHomeScreenPrompt />
      <Footer />
    </div>
  )
}
