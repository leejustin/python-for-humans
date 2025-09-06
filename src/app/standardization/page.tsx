'use client'

import { useState } from 'react'

export default function Standardization() {
  const [showInconsistent, setShowInconsistent] = useState(false)

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Standardization</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Consistent alignment, spacing, and colors create a unified experience that users can rely on.
        </p>
      </div>

      <div className="space-y-8">
        <div className="flex justify-center">
          <button
            onClick={() => setShowInconsistent(!showInconsistent)}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            {showInconsistent ? 'Show Consistent Design' : 'Show Inconsistent Design'}
          </button>
        </div>

        {!showInconsistent ? (
          // Consistent design
          <div className="bg-white border-2 border-green-200 rounded-lg p-8 space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Consistent Design System</h2>
              <p className="text-gray-600">Unified spacing, colors, and alignment across all elements</p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Consistent Header */}
              <header className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900">Brand</div>
                  <nav className="flex space-x-6">
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
                  </nav>
                </div>
              </header>

              {/* Consistent Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-blue-600 text-xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance</h3>
                  <p className="text-gray-600 text-sm">
                    Optimized for speed and efficiency with minimal resource usage.
                  </p>
                </div>

                <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-green-600 text-xl">🔒</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Security</h3>
                  <p className="text-gray-600 text-sm">
                    Enterprise-grade security with end-to-end encryption and compliance.
                  </p>
                </div>

                <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-purple-600 text-xl">🎨</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Design</h3>
                  <p className="text-gray-600 text-sm">
                    Beautiful, intuitive interfaces that users love to interact with.
                  </p>
                </div>
              </div>

              {/* Consistent Buttons */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Consistent Button Styles</h3>
                <div className="flex flex-wrap gap-4">
                  <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Primary
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Secondary
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Accent
                  </button>
                </div>
              </div>

              {/* Consistent Form */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Form</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Inconsistent design
          <div className="bg-white border-2 border-red-200 rounded-lg p-8 space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Inconsistent Design</h2>
              <p className="text-gray-600">Mixed spacing, colors, and alignment create confusion</p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Inconsistent Header */}
              <header className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-8">
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-black text-purple-800">Brand</div>
                  <nav className="flex space-x-8">
                    <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors font-semibold">Home</a>
                    <a href="#" className="text-green-700 hover:text-green-900 transition-colors">About</a>
                    <a href="#" className="text-red-700 hover:text-red-900 transition-colors font-bold">Contact</a>
                  </nav>
                </div>
              </header>

              {/* Inconsistent Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-8 border-2 border-blue-300 rounded-2xl bg-blue-50 hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mb-6 flex items-center justify-center">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Performance</h3>
                  <p className="text-blue-700 text-base">
                    Optimized for speed and efficiency with minimal resource usage.
                  </p>
                </div>

                <div className="p-4 border border-green-200 rounded-md bg-green-25 hover:shadow-lg transition-shadow">
                  <div className="w-8 h-8 bg-green-500 rounded mb-3 flex items-center justify-center">
                    <span className="text-white text-sm">🔒</span>
                  </div>
                  <h3 className="text-base font-medium text-green-800 mb-2">Security</h3>
                  <p className="text-green-600 text-xs">
                    Enterprise-grade security with end-to-end encryption and compliance.
                  </p>
                </div>

                <div className="p-10 border-4 border-purple-400 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-2xl transition-all">
                  <div className="w-20 h-20 bg-purple-600 rounded-lg mb-8 flex items-center justify-center">
                    <span className="text-white text-3xl">🎨</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-purple-900 mb-4">Design</h3>
                  <p className="text-purple-700 text-lg">
                    Beautiful, intuitive interfaces that users love to interact with.
                  </p>
                </div>
              </div>

              {/* Inconsistent Buttons */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Inconsistent Button Styles</h3>
                <div className="flex flex-wrap gap-6">
                  <button className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors font-bold">
                    Primary
                  </button>
                  <button className="px-3 py-1 border-2 border-green-400 text-green-700 rounded-md hover:bg-green-50 transition-colors">
                    Secondary
                  </button>
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
                    Accent
                  </button>
                </div>
              </div>

              {/* Inconsistent Form */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border-2 border-orange-200">
                <h3 className="text-xl font-bold text-orange-900 mb-6">Contact Form</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-base font-semibold text-orange-800 mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name here"
                      className="w-full px-4 py-3 border-2 border-orange-300 rounded-xl focus:ring-4 focus:ring-orange-500 focus:border-transparent bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-orange-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full px-3 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    />
                  </div>
                  <button className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Consistency Guidelines */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Consistency Guidelines</h2>
            <p className="text-gray-600">Key principles for maintaining design consistency</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Spacing System</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gray-300 rounded"></div>
                  <span className="text-sm text-gray-600">4px - Small spacing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-4 bg-gray-300 rounded"></div>
                  <span className="text-sm text-gray-600">8px - Medium spacing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-4 bg-gray-300 rounded"></div>
                  <span className="text-sm text-gray-600">16px - Large spacing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-4 bg-gray-300 rounded"></div>
                  <span className="text-sm text-gray-600">24px - Extra large spacing</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Color Usage</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gray-900 rounded"></div>
                  <span className="text-sm text-gray-600">Primary text and buttons</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gray-600 rounded"></div>
                  <span className="text-sm text-gray-600">Secondary text</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                  <span className="text-sm text-gray-600">Links and accents</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  <span className="text-sm text-gray-600">Borders and dividers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Standardization Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">✅ Consistent Design</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Predictable user experience</li>
                <li>• Faster development</li>
                <li>• Easier maintenance</li>
                <li>• Reduced cognitive load</li>
                <li>• Professional appearance</li>
                <li>• Better accessibility</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">❌ Inconsistent Design</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Confusing user experience</li>
                <li>• Slower development</li>
                <li>• Difficult maintenance</li>
                <li>• Increased cognitive load</li>
                <li>• Unprofessional appearance</li>
                <li>• Accessibility issues</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

