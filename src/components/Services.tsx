'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Video,
  Tv,
  Lightbulb,
  Volume2,
  Settings,
  Users,
  ArrowRight,
  Play
} from 'lucide-react'

const services = [
  {
    icon: Video,
    title: 'Transmissões ao Vivo',
    subtitle: 'Streaming & Lives',
    description: 'Infraestrutura robusta para transmissão ao vivo de todo conteúdo com qualidade profissional e alcance global.',
    features: ['Multi-plataforma', 'Full HD/4K', 'Baixa latência'],
  },
  {
    icon: Tv,
    title: 'Produção de Conteúdo',
    subtitle: 'Vídeos & Cursos',
    description: 'Produção completa de conteúdo audiovisual para cursos online, webinars e materiais institucionais.',
    features: ['Edição profissional', 'Motion graphics', 'Pós-produção'],
  },
  {
    icon: Lightbulb,
    title: 'Iluminação Cênica',
    subtitle: 'Luz & Atmosfera',
    description: 'Projetos de iluminação personalizados com movimentos e efeitos visuais para criar ambientes inesquecíveis.',
    features: ['LED inteligente', 'Automação', 'Design exclusivo'],
  },
  {
    icon: Volume2,
    title: 'Sonorização',
    subtitle: 'Áudio Profissional',
    description: 'Universo sonoro com recursos e efeitos especiais para fascinar espectadores com maestria e know-how.',
    features: ['PA Line Array', 'Microfonação', 'Mixagem ao vivo'],
  },
  {
    icon: Settings,
    title: 'Infraestrutura',
    subtitle: 'Estrutura Completa',
    description: 'Infraestrutura técnica segura, completa e eficaz para eventos de qualquer porte.',
    features: ['Montagem', 'Geradores', 'Cabeamento'],
  },
  {
    icon: Users,
    title: 'Eventos Híbridos',
    subtitle: 'Presencial + Online',
    description: 'Integração perfeita entre público presencial e virtual, maximizando o alcance do seu evento.',
    features: ['Interatividade', 'Q&A integrado', 'Analytics'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="servicos" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
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
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Soluções <span className="text-gradient-gold">Completas</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Tecnologia de ponta e expertise para transformar seu evento em uma experiência memorável.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className={`
                relative h-full p-8 rounded-2xl border transition-all duration-500
                ${hoveredIndex === index
                  ? 'bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-amber-500/30'
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20'}
              `}>
                {/* Icon */}
                <div className={`
                  w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500
                  ${hoveredIndex === index
                    ? 'bg-amber-500 text-black'
                    : 'bg-white/5 text-amber-500'}
                `}>
                  <service.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <div className="space-y-3 mb-6">
                  <p className="text-amber-500/60 text-sm font-medium uppercase tracking-wider">
                    {service.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/40 border border-white/5"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Hover arrow */}
                <div className={`
                  absolute bottom-8 right-8 w-10 h-10 rounded-full flex items-center justify-center
                  transition-all duration-300
                  ${hoveredIndex === index
                    ? 'bg-amber-500 text-black opacity-100 translate-x-0'
                    : 'bg-white/5 text-white/30 opacity-0 -translate-x-2'}
                `}>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
