'use client'

import { useState } from 'react'

export default function LabelingNaming() {
  const [showBadExample, setShowBadExample] = useState(false)
  const [showPythonCode, setShowPythonCode] = useState(false)

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Labeling & Naming</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Clear, specific labels help users understand what information is needed and reduce confusion.
        </p>
      </div>

      <div className="space-y-8">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setShowBadExample(!showBadExample)}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            {showBadExample ? 'Show Good Examples' : 'Show Bad Examples'}
          </button>
          <button
            onClick={() => setShowPythonCode(true)}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            View Python Code
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

      {/* Python Code Modal */}
      {showPythonCode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Python Code: Clear Function Names</h3>
              <button
                onClick={() => setShowPythonCode(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Good: Descriptive Names</h4>
                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                  <pre className="text-sm font-mono">
{`# Clear, descriptive function names with simple types
from datetime import datetime

def increment_by_two(value: int) -> int:
    return value + 2

def calculate_user_age(birth_date: datetime) -> int:
    return (datetime.now() - birth_date).days // 365

def validate_email_address(email: str) -> bool:
    return "@" in email and "." in email.split("@")[1]

def format_currency(amount: float, currency: str = "USD") -> str:
    return f"{currency} {amount:.2f}"`}
                  </pre>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Function names clearly describe what they do, making the code self-documenting 
                  and easy to understand at a glance.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Poor: Vague Names</h4>
                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                  <pre className="text-sm font-mono">
{`# Unclear, vague function names
def do(x):
    return x + 2

def calc(d):
    return (datetime.now() - d).days // 365

def check(e):
    return "@" in e and "." in e.split("@")[1]

def format(a, c="USD"):
    return f"{c} {a:.2f}"`}
                  </pre>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Short, cryptic names require mental effort to understand. Like vague form labels, 
                  they create cognitive load and potential confusion.
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

