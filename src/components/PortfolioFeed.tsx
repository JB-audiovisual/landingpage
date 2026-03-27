'use client'

import { motion } from 'framer-motion'
import { Instagram, Play, Heart, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const portfolioItems = [
  {
    id: 1,
    type: 'photo',
    thumbnail: '/portfolio/insta1.png',
    likes: '1.2k',
    comments: '45',
    title: 'Transmissão Premium',
  },
  {
    id: 2,
    type: 'photo',
    thumbnail: '/portfolio/insta2.png',
    likes: '850',
    comments: '12',
    title: 'Webinar de Sucesso',
  },
  {
    id: 3,
    type: 'photo',
    thumbnail: '/portfolio/insta3.png',
    likes: '2.5k',
    comments: '89',
    title: 'Congresso Médico',
  },
  {
    id: 4,
    type: 'photo',
    thumbnail: '/portfolio/insta4.png',
    likes: '1.1k',
    comments: '34',
    title: 'Equipe Especializada',
  },
  {
    id: 5,
    type: 'photo',
    thumbnail: '/portfolio/insta5.png',
    likes: '3.2k',
    comments: '120',
    title: 'Streaming 4K',
  },
  {
    id: 6,
    type: 'photo',
    thumbnail: '/portfolio/insta6.png',
    likes: '940',
    comments: '28',
    title: 'Eventos Corporativos',
  },
]

export default function PortfolioFeed() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#0a0a0a]">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-amber-500 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              <Instagram className="w-4 h-4" />
              Nosso Portfólio
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Siga Nossas <span className="text-gradient-gold">Experiências</span> no Instagram
            </h2>
          </div>
          <a
            href="https://www.instagram.com/jb.audiovisual/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-white/[0.02] border border-white/10 rounded-full text-white/60 font-medium hover:text-amber-500 hover:border-amber-500/30 transition-all duration-300"
          >
            @jb.audiovisual
            <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
            </div>
          </a>
        </div>

        {/* Scrolling Carousel */}
        <div className="relative group">
          <div className="flex overflow-hidden">
            <motion.div
              animate={{
                x: [0, -1800],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
              className="flex gap-6 pr-6"
            >
              {[...portfolioItems, ...portfolioItems].map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="w-[280px] md:w-[320px] flex-shrink-0 group/card"
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md group-hover/card:shadow-xl transition-all duration-500">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white gap-4">
                      {item.type === 'reel' && (
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                          <Play className="w-6 h-6 fill-white" />
                        </div>
                      )}
                      <div className="flex items-center gap-6 font-bold">
                        <span className="flex items-center gap-2">
                          <Heart className="w-5 h-5 fill-white" /> {item.likes}
                        </span>
                        <span className="flex items-center gap-2">
                          <MessageCircle className="w-5 h-5 fill-white" /> {item.comments}
                        </span>
                      </div>
                    </div>

                    {/* Type Indicator */}
                    <div className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-md rounded-lg border border-white/10 group-hover/card:bg-amber-500 group-hover/card:border-amber-400 transition-colors">
                      {item.type === 'reel' ? (
                        <Play className="w-4 h-4 text-white fill-white" />
                      ) : (
                        <Instagram className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
