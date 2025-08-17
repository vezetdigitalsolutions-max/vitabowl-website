import Link from "next/link"
import Image from "next/image"

type LogoProps = {
  className?: string
  textSize?: string
  imageWidth?: number // New prop for image width
  imageHeight?: number // New prop for image height
}

export default function Logo({ className, textSize = "text-xl", imageWidth = 40, imageHeight = 40 }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-1 ${className}`}>
      <Image
        src="/images/vitabowl-logo-graphic.png"
        alt="Vitabowl Graphic Logo"
        width={imageWidth} // Use prop for width
        height={imageHeight} // Use prop for height
        priority
        className="mr-1"
      />
      <span className={`font-montserrat font-bold text-primary ${textSize}`}>Vita</span>
      <span className={`font-montserrat font-bold text-secondary ${textSize}`}>Bowl</span>
    </Link>
  )
}
