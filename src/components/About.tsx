'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Award, Target, Lightbulb, Star, Quote } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="sobre" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        {/* Círculos coloridos */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-purple-600/18 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/16 rounded-full blur-[90px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-pink-600/15 rounded-full blur-[85px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-amber-500 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Quem Somos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Liderança com <span className="text-gradient-gold">Experiência</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 via-transparent to-amber-600/20 rounded-3xl blur-xl" />

              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-2xl p-[2px]">
                <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden aspect-[3/4]">
                  <Image
                    src="/ceo-photo.png"
                    alt="Johny Bernardino - CEO JB Audiovisual"
                    width={500}
                    height={667}
                    className="w-full h-full object-cover object-[center_35%]"
                    priority
                  />
                </div>
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.6, type: 'spring' }}
                className="absolute -bottom-6 -right-6 bg-amber-500 text-black rounded-2xl p-6 shadow-2xl"
              >
                <div className="text-4xl font-black">16+</div>
                <div className="text-sm font-semibold">Anos</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Name & Title */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Johny Bernard
              </h3>
              <p className="text-amber-500 font-semibold uppercase tracking-wider text-sm">
                CEO & Fundador
              </p>
            </div>

            {/* Quote */}
            <div className="relative">
              <Quote className="absolute -top-2 -left-4 w-8 h-8 text-amber-500/20" />
              <p className="text-xl text-white/70 leading-relaxed italic pl-6">
                "Transformar eventos em experiências memoráveis é nossa missão.
                Cada projeto é uma oportunidade de superar expectativas."
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4 text-white/50 leading-relaxed">
              <p>
                Líder experiente com mais de <span className="text-white font-semibold">16 anos de atuação</span> no
                setor de eventos, destacando-se na linha de frente da infraestrutura tecnológica e logística.
              </p>
              <p>
                Ao longo de sua carreira, consolidou expertise em coordenar e executar projetos
                de alta complexidade, garantindo que cada evento seja realizado com excelência.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
              {[
                { icon: Target, text: 'Projetos Complexos' },
                { icon: Lightbulb, text: 'Inovação' },
                { icon: Star, text: 'Excelência' },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-white/5 rounded-xl flex items-center justify-center 
                                border border-white/10">
                    <item.icon className="w-5 h-5 text-amber-500" />
                  </div>
                  <span className="text-xs text-white/50 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* LinkedIn Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="pt-8 border-t border-white/10 text-center"
            >
              <a
                href="https://www.linkedin.com/in/johny-bernardino-38817757/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 rounded-xl border border-white/10 
                         hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center 
                              group-hover:bg-amber-500 transition-all duration-300">
                  <svg className="w-5 h-5 text-amber-500 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span className="text-white/70 text-sm font-medium">Conheça mais sobre minha trajetória</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
