'use client'

import { useState } from 'react'
import CodeBlock from '@/components/CodeBlock'

export default function VisualHierarchy() {
  const [showBadExample, setShowBadExample] = useState(false)
  const [showPythonCode, setShowPythonCode] = useState(false)

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Visual Hierarchy</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Typography, spacing, and alignment guide the eye and help users understand content structure.
        </p>
      </div>

      <div className="space-y-8">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setShowBadExample(!showBadExample)}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            {showBadExample ? 'Show Good Hierarchy' : 'Show Poor Hierarchy'}
          </button>
          <button
            onClick={() => setShowPythonCode(true)}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            View Python Code
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
                    <span>By Justin Lee</span>
                    <span>•</span>
                    <span>2025-09-20</span>
                    <span>•</span>
                    <span>8 min read</span>
                  </div>
                </header>

                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-600 leading-relaxed">
                    In a team setting, your Python code is more than instructions for machines—it&apos;s an interface your 
                    teammates will interact with, maintain, and extend. This talk draws on UI/UX design principles to help you 
                    write Python that&apos;s more discoverable, readable, and user‑friendly.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    The Power of Typography
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Over time, some of the biggest time sinks in collaborative development come from code that&apos;s hard to revisit—
                    whether it was written by a teammate or by you. We&apos;ll use design-inspired practices to make code easier to return to, 
                    share, and scale across teams.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                    Size and Weight
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Concepts from interface design—visual hierarchy, layout, progressive disclosure, and affordances—can guide how you 
                    name functions, structure files, and write signatures that act like intuitive forms. Readers scan code top‑down like 
                    users scan a page.
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Top-level structure like layout: __init__.py, __main__, and grouping logic improve scannability</li>
                    <li>Naming is labeling: clear, specific names aid navigation and tool‑assisted discovery</li>
                    <li>Vertical spacing/indentation mimic visual grouping and signal intent</li>
                    <li>Decorators and type hints act like collapsible sections and labeled fields</li>
                    <li>black, ruff, and Pylance enforce consistency at scale (like accessibility checkers)</li>
                    <li>Apply design restraint—cleverness often ages poorly</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Spacing and Alignment
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This isn&apos;t just about a style guide—it&apos;s a mindset: treat your codebase like a user experience so others can read, 
                    trust, and extend it—just like good UI.
                  </p>

                  <blockquote className="border-l-4 border-blue-500 pl-6 py-2 bg-blue-50 rounded-r-lg">
                    <p className="text-lg text-gray-700 italic">
                      No design background needed—just curiosity, empathy, and the desire to write Python you won&apos;t dread revisiting.
                    </p>
                    <cite className="text-sm text-gray-500 mt-2 block">— Talk Overview</cite>
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
                    Building Better User Interfaces
                  </h1>
                  <div className="text-sm text-gray-400">
                    By Justin Lee 2025-09-20 8 min read
                  </div>
                </header>

                <div className="space-y-2">
                  <p className="text-base text-gray-600">
                    Creating interfaces that users love requires understanding how people process information visually. 
                    Good visual hierarchy makes content scannable and digestible.
                  </p>

                  <h2 className="text-lg font-normal text-gray-600 mt-4">
                    The Power of Typography
                  </h2>
                  
                  <p className="text-base text-gray-600">
                    Typography is the foundation of visual hierarchy. By varying font sizes, weights, and spacing, 
                    you can guide users through your content in a logical, intuitive way.
                  </p>

                  <h3 className="text-base font-normal text-gray-600 mt-2">
                    Size and Weight
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
                    Spacing and Alignment
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

      {/* Python Code Modal */}
      {showPythonCode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Python Code: Visual Hierarchy</h3>
              <button
                onClick={() => setShowPythonCode(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Good: Group steps within a function</h4>
                <CodeBlock src="/code/visual_hierarchy_good.py" title="/public/code/visual_hierarchy_good.py" />
                <p className="text-sm text-gray-600 mt-3">
                  Blank lines separate validation, transformation, and return. This creates visual hierarchy inside a single unit of logic.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Poor: No grouping inside the function</h4>
                <CodeBlock src="/code/visual_hierarchy_poor.py" title="/public/code/visual_hierarchy_poor.py" />
                <p className="text-sm text-gray-600 mt-3">
                  With no spacing between conceptual steps, the function is harder to scan and reason about.
                </p>
              </div>
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

