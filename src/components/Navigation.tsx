'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Scanning Patterns', href: '/scanning-patterns' },
  { name: 'Labeling & Naming', href: '/labeling-naming' },
  { name: 'Visual Hierarchy', href: '/visual-hierarchy' },
  { name: 'Progressive Disclosure', href: '/progressive-disclosure' },
  { name: 'Forms', href: '/forms' },
  { name: 'Design Systems', href: '/design-systems' },
  { name: 'Simplicity', href: '/simplicity' },
  { name: 'Standardization', href: '/standardization' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors">
            Python for Humans
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-gray-900',
                  pathname === item.href
                    ? 'text-gray-900 border-b-2 border-gray-900 pb-1'
                    : 'text-gray-600'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

