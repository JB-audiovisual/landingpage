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
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      
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
                <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden aspect-[4/5]">
                  <Image
                    src="/ceo-photo.png"
                    alt="Johny Bernard - CEO JB Audiovisual"
                    width={500}
                    height={625}
                    className="w-full h-full object-cover object-top"
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
            className="space-y-8"
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
