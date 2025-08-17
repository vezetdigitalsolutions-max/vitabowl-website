"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { WHATSAPP_PHONE_NUMBER, CONTACT_EMAIL } from "@/lib/data"
import Logo from "@/components/Logo" // Import Logo

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center text-primary hover:underline font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 mr-2"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Home
        </Link>
        <Logo textSize="text-xl" /> {/* Use text-based logo */}
      </div>
      <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-12 text-gray-800">About Vitabowl</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://via.placeholder.com/800x600/F0F0F0/000000?text=Our+Story+Image" // Specific dummy image
            alt="Vitabowl Story"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Vitabowl was born from a simple idea: healthy snacking should be delicious, natural, and accessible. In a
            world full of processed foods, we set out to create a snack that truly nourishes your body without
            compromising on taste or quality. We believe in the power of nature's bounty, transformed into crispy,
            satisfying chips.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Every bag of Vitabowl chips is a testament to our commitment to purity and passion. We source the freshest
            vegetables directly from Indian farms, ensuring that each chip is packed with wholesome goodness. Our unique
            dehydration process locks in nutrients and flavor, giving you a guilt-free snack that's perfect for any time
            of day.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-row-reverse mb-16">
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://via.placeholder.com/800x600/F0F0F0/000000?text=Our+Mission+Image" // Specific dummy image
            alt="Vitabowl Mission"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our mission is to revolutionize snacking by offering truly natural, preservative-free, and delicious veggie
            chips. We are dedicated to promoting a healthier lifestyle across India, one crispy bite at a time. We
            prioritize sustainable practices, from small-batch production to biodegradable packaging, ensuring our
            impact on the planet is as positive as our impact on your health.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are constantly innovating to bring you new and exciting flavors, always staying true to our core values
            of natural ingredients and uncompromising quality. Join us on our journey to make healthy snacking a joyful
            and effortless part of your daily life.
          </p>
        </div>
      </div>

      <div className="text-center py-12 bg-muted/20 rounded-xl shadow-inner">
        <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-6">Have Questions?</h2>
        <p className="text-lg text-gray-700 mb-8">We'd love to hear from you! Reach out to us via WhatsApp or email.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="bg-[#25D366] text-white hover:bg-[#1DA851] py-3 text-lg"
            onClick={() => window.open(`https://wa.me/${WHATSAPP_PHONE_NUMBER}`, "_blank")}
          >
            Chat on WhatsApp
          </Button>
          <a href={`mailto:${CONTACT_EMAIL}`}>
            <Button
              size="lg"
              variant="outline"
              className="py-3 text-lg bg-transparent border-primary text-primary hover:bg-primary/10"
            >
              Email Us
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
