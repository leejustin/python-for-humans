'use client'

import { useState } from 'react'

export default function LabelingNaming() {
  const [showBadExample, setShowBadExample] = useState(false)

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Labeling & Naming</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Clear, specific labels help users understand what information is needed and reduce confusion.
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
          // Good labeling examples
          <div className="bg-white border-2 border-green-200 rounded-lg p-8 space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Clear, Specific Labels</h2>
              <p className="text-gray-600">Users immediately understand what&apos;s expected</p>
            </div>
            
            <div className="max-w-md mx-auto space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">We&apos;ll use this to send you updates</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Include country code for international numbers</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company name
                </label>
                <input
                  type="text"
                  placeholder="Acme Corporation"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Leave blank if you&apos;re an individual</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project budget
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="over-50k">Over $50,000</option>
                </select>
              </div>

              <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors">
                Create account
              </button>
            </div>
          </div>
        ) : (
          // Bad labeling examples
          <div className="bg-white border-2 border-red-200 rounded-lg p-8 space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Vague, Confusing Labels</h2>
              <p className="text-gray-600">Users are left guessing what information is needed</p>
            </div>
            
            <div className="max-w-md mx-auto space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact
                </label>
                <input
                  type="text"
                  placeholder="Enter contact info"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number
                </label>
                <input
                  type="text"
                  placeholder="Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Choose</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors">
                Submit
              </button>
            </div>
          </div>
        )}

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">✅ Good Labels</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Specific and descriptive</li>
                <li>• Include helpful placeholder text</li>
                <li>• Provide context when needed</li>
                <li>• Use familiar terminology</li>
                <li>• Match user mental models</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">❌ Poor Labels</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Vague and ambiguous</li>
                <li>• Technical jargon</li>
                <li>• No context or guidance</li>
                <li>• Inconsistent terminology</li>
                <li>• Assumes user knowledge</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

