'use client'

import { useEffect, useState } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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
        <a href="#" className="brand">Charles<span className="brand-dot">.</span></a>

        <div className="hidden md:flex gap-6 lg:gap-8">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">{link.name}</a>
          ))}
        </div>

        <button
          className="md:hidden mobile-menu-btn"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? '关闭' : '菜单'}
        </button>
      </div>

      {open && (
        <div className="mobile-menu md:hidden">
          <div className="container-custom mobile-menu-inner">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="mobile-link" onClick={() => setOpen(false)}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
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
          我做的事情：
          <span className="text-gradient">让技术形成可增长的开发者生态</span>
        </h1>
        <p className="hero-desc">
          我是吴登尧（Charles），10+ 年跨国技术与运营经验，长期聚焦海外生态增长、开发者运营与技术内容体系。
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">查看案例</a>
          <a href="#contact" className="btn-secondary">联系我</a>
        </div>
        <div className="stats-grid">
          <div className="pixel-card">
            <p className="stat-value">90+</p>
            <p className="stat-label">生态合作项目落地</p>
          </div>
          <div className="pixel-card">
            <p className="stat-value">300+</p>
            <p className="stat-label">单场国际黑客松团队（最高）</p>
          </div>
          <div className="pixel-card">
            <p className="stat-value">8/w</p>
            <p className="stat-label">稳定海外内容产出</p>
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
            目前负责 Ascentiz 海外开发者社区，从 0 搭建开发者触达、资源体系和技术内容路径。
            在 SDK 尚不完善阶段，也会用 Python 做 Demo 验证开发者工作流。
          </p>
          <p className="section-text mt-4">
            过往长期在 Mask.io、巴比特、万链负责海外生态增长与运营，技术与业务协同是我的核心优势。
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
      desc: '搭建开发者清单、分层激励、内容入口与活动体系。',
    },
    {
      title: 'Global Growth Operations',
      desc: '执行海外内容策略、活动运营与跨团队协同。',
    },
    {
      title: 'Tech-to-Market Translation',
      desc: '把技术能力转为清晰叙事与可执行合作机制。',
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
      desc: '统筹国际黑客松合作与执行，对接头部生态伙伴，单场吸引 300+ 跨国团队。',
      tags: ['Hackathon', 'Partnership', 'Execution'],
    },
    {
      title: 'Grant Program & Ecosystem Growth',
      desc: '设计 Grant 全流程，推动 90+ 项目合作签署并提升生态创新活跃度。',
      tags: ['Grant', 'DevRel', 'Ecosystem'],
    },
    {
      title: 'Content & Channel System from 0→1',
      desc: '搭建海外博客/EDM/社媒内容体系，生产效率提升 50%，社群活跃度提升 3 倍。',
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
    { title: '跨文化协作的实战方法', date: '2026-02' },
    { title: 'SDK 不完善时，如何先跑通 Demo', date: '2026-01' },
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
          如果你在做 AI / 机器人产品出海或开发者生态建设，欢迎直接联系我。
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
