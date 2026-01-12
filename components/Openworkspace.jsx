// 'use client'
// import React, { useState } from 'react'
// import Link from 'next/link'
// import { BiLeftArrowAlt } from 'react-icons/bi'
// import { FiPlus, FiUsers, FiSettings, FiLogOut, FiCalendar } from 'react-icons/fi'
// import { MdDashboard, MdTask } from 'react-icons/md'

// export default function Openworkspace() {

//   const [selectedTask, setSelectedTask] = useState(null)
// const [isTaskOpen, setIsTaskOpen] = useState(false)

//   const [tasks, setTasks] = useState({
//     todo: [
//       { id: 1, title: 'Design new landing page', desc: 'Create wireframes and mockups for the new landing page', priority: 'high', date: '1/15/2026', assignee: 'JD' },
//       { id: 2, title: 'Update documentation', desc: 'Add new API endpoints to docs', priority: 'medium', date: '1/20/2026', assignee: 'SM' },
//       { id: 3, title: 'Fix mobile responsive issues', desc: 'Address layout problems on mobile devices', priority: 'low', date: '1/25/2026', assignee: 'AK' }
//     ],
//     inProgress: [
//       { id: 4, title: 'Implement user authentication', desc: 'Add OAuth2 login flow', priority: 'high', date: '1/12/2026', assignee: 'JD' },
//       { id: 5, title: 'Optimize database queries', desc: 'Improve performance of search queries', priority: 'medium', date: '1/18/2026', assignee: 'RJ' }
//     ],
//     done: [
//       { id: 6, title: 'Setup CI/CD pipeline', desc: 'Configure GitHub Actions for automated deployments', priority: 'high', date: '1/8/2026', assignee: 'SM' },
//       { id: 7, title: 'Create project charter', desc: 'Document project goals and scope', priority: 'medium', date: '1/5/2026', assignee: 'AK' }
//     ]
//   })

//   const priorityColors = {
//     high: 'bg-red-500/20 text-red-400 border-red-500/30',
//     medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
//     low: 'bg-green-500/20 text-green-400 border-green-500/30'
//   }

//   const assigneeColors = {
//     JD: 'bg-purple-600',
//     SM: 'bg-blue-600',
//     AK: 'bg-pink-600',
//     RJ: 'bg-orange-600'
//   }

//   return (
//     <section className="flex min-h-screen text-white" style={{
//         background: "linear-gradient(to bottom, #160a28, #261643)",
//       }}>
//       {/* Sidebar */}
//       <div className='w-64 bg-[#150927] border-r border-purple-900/30 flex flex-col'>
//         <div className='p-6'>
//           <button className="mb-8 text-gray-400 hover:text-white transition-colors">
//   <Link href="/workspace" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
//   <BiLeftArrowAlt size={20}/>
//   Back to Workspaces
// </Link>

//           </button>

//           <div className="flex items-center gap-3 bg-purple-900/30 p-3 rounded-lg mb-8">
//             <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
//               <MdTask size={20} />
//             </div>
//             <div>
//               <h3 className="font-semibold text-white">Product Dev</h3>
//               <p className="text-xs text-gray-400">Workspace</p>
//             </div>
//           </div>

//           <nav className='space-y-2'>
//             <a href="#" className='flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-purple-900/30 transition-colors'>
//               <MdDashboard size={20} />
//               <span>Dashboard</span>
//             </a>
//             <a href="#" className='flex items-center gap-3 px-4 py-3 rounded-lg bg-purple-600 text-white'>
//               <MdTask size={20} />
//               <span>Tasks</span>
//             </a>
//             <a href="#" className='flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-purple-900/30 transition-colors'>
//               <FiUsers size={20} />
//               <span>Team Members</span>
//             </a>
//             <a href="#" className='flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-purple-900/30 transition-colors'>
//               <FiSettings size={20} />
//               <span>Settings</span>
//             </a>
//           </nav>
//         </div>

//         <div className='mt-auto p-6'>
//           <button className='flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-purple-900/30 transition-colors w-full'>
//             <FiLogOut size={20} />
//             <span>Logout</span>
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className='flex-1 overflow-auto'>
//         <div className='p-8'>
//           {/* Header */}
//           <div className='flex justify-between items-start mb-8'>
//             <div>
//               <h1 className='text-3xl font-bold text-white mb-2'>Product Development</h1>
//               <p className='text-gray-400'>Manage your team's tasks and workflow</p>
//             </div>
//             <div className=' px-5 rounded-full flex items-center justify-center text-xl  font-bold'>
//               <Link href="/profile">
//               <img src="/avator.png" width={70} alt="Profile Image "  className='border border-purple-600 rounded-full shadow-2xl shadow-purple-600'/>
//               </Link>
//             </div>
//           </div>

