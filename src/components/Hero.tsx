'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Play, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,165,92,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,165,92,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-amber-500/20 
                       px-5 py-2.5 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-amber-400 text-sm font-medium tracking-wide">
              +16 anos transformando eventos
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8"
          >
            <span className="text-white">Criamos</span>
            <br />
            <span className="text-gradient-gold glow-text">Experiências</span>
            <br />
            <span className="text-white/80">Memoráveis</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Tecnologia audiovisual de ponta para eventos que marcam. 
            Transmissões ao vivo, produção e infraestrutura completa.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="#contato" className="btn-primary">
              Solicitar Orçamento
            </Link>
            <Link 
              href="#servicos" 
              className="btn-secondary flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              Nossos Serviços
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/10 max-w-2xl mx-auto"
          >
            {[
              { value: '500+', label: 'Eventos Realizados' },
              { value: '16+', label: 'Anos de Experiência' },
              { value: '100%', label: 'Satisfação' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/40">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/30 uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 text-amber-500/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
