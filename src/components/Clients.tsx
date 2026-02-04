'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const clients = [
  { name: 'AMIB', description: 'Associação de Medicina Intensiva Brasileira' },
  { name: 'DASA', description: 'Diagnósticos da América' },
  { name: 'Hospital 9 de Julho', description: 'Rede Hospitalar' },
  { name: 'Americas', description: 'Rede de Hospitais' },
  { name: 'Abbott', description: 'Farmacêutica Global' },
]

export default function Clients() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]" />
      
      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-amber-500/60 text-sm font-medium uppercase tracking-[0.2em] mb-4">
            Parceiros de Sucesso
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Quem Confia na <span className="text-gradient-gold">JB Audiovisual</span>
          </h3>
        </motion.div>

        {/* Clients grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="group"
            >
              <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 h-32
                            flex flex-col items-center justify-center text-center
                            hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300">
                <span className="text-2xl font-black text-white/80 group-hover:text-amber-400 
                               transition-colors mb-2">
                  {client.name}
                </span>
                <span className="text-xs text-white/30 leading-tight">
                  {client.description}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-white/30 text-sm mt-10"
        >
          Empresas e instituições que confiam em nosso trabalho há mais de uma década.
        </motion.p>
      </div>
    </section>
  )
}
