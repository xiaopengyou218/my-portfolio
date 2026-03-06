export const metadata = {
  title: 'Charles Wu | Tech Ops & Ecosystem',
  description: 'Charles 的个人网站：技术运营、生态增长与 AI 产品实践。',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
