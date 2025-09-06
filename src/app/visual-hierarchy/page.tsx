'use client'

import { useState } from 'react'

export default function VisualHierarchy() {
  const [showBadExample, setShowBadExample] = useState(false)

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Visual Hierarchy</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Typography, spacing, and alignment guide the eye and help users understand content structure.
        </p>
      </div>

      <div className="space-y-8">
        <div className="flex justify-center">
          <button
            onClick={() => setShowBadExample(!showBadExample)}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            {showBadExample ? 'Show Good Hierarchy' : 'Show Poor Hierarchy'}
          </button>
        </div>

        {!showBadExample ? (
          // Good visual hierarchy
          <div className="bg-white border-2 border-green-200 rounded-lg p-8 space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Clear Visual Hierarchy</h2>
              <p className="text-gray-600">Typography and spacing create clear content structure</p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Article with good hierarchy */}
              <article className="space-y-6">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                    Building Better User Interfaces
                  </h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>By Sarah Chen</span>
                    <span>•</span>
                    <span>March 15, 2024</span>
                    <span>•</span>
                    <span>8 min read</span>
                  </div>
                </header>

                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Creating interfaces that users love requires understanding how people process information visually. 
                    Good visual hierarchy makes content scannable and digestible.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    The Power of Typography
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Typography is the foundation of visual hierarchy. By varying font sizes, weights, and spacing, 
                    you can guide users through your content in a logical, intuitive way.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                    Size and Weight
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Larger, bolder text naturally draws attention first. Use this to establish your content&apos;s 
                    information architecture and help users quickly identify what&apos;s most important.
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Headlines should be significantly larger than body text</li>
                    <li>Use bold or semibold weights for emphasis</li>
                    <li>Maintain consistent sizing across similar elements</li>
                    <li>Consider line height for readability</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Spacing and Alignment
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    White space is not empty space—it&apos;s a powerful design tool. Proper spacing creates breathing 
                    room and helps users focus on individual elements.
                  </p>

                  <blockquote className="border-l-4 border-blue-500 pl-6 py-2 bg-blue-50 rounded-r-lg">
                    <p className="text-lg text-gray-700 italic">
                      &quot;White space is to be regarded as an active element, not a passive background.&quot;
                    </p>
                    <cite className="text-sm text-gray-500 mt-2 block">— Jan Tschichold</cite>
                  </blockquote>
                </div>
              </article>
            </div>
          </div>
        ) : (
          // Poor visual hierarchy
          <div className="bg-white border-2 border-red-200 rounded-lg p-8 space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Poor Visual Hierarchy</h2>
              <p className="text-gray-600">No clear structure or information priority</p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {/* Article with poor hierarchy */}
              <article className="space-y-2">
                <header className="space-y-2">
                  <h1 className="text-lg font-normal text-gray-700">
                    building better user interfaces
                  </h1>
                  <div className="text-sm text-gray-400">
                    by sarah chen march 15 2024 8 min read
                  </div>
                </header>

                <div className="space-y-2">
                  <p className="text-base text-gray-600">
                    Creating interfaces that users love requires understanding how people process information visually. 
                    Good visual hierarchy makes content scannable and digestible.
                  </p>

                  <h2 className="text-lg font-normal text-gray-600 mt-4">
                    the power of typography
                  </h2>
                  
                  <p className="text-base text-gray-600">
                    Typography is the foundation of visual hierarchy. By varying font sizes, weights, and spacing, 
                    you can guide users through your content in a logical, intuitive way.
                  </p>

                  <h3 className="text-base font-normal text-gray-600 mt-2">
                    size and weight
                  </h3>
                  
                  <p className="text-base text-gray-600">
                    Larger, bolder text naturally draws attention first. Use this to establish your content&apos;s 
                    information architecture and help users quickly identify what&apos;s most important.
                  </p>

                  <ul className="list-none space-y-1 text-gray-600">
                    <li>headlines should be significantly larger than body text</li>
                    <li>use bold or semibold weights for emphasis</li>
                    <li>maintain consistent sizing across similar elements</li>
                    <li>consider line height for readability</li>
                  </ul>

                  <h2 className="text-lg font-normal text-gray-600 mt-4">
                    spacing and alignment
                  </h2>
                  
                  <p className="text-base text-gray-600">
                    White space is not empty space—it&apos;s a powerful design tool. Proper spacing creates breathing 
                    room and helps users focus on individual elements.
                  </p>

                  <div className="border border-gray-300 p-3 bg-gray-100">
                    <p className="text-base text-gray-600">
                      &quot;White space is to be regarded as an active element, not a passive background.&quot; — Jan Tschichold
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        )}

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Hierarchy Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Typography</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Use size to show importance</li>
                <li>• Vary font weights strategically</li>
                <li>• Maintain consistent scale</li>
                <li>• Consider line height</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Spacing</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Group related elements</li>
                <li>• Create breathing room</li>
                <li>• Use consistent spacing</li>
                <li>• Separate different sections</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Alignment</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Align elements consistently</li>
                <li>• Use grid systems</li>
                <li>• Create visual connections</li>
                <li>• Guide the eye naturally</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

