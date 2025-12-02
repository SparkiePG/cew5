"use client"

import Image from "next/image"

const companies = [
  { name: "TechCorp", logo: "/company-logos/techcorp-logo.jpg" },
  { name: "BuildRight", logo: "/company-logos/buildright-logo.jpg" },
  { name: "Metro Solutions", logo: "/company-logos/metro-solutions-logo.jpg" },
  { name: "Urban Spaces", logo: "/company-logos/urban-spaces-logo.jpg" },
  { name: "Prime Ventures", logo: "/company-logos/prime-ventures-logo.jpg" },
  { name: "Global Assets", logo: "/company-logos/global-assets-logo.jpg" },
]

const MIN_ITEMS_FOR_LOOP = 8

export default function CompaniesCarousel() {
  const getDisplayItems = () => {
    if (companies.length === 0) return []
    if (companies.length === 1) {
      return Array(MIN_ITEMS_FOR_LOOP).fill(companies[0])
    }
    let items = [...companies]
    while (items.length < MIN_ITEMS_FOR_LOOP) {
      items = [...items, ...companies]
    }
    return items
  }

  const displayItems = getDisplayItems()

  return (
    <section
      id="companies"
      className="overflow-hidden w-full py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 scroll-mt-14 sm:scroll-mt-16 lg:scroll-mt-20"
      style={{ backgroundColor: "#f0efe7" }}
    >
      <div className="w-full max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex justify-center mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16">
          <h2 className="font-serif text-foreground italic tracking-wide text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl">
            Company worked with
          </h2>
        </div>
      </div>

      <div className="w-full infinite-scroll-container">
        <div className="infinite-scroll-track infinite-scroll-right scroll-slower flex items-center">
          {displayItems.map((company, index) => (
            <div
              key={`a-${index}`}
              className="infinite-scroll-item flex items-center justify-center flex-shrink-0 w-28 h-14 sm:w-36 sm:h-18 md:w-40 md:h-20 lg:w-48 lg:h-24 xl:w-52 xl:h-28 2xl:w-60 2xl:h-32 mx-3 sm:mx-4 md:mx-5 lg:mx-6 xl:mx-7 2xl:mx-8"
            >
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                width={240}
                height={120}
                className="w-full h-full object-contain grayscale opacity-50 hover:opacity-70 transition-opacity duration-300"
              />
            </div>
          ))}
          {displayItems.map((company, index) => (
            <div
              key={`b-${index}`}
              className="infinite-scroll-item flex items-center justify-center flex-shrink-0 w-28 h-14 sm:w-36 sm:h-18 md:w-40 md:h-20 lg:w-48 lg:h-24 xl:w-52 xl:h-28 2xl:w-60 2xl:h-32 mx-3 sm:mx-4 md:mx-5 lg:mx-6 xl:mx-7 2xl:mx-8"
            >
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                width={240}
                height={120}
                className="w-full h-full object-contain grayscale opacity-50 hover:opacity-70 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
