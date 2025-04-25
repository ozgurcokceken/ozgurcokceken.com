'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-12 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Özgür Çokçeken
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Frontend Developer
        </TextEffect>
      </div>
    </header>
  )
}
