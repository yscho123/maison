"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm font-medium tracking-widest text-accent uppercase">Contact</p>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              문의하기
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              궁금한 점이 있으시면 언제든지 연락해주세요. 
              전문 상담팀이 친절하게 안내해드립니다.
            </p>
            
            <div className="mt-12 space-y-6">
              <div>
                <p className="font-medium text-foreground">이메일</p>
                <p className="mt-1 text-muted-foreground">contact@maison.co.kr</p>
              </div>
              <div>
                <p className="font-medium text-foreground">전화</p>
                <p className="mt-1 text-muted-foreground">02-1234-5678</p>
              </div>
              <div>
                <p className="font-medium text-foreground">운영시간</p>
                <p className="mt-1 text-muted-foreground">평일 10:00 - 18:00 (주말/공휴일 휴무)</p>
              </div>
              <div>
                <p className="font-medium text-foreground">주소</p>
                <p className="mt-1 text-muted-foreground">서울특별시 강남구 테헤란로 123, MAISON 빌딩</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-8 lg:p-12">
            <h3 className="font-serif text-2xl font-medium text-foreground">메시지 보내기</h3>
            <form className="mt-8">
              <FieldGroup>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field>
                    <FieldLabel>이름</FieldLabel>
                    <Input placeholder="홍길동" />
                  </Field>
                  <Field>
                    <FieldLabel>이메일</FieldLabel>
                    <Input type="email" placeholder="example@email.com" />
                  </Field>
                </div>
                <Field>
                  <FieldLabel>제목</FieldLabel>
                  <Input placeholder="문의 제목을 입력해주세요" />
                </Field>
                <Field>
                  <FieldLabel>메시지</FieldLabel>
                  <Textarea 
                    placeholder="문의 내용을 자유롭게 작성해주세요" 
                    className="min-h-[150px] resize-none"
                  />
                </Field>
              </FieldGroup>
              <Button className="w-full mt-6" size="lg">
                문의하기
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
