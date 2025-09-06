import Link from 'next/link'

const principles = [
  {
    title: 'Scanning Patterns',
    description: 'How the eye flows across the screen',
    href: '/scanning-patterns',
    color: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
  },
  {
    title: 'Labeling & Naming',
    description: 'Clear, specific labels vs vague ones',
    href: '/labeling-naming',
    color: 'bg-green-50 border-green-200 hover:bg-green-100'
  },
  {
    title: 'Visual Hierarchy',
    description: 'Typography, spacing, and alignment',
    href: '/visual-hierarchy',
    color: 'bg-purple-50 border-purple-200 hover:bg-purple-100'
  },
  {
    title: 'Progressive Disclosure',
    description: 'Hiding complexity until needed',
    href: '/progressive-disclosure',
    color: 'bg-orange-50 border-orange-200 hover:bg-orange-100'
  },
  {
    title: 'Forms',
    description: 'Clean forms with good defaults',
    href: '/forms',
    color: 'bg-teal-50 border-teal-200 hover:bg-teal-100'
  },
  {
    title: 'Design Systems',
    description: 'Consistent, repeatable UI elements',
    href: '/design-systems',
    color: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100'
  },
  {
    title: 'Simplicity',
    description: 'Less is more in interface design',
    href: '/simplicity',
    color: 'bg-pink-50 border-pink-200 hover:bg-pink-100'
  },
  {
    title: 'Standardization',
    description: 'Unified spacing, colors, and alignment',
    href: '/standardization',
    color: 'bg-gray-50 border-gray-200 hover:bg-gray-100'
  }
]

export default function Home() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Python for Humans
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          UI/UX principles demonstrated through clean, minimal design. 
          Each principle is shown with clear visual examples.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {principles.map((principle) => (
          <Link
            key={principle.title}
            href={principle.href}
            className={`p-6 rounded-lg border-2 transition-all duration-200 ${principle.color}`}
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              {principle.title}
            </h2>
            <p className="text-gray-600 text-sm">
              {principle.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}