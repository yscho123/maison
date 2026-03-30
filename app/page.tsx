import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CollectionSection } from "@/components/collection-section"
import { StorySection } from "@/components/story-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <CollectionSection />
      <StorySection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
