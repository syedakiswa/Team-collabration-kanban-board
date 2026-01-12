'use client'

import React, { useState, useEffect } from 'react'
import { Calendar, Mail, ArrowLeft, User, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Profile() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [workspaces, setWorkspaces] = useState([])

  useEffect(() => {
    // Get current user
    const currentUser = localStorage.getItem("currentUser")
    if (currentUser) {
      setUser(JSON.parse(currentUser))
    } else {
      router.push("/login")
    }

    // Get all workspaces
    const allWorkspaces = JSON.parse(localStorage.getItem("workspaces") || "[]")
    setWorkspaces(allWorkspaces)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("currentUser")
    router.push("/login")
  }

  const handleOpenWorkspace = (workspace) => {
    localStorage.setItem("currentWorkspace", JSON.stringify(workspace))
    router.push("/openworkspace")
  }

  if (!user) return null

  const getUserInitials = () => {
    return user.name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }
  return (
    <section className='min-h-screen' style={{
      background: "linear-gradient(to bottom, #160a28, #261643)",
    }}>
      
      {/* Header */}
      <header className='bg-[#160a28] border-b border-purple-900/30'>
        <button className="py-6 px-20 text-gray-400 hover:text-white transition-colors">
          <a href="/workspace" className='flex items-center gap-2 text-sm'>
            <ArrowLeft size={20}/>
            Back to Workspaces
          </a>
        </button>
      </header>

      {/* Main Profile Section */}
      <main className='flex items-center justify-center py-20'>
        <div className="w-[45vw] rounded-2xl bg-[#0f0520] border border-purple-500/20 shadow-2xl shadow-purple-900/50">
          <div className="p-8">
            
            {/* Profile Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white text-2xl font-bold border-2 border-purple-400 shadow-lg shadow-purple-600/50">
                {getUserInitials()}
              </div>
              
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">{user.name}</span>
                <span className="text-gray-400 text-sm">{user.email}</span>
              </div>
            </div>

            {/* Badges */}
            <div className='flex gap-4'>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/10 text-purple-400 border border-purple-500/30 shadow-lg shadow-purple-500/20">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                Owner
              </span>
              
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/10 text-white border border-purple-500/30 shadow-lg shadow-purple-500/20">
                <Calendar className='w-4 h-4' />
                Joined {user.createdAt ? formatDate(user.createdAt) : 'January 2026'}
              </span>
            </div>

          </div>
        </div>
      </main>

      {/* User Information */}
      <main className="flex items-center justify-center py-10">
        <div className="w-[45vw] rounded-2xl bg-[#0f0520] border border-purple-500/20 shadow-2xl shadow-purple-900/50">
          
          {/* Section Header */}
          <div className="px-8 py-6 border-b border-purple-500/20">
            <div className='flex items-center gap-2 mb-2'>
              <User className="text-purple-400" size={20} />
              <span className='text-white font-semibold text-lg'>Account Information</span>
            </div>
            <span className='text-sm text-gray-400'>View your account details and settings</span>
          </div>

          {/* Information Grid */}
          <div className='grid grid-cols-2 gap-8 p-8'>
            
            {/* Left Column */}
            <div className='space-y-6'>
              <div>
                <h4 className='text-sm text-gray-500 mb-2'>Full Name</h4>
                <span className='text-lg text-purple-400 font-medium'>{user.name}</span>
              </div>
              
              <div>
                <h4 className='text-sm text-gray-500 mb-2'>Role</h4>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600/10 text-purple-400 border border-purple-500/30 shadow-lg shadow-purple-500/20">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  Owner
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className='space-y-6'>
              <div>
                <h4 className='text-sm text-gray-500 mb-2'>Email Address</h4>
                <span className='text-lg text-purple-400 font-medium flex items-center gap-2'>
                  <Mail className='w-4 h-4'/>
                  {user.email}
                </span>
              </div>
              
              <div>
                <h4 className='text-sm text-gray-500 mb-2'>Member Since</h4>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600/10 text-purple-400 border border-purple-500/30 shadow-lg shadow-purple-500/20">
                  <Calendar className='w-4 h-4' />
                  {user.createdAt ? formatDate(user.createdAt) : 'January 2026'}
                </span>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Workspaces Section */}
      <main className="flex items-center justify-center py-10">
        <div className="w-[45vw] rounded-2xl bg-[#0f0520] border border-purple-500/20 shadow-2xl shadow-purple-900/50 p-8">

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <User className="text-purple-400" size={20} />
              <span className="text-white font-semibold text-lg">Your Workspaces</span>
            </div>
            <p className="text-sm text-gray-400">
              Workspaces you're a member of
            </p>
          </div>

          {/* Workspace List */}
          <div className="space-y-3">
            {workspaces.length === 0 ? (
              <div className="text-center py-8 text-gray-400">
                <p>No workspaces yet</p>
                <button 
                  onClick={() => router.push('/workspace')}
                  className="mt-4 px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition"
                >
                  Create Workspace
                </button>
              </div>
            ) : (
              workspaces.map((workspace, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-purple-900/10 hover:bg-purple-900/20 transition border border-purple-500/20">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400 border border-purple-500/30">
                      <User size={20} />
                    </div>
                    <div>
                      <p className="text-white font-medium">{workspace.name}</p>
                      <p className="text-xs text-gray-400">Owner</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleOpenWorkspace(workspace)}
                    className="px-4 py-2 rounded-lg text-sm border border-purple-500/40 text-purple-400 hover:bg-purple-600/10 transition"
                  >
                    Open
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      {/* Security Settings */}
      <main className='flex items-center justify-center py-10 pb-20'>
        <div className="w-[45vw] rounded-2xl bg-[#0f0520] border border-purple-500/20 shadow-2xl shadow-purple-900/50 p-8">

          {/* Top Section */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-white text-xl font-semibold">
                Security Settings
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Manage your account security
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-purple-500/20 mb-8"></div>

          {/* Bottom Section */}
          <div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-6 py-2.5 bg-red-600 rounded-lg text-white font-medium hover:bg-red-700 transition"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>

        </div>
      </main>

    </section>
  )
}