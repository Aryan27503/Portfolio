'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Maximize2 } from 'lucide-react'

interface PDFViewerProps {
  pdfUrl: string
  title: string
}

export default function PDFViewer({ pdfUrl, title }: PDFViewerProps) {
  const [scale, setScale] = useState(100)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full"
    >
      {/* Header with Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-lg bg-electric/10 border border-electric/20">
            <FileText className="text-electric" size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm text-slate-400">Full case study PDF</p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Zoom Controls */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
            <button
              onClick={() => setScale(Math.max(50, scale - 10))}
              className="px-2 py-1 text-sm text-slate-400 hover:text-electric transition"
              aria-label="Zoom out"
            >
              −
            </button>
            <span className="text-sm text-slate-400 w-12 text-center">{scale}%</span>
            <button
              onClick={() => setScale(Math.min(150, scale + 10))}
              className="px-2 py-1 text-sm text-slate-400 hover:text-electric transition"
              aria-label="Zoom in"
            >
              +
            </button>
          </div>

          {/* Fullscreen Button */}
          <motion.a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-electric/20 to-purple-600/20 hover:from-electric/40 hover:to-purple-600/40 text-electric border border-electric/30 hover:border-electric/60 transition-all flex items-center gap-2 text-sm font-medium"
          >
            <Maximize2 size={16} />
            <span className="hidden sm:inline">Fullscreen</span>
          </motion.a>
        </div>
      </div>

      {/* PDF Container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm"
      >
        <div className="bg-white/[0.02] p-2">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0&zoom=${scale}`}
            className="w-full rounded-lg"
            style={{ height: '800px' }}
            title={title}
          />
        </div>

        {/* Info Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-center text-sm text-slate-300 pointer-events-none">
          <p>Scroll to explore • Use + / − buttons to zoom • Open fullscreen for better reading</p>
        </div>
      </motion.div>

      {/* Alternative View Options */}
      <div className="mt-6 p-4 rounded-lg bg-blue-600/10 border border-blue-600/20 text-center">
        <p className="text-sm text-slate-300 mb-2">
          Having trouble viewing the PDF? 
        </p>
        <a
          href={pdfUrl}
          download
          className="text-electric hover:text-electric/80 font-medium text-sm transition"
        >
          Download PDF directly
        </a>
      </div>
    </motion.div>
  )
}
