import Hero from "@/components/sections/Hero"
import AboutPreview from "@/components/sections/AboutPreview"
import WhatWeDo from "@/components/sections/WhatWeDo"
import AnchorAcademy from "@/components/sections/AnchorAcademy"
import ImpactStats from "@/components/sections/ImpactStats"
import Testimonials from "@/components/sections/Testimonials"
import GetInvolved from "@/components/sections/GetInvolved"
import DonateSection from "@/components/sections/DonateSection"
import BlogPreview from "@/components/sections/BlogPreview"
import NewsletterBar from "@/components/sections/NewsletterBar"

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <WhatWeDo />
      <AnchorAcademy />
      <ImpactStats />
      <Testimonials />
      <GetInvolved />
      <DonateSection />
      <BlogPreview />
      <NewsletterBar />
    </>
  )
}
