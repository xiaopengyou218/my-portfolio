export default function EnglishPage() {
  const highlights = [
    '10+ years in cross-border tech and operations',
    'Built global developer ecosystem programs from 0→1',
    'Led hackathons, grants, content engines, and community growth',
  ]

  return (
    <main className="section-padding">
      <div className="container-custom">
        <a href="/" className="nav-link">← 返回中文</a>

        <section className="mt-8">
          <p className="eyebrow">English Profile</p>
          <h1 className="hero-title mt-4">
            Charles Wu
            <span className="text-gradient">Global Ecosystem Growth & DevRel Ops</span>
          </h1>
          <p className="hero-desc">
            I help technology teams turn product capabilities into scalable developer ecosystems.
            My work focuses on developer relations, ecosystem operations, and global growth execution.
          </p>
        </section>

        <section className="mt-10 grid gap-4">
          {highlights.map((item) => (
            <article key={item} className="pixel-card">
              <p className="card-text">{item}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 pixel-card">
          <h2 className="card-title">Contact</h2>
          <p className="card-text mt-2">Email: brightperspective@126.com</p>
          <p className="card-text">GitHub: xiaopengyou218</p>
        </section>
      </div>
    </main>
  )
}
