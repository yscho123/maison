import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { publicPath } from '@/lib/base-path'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
const metadataBase =
  siteUrl != null && siteUrl.length > 0
    ? new URL(siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl)
    : undefined

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: 'MAISON | 당신의 스타일을 완성하다',
  description: '프리미엄 패션 쇼핑몰 MAISON에서 트렌디하고 세련된 의류를 만나보세요. 품격 있는 스타일을 제안합니다.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: publicPath('/icon-light-32x32.png'),
        media: '(prefers-color-scheme: light)',
      },
      {
        url: publicPath('/icon-dark-32x32.png'),
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: publicPath('/icon.svg'),
        type: 'image/svg+xml',
      },
    ],
    apple: publicPath('/apple-icon.png'),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
