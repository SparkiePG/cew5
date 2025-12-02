"use client"

const awards = [
  "Excellence in Real Estate",
  "Top 100 Realtors",
  "Client Choice Award",
  "Best Commercial Agent 2024",
  "Service Award",
  "Industry Leadership",
  "Innovation Award 2023",
  "Market Excellence",
  "Professional Excellence",
  "Community Impact",
  "Rising Star Award",
  "Regional Top Agent",
]

const certificates = [
  "Commercial Appraisal",
  "Licensed Commercial Agent",
  "Property Management Cert.",
  "Real Estate Investment",
  "Market Analysis",
  "Valuation Expert",
  "Legal Compliance",
  "Negotiation Specialist",
  "Business Development",
  "Financial Analysis",
  "Property Law",
  "Risk Management",
]

const MIN_ITEMS = 6

function InfiniteScrollRow({
  items,
  direction = "left",
  speed = "normal",
}: {
  items: string[]
  direction?: "left" | "right"
  speed?: "slow" | "normal" | "fast"
}) {
  const getDisplayItems = () => {
    if (items.length === 0) return []
    if (items.length === 1) {
      return Array(MIN_ITEMS).fill(items[0])
    }
    let displayItems = [...items]
    while (displayItems.length < MIN_ITEMS) {
      displayItems = [...displayItems, ...items]
    }
    return displayItems
  }

  const displayItems = getDisplayItems()
  const animationClass = direction === "left" ? "infinite-scroll-left" : "infinite-scroll-right"
  const speedClass = speed === "slow" ? "scroll-slow" : speed === "fast" ? "scroll-fast" : ""

  const renderItem = (item: string, index: number, keyPrefix: string) => (
    <div
      key={`${keyPrefix}-${index}`}
      className="infinite-scroll-item flex-shrink-0 border border-white/30 rounded-sm flex items-center justify-center hover:bg-white/10 transition-all w-24 h-14 sm:w-28 sm:h-16 md:w-32 md:h-18 lg:w-36 lg:h-20 xl:w-40 xl:h-22 2xl:w-44 2xl:h-24 p-1.5 sm:p-2 mx-1.5 sm:mx-2 md:mx-2.5 lg:mx-3 2xl:mx-3.5"
    >
      <span className="text-center leading-tight font-semibold text-white/90 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-xs 2xl:text-sm">
        {item}
      </span>
    </div>
  )

  return (
    <div className="infinite-scroll-container">
      <div className={`infinite-scroll-track ${animationClass} ${speedClass}`}>
        {displayItems.map((item, index) => renderItem(item, index, "a"))}
        {displayItems.map((item, index) => renderItem(item, index, "b"))}
      </div>
    </div>
  )
}

export default function AwardsCertificates() {
  return (
    <section
      id="awards"
      className="overflow-hidden w-full py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28"
      style={{ backgroundColor: "#818380" }}
    >
      <div className="w-full max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <h2 className="font-serif text-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16">
          Awards and Certificates
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16">
          {/* Awards Column */}
          <div className="flex flex-col items-center w-full md:w-[48%] md:max-w-xl 2xl:max-w-2xl">
            <h3 className="font-serif text-white text-center w-full text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl mb-4 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12">
              Award
            </h3>
            <div className="w-full flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 2xl:gap-7">
              <InfiniteScrollRow items={awards.slice(0, 4)} direction="right" />
              <InfiniteScrollRow items={awards.slice(4, 8)} direction="left" speed="slow" />
              <InfiniteScrollRow items={awards.slice(8, 12)} direction="right" speed="fast" />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block self-stretch flex-shrink-0 w-0.5 bg-white/30 mx-2 lg:mx-3 xl:mx-4 2xl:mx-6" />
          <div className="md:hidden w-3/4 mx-auto h-0.5 bg-white/30 my-3" />

          {/* Certificates Column */}
          <div className="flex flex-col items-center w-full md:w-[48%] md:max-w-xl 2xl:max-w-2xl">
            <h3 className="font-serif text-white text-center w-full text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl mb-4 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12">
              Certificates
            </h3>
            <div className="w-full flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 2xl:gap-7">
              <InfiniteScrollRow items={certificates.slice(0, 4)} direction="left" />
              <InfiniteScrollRow items={certificates.slice(4, 8)} direction="right" speed="slow" />
              <InfiniteScrollRow items={certificates.slice(8, 12)} direction="left" speed="fast" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
