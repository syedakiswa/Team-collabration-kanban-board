'use client'
import Navbar from './Navbar'
import { Plus } from 'lucide-react'

export default function Workspace() {
  return (
    <>
      <section
        className="min-h-screen px-10 py-8 text-white"
      style={{
        background: "linear-gradient(to bottom, #160a28, #261643)",
      }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Header */}
        <div className="mt-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Your Workspaces</h1>
            <p className="text-gray-300 mt-1">
              Choose a workspace or create a new one
            </p>
          </div>

          <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-sm font-medium">
            <Plus size={18} /> New Workspace
          </button>
        </div>

        {/* Workspace Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {/* Card */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
              📁
            </div>
            <h2 className="text-xl font-semibold">Product Development</h2>
            <p className="text-gray-300 text-sm mt-1">12 members</p>
 <a href="/openworkspace">
            <button className="mt-6 w-full border border-purple-500 text-purple-300 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition">
          Open Workspace
            </button>
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
              📁
            </div>
            <h2 className="text-xl font-semibold">Marketing Campaign</h2>
            <p className="text-gray-300 text-sm mt-1">8 members</p>

            <button className="mt-6 w-full border border-purple-500 text-purple-300 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition">
              Open Workspace
            </button>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
              📁
            </div>
            <h2 className="text-xl font-semibold">Design System</h2>
            <p className="text-gray-300 text-sm mt-1">5 members</p>

            <button className="mt-6 w-full border border-purple-500 text-purple-300 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition">
              Open Workspace
            </button>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
              📁
            </div>
            <h2 className="text-xl font-semibold">Customer Support</h2>
            <p className="text-gray-300 text-sm mt-1">15 members</p>

            <button className="mt-6 w-full border border-purple-500 text-purple-300 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition">
              Open Workspace
            </button>
          </div>
        </div>
      </section>
    </>
  )
}





