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
    ingredients: "Fresh Beetroot, Cold-Pressed Sunflower Oil, Himalayan Pink Salt. No artificial colors, preservatives, or additives.",
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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='400' height='400' fill='white'/%3E%3Ccircle cx='200' cy='200' r='120' fill='none' stroke='%23FF8C00' stroke-width='6' stroke-dasharray='15,8'/%3E%3Ctext x='200' y='210' text-anchor='middle' font-size='24' font-weight='bold' fill='%23FF8C00'%3ECOMING SOON%3C/text%3E%3C/svg%3E",
    price: 150,
    badges: ["🌱 Vegan", "🧂 Low Salt", "❤️ No Preservatives"],
    fullDescription:
      "Experience the delightful crunch of our Carrot Chips, made from farm-fresh carrots. These golden crisps are a fantastic way to enjoy your veggies, offering a subtly sweet flavor and a satisfying texture. Ideal for kids and adults alike.",
    ingredients: "Fresh Carrot, Cold-Pressed Sunflower Oil, Sea Salt. Rich in natural Beta-Carotene and Vitamin A.",
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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='400' height='400' fill='white'/%3E%3Ccircle cx='200' cy='200' r='120' fill='none' stroke='%239ACD32' stroke-width='6' stroke-dasharray='15,8'/%3E%3Ctext x='200' y='210' text-anchor='middle' font-size='24' font-weight='bold' fill='%239ACD32'%3ECOMING SOON%3C/text%3E%3C/svg%3E",
    price: 150,
    badges: ["🌱 Vegan", "🧂 Low Salt", "❤️ No Preservatives", "✨ New"],
    fullDescription:
      "Our Avocado Chips offer a truly unique snacking experience. Made from ripe avocados, they are gently dried to create a crispy texture while retaining their natural creamy and nutty flavor. A wholesome and satisfying alternative to traditional chips.",
    ingredients: "Fresh Avocado, Cold-Pressed Sunflower Oil, Black Pepper, Himalayan Pink Salt. Packed with healthy monounsaturated fats.",
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
    question: "Are your chips vegan and gluten-free?",
    answer: "Yes, all our chips are 100% plant-based, vegan, and naturally gluten-free. Made with only fresh vegetables, cold-pressed oil, and natural salt.",
  },
  {
    question: "How do I place an order?",
    answer: "Simply click the WhatsApp button on our website or call us directly. Our friendly team will help you choose products and arrange delivery to your doorstep.",
  },
  {
    question: "Do you deliver across India?",
    answer: "Yes, we offer pan-India shipping! Delivery typically takes 2-5 business days depending on your location. Free shipping on orders above ₹500.",
  },
  {
    question: "How long do the chips stay fresh?",
    answer: "Our chips have a shelf life of 6 months when stored in a cool, dry place. Once opened, consume within 7 days for best taste and crunch.",
  },
  {
    question: "What makes Vitabowl chips healthier than regular chips?",
    answer: "Unlike regular chips, we use no preservatives, artificial colors, or palm oil. Our chips are gently dehydrated to retain nutrients and natural flavors.",
  },
  {
    question: "Can I return or exchange products?",
    answer: "We offer a 100% satisfaction guarantee. If you're not happy with your order, contact us within 24 hours of delivery for a full refund or replacement.",
  },
  {
    question: "Are there any allergens in your products?",
    answer: "Our chips are made in a facility that processes nuts. Please check individual product labels for specific allergen information if you have severe allergies.",
  },
  {
    question: "Do you offer bulk orders or corporate gifting?",
    answer: "Yes! We provide special pricing for bulk orders (50+ packs) and corporate gifting. Contact us on WhatsApp for custom quotes and packaging options.",
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
export const WHATSAPP_PHONE_NUMBER = "919894789309" // Updated WhatsApp number
export const CONTACT_EMAIL = "vitabowl7676@gmail.com" // Contact email
export const INSTAGRAM_HANDLE = "myvitabowl" // Updated to your actual Instagram handle
