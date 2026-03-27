'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Star, Zap, Crown } from 'lucide-react'

const plans = [
  {
    name: 'Masterclass',
    subtitle: 'Eventos até 5h',
    icon: Star,
    popular: false,
    features: [
      'Transmissão ao vivo Full HD',
      'Até 5 horas de duração',
      'Operador técnico dedicado',
      'Equipamentos inclusos',
      'Suporte técnico completo',
    ],
  },
  {
    name: 'Cursos Online',
    subtitle: 'Eventos até 10h',
    icon: Zap,
    popular: true,
    features: [
      'Tudo do plano Masterclass',
      'Até 10 horas de duração',
      'Multi-câmera disponível',
      'Gravação de backup',
      'Edição básica inclusa',
      'Entrega em 48h',
    ],
  },
  {
    name: 'Simultâneo',
    subtitle: 'Tradução + Stream',
    icon: Crown,
    popular: false,
    features: [
      'Tudo dos planos anteriores',
      'Tradução simultânea',
      'Múltiplos idiomas',
      'Salas virtuais paralelas',
      'Infraestrutura premium',
      'Equipe técnica completa',
    ],
  },
]

const additionalServices = [
  { name: 'Meetings / Webinars', unit: 'por evento' },
  { name: 'Apoio Audiovisual', unit: 'por diária' },
  { name: 'Apoio Manequim', unit: 'por diária' },
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="precos" className="section-padding relative overflow-hidden">
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
            Investimento
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Nossas <span className="text-gradient-gold">Soluções</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Soluções personalizadas para transformar seu evento em uma experiência memorável. Solicite um orçamento direto pelo WhatsApp.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                relative rounded-2xl p-8 transition-all duration-500
                ${plan.popular
                  ? 'bg-gradient-to-br from-amber-500/20 to-amber-600/10 border-2 border-amber-500/50'
                  : 'bg-white/[0.02] border border-white/10 hover:border-amber-500/20'}
              `}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-amber-500 text-black text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`
                w-14 h-14 rounded-xl flex items-center justify-center mb-6
                ${plan.popular ? 'bg-amber-500 text-black' : 'bg-white/5 text-amber-500'}
              `}>
                <plan.icon className="w-7 h-7" />
              </div>

              {/* Plan info */}
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-amber-500/60 text-sm font-medium">{plan.subtitle}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-amber-500" />
                    </div>
                    <span className="text-white/60 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`https://wa.me/5511961116437?text=${encodeURIComponent(`Olá, gostaria de solicitar um orçamento para um evento ${plan.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  block w-full text-center py-4 rounded-full font-bold uppercase tracking-wider text-sm
                  transition-all duration-300
                  ${plan.popular
                    ? 'bg-amber-500 text-black hover:bg-amber-400 hover:shadow-[0_0_30px_rgba(201,165,92,0.4)]'
                    : 'border border-white/20 text-white hover:bg-white/5 hover:border-white/30'}
                `}
              >
                Solicitar Orçamento
              </a>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/[0.02] border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">Serviços Adicionais</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <div
                key={service.name}
                className="flex items-center justify-between p-4 bg-white/[0.02] rounded-xl border border-white/5"
              >
                <span className="text-white/70">{service.name}</span>
                <div className="text-right">
                  <span className="text-white/40 text-sm block">{service.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