//           {/* Kanban Board */}
//           <div className='grid grid-cols-3 gap-6'>
//             {/* To Do Column */}
//             <div>
//               <div className='flex items-center justify-between mb-4'>
//                 <div className='flex items-center gap-2'>
//                   <h2 className='text-lg font-semibold'>To Do</h2>
//                   <span className='bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full'>{tasks.todo.length}</span>
//                 </div>
//                 <button className='text-gray-400 hover:text-white'>
//                   <FiPlus size={20} />
//                 </button>
//               </div>
//               <div className='space-y-4'>
//                 {tasks.todo.map(task => (
//                   <div key={task.id} className='bg-[#1a0e2e] border border-purple-900/30 rounded-lg p-4 hover:border-purple-600/50 transition-colors'>
//                     <div className='flex items-start justify-between mb-3'>
//                       <h3 className='font-medium text-white'>{task.title}</h3>
//                       <span className={`text-xs px-2 py-1 rounded border ${priorityColors[task.priority]}`}>
//                         {task.priority}
//                       </span>
//                     </div>
//                     <p className='text-sm text-gray-400 mb-4'>{task.desc}</p>
//                     <div className='flex items-center justify-between'>
//                       <div className='flex items-center gap-2 text-xs text-gray-500'>
//                         <FiCalendar size={14} />
//                         <span>{task.date}</span>
//                       </div>
//                       <div className={`w-7 h-7 ${assigneeColors[task.assignee]} rounded-full flex items-center justify-center text-xs font-semibold`}>
//                         {task.assignee}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* In Progress Column */}
//             <div>
//               <div className='flex items-center justify-between mb-4'>
//                 <div className='flex items-center gap-2'>
//                   <h2 className='text-lg font-semibold'>In Progress</h2>
//                   <span className='bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full'>{tasks.inProgress.length}</span>
//                 </div>
//                 <button className='text-gray-400 hover:text-white'>
//                   <FiPlus size={20} />
//                 </button>
//               </div>
//               <div className='space-y-4'>
//                 {tasks.inProgress.map(task => (
//                   <div key={task.id} className='bg-[#1a0e2e] border border-purple-900/30 rounded-lg p-4 hover:border-purple-600/50 transition-colors'>
//                     <div className='flex items-start justify-between mb-3'>
//                       <h3 className='font-medium text-white'>{task.title}</h3>
//                       <span className={`text-xs px-2 py-1 rounded border ${priorityColors[task.priority]}`}>
//                         {task.priority}
//                       </span>
//                     </div>
//                     <p className='text-sm text-gray-400 mb-4'>{task.desc}</p>
//                     <div className='flex items-center justify-between'>
//                       <div className='flex items-center gap-2 text-xs text-gray-500'>
//                         <FiCalendar size={14} />
//                         <span>{task.date}</span>
//                       </div>
//                       <div className={`w-7 h-7 ${assigneeColors[task.assignee]} rounded-full flex items-center justify-center text-xs font-semibold`}>
//                         {task.assignee}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Done Column */}
//             <div>
//               <div className='flex items-center justify-between mb-4'>
//                 <div className='flex items-center gap-2'>
//                   <h2 className='text-lg font-semibold'>Done</h2>
//                   <span className='bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full'>{tasks.done.length}</span>
//                 </div>
//                 <button className='text-gray-400 hover:text-white'>
//                   <FiPlus size={20} />
//                 </button>
//               </div>
//               <div className='space-y-4'>
//                 {tasks.done.map(task => (
//                   <div key={task.id} className='bg-[#1a0e2e] border border-purple-900/30 rounded-lg p-4 hover:border-purple-600/50 transition-colors'>
//                     <div className='flex items-start justify-between mb-3'>
//                       <h3 className='font-medium text-white'>{task.title}</h3>
//                       <span className={`text-xs px-2 py-1 rounded border ${priorityColors[task.priority]}`}>
//                         {task.priority}
//                       </span>
//                     </div>
//                     <p className='text-sm text-gray-400 mb-4'>{task.desc}</p>
//                     <div className='flex items-center justify-between'>
//                       <div className='flex items-center gap-2 text-xs text-gray-500'>
//                         <FiCalendar size={14} />
//                         <span>{task.date}</span>
//                       </div>
//                       <div className={`w-7 h-7 ${assigneeColors[task.assignee]} rounded-full flex items-center justify-center text-xs font-semibold`}>
//                         {task.assignee}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }












// ==================== FILE: app/workspace/[id]/page.jsx ====================
// 'use client'
// import React, { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { useRouter, useParams } from 'next/navigation'
// import { ArrowLeft, Plus, Users, Settings, LogOut, Calendar, LayoutDashboard, CheckSquare, X, Trash2 } from 'lucide-react'
// import Toast from "@/components/Toast"

