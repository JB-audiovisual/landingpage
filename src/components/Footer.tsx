'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react'

const footerLinks = {
  empresa: [
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Preços', href: '#precos' },
    { label: 'Contato', href: '#contato' },
  ],
  servicos: [
    { label: 'Transmissões ao Vivo', href: '#servicos' },
    { label: 'Cursos Online', href: '#servicos' },
    { label: 'Eventos Híbridos', href: '#servicos' },
    { label: 'Sonorização', href: '#servicos' },
  ],
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#050505] overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="#home" className="inline-flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="JB Audiovisual Logo"
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
              />
              <span className="font-bold text-lg text-white">JB Audiovisual</span>
            </Link>

            <p className="text-white/40 text-sm leading-relaxed mb-6 font-medium">
              Transformando eventos em experiências memoráveis desde 2010.
              Tecnologia de ponta para sociedades médicas e empresas.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/jb.audiovisual/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center 
                         hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 group shadow-sm"
              >
                <Instagram className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center 
                         hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 group shadow-sm"
              >
                <Youtube className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center 
                         hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 group shadow-sm"
              >
                <Linkedin className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-bold text-white mb-5">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-amber-500 transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-bold text-white mb-5">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-amber-500 transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-white mb-5">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:johnybernard@hotmail.com"
                  className="text-white/40 hover:text-amber-500 transition-colors font-medium"
                >
                  johnybernard@hotmail.com
                </a>
              </li>
              <li className="text-white/40 font-medium">São Paulo, SP - Brasil</li>
              <li className="text-white/40 opacity-60">CNPJ: 21.252.112/0001-00</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-12 mt-12 
                       border-t border-white/10">
          <p className="text-white/30 text-sm font-medium">
            © {new Date().getFullYear()} JB Audiovisual & Tecnologia. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center 
                     border border-white/10 hover:bg-amber-500 hover:border-amber-500 
                     transition-all duration-300 group"
          >
            <ArrowUp className="w-5 h-5 text-white/50 group-hover:text-black transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  )
}
