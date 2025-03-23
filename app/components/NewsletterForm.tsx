'use client'

import { FormEvent } from 'react'

export default function NewsletterForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Your submit logic
  }

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Your email address"
        aria-label="Email address for newsletter"
        className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-700"
      />
      <button
        type="submit"
        className="w-full bg-primary text-white px-3 py-2 text-sm rounded-md hover:bg-primary/90"
      >
        Subscribe
      </button>
    </form>
  )
} 