// export default function Openworkspace() {
//   const router = useRouter()
//   const params = useParams()
//   const [user, setUser] = useState(null)
//   const [workspace, setWorkspace] = useState(null)
//   const [toast, setToast] = useState(null)
//   const [selectedTask, setSelectedTask] = useState(null)
//   const [isTaskOpen, setIsTaskOpen] = useState(false)

//   const [tasks, setTasks] = useState({
//     todo: [
//       { id: 1, title: 'Design new landing page', desc: 'Create wireframes and mockups for the new landing page', priority: 'high', date: '1/15/2026', assignee: 'JD' },
//       { id: 2, title: 'Update documentation', desc: 'Add new API endpoints to docs', priority: 'medium', date: '1/20/2026', assignee: 'SM' },
//       { id: 3, title: 'Fix mobile responsive issues', desc: 'Address layout problems on mobile devices', priority: 'low', date: '1/25/2026', assignee: 'AK' }
//     ],
//     inProgress: [
//       { id: 4, title: 'Implement user authentication', desc: 'Add OAuth2 login flow', priority: 'high', date: '1/12/2026', assignee: 'JD' },
//       { id: 5, title: 'Optimize database queries', desc: 'Improve performance of search queries', priority: 'medium', date: '1/18/2026', assignee: 'RJ' }
//     ],
//     done: [
//       { id: 6, title: 'Setup CI/CD pipeline', desc: 'Configure GitHub Actions for automated deployments', priority: 'high', date: '1/8/2026', assignee: 'SM' },
//       { id: 7, title: 'Create project charter', desc: 'Document project goals and scope', priority: 'medium', date: '1/5/2026', assignee: 'AK' }
//     ]
//   })

//   const showToast = (message, type) => {
//     setToast({ message, type })
//   }

//   useEffect(() => {
//     const currentUser = localStorage.getItem("currentUser")
//     if (!currentUser) {
//       showToast("Pehle login karein!", "error")
//       setTimeout(() => router.push("/login"), 1000)
//     } else {
//       setUser(JSON.parse(currentUser))
//     }

//     const currentWorkspace = localStorage.getItem("currentWorkspace")
//     if (currentWorkspace) {
//       setWorkspace(JSON.parse(currentWorkspace))
//     }
//   }, [router])

//   const handleLogout = () => {
//     localStorage.removeItem("currentUser")
//     showToast("Logout ho gaye!", "success")
//     setTimeout(() => router.push("/login"), 1000)
//   }

//   const handleTaskClick = (task) => {
//     setSelectedTask(task)
//     setIsTaskOpen(true)
//   }

//   const handleDeleteTask = () => {
//     if (!selectedTask) return
    
//     // Find and remove task from all columns
//     const updatedTasks = { ...tasks }
//     Object.keys(updatedTasks).forEach(column => {
//       updatedTasks[column] = updatedTasks[column].filter(t => t.id !== selectedTask.id)
//     })
    
//     setTasks(updatedTasks)
//     setIsTaskOpen(false)
//     setSelectedTask(null)
//     showToast("Task delete ho gaya!", "success")
//   }

//   const handleSaveTask = () => {
//     showToast("Changes save ho gaye!", "success")
//     setIsTaskOpen(false)
//   }

//   const priorityColors = {
//     high: 'bg-red-500/20 text-red-400 border-red-500/30',
//     medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
//     low: 'bg-green-500/20 text-green-400 border-green-500/30'
//   }

//   const assigneeColors = {
//     JD: 'bg-purple-600',
//     SM: 'bg-blue-600',
//     AK: 'bg-pink-600',
//     RJ: 'bg-orange-600'
//   }

//   if (!user) return null

//   return (
//     <>
//       {toast && (
//         <Toast
//           message={toast.message}
//           type={toast.type}
//           onClose={() => setToast(null)}
//         />
//       )}

//       <section className="flex min-h-screen text-white" style={{
//         background: "linear-gradient(to bottom, #160a28, #261643)",
//       }}>
//         {/* Sidebar */}
//         <div className='w-64 bg-[#150927] border-r border-purple-900/30 flex flex-col'>
//           <div className='p-6'>
//             <Link href="/workspace" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors">
//               <ArrowLeft size={20}/>
//               Back to Workspaces
//             </Link>

//             <div className="flex items-center gap-3 bg-purple-900/30 p-3 rounded-lg mb-8">
//               <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
//                 <CheckSquare size={20} />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-white">{workspace?.name || 'Product Dev'}</h3>
//                 <p className="text-xs text-gray-400">Workspace</p>
//               </div>
//             </div>

