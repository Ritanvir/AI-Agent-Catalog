'use client'

import { signIn } from 'next-auth/react'

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={() => signIn('google')}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow"
      >
        Login with Google
      </button>
    </div>
  )
}
