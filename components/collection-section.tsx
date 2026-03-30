"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { publicPath } from "@/lib/base-path"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    name: "Spring Collection",
    description: "봄의 싱그러움을 담은 컬렉션",
    image: "/images/collection-spring.jpg",
  },
  {
    name: "Minimal Essentials",
    description: "미니멀한 일상의 필수 아이템",
    image: "/images/collection-minimal.jpg",
  },
  {
    name: "Premium Line",
    description: "프리미엄 럭셔리 라인",
    image: "/images/collection-premium.jpg",
  },
]

export function CollectionSection() {
  return (
    <section id="collection" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium tracking-widest text-accent uppercase">Our Collection</p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            시즌 컬렉션
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            트렌드를 리드하는 MAISON의 시즌 컬렉션을 만나보세요
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.name} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src={publicPath(collection.image)}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/20" />
              </div>
              <div className="mt-6">
                <h3 className="font-serif text-xl font-medium text-foreground">{collection.name}</h3>
                <p className="mt-2 text-muted-foreground">{collection.description}</p>
                <Button variant="link" className="mt-3 px-0 text-foreground group-hover:text-accent">
                  자세히 보기
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