//             <nav className='space-y-2'>
//               <a href="#" className='flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-purple-900/30 transition-colors'>
//                 <LayoutDashboard size={20} />
//                 <span>Dashboard</span>
//               </a>
//               <a href="#" className='flex items-center gap-3 px-4 py-3 rounded-lg bg-purple-600 text-white'>
//                 <CheckSquare size={20} />
//                 <span>Tasks</span>
//               </a>
//               <a href="#" className='flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-purple-900/30 transition-colors'>
//                 <Users size={20} />
//                 <span>Team Members</span>
//               </a>
//               <a href="#" className='flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-purple-900/30 transition-colors'>
//                 <Settings size={20} />
//                 <span>Settings</span>
//               </a>
//             </nav>
//           </div>

//           <div className='mt-auto p-6'>
//             <button 
//               onClick={handleLogout}
//               className='flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-purple-900/30 transition-colors w-full'
//             >
//               <LogOut size={20} />
//               <span>Logout</span>
//             </button>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className='flex-1 overflow-auto'>
//           <div className='p-8'>
//             {/* Header */}
//             <div className='flex justify-between items-start mb-8'>
//               <div>
//                 <h1 className='text-3xl font-bold text-white mb-2'>Product Development</h1>
//                 <p className='text-gray-400'>Manage your team's tasks and workflow</p>
//               </div>
//               <div className='flex items-center gap-3 bg-purple-600 px-4 py-2 rounded-full'>
//                 <div className="w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center">
//                   <span className="text-white font-bold text-sm">
//                     {user.name.charAt(0).toUpperCase()}
//                   </span>
//                 </div>
//                 <span className="text-white font-medium">{user.name}</span>
//               </div>
//             </div>

//             {/* Kanban Board */}
//             <div className='grid grid-cols-3 gap-6'>
//               {/* To Do Column */}
//               <div>
//                 <div className='flex items-center justify-between mb-4'>
//                   <div className='flex items-center gap-2'>
//                     <h2 className='text-lg font-semibold'>To Do</h2>
//                     <span className='bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full'>{tasks.todo.length}</span>
//                   </div>
//                   <button className='text-gray-400 hover:text-white'>
//                     <Plus size={20} />
//                   </button>
//                 </div>
//                 <div className='space-y-4'>
//                   {tasks.todo.map(task => (
//                     <div 
//                       key={task.id} 
//                       onClick={() => handleTaskClick(task)}
//                       className='bg-[#1a0e2e] border border-purple-900/30 rounded-lg p-4 hover:border-purple-600/50 transition-colors cursor-pointer'
//                     >
//                       <div className='flex items-start justify-between mb-3'>
//                         <h3 className='font-medium text-white'>{task.title}</h3>
//                         <span className={`text-xs px-2 py-1 rounded border ${priorityColors[task.priority]}`}>
//                           {task.priority}
//                         </span>
//                       </div>
//                       <p className='text-sm text-gray-400 mb-4'>{task.desc}</p>
//                       <div className='flex items-center justify-between'>
//                         <div className='flex items-center gap-2 text-xs text-gray-500'>
//                           <Calendar size={14} />
//                           <span>{task.date}</span>
//                         </div>
//                         <div className={`w-7 h-7 ${assigneeColors[task.assignee]} rounded-full flex items-center justify-center text-xs font-semibold`}>
//                           {task.assignee}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* In Progress Column */}
//               <div>
//                 <div className='flex items-center justify-between mb-4'>
//                   <div className='flex items-center gap-2'>
//                     <h2 className='text-lg font-semibold'>In Progress</h2>
//                     <span className='bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full'>{tasks.inProgress.length}</span>
//                   </div>
//                   <button className='text-gray-400 hover:text-white'>
//                     <Plus size={20} />
//                   </button>
//                 </div>
//                 <div className='space-y-4'>
//                   {tasks.inProgress.map(task => (
//                     <div 
//                       key={task.id} 
//                       onClick={() => handleTaskClick(task)}
//                       className='bg-[#1a0e2e] border border-purple-900/30 rounded-lg p-4 hover:border-purple-600/50 transition-colors cursor-pointer'
//                     >
//                       <div className='flex items-start justify-between mb-3'>
//                         <h3 className='font-medium text-white'>{task.title}</h3>
//                         <span className={`text-xs px-2 py-1 rounded border ${priorityColors[task.priority]}`}>
//                           {task.priority}
//                         </span>
//                       </div>
//                       <p className='text-sm text-gray-400 mb-4'>{task.desc}</p>
//                       <div className='flex items-center justify-between'>
//                         <div className='flex items-center gap-2 text-xs text-gray-500'>
//                           <Calendar size={14} />
//                           <span>{task.date}</span>
//                         </div>
//                         <div className={`w-7 h-7 ${assigneeColors[task.assignee]} rounded-full flex items-center justify-center text-xs font-semibold`}>
//                           {task.assignee}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Done Column */}
//               <div>
//                 <div className='flex items-center justify-between mb-4'>
//                   <div className='flex items-center gap-2'>
//                     <h2 className='text-lg font-semibold'>Done</h2>
//                     <span className='bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full'>{tasks.done.length}</span>
//                   </div>
//                   <button className='text-gray-400 hover:text-white'>
//                     <Plus size={20} />
//                   </button>
//                 </div>
//                 <div className='space-y-4'>
//                   {tasks.done.map(task => (
//                     <div 
//                       key={task.id} 
//                       onClick={() => handleTaskClick(task)}
//                       className='bg-[#1a0e2e] border border-purple-900/30 rounded-lg p-4 hover:border-purple-600/50 transition-colors cursor-pointer'
//                     >
//                       <div className='flex items-start justify-between mb-3'>
//                         <h3 className='font-medium text-white'>{task.title}</h3>
//                         <span className={`text-xs px-2 py-1 rounded border ${priorityColors[task.priority]}`}>
//                           {task.priority}
//                         </span>
//                       </div>
//                       <p className='text-sm text-gray-400 mb-4'>{task.desc}</p>
//                       <div className='flex items-center justify-between'>
//                         <div className='flex items-center gap-2 text-xs text-gray-500'>
//                           <Calendar size={14} />
//                           <span>{task.date}</span>
//                         </div>
//                         <div className={`w-7 h-7 ${assigneeColors[task.assignee]} rounded-full flex items-center justify-center text-xs font-semibold`}>
//                           {task.assignee}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Task Details Modal */}
//         {isTaskOpen && selectedTask && (
//           <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//             <div className="bg-[#1a0e2e] border border-purple-800/50 rounded-xl p-8 max-w-2xl w-full shadow-2xl">
//               <div className="flex items-start justify-between mb-6">
//                 <div>
//                   <h2 className="text-2xl font-bold text-white mb-1">Task Details</h2>
//                   <p className="text-gray-400 text-sm">View and edit task information</p>
//                 </div>
//                 <button 
//                   onClick={() => setIsTaskOpen(false)}
//                   className="text-gray-400 hover:text-white transition"
//                 >
//                   <X size={24} />
//                 </button>
//               </div>

