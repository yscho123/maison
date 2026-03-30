import Image from "next/image"

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50K+", label: "Happy Customers" },
  { value: "200+", label: "Designer Brands" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/images/about-fashion.jpg"
                alt="Fashion store interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-card p-8 shadow-xl hidden lg:block">
              <p className="font-serif text-5xl font-semibold text-foreground">10+</p>
              <p className="text-sm text-muted-foreground mt-1">Years of Excellence</p>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <p className="text-sm font-medium tracking-widest text-accent uppercase">About Us</p>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              우리가 추구하는 가치
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              MAISON은 2014년 설립 이래, 고객님들께 최고의 패션 경험을 제공하기 위해 노력해왔습니다. 
              우리는 단순히 옷을 판매하는 것이 아니라, 개인의 스타일과 라이프스타일을 완성하는 파트너가 되고자 합니다.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              전 세계 200여 개의 프리미엄 브랜드와 협력하여, 트렌디하면서도 클래식한 컬렉션을 
              엄선하여 선보이고 있습니다.
            </p>
            
            <div className="mt-12 grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl font-semibold text-foreground">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
