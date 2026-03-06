const siteUrl = 'https://xiaopengyou218.github.io/my-portfolio/'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Charles Wu | Tech Ops & Ecosystem',
  description: 'Charles 的个人网站：技术运营、生态增长与 AI 产品实践。',
  openGraph: {
    title: 'Charles Wu | Tech Ops & Ecosystem',
    description: '海外生态增长、开发者运营与 AI 产品实践。',
    url: siteUrl,
    siteName: 'Charles Wu',
    images: ['/og.svg'],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charles Wu | Tech Ops & Ecosystem',
    description: '海外生态增长、开发者运营与 AI 产品实践。',
    images: ['/og.svg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