//               <div className="space-y-5">
//                 {/* Title */}
//                 <div>
//                   <label className="text-sm text-gray-400 mb-2 block">Title</label>
//                   <input
//                     type="text"
//                     value={selectedTask.title}
//                     onChange={(e) => setSelectedTask({...selectedTask, title: e.target.value})}
//                     className="w-full px-4 py-3 bg-purple-900/30 text-white rounded-lg border border-purple-700/50 focus:outline-none focus:ring-2 focus:ring-purple-600"
//                   />
//                 </div>

//                 {/* Description */}
//                 <div>
//                   <label className="text-sm text-gray-400 mb-2 block">Description</label>
//                   <textarea
//                     value={selectedTask.desc}
//                     onChange={(e) => setSelectedTask({...selectedTask, desc: e.target.value})}
//                     rows={4}
//                     className="w-full px-4 py-3 bg-purple-900/30 text-white rounded-lg border border-purple-700/50 focus:outline-none focus:ring-2 focus:ring-purple-600"
//                   />
//                 </div>

//                 {/* Assignee and Priority */}
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="text-sm text-gray-400 mb-2 block flex items-center gap-2">
//                       <Users size={16} />
//                       Assignee
//                     </label>
//                     <select className="w-full px-4 py-3 bg-purple-900/30 text-white rounded-lg border border-purple-700/50 focus:outline-none focus:ring-2 focus:ring-purple-600">
//                       <option>John Doe (JD)</option>
//                       <option>Sarah Miller (SM)</option>
//                       <option>Alex Kim (AK)</option>
//                       <option>Ryan Johnson (RJ)</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="text-sm text-gray-400 mb-2 block">Priority</label>
//                     <select className="w-full px-4 py-3 bg-purple-900/30 text-white rounded-lg border border-purple-700/50 focus:outline-none focus:ring-2 focus:ring-purple-600">
//                       <option value="high" className="text-red-400">🔴 High</option>
//                       <option value="medium" className="text-yellow-400">🟡 Medium</option>
//                       <option value="low" className="text-green-400">🟢 Low</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Deadline */}
//                 <div>
//                   <label className="text-sm text-gray-400 mb-2 block flex items-center gap-2">
//                     <Calendar size={16} />
//                     Deadline
//                   </label>
//                   <input
//                     type="date"
//                     defaultValue="2026-01-15"
//                     className="w-full px-4 py-3 bg-purple-900/30 text-white rounded-lg border border-purple-700/50 focus:outline-none focus:ring-2 focus:ring-purple-600"
//                   />
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex gap-3 pt-4">
//                   <button
//                     onClick={handleDeleteTask}
//                     className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg font-semibold transition"
//                   >
//                     <Trash2 size={18} />
//                     Delete
//                   </button>
//                   <button
//                     onClick={() => setIsTaskOpen(false)}
//                     className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold transition"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     onClick={handleSaveTask}
//                     className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
//                   >
//                     Save Changes
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </section>
//     </>
//   )
// }









