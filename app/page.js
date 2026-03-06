'use client'

import { useEffect, useState } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Focus', href: '#focus' },
    { name: 'Projects', href: '#projects' },
    { name: 'Writing', href: '#writing' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`nav-shell ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container-custom nav-inner">
        <a href="#" className="brand">
          Charles<span className="brand-dot">.</span>
        </a>
        <div className="hidden md:flex gap-6 lg:gap-8">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero-shell">
      <div className="hero-grid" />
      <div className="container-custom section-padding hero-content">
        <p className="eyebrow">Global Ecosystem Growth & DevRel Ops</p>
        <h1 className="hero-title">
          我做的事情很简单：
          <span className="text-gradient">把技术变成可增长的开发者生态</span>
        </h1>
        <p className="hero-desc">
          你好，我是吴登尧（Charles）。我有 10+ 年跨国技术与运营经验，近 8 年专注海外生态增长、开发者运营与技术内容体系。
          做过从 0→1 的全球渠道搭建，也做过黑客松、Grant、社区分层和跨文化团队协作。
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">查看案例</a>
          <a href="#contact" className="btn-secondary">联系我</a>
        </div>
        <div className="stats-grid">
          <div className="pixel-card">
            <p className="stat-value">90+</p>
            <p className="stat-label">生态项目合作落地（Grant / Partner）</p>
          </div>
          <div className="pixel-card">
            <p className="stat-value">300+</p>
            <p className="stat-label">单场国际黑客松参与团队（最高）</p>
          </div>
          <div className="pixel-card">
            <p className="stat-value">8/w</p>
            <p className="stat-label">稳定海外内容生产与增长机制</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom two-col">
        <div className="pixel-avatar" aria-hidden>
          <span>🌍</span>
        </div>
        <div>
          <h2 className="section-title">关于我</h2>
          <p className="section-text">
            我目前负责 Ascentiz 外骨骼机器人的海外开发者社区方向，正在从零搭建开发者触达、资源体系和技术内容路径。
            在硬件底座与 SDK 尚不完善阶段，我也会直接上手用 Python 做 Demo 验证开发者工作流可行性。
          </p>
          <p className="section-text mt-4">
            之前在 Mask.io、巴比特、万链等团队长期负责海外生态增长与运营；再往前是自动化/电气工程背景，
            这让我在技术理解与业务推进之间切换更顺畅。
          </p>
        </div>
      </div>
    </section>
  )
}

function Focus() {
  const items = [
    {
      title: 'Developer Ecosystem Build',
      desc: '开发者清单、分层激励、内容入口与活动体系，从触达走向活跃与共创。',
    },
    {
      title: 'Global Growth Operations',
      desc: '海外社媒与内容策略、活动执行、跨团队协同，建立可复用的增长流程。',
    },
    {
      title: 'Tech-to-Market Translation',
      desc: '理解技术约束，设计对外叙事和合作机制，让产品被开发者真正用起来。',
    },
  ]

  return (
    <section id="focus" className="section-padding section-muted">
      <div className="container-custom">
        <h2 className="section-title text-center">我在做什么</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {items.map((item) => (
            <article key={item.title} className="pixel-card h-full">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const projects = [
    {
      title: 'Global Hackathon Operations',
      desc: '参与 ETH Shanghai 2022 线上统筹，对接 Consensys / The Graph / NEAR 等生态方，活动吸引 300+ 跨国团队，并持续孵化项目。',
      tags: ['Hackathon', 'Partnership', 'Execution'],
    },
    {
      title: 'Grant Program & Ecosystem Growth',
      desc: '设计并管理 Grant 全流程（技术评估→资源扶持→结果复盘），推动 90+ 项目合作签署，提升生态创新活跃度。',
      tags: ['Grant', 'DevRel', 'Ecosystem'],
    },
    {
      title: 'Content & Channel System from 0→1',
      desc: '搭建海外博客、EDM、社媒等核心渠道，建立本地化内容 SOP，生产效率提升 50%，社群活跃度实现 3 倍增长。',
      tags: ['Content Ops', 'Community', 'Growth'],
    },
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <h2 className="section-title text-center">代表性案例</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project) => (
            <article key={project.title} className="pixel-card card-hover">
              <p className="card-kicker">Case Study</p>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-text">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Writing() {
  const posts = [
    { title: '海外开发者生态增长，不只是做活动', date: '2026-03' },
    { title: '从工程师到生态运营：跨文化协作的实战方法', date: '2026-02' },
    { title: '当 SDK 还没完善时，如何先跑通开发者 Demo', date: '2026-01' },
  ]

  return (
    <section id="writing" className="section-padding section-muted">
      <div className="container-custom">
        <h2 className="section-title text-center">最近思考</h2>
        <div className="mt-10 space-y-4 max-w-3xl mx-auto">
          {posts.map((post) => (
            <article key={post.title} className="pixel-card writing-row">
              <p className="card-title">{post.title}</p>
              <p className="text-sm text-slate-500">{post.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom text-center">
        <h2 className="section-title">欢迎交流合作</h2>
        <p className="section-text max-w-2xl mx-auto mt-4">
          如果你在做 AI / 机器人产品出海、开发者生态建设，或希望提升国际社区增长效率，欢迎直接联系我。
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <a className="btn-secondary" href="https://github.com/xiaopengyou218" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn-secondary" href="mailto:brightperspective@126.com">Email</a>
        </div>
        <p className="text-xs text-slate-400 mt-10">© 2026 Charles Wu</p>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Focus />
      <Projects />
      <Writing />
      <Contact />
    </main>
  )
}
