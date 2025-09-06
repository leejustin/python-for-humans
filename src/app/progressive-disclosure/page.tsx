'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

export default function ProgressiveDisclosure() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
  const [showModal, setShowModal] = useState(false)
  const [showBadExample, setShowBadExample] = useState(false)

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Progressive Disclosure</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Hide complexity until it&apos;s needed. Show the essential information first, then reveal details on demand.
        </p>
      </div>

      <div className="space-y-8">
        <div className="flex justify-center">
          <button
            onClick={() => setShowBadExample(!showBadExample)}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            {showBadExample ? 'Show Good Examples' : 'Show Bad Examples'}
          </button>
        </div>

        {!showBadExample ? (
          // Good progressive disclosure examples
          <div className="bg-white border-2 border-green-200 rounded-lg p-8 space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Expandable Content</h2>
              <p className="text-gray-600">Click to reveal additional details</p>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-4">
              {/* Section 1 */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection('section1')}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900">Project Overview</h3>
                    <p className="text-sm text-gray-600 mt-1">Basic information about the project</p>
                  </div>
                  {expandedSections.has('section1') ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                
                {expandedSections.has('section1') && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <div className="pt-4 space-y-3">
                      <p className="text-gray-700">
                        This project aims to create a comprehensive design system that can be used across 
                        multiple products and platforms. The system includes components, patterns, and guidelines.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-900">Timeline:</span>
                          <span className="text-gray-600 ml-2">6 months</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Team Size:</span>
                          <span className="text-gray-600 ml-2">8 people</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Section 2 */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection('section2')}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900">Technical Requirements</h3>
                    <p className="text-sm text-gray-600 mt-1">Detailed technical specifications</p>
                  </div>
                  {expandedSections.has('section2') ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                
                {expandedSections.has('section2') && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <div className="pt-4 space-y-3">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Frontend Stack</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• React 18+ with TypeScript</li>
                          <li>• TailwindCSS for styling</li>
                          <li>• Storybook for component documentation</li>
                          <li>• Jest and React Testing Library</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Backend Requirements</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Node.js with Express</li>
                          <li>• PostgreSQL database</li>
                          <li>• Redis for caching</li>
                          <li>• Docker for containerization</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Section 3 */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection('section3')}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900">Design Guidelines</h3>
                    <p className="text-sm text-gray-600 mt-1">Visual and interaction standards</p>
                  </div>
                  {expandedSections.has('section3') ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                
                {expandedSections.has('section3') && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <div className="pt-4 space-y-3">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Color Palette</h4>
                        <div className="flex space-x-2">
                          <div className="w-8 h-8 bg-blue-500 rounded"></div>
                          <div className="w-8 h-8 bg-green-500 rounded"></div>
                          <div className="w-8 h-8 bg-red-500 rounded"></div>
                          <div className="w-8 h-8 bg-yellow-500 rounded"></div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Typography Scale</h4>
                        <div className="space-y-1 text-sm">
                          <div className="text-2xl font-bold">Heading 1</div>
                          <div className="text-xl font-semibold">Heading 2</div>
                          <div className="text-lg font-medium">Heading 3</div>
                          <div className="text-base">Body text</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Example */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Modal Dialog</h2>
              <p className="text-gray-600 text-center mb-6">Show detailed information in an overlay</p>
              
              <div className="flex justify-center">
                <button
                  onClick={() => setShowModal(true)}
                  className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  View Project Details
                </button>
              </div>

              {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Project Details</h3>
                      <button
                        onClick={() => setShowModal(false)}
                        className="text-gray-400 hover:text-gray-600 text-2xl"
                      >
                        ×
                      </button>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Project Goals</h4>
                        <p className="text-gray-700">
                          Create a unified design system that improves consistency across all products, 
                          reduces development time, and enhances user experience through standardized components.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Success Metrics</h4>
                        <ul className="text-gray-700 space-y-1">
                          <li>• 50% reduction in design-to-development time</li>
                          <li>• 90% component reuse across products</li>
                          <li>• Improved accessibility scores (WCAG 2.1 AA)</li>
                          <li>• Positive developer feedback (4.5+ rating)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Timeline</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Research & Planning</span>
                            <span className="text-gray-900">Weeks 1-2</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Design & Prototyping</span>
                            <span className="text-gray-900">Weeks 3-8</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Development</span>
                            <span className="text-gray-900">Weeks 9-20</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Testing & Documentation</span>
                            <span className="text-gray-900">Weeks 21-24</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end space-x-3 mt-8">
                      <button
                        onClick={() => setShowModal(false)}
                        className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => setShowModal(false)}
                        className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        Got it
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          // Bad progressive disclosure examples
          <div className="bg-white border-2 border-red-200 rounded-lg p-8 space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Poor Progressive Disclosure</h2>
              <p className="text-gray-600">Everything shown at once, overwhelming the user</p>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-4">
              {/* Information Dump */}
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Overview</h3>
                <p className="text-gray-700 mb-4">
                  This project aims to create a comprehensive design system that can be used across 
                  multiple products and platforms. The system includes components, patterns, and guidelines.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <span className="font-medium text-gray-900">Timeline:</span>
                    <span className="text-gray-600 ml-2">6 months</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Team Size:</span>
                    <span className="text-gray-600 ml-2">8 people</span>
                  </div>
                </div>
                
                <h4 className="font-medium text-gray-900 mb-2">Technical Requirements</h4>
                <div className="mb-4">
                  <h5 className="font-medium text-gray-900 mb-2">Frontend Stack</h5>
                  <ul className="text-sm text-gray-700 space-y-1 mb-4">
                    <li>• React 18+ with TypeScript</li>
                    <li>• TailwindCSS for styling</li>
                    <li>• Storybook for component documentation</li>
                    <li>• Jest and React Testing Library</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h5 className="font-medium text-gray-900 mb-2">Backend Requirements</h5>
                  <ul className="text-sm text-gray-700 space-y-1 mb-4">
                    <li>• Node.js with Express</li>
                    <li>• PostgreSQL database</li>
                    <li>• Redis for caching</li>
                    <li>• Docker for containerization</li>
                  </ul>
                </div>
                
                <h4 className="font-medium text-gray-900 mb-2">Design Guidelines</h4>
                <div className="mb-4">
                  <h5 className="font-medium text-gray-900 mb-2">Color Palette</h5>
                  <div className="flex space-x-2 mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded"></div>
                    <div className="w-8 h-8 bg-green-500 rounded"></div>
                    <div className="w-8 h-8 bg-red-500 rounded"></div>
                    <div className="w-8 h-8 bg-yellow-500 rounded"></div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Typography Scale</h5>
                  <div className="space-y-1 text-sm">
                    <div className="text-2xl font-bold">Heading 1</div>
                    <div className="text-xl font-semibold">Heading 2</div>
                    <div className="text-lg font-medium">Heading 3</div>
                    <div className="text-base">Body text</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Progressive Disclosure Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">✅ Advantages</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Reduces cognitive load</li>
                <li>• Prevents overwhelming users</li>
                <li>• Maintains focus on primary tasks</li>
                <li>• Allows for detailed information when needed</li>
                <li>• Improves scannability</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">🎯 Best Practices</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Show most important info first</li>
                <li>• Use clear affordances (arrows, buttons)</li>
                <li>• Provide preview of hidden content</li>
                <li>• Don&apos;t hide critical information</li>
                <li>• Make expansion obvious and easy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}