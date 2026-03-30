import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const reviews = [
  {
    name: "김서연",
    role: "패션 블로거",
    content: "MAISON에서 쇼핑한 지 2년째인데, 품질과 스타일 모두 만족스러워요. 특히 스타일링 상담 서비스가 정말 좋아요!",
    avatar: "/images/avatar-1.jpg",
    initials: "김서"
  },
  {
    name: "이준호",
    role: "마케팅 디렉터",
    content: "비즈니스 캐주얼부터 포멀웨어까지, 모든 상황에 맞는 옷을 찾을 수 있어서 좋습니다. 배송도 빠르고 포장도 고급스러워요.",
    avatar: "/images/avatar-2.jpg",
    initials: "이준"
  },
  {
    name: "박민지",
    role: "대학원생",
    content: "학생이지만 품질 좋은 옷을 합리적인 가격에 구매할 수 있어서 자주 이용해요. 세일 기간 때 특히 좋아요!",
    avatar: "/images/avatar-3.jpg",
    initials: "박민"
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium tracking-widest text-accent uppercase">Testimonials</p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            고객님들의 이야기
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            MAISON과 함께하는 고객님들의 생생한 후기를 확인해보세요
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-card border-none shadow-sm">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed">
                  {`"${review.content}"`}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback className="bg-muted text-muted-foreground">{review.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
