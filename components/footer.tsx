import Link from "next/link"
import { Instagram, Facebook, Youtube } from "lucide-react"

const footerLinks = {
  shop: [
    { name: "신상품", href: "#" },
    { name: "베스트셀러", href: "#" },
    { name: "세일", href: "#" },
    { name: "전체 상품", href: "#" },
  ],
  company: [
    { name: "브랜드 소개", href: "#about" },
    { name: "브랜드 스토리", href: "#story" },
    { name: "채용 정보", href: "/careers" },
    { name: "뉴스룸", href: "#" },
  ],
  support: [
    { name: "고객센터", href: "#contact" },
    { name: "배송 안내", href: "#" },
    { name: "교환/반품", href: "#" },
    { name: "FAQ", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-semibold tracking-wider">MAISON</span>
            </Link>
            <p className="mt-6 text-background/70 leading-relaxed max-w-md">
              당신만의 스타일을 완성하는 프리미엄 패션 쇼핑몰. 
              MAISON과 함께 품격 있는 라이프스타일을 경험하세요.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="#" className="text-background/70 hover:text-background transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-background/70 hover:text-background transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-background/70 hover:text-background transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-sm tracking-widest uppercase">Shop</h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm tracking-widest uppercase">Company</h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm tracking-widest uppercase">Support</h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © 2024 MAISON. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-background/50 hover:text-background/70">
                개인정보처리방침
              </Link>
              <Link href="#" className="text-sm text-background/50 hover:text-background/70">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