// 'use client '

// import React, { useState } from 'react';
// import { X, Plus, Trash2, Users, CheckSquare, LayoutDashboard, Settings, LogOut, ArrowLeft } from 'lucide-react';

// export default function Openworkspace() {
//   const [currentPage, setCurrentPage] = useState('tasks');
//   const [tasks, setTasks] = useState([]);
//   const [members, setMembers] = useState([]);
//   const [showTaskDialog, setShowTaskDialog] = useState(false);
//   const [showMemberDialog, setShowMemberDialog] = useState(false);
//   const [editingTask, setEditingTask] = useState(null);
  
//   const [taskForm, setTaskForm] = useState({
//     title: '',
//     description: '',
//     assignee: '',
//     priority: 'medium',
//     deadline: '',
//     status: 'todo'
//   });

//   const [memberForm, setMemberForm] = useState({
//     name: '',
//     email: '',
//     role: ''
//   });

//   const priorityColors = {
//     low: 'bg-green-500',
//     medium: 'bg-yellow-500',
//     high: 'bg-red-500'
//   };

//   const memberColors = ['bg-purple-500', 'bg-blue-500', 'bg-pink-500', 'bg-orange-500', 'bg-green-500', 'bg-indigo-500'];

//   const openTaskDialog = (status = 'todo', task = null) => {
//     if (task) {
//       setEditingTask(task);
//       setTaskForm(task);
//     } else {
//       setEditingTask(null);
//       setTaskForm({
//         title: '',
//         description: '',
//         assignee: '',
//         priority: 'medium',
//         deadline: '',
//         status: status
//       });
//     }
//     setShowTaskDialog(true);
//   };

//   const closeTaskDialog = () => {
//     setShowTaskDialog(false);
//     setEditingTask(null);
//     setTaskForm({
//       title: '',
//       description: '',
//       assignee: '',
//       priority: 'medium',
//       deadline: '',
//       status: 'todo'
//     });
//   };

//   const saveTask = () => {
//     if (!taskForm.title.trim()) return;

//     if (editingTask) {
//       setTasks(tasks.map(t => t.id === editingTask.id ? { ...taskForm, id: t.id } : t));
//     } else {
//       setTasks([...tasks, { ...taskForm, id: Date.now() }]);
//     }
//     closeTaskDialog();
//   };

//   const deleteTask = () => {
//     if (editingTask) {
//       setTasks(tasks.filter(t => t.id !== editingTask.id));
//       closeTaskDialog();
//     }
//   };

//   const openMemberDialog = () => {
//     setMemberForm({ name: '', email: '', role: '' });
//     setShowMemberDialog(true);
//   };

//   const closeMemberDialog = () => {
//     setShowMemberDialog(false);
//     setMemberForm({ name: '', email: '', role: '' });
//   };

//   const saveMember = () => {
//     if (!memberForm.name.trim() || !memberForm.email.trim()) return;
    
//     const initials = memberForm.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
//     const colorIndex = members.length % memberColors.length;
    
//     setMembers([...members, { 
//       ...memberForm, 
//       id: Date.now(),
//       initials,
//       color: memberColors[colorIndex]
//     }]);
//     closeMemberDialog();
//   };

//   const getTasksByStatus = (status) => tasks.filter(t => t.status === status);

//   const getAssigneeName = (assigneeId) => {
//     const member = members.find(m => m.id === parseInt(assigneeId));
//     return member ? `${member.name} (${member.initials})` : '';
//   };

//   const renderSidebar = () => (
//     <div className="w-64 bg-gray-900 min-h-screen p-4 flex flex-col">
//       <div className="mb-8">
//         <button className="flex items-center gap-2 text-gray-400 hover:text-white mb-4">
//           <ArrowLeft size={18} />
//           Back to Workspaces
//         </button>
//         <div className="bg-purple-600 rounded-lg p-3 flex items-center gap-3">
//           <CheckSquare size={24} />
//           <div>
//             <div className="font-semibold">Syeda shamsa</div>
//             <div className="text-xs text-gray-300">Workspace</div>
//           </div>
//         </div>
//       </div>

