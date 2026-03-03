'use client'

import { useState, useEffect } from 'react'

// 导航组件
function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-900">
          Charles<span className="text-pink-500">.</span>
        </a>
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

// 关于我组件
function About() {
  return (
    <section id="about" className="section-padding pt-32">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-6xl">
            👨‍💻
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              你好，我是 <span className="text-pink-500">Charles</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl">
              一位热爱技术的开发者，专注于 AI、Web 开发 和产品设计。
              喜欢探索新技术，分享学习心得，期待与志同道合的朋友交流。
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#contact" className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition">
                联系我
              </a>
              <a href="#projects" className="px-6 py-3 border border-gray-300 rounded-full hover:border-gray-900 transition">
                查看项目
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// 技能组件
function Skills() {
  const skills = [
    { name: 'React', icon: '⚛️', level: 90 },
    { name: 'Next.js', icon: '▲', level: 85 },
    { name: 'TypeScript', icon: '📘', level: 80 },
    { name: 'Node.js', icon: '🟢', level: 85 },
    { name: 'Python', icon: '🐍', level: 75 },
    { name: 'AI/ML', icon: '🤖', level: 70 },
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">技能栈</h2>
        <p className="text-gray-600 text-center mb-12">持续学习，不断进步</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{skill.icon}</span>
                <span className="font-semibold text-lg">{skill.name}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className="text-right text-sm text-gray-500 mt-2">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 项目组件
function Projects() {
  const projects = [
    {
      title: 'AI Agent Platform',
      desc: '基于 LLM 的智能助手平台，支持多模型切换',
      tags: ['Next.js', 'AI', 'TypeScript'],
      color: 'from-blue-400 to-cyan-400'
    },
    {
      title: 'Data Dashboard',
      desc: '实时数据可视化仪表盘，支持多种数据源',
      tags: ['React', 'D3.js', 'Python'],
      color: 'from-green-400 to-emerald-400'
    },
    {
      title: 'E-commerce App',
      desc: '全栈电商应用，包含支付和订单管理',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      color: 'from-orange-400 to-red-400'
    },
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">项目作品</h2>
        <p className="text-gray-600 text-center mb-12">每一个项目都是一次成长的机会</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-white text-6xl`}>
                💼
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 博客组件
function Blog() {
  const posts = [
    {
      title: '如何从零开始学习 AI 开发',
      date: '2026-02-15',
      desc: '分享我的 AI 学习路线和一些实用资源',
      readTime: '5 min'
    },
    {
      title: 'Next.js 14 新特性解析',
      date: '2026-01-28',
      desc: '深入了解 Next.js 14 的 App Router 和 Server Actions',
      readTime: '8 min'
    },
    {
      title: '我的 2025 年度总结',
      date: '2026-01-01',
      desc: '回顾过去一年的成长和收获',
      readTime: '6 min'
    },
  ]

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">博客文章</h2>
        <p className="text-gray-600 text-center mb-12">记录学习，分享经验</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.title} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-pink-500 transition">
                {post.title}
              </h3>
              <p className="text-gray-600">{post.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// 联系组件
function Contact() {
  const socials = [
    { name: 'GitHub', icon: '🐙', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' },
    { name: 'Email', icon: '📧', href: 'mailto:econocharles@gmail.com' },
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">联系我</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          有任何问题或者想聊天，随时欢迎！
        </p>
        <div className="flex justify-center gap-6 mb-12">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="flex items-center gap-2 px-6 py-3 bg-white shadow-sm rounded-full hover:shadow-md transition"
            >
              <span>{social.icon}</span>
              <span>{social.name}</span>
            </a>
          ))}
        </div>
        <p className="text-gray-400 text-sm">
          © 2026 Charles. All rights reserved.
        </p>
      </div>
    </section>
  )
}

// 主页面组件
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </main>
  )
}
