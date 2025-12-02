import Image from "next/image"

const FOOTER_CONFIG = {
  companyName: "DGrealtor",
  email: "DGrealtor@mail.in",
  address: {
    line1: "123 Business District",
    line2: "New York, NY 10001",
  },
}

// Inline SVG components to avoid lucide-react dependency
const MapPinIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const MailIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

export default function Footer() {
  return (
    <footer id="footer" className="bg-foreground text-background">
      <div className="w-full px-4 py-8 md:py-10 lg:py-14 xl:py-16 2xl:py-20">
        {/* Mobile Layout (< 640px) */}
        <div className="flex flex-col gap-5 sm:hidden">
          <div className="flex items-center justify-center gap-3">
            <div className="relative overflow-hidden rounded w-9 h-9">
              <Image src="/logos/footer-logo.jpg" alt="DGrealtor Logo" fill className="object-contain" />
            </div>
            <span className="font-serif font-semibold text-base">{FOOTER_CONFIG.companyName}</span>
          </div>

          <div className="text-center">
            <p className="font-semibold flex items-center justify-center gap-2 mb-1 text-xs">
              <MailIcon size={12} className="text-primary" />
              Email
            </p>
            <a
              href={`mailto:${FOOTER_CONFIG.email}`}
              className="text-background/80 hover:text-primary transition-colors text-xs"
            >
              {FOOTER_CONFIG.email}
            </a>
          </div>

          <div className="text-center">
            <p className="font-semibold flex items-center justify-center gap-2 mb-1 text-xs">
              <MapPinIcon size={12} className="text-primary" />
              Address
            </p>
            <p className="text-background/80 leading-relaxed text-xs">
              {FOOTER_CONFIG.address.line1}
              <br />
              {FOOTER_CONFIG.address.line2}
            </p>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden sm:flex lg:hidden flex-col gap-5 md:gap-6">
          <div className="flex items-center gap-3">
            <div className="relative overflow-hidden rounded w-10 h-10 md:w-12 md:h-12">
              <Image src="/logos/footer-logo.jpg" alt="DGrealtor Logo" fill className="object-contain" />
            </div>
            <span className="font-serif font-semibold text-lg md:text-xl">{FOOTER_CONFIG.companyName}</span>
          </div>

          <div className="flex items-end justify-between mt-1 md:mt-2">
            <div>
              <p className="font-semibold flex items-center gap-2 mb-1.5 md:mb-2 text-sm md:text-base">
                <MapPinIcon size={14} className="text-primary" />
                Address
              </p>
              <p className="text-background/80 leading-relaxed pl-5 md:pl-6 text-xs md:text-sm">
                {FOOTER_CONFIG.address.line1}
                <br />
                {FOOTER_CONFIG.address.line2}
              </p>
            </div>

            <div className="text-right">
              <p className="font-semibold flex items-center justify-end gap-2 mb-1.5 md:mb-2 text-sm md:text-base">
                <MailIcon size={14} className="text-primary" />
                Email
              </p>
              <a
                href={`mailto:${FOOTER_CONFIG.email}`}
                className="text-background/80 hover:text-primary transition-colors text-xs md:text-sm"
              >
                {FOOTER_CONFIG.email}
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:flex-row lg:items-end lg:justify-between gap-8 xl:gap-10 2xl:gap-12">
          <div className="flex flex-col gap-5 xl:gap-6 2xl:gap-8">
            <div className="flex items-center gap-4 xl:gap-5 2xl:gap-6">
              <div className="relative overflow-hidden rounded w-14 h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18">
                <Image src="/logos/footer-logo.jpg" alt="DGrealtor Logo" fill className="object-contain" />
              </div>
              <span className="font-serif font-semibold text-2xl xl:text-2xl 2xl:text-3xl">
                {FOOTER_CONFIG.companyName}
              </span>
            </div>

            <div className="pt-1 xl:pt-2 2xl:pt-3">
              <p className="font-semibold flex items-center gap-2 xl:gap-3 mb-3 xl:mb-4 2xl:mb-5 text-base xl:text-base 2xl:text-lg">
                <MapPinIcon size={18} className="text-primary" />
                Address
              </p>
              <p className="text-background/80 leading-relaxed pl-7 xl:pl-8 2xl:pl-9 text-base xl:text-base 2xl:text-lg">
                {FOOTER_CONFIG.address.line1}
                <br />
                {FOOTER_CONFIG.address.line2}
              </p>
            </div>
          </div>

          <div className="text-right pb-1 xl:pb-2 2xl:pb-3">
            <div className="flex flex-col items-end gap-2 xl:gap-3 2xl:gap-4">
              <p className="font-semibold flex items-center gap-2 xl:gap-3 text-base xl:text-base 2xl:text-lg">
                <MailIcon size={18} className="text-primary" />
                Email
              </p>
              <a
                href={`mailto:${FOOTER_CONFIG.email}`}
                className="text-background/80 hover:text-primary transition-colors text-base xl:text-base 2xl:text-lg"
              >
                {FOOTER_CONFIG.email}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-14 pt-4 md:pt-5 lg:pt-6 xl:pt-7 2xl:pt-8 border-t border-white/10">
          <p className="text-background/50 text-center text-xs md:text-sm xl:text-sm 2xl:text-base">
            © {new Date().getFullYear()} {FOOTER_CONFIG.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
