// lib/data.ts
import type { LucideIcon } from "lucide-react"
import { Salad, Leaf, Flag, Recycle, Package, Ban } from "lucide-react"

// Define types for better type safety
export type Product = {
  id: string
  name: string
  description: string
  image: string
  price: number
  badges: string[]
  fullDescription: string
  ingredients: string
  nutritionalFacts: { item: string; value: string }[]
  suggestedUses: string
  available: boolean // Added availability status
  stockStatus?: string // Optional stock status message
}

export type WhyChooseItem = {
  icon: LucideIcon
  title: string
  description: string
}

export type SustainabilityItem = {
  icon: LucideIcon
  title: string
  description: string
}

export type SnackIdeaItem = {
  image: string
  text: string
}

export type TestimonialItem = {
  image: string
  quote: string
  name: string
}

export type FAQItem = {
  question: string
  answer: string
}

// New types for quiz and comparison data
export type QuizQuestion = {
  question: string
  options: { text: string; value: string }[]
}

export type ComparisonRow = {
  feature: string
  beetroot: string
  carrot: string
  avocado: string
}

// Product Data - Beetroot available, Carrot & Avocado out of stock
export const products: Product[] = [
  {
    id: "beetroot",
    name: "100g Beetroot Chips",
    description: "Naturally sweet and rich in antioxidants. Guilt-free snacking.",
    image: "/images/beetroot-chips-square.jpg", // Updated to use the new square image
    price: 140, // Updated price from 150 to 140
    badges: ["🌱 Vegan", "🧂 Low Salt", "❤️ No Preservatives", "🔥 Best Seller"],
    fullDescription:
      "Our Beetroot Chips are thinly sliced and gently dehydrated to preserve their vibrant color and earthy sweetness. Packed with essential vitamins and minerals, they make for a perfect healthy snack. Enjoy them straight from the bag or as a colorful addition to your meals. Each chip is a testament to our commitment to natural goodness and delightful crunch.",
    ingredients: "Fresh Beetroot, Cold-Pressed Sunflower Oil, Himalayan Pink Salt.",
    nutritionalFacts: [
      { item: "Calories", value: "140 kcal" },
      { item: "Fiber", value: "4g" },
      { item: "Protein", value: "2g" },
      { item: "Preservatives", value: "None" },
    ],
    suggestedUses: "Great for snacking, salads, dips, and travel.",
    available: true,
  },
  {
    id: "carrot",
    name: "100g Carrot Chips",
    description: "Crispy and naturally sweet, a great source of Vitamin A.",
    image: "https://via.placeholder.com/400x400/FFDDC1/000000?text=Carrot+Chips+Pack", // Specific dummy image
    price: 150,
    badges: ["🌱 Vegan", "🧂 Low Salt", "❤️ No Preservatives"],
    fullDescription:
      "Experience the delightful crunch of our Carrot Chips, made from farm-fresh carrots. These golden crisps are a fantastic way to enjoy your veggies, offering a subtly sweet flavor and a satisfying texture. Ideal for kids and adults alike.",
    ingredients: "Fresh Carrot, Cold-Pressed Sunflower Oil, Sea Salt.",
    nutritionalFacts: [
      { item: "Calories", value: "130 kcal" },
      { item: "Fiber", value: "3g" },
      { item: "Protein", value: "1.5g" },
      { item: "Preservatives", value: "None" },
    ],
    suggestedUses: "Perfect for a quick snack, lunchboxes, or as a garnish.",
    available: false,
    stockStatus: "Out of Stock",
  },
  {
    id: "avocado",
    name: "100g Avocado Chips",
    description: "Rich, creamy, and satisfying. A unique healthy indulgence.",
    image: "https://via.placeholder.com/400x400/FFDDC1/000000?text=Avocado+Chips+Pack", // Specific dummy image
    price: 150,
    badges: ["🌱 Vegan", "🧂 Low Salt", "❤️ No Preservatives", "✨ New"],
    fullDescription:
      "Our Avocado Chips offer a truly unique snacking experience. Made from ripe avocados, they are gently dried to create a crispy texture while retaining their natural creamy and nutty flavor. A wholesome and satisfying alternative to traditional chips.",
    ingredients: "Fresh Avocado, Cold-Pressed Sunflower Oil, Black Pepper, Himalayan Pink Salt.",
    nutritionalFacts: [
      { item: "Calories", value: "150 kcal" },
      { item: "Fiber", value: "5g" },
      { item: "Protein", value: "3g" },
      { item: "Preservatives", value: "None" },
    ],
    suggestedUses: "Excellent with salsa, guacamole, or as a standalone treat.",
    available: false,
    stockStatus: "Out of Stock",
  },
]

