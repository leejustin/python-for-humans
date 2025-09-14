'use client'

import { useEffect, useState } from 'react'
import CodeBlock from '@/components/CodeBlock'

export default function ScanningPatterns() {
  const [showBadExample, setShowBadExample] = useState(false)
  const [showPythonCode, setShowPythonCode] = useState(false)
  const [goodCode, setGoodCode] = useState<string | null>(null)
  const [badCode, setBadCode] = useState<string | null>(null)

  useEffect(() => {
    if (!showPythonCode) return
    if (!goodCode) {
      fetch('/code/scanning_patterns_good.py')
        .then((r) => r.text())
        .then((t) => setGoodCode(t))
        .catch(() => setGoodCode('# Failed to load example'))
    }
    if (!badCode) {
      fetch('/code/scanning_patterns_poor.py')
        .then((r) => r.text())
        .then((t) => setBadCode(t))
        .catch(() => setBadCode('# Failed to load example'))
    }
  }, [showPythonCode, goodCode, badCode])

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Scanning Patterns</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          How users&apos; eyes flow across the screen. The Z-pattern is one of the most common scanning patterns for landing pages.
        </p>
      </div>

      <div className="space-y-8">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setShowBadExample(!showBadExample)}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            {showBadExample ? 'Show Good Example' : 'Show Bad Example'}
          </button>
          <button
            onClick={() => setShowPythonCode(true)}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            View Python Code
          </button>
        </div>

        {!showBadExample ? (
          // Good Z-pattern example
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Good Z-Pattern Layout</h2>
              <p className="text-gray-600">Clear visual flow from top-left to bottom-right</p>
            </div>
            
            <div className="relative">
              {/* Z-pattern overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 800 600">
                  <path
                    d="M 50 50 L 750 50 L 750 300 L 50 300 L 50 550 L 750 550"
                    stroke="#3B82F6"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="5,5"
                  />
                  <circle cx="50" cy="50" r="8" fill="#3B82F6" />
                  <circle cx="750" cy="50" r="8" fill="#3B82F6" />
                  <circle cx="750" cy="300" r="8" fill="#3B82F6" />
                  <circle cx="50" cy="300" r="8" fill="#3B82F6" />
                  <circle cx="50" cy="550" r="8" fill="#3B82F6" />
                  <circle cx="750" cy="550" r="8" fill="#3B82F6" />
                </svg>
              </div>

              {/* Content following Z-pattern */}
              <div className="space-y-8">
                {/* Top horizontal - Logo and navigation */}
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-gray-900">Brand</div>
                  <nav className="flex space-x-6">
                    <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
                  </nav>
                </div>

                {/* Middle section - Hero content */}
                <div className="text-center py-12">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Build Something Amazing
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Create beautiful, functional interfaces that users love to interact with.
                  </p>
                  <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                    Get Started
                  </button>
                </div>

                {/* Bottom horizontal - Features */}
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-blue-600 text-xl">⚡</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Fast</h3>
                    <p className="text-gray-600 text-sm">Lightning quick performance</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-green-600 text-xl">🔒</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Secure</h3>
                    <p className="text-gray-600 text-sm">Enterprise-grade security</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-purple-600 text-xl">🎨</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Beautiful</h3>
                    <p className="text-gray-600 text-sm">Stunning visual design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Bad example - cluttered layout
          <div className="bg-white border-2 border-red-200 rounded-lg p-8 space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Poor Layout</h2>
              <p className="text-gray-600">No clear visual hierarchy or flow</p>
            </div>
            
            <div className="space-y-4">
              {/* Cluttered header */}
              <div className="flex justify-between items-center bg-gray-100 p-4 rounded">
                <div className="text-lg font-bold text-gray-900">Brand</div>
                <div className="flex space-x-4">
                  <a href="#" className="text-sm text-gray-600">About</a>
                  <a href="#" className="text-sm text-gray-600">Services</a>
                  <a href="#" className="text-sm text-gray-600">Contact</a>
                  <a href="#" className="text-sm text-gray-600">Blog</a>
                  <a href="#" className="text-sm text-gray-600">FAQ</a>
                </div>
              </div>

              {/* Disorganized content */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-yellow-100 p-4 rounded">
                  <h3 className="font-bold text-gray-900 mb-2">Welcome!</h3>
                  <p className="text-sm text-gray-600">We&apos;re excited to have you here.</p>
                </div>
                <div className="bg-blue-100 p-4 rounded">
                  <h3 className="font-bold text-gray-900 mb-2">News</h3>
                  <p className="text-sm text-gray-600">Latest updates and announcements.</p>
                </div>
              </div>

              <div className="bg-green-100 p-6 rounded text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Amazing Product</h2>
                <p className="text-gray-600 mb-4">It does everything you need and more!</p>
                <button className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800">
                  Learn More
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2">
                <div className="bg-purple-100 p-2 rounded text-center">
                  <div className="text-lg">🚀</div>
                  <div className="text-xs text-gray-600">Fast</div>
                </div>
                <div className="bg-red-100 p-2 rounded text-center">
                  <div className="text-lg">💡</div>
                  <div className="text-xs text-gray-600">Smart</div>
                </div>
                <div className="bg-orange-100 p-2 rounded text-center">
                  <div className="text-lg">⭐</div>
                  <div className="text-xs text-gray-600">Great</div>
                </div>
                <div className="bg-teal-100 p-2 rounded text-center">
                  <div className="text-lg">🎯</div>
                  <div className="text-xs text-gray-600">Focused</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Python Code Modal */}
      {showPythonCode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Python Code: Top-down Readability</h3>
              <button
                onClick={() => setShowPythonCode(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CodeBlock src="/code/scanning_package_tree.txt" title="Package layout (good layout)" />
                <CodeBlock src="/code/scanning_package___init__good.py" title="pycon_packing/__init__.py (export entry points)" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">Good</h4>
                    <span className="text-xs font-medium text-green-800 bg-green-100 border border-green-200 px-2 py-1 rounded">Main (entry point) at top</span>
                  </div>
                  <CodeBlock src="/code/scanning_patterns_good.py" title="/public/code/scanning_patterns_good.py" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">Poor</h4>
                    <span className="text-xs font-medium text-red-800 bg-red-100 border border-red-200 px-2 py-1 rounded">Main (entry point) at bottom</span>
                  </div>
                  <CodeBlock src="/code/scanning_patterns_poor.py" title="/public/code/scanning_patterns_poor.py" />
                </div>
              </div>
              <p className="text-sm text-gray-600">
                When the entry point (main) is first, readers immediately understand purpose; when it is last, they must read helpers before seeing intent.
              </p>
            </div>
            
            <div className="flex justify-end mt-8">
              <button
                onClick={() => setShowPythonCode(false)}
                className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

