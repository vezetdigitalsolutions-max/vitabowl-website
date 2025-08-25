export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Vitabowl",
  "description": "India's healthiest veggie chips with 100% natural ingredients",
  "url": "https://vitabowl.vercel.app",
  "logo": "https://vitabowl.vercel.app/images/vitabowl-logo-graphic.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-98947-89309",
    "contactType": "Customer Service",
    "availableLanguage": ["English", "Hindi"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "India"
  },
  "sameAs": [
    "https://instagram.com/myvitabowl",
    "https://wa.me/919894789309"
  ]
}

export const productSchema = (product: any) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.fullDescription,
  "image": `https://vitabowl.vercel.app${product.image}`,
  "brand": {
    "@type": "Brand",
    "name": "Vitabowl"
  },
  "offers": {
    "@type": "Offer",
    "price": product.price,
    "priceCurrency": "INR",
    "availability": product.available ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    "seller": {
      "@type": "Organization",
      "name": "Vitabowl"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500"
  }
})

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Vitabowl",
  "url": "https://vitabowl.vercel.app",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://vitabowl.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}