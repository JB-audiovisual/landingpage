'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Mail, Phone, MapPin, MessageCircle, Loader2 } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'a0beeeec-50ae-4fac-86cc-5ae49060685d',
          subject: `Novo Contato: ${formData.eventType} - ${formData.name}`,
          from_name: 'JB Audiovisual Landing Page',
          ...formData
        })
      })

      const result = await response.json()
      
      if (result.success) {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
        setFormData({ name: '', email: '', phone: '', eventType: '', message: '' })
      } else {
        alert('Ocorreu um erro ao enviar. Por favor, tente novamente ou use o WhatsApp.')
      }
    } catch (error) {
      alert('Erro de conexão. Por favor, tente contato via WhatsApp.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-amber-500 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Contato
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Vamos <span className="text-gradient-gold">Conversar</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Entre em contato e receba um orçamento personalizado para o seu evento.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Estamos prontos para criar algo incrível para você.
              </h3>
              <p className="text-white/50 leading-relaxed">
                Preencha o formulário ou entre em contato diretamente. Respondemos em até 24 horas úteis.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              <a
                href="mailto:johnybernard@hotmail.com"
                className="flex items-center gap-4 p-4 bg-white/[0.02] rounded-xl border border-white/10 
                         hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center 
                               group-hover:bg-amber-500 transition-all duration-300">
                  <Mail className="w-5 h-5 text-amber-500 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <p className="text-white/40 text-sm">Email</p>
                  <p className="text-white font-medium">johnybernard@hotmail.com</p>
                </div>
              </a>

              <a
                href={`https://wa.me/5511961116437?text=${encodeURIComponent(`Olá, gostaria de solicitar um orçamento para um evento`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/[0.02] rounded-xl border border-white/10 
                         hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center 
                               group-hover:bg-amber-500 transition-all duration-300">
                  <MessageCircle className="w-5 h-5 text-amber-500 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <p className="text-white/40 text-sm">WhatsApp</p>
                  <p className="text-white font-medium">Fale conosco</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white/[0.02] rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-white/40 text-sm">Localização</p>
                  <p className="text-white font-medium">São Paulo, SP</p>
                </div>
              </div>
            </div>

            {/* CNPJ */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-white/30 text-sm">
                CNPJ: <span className="text-white/50">21.252.112/0001-00</span>
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-white/[0.02] border border-white/10 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white/60 text-sm mb-2">Nome completo</label>
                  <input
                    type="text"
                    value={formData.name}
                    name="name"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white 
                             placeholder:text-white/30 focus:outline-none focus:border-amber-500/50 
                             transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    name="email"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white 
                             placeholder:text-white/30 focus:outline-none focus:border-amber-500/50 
                             transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white/60 text-sm mb-2">Telefone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    name="phone"
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white 
                             placeholder:text-white/30 focus:outline-none focus:border-amber-500/50 
                             transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">Tipo de evento</label>
                  <select
                    value={formData.eventType}
                    name="eventType"
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white 
                             focus:outline-none focus:border-amber-500/50 transition-colors outline-none"
                  >
                    <option value="" className="bg-slate-900">Selecione</option>
                    <option value="transmissao" className="bg-slate-900">Transmissão ao Vivo</option>
                    <option value="curso" className="bg-slate-900">Curso Online</option>
                    <option value="hibrido" className="bg-slate-900">Evento Híbrido</option>
                    <option value="outro" className="bg-slate-900">Outro</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-white/60 text-sm mb-2">Mensagem</label>
                <textarea
                  value={formData.message}
                  name="message"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white 
                           placeholder:text-white/30 focus:outline-none focus:border-amber-500/50 
                           transition-colors resize-none"
                  placeholder="Conte-nos sobre seu evento..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded-full 
                         uppercase tracking-wider flex items-center justify-center gap-2 transition-all 
                         duration-300 hover:shadow-[0_0_30px_rgba(201,165,92,0.4)] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
