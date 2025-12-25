"use client"

import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_NUMBER = "919988940158" // replace with your number (country code + number)
const DEFAULT_MESSAGE = "Hello Adventurous Fabwears, I am interested in your fabrics."

export function FloatingWhatsApp() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        h-14 w-14 rounded-full
        bg-green-500 text-white
        shadow-lg
        hover:bg-green-600
        transition-transform duration-200
        hover:scale-105
        active:scale-95
      "
    >
      <FaWhatsapp className="h-10 w-14 text" />
    </Link>
  )
}
