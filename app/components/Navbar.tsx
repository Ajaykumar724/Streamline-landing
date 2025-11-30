"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-white">
            S
          </div>
          <span className="text-xl font-bold">Streamline</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
          <a href="#testimonials" className="text-slate-300 hover:text-white transition">Testimonials</a>
          <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
        </div>

        <div className="hidden md:block">
          <button className="px-6 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition font-medium">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 py-4 space-y-4">
            <a href="#features" className="block text-slate-300 hover:text-white">Features</a>
            <a href="#testimonials" className="block text-slate-300 hover:text-white">Testimonials</a>
            <a href="#pricing" className="block text-slate-300 hover:text-white">Pricing</a>
            <button className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition font-medium">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}