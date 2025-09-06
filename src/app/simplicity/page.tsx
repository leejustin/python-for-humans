'use client'

import { useState } from 'react'

export default function Simplicity() {
  const [showOverdesigned, setShowOverdesigned] = useState(false)

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Simplicity Over Cleverness</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Less is more. Simple, direct interfaces are easier to understand and use than complex, clever ones.
        </p>
      </div>

      <div className="space-y-8">
        <div className="flex justify-center">
          <button
            onClick={() => setShowOverdesigned(!showOverdesigned)}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            {showOverdesigned ? 'Show Simple Design' : 'Show Overdesigned Example'}
          </button>
        </div>

        {!showOverdesigned ? (
          // Simple, clean design
          <div className="bg-white border-2 border-green-200 rounded-lg p-8 space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Simple & Direct</h2>
              <p className="text-gray-600">Clear purpose, minimal distractions, easy to use</p>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-8">
              {/* Simple Navigation */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Clean Navigation</h3>
                <nav className="flex justify-center space-x-8">
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
                </nav>
              </div>

              {/* Simple Hero Section */}
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-gray-900">
                  Get Started Today
                </h1>
                <p className="text-xl text-gray-600">
                  Simple, powerful tools for your business
                </p>
                <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Start Free Trial
                </button>
              </div>

              {/* Simple Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <h3 className="font-semibold text-gray-900 mb-2">Simple</h3>
                  <p className="text-gray-600 text-sm">Easy to use and understand</p>
                </div>
              </div>

              {/* Simple Form */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Get Updates</h3>
                <div className="flex space-x-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Overdesigned example
          <div className="bg-white border-2 border-red-200 rounded-lg p-8 space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Overdesigned & Complex</h2>
              <p className="text-gray-600">Too many elements, animations, and distractions</p>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-8">
              {/* Complex Navigation */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Complex Navigation</h3>
                <nav className="flex justify-center space-x-4">
                  <a href="#" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
                    🏠 Home
                  </a>
                  <a href="#" className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full hover:from-green-600 hover:to-teal-700 transition-all transform hover:scale-105">
                    ℹ️ About
                  </a>
                  <a href="#" className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full hover:from-red-600 hover:to-pink-700 transition-all transform hover:scale-105">
                    📞 Contact
                  </a>
                </nav>
              </div>

              {/* Overdesigned Hero */}
              <div className="text-center space-y-4 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-10 rounded-lg"></div>
                <div className="relative z-10">
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    🚀 Get Started Today! 🚀
                  </h1>
                  <p className="text-xl text-gray-600 mb-6">
                    ✨ Simple, powerful tools for your business ✨
                  </p>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
                    🎉 Start Free Trial Now! 🎉
                  </button>
                </div>
              </div>

              {/* Overdesigned Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">⚡ Lightning Fast ⚡</h3>
                  <p className="text-gray-600 text-sm">🚀 Lightning quick performance with amazing speed! 🚀</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-200 hover:shadow-lg transition-all transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center animate-bounce">
                    <span className="text-white text-2xl">🔒</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">🔒 Super Secure 🔒</h3>
                  <p className="text-gray-600 text-sm">🛡️ Enterprise-grade security with maximum protection! 🛡️</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center animate-spin">
                    <span className="text-white text-2xl">🎨</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">🎨 Beautiful Design 🎨</h3>
                  <p className="text-gray-600 text-sm">✨ Stunning visual design that&apos;s absolutely amazing! ✨</p>
                </div>
              </div>

              {/* Overdesigned Form */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border-2 border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                  📧 Get Amazing Updates! 📧
                </h3>
                <div className="space-y-4">
                  <div className="flex space-x-3">
                    <input
                      type="email"
                      placeholder="✨ Enter your amazing email address ✨"
                      className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-transparent bg-white shadow-inner"
                    />
                    <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-3 rounded-xl hover:from-green-600 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg">
                      🎉 Subscribe! 🎉
                    </button>
                  </div>
                  <p className="text-center text-sm text-gray-500">
                    🔔 Get notified about our latest and greatest features! 🔔
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Table */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Simple vs Complex</h2>
            <p className="text-gray-600">Comparing design approaches and their impact</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Aspect</th>
                  <th className="text-left py-3 px-4 font-semibold text-green-700">Simple Design</th>
                  <th className="text-left py-3 px-4 font-semibold text-red-700">Complex Design</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-900">Loading Time</td>
                  <td className="py-3 px-4 text-green-700">Fast, minimal resources</td>
                  <td className="py-3 px-4 text-red-700">Slow, heavy animations</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-900">User Focus</td>
                  <td className="py-3 px-4 text-green-700">Clear, directed attention</td>
                  <td className="py-3 px-4 text-red-700">Distracted, overwhelmed</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-900">Accessibility</td>
                  <td className="py-3 px-4 text-green-700">Easy to navigate</td>
                  <td className="py-3 px-4 text-red-700">Difficult for many users</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-900">Maintenance</td>
                  <td className="py-3 px-4 text-green-700">Easy to update</td>
                  <td className="py-3 px-4 text-red-700">Complex to maintain</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-900">Mobile Experience</td>
                  <td className="py-3 px-4 text-green-700">Works well on all devices</td>
                  <td className="py-3 px-4 text-red-700">Poor on small screens</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900">User Satisfaction</td>
                  <td className="py-3 px-4 text-green-700">High, users accomplish goals</td>
                  <td className="py-3 px-4 text-red-700">Low, users get frustrated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Simplicity Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">✅ Keep It Simple</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Remove unnecessary elements</li>
                <li>• Use clear, direct language</li>
                <li>• Minimize steps to complete tasks</li>
                <li>• Focus on essential functionality</li>
                <li>• Avoid decorative animations</li>
                <li>• Use familiar patterns</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">❌ Avoid Complexity</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Don&apos;t add features &quot;just because&quot;</li>
                <li>• Avoid excessive animations</li>
                <li>• Don&apos;t use jargon or clever copy</li>
                <li>• Avoid unnecessary interactions</li>
                <li>• Don&apos;t hide important information</li>
                <li>• Avoid trendy design fads</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

