'use client'

import { useState } from 'react'
import CodeBlock from '@/components/CodeBlock'

export default function Forms() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    budget: '',
    timeline: '',
    message: '',
    newsletter: false
  })
  const [showBadExample, setShowBadExample] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Forms</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Clean forms with good defaults, clear labels, and helpful affordances guide users to successful completion.
        </p>
      </div>

      <div className="space-y-8">
        <div className="flex justify-center">
          <button
            onClick={() => setShowBadExample(!showBadExample)}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            {showBadExample ? 'Show Good Form' : 'Show Bad Form'}
          </button>
        </div>

        {!showBadExample ? (
          // Good Form Example
          <div className="bg-white border-2 border-green-200 rounded-lg p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">PyCon Talk Feedback</h2>
            <p className="text-gray-600">Help improve this session with clear, structured feedback</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              {/* Personal Information Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Attendee Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Justin Lee"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="hello@leejustin.com"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Company Information Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Affiliation & Experience
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Organization (optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Awesome Company"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                    <p className="text-xs text-gray-500 mt-1">Leave blank if you&apos;re an individual</p>
                  </div>
                  
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                      Experience with Python
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select your experience</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Session Feedback Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Session Feedback
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Overall rating
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select rating</option>
                      <option value="1">1 - Poor</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5 - Excellent</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Most valuable section
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a section</option>
                      <option value="scanning">Scanning patterns</option>
                      <option value="labeling">Labeling & naming</option>
                      <option value="hierarchy">Visual hierarchy</option>
                      <option value="disclosure">Progressive disclosure</option>
                      <option value="forms">Forms as interfaces</option>
                      <option value="design-systems">Design systems</option>
                      <option value="simplicity">Simplicity over cleverness</option>
                      <option value="standardization">Standardization</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Feedback (what worked, what could be clearer?)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Share any takeaways, suggestions, or questions from the session..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                  />
                  <p className="text-xs text-gray-500 mt-1">Thanks for helping improve the talk</p>
                </div>
              </div>

              {/* Updates opt-in */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <div>
                  <label htmlFor="newsletter" className="text-sm font-medium text-gray-700">
                    Send me resources and example code after the talk
                  </label>
                  <p className="text-xs text-gray-500 mt-1">A short follow‑up with links—no spam</p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors font-medium"
                >
                  Submit feedback
                </button>
                <p className="text-xs text-gray-500 text-center mt-2">Thank you for attending PyCon</p>
              </div>
            </form>
          </div>
        </div>
        ) : (
          // Bad Form Example
          <div className="bg-white border-2 border-red-200 rounded-lg p-8 space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Poorly Designed Form</h2>
              <p className="text-gray-600">Confusing layout, unclear labels, and poor user experience</p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <form className="space-y-4">
                {/* Bad form layout */}
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Email"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Organization"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <select className="w-full px-2 py-1 border border-gray-300 rounded text-sm">
                      <option>Rating</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div>
                    <select className="w-full px-2 py-1 border border-gray-300 rounded text-sm">
                      <option>Most valuable section</option>
                      <option>Scanning patterns</option>
                      <option>Labeling & naming</option>
                      <option>Visual hierarchy</option>
                      <option>Progressive disclosure</option>
                      <option>Forms as interfaces</option>
                      <option>Design systems</option>
                      <option>Simplicity over cleverness</option>
                      <option>Standardization</option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your project..."
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="terms" />
                  <label htmlFor="terms" className="text-xs text-gray-600">
                    I agree to the terms and conditions and privacy policy and marketing communications
                  </label>
                </div>

                <div className="flex space-x-2">
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Form Principles */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Form Design Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">✅ Good Form Practices</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Group related fields logically</li>
                <li>• Use clear, descriptive labels</li>
                <li>• Provide helpful placeholder text</li>
                <li>• Show required fields clearly</li>
                <li>• Use appropriate input types</li>
                <li>• Provide immediate feedback</li>
                <li>• Make the primary action obvious</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">🎯 User Experience</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Minimize cognitive load</li>
                <li>• Use progressive disclosure</li>
                <li>• Provide clear error messages</li>
                <li>• Allow easy correction of mistakes</li>
                <li>• Show progress for long forms</li>
                <li>• Auto-save when possible</li>
                <li>• Mobile-friendly design</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Form States Example */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Form States</h2>
            <p className="text-gray-600">Different states provide clear feedback to users</p>
          </div>
          
          <div className="max-w-md mx-auto space-y-4">
            {/* Default State */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Focus State */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email address (focused)
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                autoFocus
                className="w-full px-3 py-2 border-2 border-blue-500 rounded-lg ring-2 ring-blue-200"
              />
            </div>

            {/* Error State */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email address (error)
              </label>
              <input
                type="email"
                value="invalid-email"
                readOnly
                className="w-full px-3 py-2 border-2 border-red-500 rounded-lg ring-2 ring-red-200"
              />
              <p className="text-xs text-red-600 mt-1">Please enter a valid email address</p>
            </div>

            {/* Success State */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email address (valid)
              </label>
              <input
                type="email"
                value="user@example.com"
                readOnly
                className="w-full px-3 py-2 border-2 border-green-500 rounded-lg ring-2 ring-green-200"
              />
              <p className="text-xs text-green-600 mt-1">✓ Email address looks good</p>
            </div>
          </div>
        </div>

        {/* Python examples loaded from files */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Python Examples</h2>
            <p className="text-gray-600">Function signatures as form-like affordances</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CodeBlock src="/code/forms_good.py" title="/public/code/forms_good.py" />
            <CodeBlock src="/code/forms_poor.py" title="/public/code/forms_poor.py" />
          </div>
        </div>
      </div>
    </div>
  )
}

