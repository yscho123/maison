import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const values = [
  {
    title: "품질에 대한 약속",
    content: "MAISON은 최고급 소재만을 사용하여 오래도록 사랑받을 수 있는 제품을 만듭니다. 엄격한 품질 관리 시스템을 통해 모든 제품이 최상의 상태로 고객님께 전달됩니다."
  },
  {
    title: "지속 가능한 패션",
    content: "환경을 생각하는 지속 가능한 패션을 추구합니다. 친환경 소재 사용, 탄소 배출 저감, 공정 무역 파트너십을 통해 더 나은 미래를 만들어갑니다."
  },
  {
    title: "고객 중심 서비스",
    content: "고객님 한 분 한 분의 스타일과 취향을 존중합니다. 전문 스타일리스트의 1:1 상담 서비스와 무료 교환/반품 정책으로 완벽한 쇼핑 경험을 제공합니다."
  },
  {
    title: "글로벌 트렌드 큐레이션",
    content: "파리, 밀라노, 뉴욕의 최신 트렌드를 실시간으로 반영합니다. 글로벌 패션 위크와 연계하여 가장 앞서가는 컬렉션을 선보입니다."
  },
]

export function StorySection() {
  return (
    <section id="story" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-medium tracking-widest text-accent uppercase">Brand Story</p>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              MAISON의 철학
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {"\"집(Maison)처럼 편안하고, 자신만의 스타일을 찾을 수 있는 공간\"을 모토로 "}
              시작된 MAISON은 단순한 쇼핑몰을 넘어, 라이프스타일 브랜드로 성장해왔습니다.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              우리는 고객이 자신만의 스타일을 발견하고, 표현하고, 완성할 수 있도록 
              최고의 제품과 서비스를 제공합니다.
            </p>
          </div>
          
          <div>
            <Accordion type="single" collapsible className="w-full">
              {values.map((value, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-accent hover:no-underline py-6">
                    {value.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {value.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