// Why Choose Vitabowl Data
export const whyChooseData: WhyChooseItem[] = [
  { icon: Salad, title: "100% Natural Ingredients", description: "We use only the finest, freshest vegetables." },
  { icon: Leaf, title: "No Preservatives / Additives", description: "Pure goodness, nothing artificial." },
  { icon: Flag, title: "Made in India with Love", description: "Supporting local farmers and communities." },
]

// Sustainability Commitment Data
export const sustainabilityData: SustainabilityItem[] = [
  { icon: Recycle, title: "Small-Batch Production", description: "Ensuring quality and minimizing waste." },
  { icon: Package, title: "Biodegradable Packaging", description: "Kind to the planet, from farm to your home." },
  { icon: Ban, title: "No Palm Oil", description: "Committed to ethical and sustainable sourcing." },
]

// Testimonials Data
export const testimonialsData: TestimonialItem[] = [
  {
    image: "https://via.placeholder.com/80x80/CCCCCC/000000?text=Priya+S.", // Specific dummy image
    quote:
      "I never thought healthy chips could taste this good! Vitabowl has changed my snacking habits for the better.",
    name: "Priya S.",
  },
  {
    image: "https://via.placeholder.com/80x80/CCCCCC/000000?text=Rahul+K.", // Specific dummy image
    quote: "The Beetroot chips are my absolute favorite. So crunchy and satisfying without any guilt.",
    name: "Rahul K.",
  },
  {
    image: "https://via.placeholder.com/80x80/CCCCCC/000000?text=Anjali+D.", // Specific dummy image
    quote: "Finally, a snack that is both delicious and truly healthy. Vitabowl is a game-changer!",
    name: "Anjali D.",
  },
]

// FAQs Data
export const faqsData: FAQItem[] = [
  {
    question: "Are your chips vegan?",
    answer: "Yes, all our chips are 100% plant-based and made with natural ingredients.",
  },
  {
    question: "How do I order?",
    answer: "Just click the WhatsApp button and send a message. Our team will guide you through the rest!",
  },
  {
    question: "Do you ship nationwide?",
    answer: "Yes, pan-India shipping is available. Delivery times may vary based on your location.",
  },
]

// Quiz Questions Data
export const quizQuestions: QuizQuestion[] = [
  {
    question: "What's your ideal snack time?",
    options: [
      { text: "Morning boost", value: "beetroot" },
      { text: "Mid-day munchies", value: "carrot" },
      { text: "Evening indulgence", value: "avocado" },
    ],
  },
  {
    question: "Which flavor profile do you prefer?",
    options: [
      { text: "Sweet & earthy", value: "beetroot" },
      { text: "Subtly sweet & crisp", value: "carrot" },
      { text: "Rich & savory", value: "avocado" },
    ],
  },
  {
    question: "What's your go-to activity while snacking?",
    options: [
      { text: "Working or studying", value: "beetroot" },
      { text: "Watching a movie", value: "carrot" },
      { text: "Relaxing with a book", value: "avocado" },
    ],
  },
]

// Product Comparison Data
export const comparisonData: ComparisonRow[] = [
  { feature: "Main Ingredient", beetroot: "Beetroot", carrot: "Carrot", avocado: "Avocado" },
  { feature: "Flavor Profile", beetroot: "Earthy, Sweet", carrot: "Mildly Sweet, Crisp", avocado: "Creamy, Nutty" },
  {
    feature: "Key Nutrients",
    beetroot: "Antioxidants, Fiber",
    carrot: "Vitamin A, Fiber",
    avocado: "Healthy Fats, Fiber",
  },
  { feature: "Texture", beetroot: "Crispy, Light", carrot: "Crunchy, Thin", avocado: "Delicate, Rich" },
  { feature: "Best For", beetroot: "Energy boost, Salads", carrot: "Kids, Lunchboxes", avocado: "Dips, Indulgence" },
]

// Social Media & Contact Information
export const WHATSAPP_PHONE_NUMBER = "919500458882" // Updated WhatsApp number
export const CONTACT_EMAIL = "srinathrajasekaran2006@gmail.com" // Contact email
export const INSTAGRAM_HANDLE = "vitabowll" // Updated to your actual Instagram handle