//       <nav className="flex-1 space-y-2">
//         <button 
//           onClick={() => setCurrentPage('dashboard')}
//           className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
//             currentPage === 'dashboard' ? 'bg-purple-600' : 'hover:bg-gray-800'
//           }`}
//         >
//           <LayoutDashboard size={20} />
//           Dashboard
//         </button>
//         <button 
//           onClick={() => setCurrentPage('tasks')}
//           className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
//             currentPage === 'tasks' ? 'bg-purple-600' : 'hover:bg-gray-800'
//           }`}
//         >
//           <CheckSquare size={20} />
//           Tasks
//         </button>
//         <button 
//           onClick={() => setCurrentPage('members')}
//           className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
//             currentPage === 'members' ? 'bg-purple-600' : 'hover:bg-gray-800'
//           }`}
//         >
//           <Users size={20} />
//           Team Members
//         </button>
//         <button 
//           onClick={() => setCurrentPage('settings')}
//           className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
//             currentPage === 'settings' ? 'bg-purple-600' : 'hover:bg-gray-800'
//           }`}
//         >
//           <Settings size={20} />
//           Settings
//         </button>
//       </nav>

//       <button className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 rounded-lg">
//         <LogOut size={20} />
//         Logout
//       </button>
//     </div>
//   );

//   const renderTasksPage = () => (
//     <div className="flex-1 p-8">
//       <div className="mb-8">
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="text-3xl font-bold mb-2">Syeda shamsa</h1>
//             <p className="text-gray-400">Manage your team's tasks and workflow</p>
//           </div>
//           <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center font-bold">
//             S
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-3 gap-6">
//         {[
//           { status: 'todo', title: 'To Do' },
//           { status: 'inprogress', title: 'In Progress' },
//           { status: 'done', title: 'Done' }
//         ].map(column => {
//           const columnTasks = getTasksByStatus(column.status);
//           return (
//             <div key={column.status}>
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center gap-2">
//                   <h2 className="text-xl font-semibold">{column.title}</h2>
//                   <span className="bg-gray-700 rounded-full px-2 py-1 text-sm">{columnTasks.length}</span>
//                 </div>
//                 <button 
//                   onClick={() => openTaskDialog(column.status)}
//                   className="hover:bg-gray-700 rounded p-1"
//                 >
//                   <Plus size={20} />
//                 </button>
//               </div>
//               <div className="space-y-3">
//                 {columnTasks.map(task => (
//                   <div 
//                     key={task.id}
//                     onClick={() => openTaskDialog(task.status, task)}
//                     className="bg-gray-800 rounded-lg p-4 cursor-pointer hover:bg-gray-750 transition"
//                   >
//                     <h3 className="font-semibold mb-2">{task.title}</h3>
//                     <p className="text-sm text-gray-400 mb-3">{task.description}</p>
//                     <div className="flex items-center justify-between text-xs">
//                       <span className="text-gray-400">{task.assignee ? getAssigneeName(task.assignee) : 'Unassigned'}</span>
//                       <div className="flex items-center gap-2">
//                         <span className={`w-2 h-2 rounded-full ${priorityColors[task.priority]}`}></span>
//                         <span className="text-gray-400">{task.deadline}</span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );

//   const renderMembersPage = () => (
//     <div className="flex-1 p-8">
//       <div className="mb-8 flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold mb-2">Team Members</h1>
//           <p className="text-gray-400">Manage your team members</p>
//         </div>
//         <div className="flex items-center gap-4">
//           <button 
//             onClick={openMemberDialog}
//             className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg flex items-center gap-2"
//           >
//             <Plus size={20} />
//             Add Member
//           </button>
//           <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center font-bold">
//             S
//           </div>
//         </div>
//       </div>

//       {members.length === 0 ? (
//         <div className="text-center py-16">
//           <Users size={64} className="mx-auto mb-4 text-gray-600" />
//           <h3 className="text-xl font-semibold mb-2">No team members yet</h3>
//           <p className="text-gray-400 mb-4">Add your first team member to get started</p>
//           <button 
//             onClick={openMemberDialog}
//             className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg"
//           >
//             Add Member
//           </button>
//         </div>
//       ) : (
//         <div className="grid grid-cols-2 gap-6">
//           {members.map(member => (
//             <div key={member.id} className="bg-gray-800 rounded-lg p-6 flex items-center gap-4">
//               <div className={`${member.color} rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl`}>
//                 {member.initials}
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold">{member.name}</h3>
//                 <p className="text-gray-400 text-sm">{member.email}</p>
//                 <p className="text-purple-400 text-sm">{member.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <div className="flex bg-gray-950 text-white min-h-screen">
//       {renderSidebar()}
      
