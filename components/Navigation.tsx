'use client'

import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-navy/80 border-lightest-navy fixed top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-green font-mono text-lg font-bold">LMH</div>
          <div className="hidden space-x-8 md:flex">
            <a href="#about" className="hover:text-green transition-colors">
              簡介
            </a>
            <a href="#projects" className="hover:text-green transition-colors">
              作品集
            </a>
            <a href="#skills" className="hover:text-green transition-colors">
              技術
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="flex h-6 w-6 flex-col space-y-1.5 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`bg-lightest-slate block h-0.5 w-6 transition-all duration-300 ${
                isMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            ></span>
            <span
              className={`bg-lightest-slate block h-0.5 w-6 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`bg-lightest-slate block h-0.5 w-6 transition-all duration-300 ${
                isMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="bg-navy/95 border-lightest-navy absolute top-full left-0 w-full border-b backdrop-blur-md md:hidden">
            <div className="flex flex-col space-y-4 px-6 py-8">
              <a
                href="#about"
                className="hover:text-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                簡介
              </a>
              <a
                href="#projects"
                className="hover:text-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                作品集
              </a>
              <a
                href="#skills"
                className="hover:text-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                技術
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
