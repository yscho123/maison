import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "채용 안내 | MAISON",
  description:
    "MAISON 상품 MD(Merchandiser) 채용 공고 및 지원 자격 요건을 안내합니다.",
}

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <article className="mx-auto max-w-3xl px-6 pb-24 pt-28 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Careers
        </p>
        <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl">
          채용 정보
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          MAISON은 품격 있는 컬렉션을 함께 만들어갈 동료를 찾고 있습니다. 아래는
          현재 모집 중인 <strong className="text-foreground">상품 MD</strong>
          포지션에 대한 자격 요건 안내입니다.
        </p>

        <section className="mt-14 space-y-4 border-t border-border pt-12">
          <h2 className="font-serif text-2xl font-medium">상품 MD (Merchandiser)</h2>
          <p className="text-muted-foreground leading-relaxed">
            시즌 트렌드 분석, 상품 기획·소싱, 라인 구성, 가격 및 재고 정책 수립,
            매장·온라인 채널 머천다이징까지 브랜드의 상품 경쟁력을 책임지는
            역할입니다.
          </p>
        </section>

        <section className="mt-10">
          <h3 className="text-base font-semibold tracking-wide">필수 자격 요건</h3>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-muted-foreground leading-relaxed">
            <li>학력: 대졸 이상 (패션·섬유·유통·경영·마케팅 등 관련 전공 우대)</li>
            <li>
              패션·리테일 또는 이커머스 업계에서 상품 기획·MD·바잉 등 유사 업무
              경력 3년 이상
            </li>
            <li>시즌별 컬렉션 구성 및 카테고리별 라인업 기획 경험</li>
            <li>원가·마진 구조 이해 및 가격 책정·프로모션 기획 역량</li>
            <li>협력사(브랜드·OEM) 커뮤니케이션 및 일정 관리 능력</li>
            <li>Excel·PPT 등 문서 작업 및 데이터 기반 의사결정에 익숙할 것</li>
            <li>트렌드·소비자 니즈에 대한 높은 관심과 감각</li>
          </ul>
        </section>

        <section className="mt-10">
          <h3 className="text-base font-semibold tracking-wide">우대 사항</h3>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-muted-foreground leading-relaxed">
            <li>프리미엄·컨템포러리 패션 브랜드 또는 백화점·편집숍 MD 경력</li>
            <li>온라인 몰 전시·기획전·랜딩 운영 경험</li>
            <li>해외 소싱·트레이드쇼 참관 경험 및 영어·제2외국어 활용 가능자</li>
            <li>ERP·WMS·분석 툴(GA 등) 사용 경험</li>
          </ul>
        </section>

        <section className="mt-10 rounded-lg border border-border bg-muted/30 px-6 py-8">
          <h3 className="text-base font-semibold tracking-wide">지원 안내</h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            지원은 이메일 접수를 원칙으로 하며, 이력서와 경력기술서를 보내주시면
            검토 후 개별 연락드립니다. (실제 채용 시 별도 공고에 명시된
            접수처·기한을 확인해 주세요.)
          </p>
        </section>

        <div className="mt-12 flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/">홈으로</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/#contact">문의하기</Link>
          </Button>
        </div>
      </article>
      <Footer />
    </main>
  )
}
