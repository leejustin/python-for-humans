'use client'

import { useState } from 'react'
import CodeBlock from '@/components/CodeBlock'

export default function DesignSystems() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const [showBadExample, setShowBadExample] = useState(false)

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Design Systems</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Consistent, repeatable UI elements create familiarity and reduce cognitive load for users.
        </p>
      </div>

      <div className="space-y-8">
        <div className="flex justify-center">
          <button
            onClick={() => setShowBadExample(!showBadExample)}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            {showBadExample ? 'Show Good Design System' : 'Show Inconsistent Design'}
          </button>
        </div>

        {!showBadExample ? (
          // Good design system examples
          <div className="bg-white border-2 border-green-200 rounded-lg p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Button System</h2>
            <p className="text-gray-600">Consistent sizing, colors, and spacing across all buttons</p>
          </div>
          
          <div className="space-y-6">
            {/* Primary Buttons */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Primary Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-3 py-1.5 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 transition-colors">
                  Small
                </button>
                <button className="px-4 py-2 bg-gray-900 text-white text-base rounded-lg hover:bg-gray-800 transition-colors">
                  Medium
                </button>
                <button className="px-6 py-3 bg-gray-900 text-white text-lg rounded-lg hover:bg-gray-800 transition-colors">
                  Large
                </button>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Secondary Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-3 py-1.5 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition-colors">
                  Small
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 text-base rounded-lg hover:bg-gray-50 transition-colors">
                  Medium
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 text-lg rounded-lg hover:bg-gray-50 transition-colors">
                  Large
                </button>
              </div>
            </div>

            {/* Accent Buttons */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Accent Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors">
                  Small
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white text-base rounded-lg hover:bg-blue-700 transition-colors">
                  Medium
                </button>
                <button className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-colors">
                  Large
                </button>
              </div>
            </div>
          </div>

          {/* Card System */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Card System</h2>
            <p className="text-gray-600 text-center mb-6">Consistent spacing, shadows, and layout patterns</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div 
              className={`p-6 border border-gray-200 rounded-lg hover:shadow-md transition-all cursor-pointer ${
                selectedCard === 1 ? 'ring-2 ring-blue-500 shadow-md' : ''
              }`}
              onClick={() => setSelectedCard(selectedCard === 1 ? null : 1)}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-blue-600 text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance</h3>
              <p className="text-gray-600 text-sm">
                Optimized for speed and efficiency with minimal resource usage.
              </p>
            </div>

            {/* Card 2 */}
            <div 
              className={`p-6 border border-gray-200 rounded-lg hover:shadow-md transition-all cursor-pointer ${
                selectedCard === 2 ? 'ring-2 ring-blue-500 shadow-md' : ''
              }`}
              onClick={() => setSelectedCard(selectedCard === 2 ? null : 2)}
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-green-600 text-xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Security</h3>
              <p className="text-gray-600 text-sm">
                Enterprise-grade security with end-to-end encryption and compliance.
              </p>
            </div>

            {/* Card 3 */}
            <div 
              className={`p-6 border border-gray-200 rounded-lg hover:shadow-md transition-all cursor-pointer ${
                selectedCard === 3 ? 'ring-2 ring-blue-500 shadow-md' : ''
              }`}
              onClick={() => setSelectedCard(selectedCard === 3 ? null : 3)}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-purple-600 text-xl">🎨</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600 text-sm">
                Beautiful, intuitive interfaces that users love to interact with.
              </p>
            </div>
          </div>
          </div>

          {/* Typography System */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Typography System</h2>
            <p className="text-gray-600 text-center mb-6">Consistent font sizes, weights, and line heights</p>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Heading 1</h1>
              <p className="text-sm text-gray-500">text-4xl font-bold - 2.25rem / 2.5rem</p>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Heading 2</h2>
              <p className="text-sm text-gray-500">text-3xl font-bold - 1.875rem / 2.25rem</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-gray-900">Heading 3</h3>
              <p className="text-sm text-gray-500">text-2xl font-semibold - 1.5rem / 2rem</p>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-gray-900">Heading 4</h4>
              <p className="text-sm text-gray-500">text-xl font-semibold - 1.25rem / 1.75rem</p>
            </div>
            
            <div className="space-y-2">
              <p className="text-lg text-gray-700">Large body text for important content</p>
              <p className="text-sm text-gray-500">text-lg - 1.125rem / 1.75rem</p>
            </div>
            
            <div className="space-y-2">
              <p className="text-base text-gray-700">Regular body text for most content</p>
              <p className="text-sm text-gray-500">text-base - 1rem / 1.5rem</p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Small text for captions and metadata</p>
              <p className="text-sm text-gray-500">text-sm - 0.875rem / 1.25rem</p>
            </div>
          </div>
          </div>

          {/* Color System */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Color System</h2>
            <p className="text-gray-600 text-center mb-6">Consistent color palette with semantic meaning</p>
          
          <div className="space-y-6">
            {/* Primary Colors */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Primary Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-900 rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-medium text-gray-900">Gray 900</p>
                  <p className="text-xs text-gray-500">#111827</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-medium text-gray-900">Gray 700</p>
                  <p className="text-xs text-gray-500">#374151</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-500 rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-medium text-gray-900">Gray 500</p>
                  <p className="text-xs text-gray-500">#6B7280</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-medium text-gray-900">Gray 300</p>
                  <p className="text-xs text-gray-500">#D1D5DB</p>
                </div>
              </div>
            </div>

            {/* Accent Colors */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Accent Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-medium text-gray-900">Blue 600</p>
                  <p className="text-xs text-gray-500">#2563EB</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-medium text-gray-900">Green 600</p>
                  <p className="text-xs text-gray-500">#16A34A</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-medium text-gray-900">Red 600</p>
                  <p className="text-xs text-gray-500">#DC2626</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-600 rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-medium text-gray-900">Yellow 600</p>
                  <p className="text-xs text-gray-500">#CA8A04</p>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Spacing System */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Spacing System</h2>
            <p className="text-gray-600 text-center mb-6">Consistent spacing scale for margins and padding</p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-xs font-medium text-blue-700">
                1
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <span className="text-sm text-gray-600">0.25rem (4px)</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-xs font-medium text-blue-700">
                2
              </div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <span className="text-sm text-gray-600">0.5rem (8px)</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-xs font-medium text-blue-700">
                3
              </div>
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <span className="text-sm text-gray-600">0.75rem (12px)</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-xs font-medium text-blue-700">
                4
              </div>
              <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
              <span className="text-sm text-gray-600">1rem (16px)</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-xs font-medium text-blue-700">
                6
              </div>
              <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
              <span className="text-sm text-gray-600">1.5rem (24px)</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-xs font-medium text-blue-700">
                8
              </div>
              <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
              <span className="text-sm text-gray-600">2rem (32px)</span>
            </div>
          </div>
          </div>
        </div>
        ) : (
          // Bad design system examples
          <div className="bg-white border-2 border-red-200 rounded-lg p-8 space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Inconsistent Design Elements</h2>
              <p className="text-gray-600">Mixed styles, sizes, and colors create confusion</p>
            </div>
            
            <div className="space-y-6">
              {/* Inconsistent Buttons */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Inconsistent Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <button className="px-2 py-1 bg-red-500 text-white text-xs rounded-sm hover:bg-red-600">
                    Small Red
                  </button>
                  <button className="px-6 py-4 bg-gradient-to-r from-blue-400 to-purple-600 text-white text-lg rounded-full hover:from-blue-500 hover:to-purple-700">
                    Large Gradient
                  </button>
                  <button className="px-3 py-2 border-4 border-green-400 text-green-700 text-sm rounded-md hover:bg-green-50">
                    Medium Green
                  </button>
                  <button className="px-8 py-1 bg-yellow-500 text-black text-base rounded-none hover:bg-yellow-600">
                    Wide Yellow
                  </button>
                </div>
              </div>

              {/* Inconsistent Cards */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Inconsistent Cards</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-3 border border-gray-200 rounded-sm bg-blue-50">
                    <div className="w-8 h-8 bg-blue-500 rounded-full mb-2 flex items-center justify-center">
                      <span className="text-white text-sm">⚡</span>
                    </div>
                    <h3 className="text-sm font-bold text-blue-900 mb-1">Performance</h3>
                    <p className="text-blue-700 text-xs">
                      Optimized for speed and efficiency.
                    </p>
                  </div>

                  <div className="p-8 border-4 border-green-300 rounded-2xl bg-gradient-to-br from-green-100 to-green-200">
                    <div className="w-16 h-16 bg-green-600 rounded-lg mb-6 flex items-center justify-center">
                      <span className="text-white text-2xl">🔒</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-green-900 mb-3">Security</h3>
                    <p className="text-green-800 text-base">
                      Enterprise-grade security with end-to-end encryption and compliance features.
                    </p>
                  </div>

                  <div className="p-4 border-2 border-purple-400 rounded-lg bg-purple-25">
                    <div className="w-10 h-10 bg-purple-500 rounded mb-3 flex items-center justify-center">
                      <span className="text-white text-lg">🎨</span>
                    </div>
                    <h3 className="text-base font-semibold text-purple-800 mb-2">Design</h3>
                    <p className="text-purple-600 text-sm">
                      Beautiful, intuitive interfaces.
                    </p>
                  </div>
                </div>
              </div>

              {/* Inconsistent Typography */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Inconsistent Typography</h3>
                <div className="space-y-3">
                  <h1 className="text-2xl font-light text-gray-700">Light Heading</h1>
                  <h2 className="text-4xl font-black text-red-600">Bold Red Heading</h2>
                  <h3 className="text-lg font-normal text-blue-500">Normal Blue Heading</h3>
                  <p className="text-sm text-gray-500">Small gray text</p>
                  <p className="text-xl text-green-600 font-bold">Large green bold text</p>
                </div>
              </div>

              {/* Inconsistent Colors */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Inconsistent Colors</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-400 rounded-lg mx-auto mb-2"></div>
                    <p className="text-sm font-medium text-gray-900">Red 400</p>
                    <p className="text-xs text-gray-500">#F87171</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-800 rounded-lg mx-auto mb-2"></div>
                    <p className="text-sm font-medium text-gray-900">Blue 800</p>
                    <p className="text-xs text-gray-500">#1E40AF</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-300 rounded-lg mx-auto mb-2"></div>
                    <p className="text-sm font-medium text-gray-900">Yellow 300</p>
                    <p className="text-xs text-gray-500">#FDE047</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-lg mx-auto mb-2"></div>
                    <p className="text-sm font-medium text-gray-900">Purple 600</p>
                    <p className="text-xs text-gray-500">#9333EA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Design System Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">✅ Advantages</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Consistent user experience</li>
                <li>• Faster development</li>
                <li>• Easier maintenance</li>
                <li>• Reduced design debt</li>
                <li>• Better accessibility</li>
                <li>• Scalable across teams</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">🎯 Key Components</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Color palette and tokens</li>
                <li>• Typography scale</li>
                <li>• Spacing system</li>
                <li>• Component library</li>
                <li>• Usage guidelines</li>
                <li>• Accessibility standards</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Python examples loaded from files */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Python Examples</h2>
            <p className="text-gray-600">Consistent base classes vs one-off designs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CodeBlock src="/code/design_systems_good.py" title="/public/code/design_systems_good.py" />
            <CodeBlock src="/code/design_systems_poor.py" title="/public/code/design_systems_poor.py" />
          </div>
        </div>
      </div>
    </div>
  )
}

