import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-fashion.jpg"
          alt="Fashion collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
        <h1 className="font-serif text-4xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl text-balance">
          당신만의 스타일을
          <br />
          완성하다
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
          MAISON은 품격 있는 라이프스타일을 추구하는 분들을 위해
          엄선된 프리미엄 패션 컬렉션을 제안합니다.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-white text-foreground hover:bg-white/90 px-8" asChild>
            <Link href="/#collection">
              컬렉션 보기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8" asChild>
            <Link href="/#story">브랜드 스토리</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8" asChild>
            <Link href="/careers">채용정보</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