//       {currentPage === 'tasks' && renderTasksPage()}
//       {currentPage === 'members' && renderMembersPage()}
//       {currentPage === 'dashboard' && (
//         <div className="flex-1 p-8 flex items-center justify-center">
//           <div className="text-center">
//             <LayoutDashboard size={64} className="mx-auto mb-4 text-gray-600" />
//             <h2 className="text-2xl font-semibold">Dashboard</h2>
//             <p className="text-gray-400">Coming soon</p>
//           </div>
//         </div>
//       )}
//       {currentPage === 'settings' && (
//         <div className="flex-1 p-8 flex items-center justify-center">
//           <div className="text-center">
//             <Settings size={64} className="mx-auto mb-4 text-gray-600" />
//             <h2 className="text-2xl font-semibold">Settings</h2>
//             <p className="text-gray-400">Coming soon</p>
//           </div>
//         </div>
//       )}

//       {showTaskDialog && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full">
//             <div className="flex items-center justify-between mb-6">
//               <div>
//                 <h2 className="text-2xl font-bold">Task Details</h2>
//                 <p className="text-gray-400">View and edit task information</p>
//               </div>
//               <button onClick={closeTaskDialog} className="hover:bg-gray-800 rounded p-2">
//                 <X size={24} />
//               </button>
//             </div>

//             <div className="space-y-6">
//               <div>
//                 <label className="block mb-2 text-sm font-medium">Title</label>
//                 <input
//                   type="text"
//                   value={taskForm.title}
//                   onChange={(e) => setTaskForm({...taskForm, title: e.target.value})}
//                   className="w-full bg-gray-800 border border-purple-500 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
//                   placeholder="Enter task title"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-2 text-sm font-medium">Description</label>
//                 <textarea
//                   value={taskForm.description}
//                   onChange={(e) => setTaskForm({...taskForm, description: e.target.value})}
//                   className="w-full bg-gray-800 border border-purple-500 rounded-lg px-4 py-3 h-32 focus:outline-none focus:border-purple-400 resize-none"
//                   placeholder="Enter task description"
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block mb-2 text-sm font-medium flex items-center gap-2">
//                     <Users size={16} />
//                     Assignee
//                   </label>
//                   <select
//                     value={taskForm.assignee}
//                     onChange={(e) => setTaskForm({...taskForm, assignee: e.target.value})}
//                     className="w-full bg-gray-800 border border-purple-500 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
//                   >
//                     <option value="">Unassigned</option>
//                     {members.map(member => (
//                       <option key={member.id} value={member.id}>
//                         {member.name} ({member.initials})
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block mb-2 text-sm font-medium">Priority</label>
//                   <select
//                     value={taskForm.priority}
//                     onChange={(e) => setTaskForm({...taskForm, priority: e.target.value})}
//                     className="w-full bg-gray-800 border border-purple-500 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
//                   >
//                     <option value="low">🟢 Low</option>
//                     <option value="medium">🟡 Medium</option>
//                     <option value="high">🔴 High</option>
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block mb-2 text-sm font-medium">Deadline</label>
//                 <input
//                   type="date"
//                   value={taskForm.deadline}
//                   onChange={(e) => setTaskForm({...taskForm, deadline: e.target.value})}
//                   className="w-full bg-gray-800 border border-purple-500 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
//                 />
//               </div>

//               <div className="flex gap-4 pt-4">
//                 {editingTask && (
//                   <button
//                     onClick={deleteTask}
//                     className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg flex items-center gap-2"
//                   >
//                     <Trash2 size={20} />
//                     Delete
//                   </button>
//                 )}
//                 <button
//                   onClick={closeTaskDialog}
//                   className="flex-1 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={saveTask}
//                   className="flex-1 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg"
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {showMemberDialog && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full">
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-2xl font-bold">Add Team Member</h2>
//               <button onClick={closeMemberDialog} className="hover:bg-gray-800 rounded p-2">
//                 <X size={24} />
//               </button>
//             </div>

//             <div className="space-y-4">
//               <div>
//                 <label className="block mb-2 text-sm font-medium">Name</label>
//                 <input
//                   type="text"
//                   value={memberForm.name}
//                   onChange={(e) => setMemberForm({...memberForm, name: e.target.value})}
//                   className="w-full bg-gray-800 border border-purple-500 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
//                   placeholder="Enter member name"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-2 text-sm font-medium">Email</label>
//                 <input
//                   type="email"
//                   value={memberForm.email}
//                   onChange={(e) => setMemberForm({...memberForm, email: e.target.value})}
//                   className="w-full bg-gray-800 border border-purple-500 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
//                   placeholder="Enter email address"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-2 text-sm font-medium">Role</label>
//                 <input
//                   type="text"
//                   value={memberForm.role}
//                   onChange={(e) => setMemberForm({...memberForm, role: e.target.value})}
//                   className="w-full bg-gray-800 border border-purple-500 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
//                   placeholder="e.g. Developer, Designer"
//                 />
//               </div>

//               <div className="flex gap-4 pt-4">
//                 <button
//                   onClick={closeMemberDialog}
//                   className="flex-1 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={saveMember}
//                   className="flex-1 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg"
//                 >
//                   Add Member
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }