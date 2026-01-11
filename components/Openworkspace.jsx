'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { FiPlus, FiUsers, FiSettings, FiLogOut, FiCalendar } from 'react-icons/fi'
import { MdDashboard, MdTask } from 'react-icons/md'

export default function Openworkspace() {

  const [selectedTask, setSelectedTask] = useState(null)
const [isTaskOpen, setIsTaskOpen] = useState(false)

  const [tasks, setTasks] = useState({
    todo: [
      { id: 1, title: 'Design new landing page', desc: 'Create wireframes and mockups for the new landing page', priority: 'high', date: '1/15/2026', assignee: 'JD' },
      { id: 2, title: 'Update documentation', desc: 'Add new API endpoints to docs', priority: 'medium', date: '1/20/2026', assignee: 'SM' },
      { id: 3, title: 'Fix mobile responsive issues', desc: 'Address layout problems on mobile devices', priority: 'low', date: '1/25/2026', assignee: 'AK' }
    ],
    inProgress: [
      { id: 4, title: 'Implement user authentication', desc: 'Add OAuth2 login flow', priority: 'high', date: '1/12/2026', assignee: 'JD' },
      { id: 5, title: 'Optimize database queries', desc: 'Improve performance of search queries', priority: 'medium', date: '1/18/2026', assignee: 'RJ' }
    ],
    done: [
      { id: 6, title: 'Setup CI/CD pipeline', desc: 'Configure GitHub Actions for automated deployments', priority: 'high', date: '1/8/2026', assignee: 'SM' },
      { id: 7, title: 'Create project charter', desc: 'Document project goals and scope', priority: 'medium', date: '1/5/2026', assignee: 'AK' }
    ]
  })

  const priorityColors = {
    high: 'bg-red-500/20 text-red-400 border-red-500/30',
    medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    low: 'bg-green-500/20 text-green-400 border-green-500/30'
  }

  const assigneeColors = {
    JD: 'bg-purple-600',
    SM: 'bg-blue-600',
    AK: 'bg-pink-600',
    RJ: 'bg-orange-600'
  }

  return (
    <section className="flex min-h-screen text-white" style={{
        background: "linear-gradient(to bottom, #160a28, #261643)",
      }}>
      {/* Sidebar */}
      <div className='w-64 bg-[#150927] border-r border-purple-900/30 flex flex-col'>
        <div className='p-6'>
          <button className="mb-8 text-gray-400 hover:text-white transition-colors">
  <Link href="/workspace" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
  <BiLeftArrowAlt size={20}/>
  Back to Workspaces
</Link>

          </button>

          <div className="flex items-center gap-3 bg-purple-900/30 p-3 rounded-lg mb-8">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <MdTask size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-white">Product Dev</h3>
              <p className="text-xs text-gray-400">Workspace</p>
            </div>
          </div>

          <nav className='space-y-2'>
            <a href="#" className='flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-purple-900/30 transition-colors'>
              <MdDashboard size={20} />
              <span>Dashboard</span>
            </a>
            <a href="#" className='flex items-center gap-3 px-4 py-3 rounded-lg bg-purple-600 text-white'>
              <MdTask size={20} />
              <span>Tasks</span>
            </a>
            <a href="#" className='flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-purple-900/30 transition-colors'>
              <FiUsers size={20} />
              <span>Team Members</span>
            </a>
            <a href="#" className='flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-purple-900/30 transition-colors'>
              <FiSettings size={20} />
              <span>Settings</span>
            </a>
          </nav>
        </div>

        <div className='mt-auto p-6'>
          <button className='flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-purple-900/30 transition-colors w-full'>
            <FiLogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex-1 overflow-auto'>
        <div className='p-8'>
          {/* Header */}
          <div className='flex justify-between items-start mb-8'>
            <div>
              <h1 className='text-3xl font-bold text-white mb-2'>Product Development</h1>
              <p className='text-gray-400'>Manage your team's tasks and workflow</p>
            </div>
            <div className=' px-5 rounded-full flex items-center justify-center text-xl  font-bold'>
              <Link href="/profile">
              <img src="/avator.png" width={70} alt="Profile Image "  className='border border-purple-600 rounded-full shadow-2xl shadow-purple-600'/>
              </Link>
            </div>
          </div>

          {/* Kanban Board */}
          <div className='grid grid-cols-3 gap-6'>
            {/* To Do Column */}
            <div>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center gap-2'>
                  <h2 className='text-lg font-semibold'>To Do</h2>
                  <span className='bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full'>{tasks.todo.length}</span>
                </div>
                <button className='text-gray-400 hover:text-white'>
                  <FiPlus size={20} />
                </button>
              </div>
              <div className='space-y-4'>
                {tasks.todo.map(task => (
                  <div key={task.id} className='bg-[#1a0e2e] border border-purple-900/30 rounded-lg p-4 hover:border-purple-600/50 transition-colors'>
                    <div className='flex items-start justify-between mb-3'>
                      <h3 className='font-medium text-white'>{task.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded border ${priorityColors[task.priority]}`}>
                        {task.priority}
                      </span>
                    </div>
                    <p className='text-sm text-gray-400 mb-4'>{task.desc}</p>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2 text-xs text-gray-500'>
                        <FiCalendar size={14} />
                        <span>{task.date}</span>
                      </div>
                      <div className={`w-7 h-7 ${assigneeColors[task.assignee]} rounded-full flex items-center justify-center text-xs font-semibold`}>
                        {task.assignee}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* In Progress Column */}
            <div>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center gap-2'>
                  <h2 className='text-lg font-semibold'>In Progress</h2>
                  <span className='bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full'>{tasks.inProgress.length}</span>
                </div>
                <button className='text-gray-400 hover:text-white'>
                  <FiPlus size={20} />
                </button>
              </div>
              <div className='space-y-4'>
                {tasks.inProgress.map(task => (
                  <div key={task.id} className='bg-[#1a0e2e] border border-purple-900/30 rounded-lg p-4 hover:border-purple-600/50 transition-colors'>
                    <div className='flex items-start justify-between mb-3'>
                      <h3 className='font-medium text-white'>{task.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded border ${priorityColors[task.priority]}`}>
                        {task.priority}
                      </span>
                    </div>
                    <p className='text-sm text-gray-400 mb-4'>{task.desc}</p>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2 text-xs text-gray-500'>
                        <FiCalendar size={14} />
                        <span>{task.date}</span>
                      </div>
                      <div className={`w-7 h-7 ${assigneeColors[task.assignee]} rounded-full flex items-center justify-center text-xs font-semibold`}>
                        {task.assignee}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Done Column */}
            <div>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center gap-2'>
                  <h2 className='text-lg font-semibold'>Done</h2>
                  <span className='bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full'>{tasks.done.length}</span>
                </div>
                <button className='text-gray-400 hover:text-white'>
                  <FiPlus size={20} />
                </button>
              </div>
              <div className='space-y-4'>
                {tasks.done.map(task => (
                  <div key={task.id} className='bg-[#1a0e2e] border border-purple-900/30 rounded-lg p-4 hover:border-purple-600/50 transition-colors'>
                    <div className='flex items-start justify-between mb-3'>
                      <h3 className='font-medium text-white'>{task.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded border ${priorityColors[task.priority]}`}>
                        {task.priority}
                      </span>
                    </div>
                    <p className='text-sm text-gray-400 mb-4'>{task.desc}</p>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2 text-xs text-gray-500'>
                        <FiCalendar size={14} />
                        <span>{task.date}</span>
                      </div>
                      <div className={`w-7 h-7 ${assigneeColors[task.assignee]} rounded-full flex items-center justify-center text-xs font-semibold`}>
                        {task.assignee}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}