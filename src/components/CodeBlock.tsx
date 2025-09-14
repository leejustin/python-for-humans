'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import hljs from 'highlight.js/lib/core'
import python from 'highlight.js/lib/languages/python'
import ini from 'highlight.js/lib/languages/ini'
import toml from 'highlight.js/lib/languages/ini'

hljs.registerLanguage('python', python)
hljs.registerLanguage('ini', ini)

type CodeBlockProps = {
  src: string
  title?: string
}

export default function CodeBlock({ src, title }: CodeBlockProps) {
  const [code, setCode] = useState<string>('')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    let cancelled = false
    fetch(src)
      .then((r) => (r.ok ? r.text() : Promise.reject(new Error(`${r.status}`))))
      .then((t) => {
        if (!cancelled) setCode(t)
      })
      .catch(() => {
        if (!cancelled) setError('Failed to load example')
      })
    return () => {
      cancelled = true
    }
  }, [src])

  const codeRef = useRef<HTMLElement>(null)

  const lang = useMemo(() => {
    if (src.endsWith('.py')) return 'python'
    if (src.endsWith('.toml')) return 'ini'
    if (src.endsWith('.ini')) return 'ini'
    return ''
  }, [src])

  useEffect(() => {
    if (!codeRef.current) return
    if (!code) return
    try {
      if (lang) {
        codeRef.current.className = `hljs language-${lang}`
      } else {
        codeRef.current.className = 'hljs'
      }
      hljs.highlightElement(codeRef.current)
    } catch {}
  }, [code, lang])

  return (
    <div className="bg-[#0b1220] text-[#e5e7eb] p-4 rounded-lg overflow-x-auto border border-[#1f2937]">
      {title ? (
        <div className="text-xs text-gray-300 mb-2">{title}</div>
      ) : null}
      <pre className="text-sm font-mono whitespace-pre-wrap leading-6">
        <code ref={codeRef}>{error ? `# ${error}` : code || '# Loading...'}</code>
      </pre>
    </div>
  )
}


