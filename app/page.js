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
        <p className="eyebrow">Tech Ops & Ecosystem Builder</p>
        <h1 className="hero-title">
          把技术能力、社区生态和业务目标
          <span className="text-gradient">连接成可执行增长</span>
        </h1>
        <p className="hero-desc">
          我是 Charles，关注 AI 产品落地、开发者生态运营和增长系统设计。
          擅长在「技术团队」与「市场/社区」之间搭桥，把复杂问题拆成可交付路径。
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">查看项目</a>
          <a href="#contact" className="btn-secondary">合作交流</a>
        </div>
        <div className="stats-grid">
          <div className="pixel-card">
            <p className="stat-value">20+</p>
            <p className="stat-label">生态活动与技术分享</p>
          </div>
          <div className="pixel-card">
            <p className="stat-value">0→1</p>
            <p className="stat-label">产品与增长机制搭建</p>
          </div>
          <div className="pixel-card">
            <p className="stat-value">AI</p>
            <p className="stat-label">应用场景设计与落地</p>
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
          <span>👨🏻‍💻</span>
        </div>
        <div>
          <h2 className="section-title">关于我</h2>
          <p className="section-text">
            我喜欢做两件事：
            <strong>把新技术讲明白</strong>，以及
            <strong>把想法做出来</strong>。
            过去几年里，我持续在开发者社区、内容与项目实践中迭代，逐步形成一套「技术 + 运营 + 协作」的工作方法。
          </p>
          <p className="section-text mt-4">
            关键词：Developer Relations、Ecosystem Growth、AI Productization。
          </p>
        </div>
      </div>
    </section>
  )
}

function Focus() {
  const items = [
    {
      title: 'Developer Ecosystem',
      desc: '建立开发者触达路径（内容、活动、社群），提高产品理解与参与度。',
    },
    {
      title: 'AI Product Ops',
      desc: '围绕真实场景定义需求、打磨功能叙事，并推动跨团队协作落地。',
    },
    {
      title: 'Growth System',
      desc: '构建可复用的增长动作：从首触达、激活到留存复盘。',
    },
  ]

  return (
    <section id="focus" className="section-padding section-muted">
      <div className="container-custom">
        <h2 className="section-title text-center">当前聚焦</h2>
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
      title: 'AI Agent Demo Program',
      desc: '组织面向开发者的 Agent 实战活动，覆盖工具链、案例共创与复盘分享。',
      tags: ['Community', 'AI', 'Workshops'],
    },
    {
      title: 'Developer Content Engine',
      desc: '搭建技术内容生产流程，形成选题-发布-反馈的闭环机制。',
      tags: ['Content Ops', 'Growth', 'Docs'],
    },
    {
      title: 'Ecosystem Partner Playbook',
      desc: '沉淀合作伙伴接入流程、沟通模板与协同标准，加速多方联动效率。',
      tags: ['Partnership', 'Enablement', 'Operations'],
    },
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <h2 className="section-title text-center">精选项目</h2>
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
    { title: '技术运营怎么避免“只做传播不做增长”', date: '2026-02-22' },
    { title: 'AI 产品落地的 3 个关键协作接口', date: '2026-02-03' },
    { title: '做生态，不是做活动：我的复盘框架', date: '2026-01-11' },
  ]

  return (
    <section id="writing" className="section-padding section-muted">
      <div className="container-custom">
        <h2 className="section-title text-center">最近写作</h2>
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
        <h2 className="section-title">一起做点有意思的事</h2>
        <p className="section-text max-w-2xl mx-auto mt-4">
          如果你在做 AI 产品、开发者生态或技术增长项目，欢迎联系我。
          我很乐意聊聊合作、共创或内容策划。
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <a className="btn-secondary" href="https://github.com/xiaopengyou218" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn-secondary" href="mailto:econocharles@gmail.com">Email</a>
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
