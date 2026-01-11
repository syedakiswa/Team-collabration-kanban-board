import React from 'react'

export default function Navbar() {
  return (
    <nav className="flex gap-2">
      <div className="logo flex items-center gap-4">
        <img className="w-20 rounded-full bg-white p-0" src="/logo.png" alt="Logo" />

        <span className="text-3xl font-bold bg-gradient-to-r from-[#cdb9eb] to-[#894aff] bg-clip-text text-transparent">
          Team Collaboration Kanban Board
        </span>
      </div>
    </nav>
  )
}
