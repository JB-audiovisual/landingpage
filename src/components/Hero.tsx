'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Play, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        {/* Gradient orbs - Cores da logo */}
        {/* Ciano - Top Left */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute top-20 left-40 w-[300px] h-[300px] bg-cyan-400/15 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

        {/* Magenta - Top Right */}
        <div className="absolute top-10 right-0 w-[450px] h-[450px] bg-pink-600/22 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 right-32 w-[280px] h-[280px] bg-pink-500/18 rounded-full blur-[70px] animate-pulse-glow" style={{ animationDelay: '3s' }} />

        {/* Roxo - Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

        {/* Ciano - Bottom Right */}
        <div className="absolute bottom-0 right-10 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-[90px] animate-pulse-glow" style={{ animationDelay: '2.5s' }} />

        {/* Magenta - Bottom Left */}
        <div className="absolute bottom-10 left-0 w-[380px] h-[380px] bg-pink-600/18 rounded-full blur-[85px] animate-pulse-glow" style={{ animationDelay: '0.5s' }} />

        {/* Roxo - Bottom Center */}
        <div className="absolute bottom-20 left-1/3 w-[320px] h-[320px] bg-purple-500/16 rounded-full blur-[75px] animate-pulse-glow" style={{ animationDelay: '3.5s' }} />

        {/* Círculos menores para detalhes */}
        <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] bg-cyan-400/14 rounded-full blur-[60px] animate-pulse-glow" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-[230px] h-[230px] bg-pink-500/14 rounded-full blur-[55px] animate-pulse-glow" style={{ animationDelay: '4.5s' }} />

        {/* Overlay escuro para controle de intensidade */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Grid pattern sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,110,0.04)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
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
            className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Tecnologia audiovisual de ponta para eventos que marcam.
            Transmissões ao vivo, produção e infraestrutura completa.
          </motion.p>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-amber-500/20 
                       px-6 py-3 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-amber-400 text-sm font-medium tracking-wide">
              +16 anos transformando eventos
            </span>
          </motion.div>


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
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
          >
            {[
              { value: '500+', label: 'Eventos Realizados' },
              { value: '16+', label: 'Anos de Experiência' },
              { value: '100%', label: 'Satisfação' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/50 via-amber-600/30 to-amber-500/50 
                              rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card */}
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm
                              border border-white/10 group-hover:border-amber-500/50 
                              rounded-2xl p-8 transition-all duration-500
                              shadow-lg group-hover:shadow-[0_0_40px_rgba(201,165,92,0.3)]">
                  <div className="text-5xl md:text-6xl font-black text-gradient-gold mb-3 
                                group-hover:scale-110 transition-transform duration-500">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-white/50 group-hover:text-white/70 
                                transition-colors duration-300 uppercase tracking-wider">
                    {stat.label}
                  </div>

                  {/* Decorative dot */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-amber-500 rounded-full 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>


    </section>
  )
}
