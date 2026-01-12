'use client'

import React, { useState } from 'react';
import { X, Plus, Trash2, Users, CheckSquare, LayoutDashboard, Settings, LogOut, ArrowLeft, Calendar } from 'lucide-react';
import { useRouter } from 'next/navigation';


export default function Openworkspace() {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState('tasks');
  const [tasks, setTasks] = useState([]);
  const [members, setMembers] = useState([]);
  const [showTaskDialog, setShowTaskDialog] = useState(false);
  const [showMemberDialog, setShowMemberDialog] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  
  const [taskForm, setTaskForm] = useState({
    title: '',
    description: '',
    assignee: '',
    priority: 'medium',
    deadline: '',
    status: 'todo'
  });

  const [memberForm, setMemberForm] = useState({
    name: '',
    email: '',
    role: ''
  });

  const priorityColors = {
    low: 'bg-green-500',
    medium: 'bg-yellow-500',
    high: 'bg-red-500'
  };

  const memberColors = ['bg-purple-500', 'bg-blue-500', 'bg-pink-500', 'bg-orange-500', 'bg-green-500', 'bg-indigo-500'];

  const openTaskDialog = (status = 'todo', task = null) => {
    if (task) {
      setEditingTask(task);
      setTaskForm(task);
    } else {
      setEditingTask(null);
      setTaskForm({
        title: '',
        description: '',
        assignee: '',
        priority: 'medium',
        deadline: '',
        status: status
      });
    }
    setShowTaskDialog(true);
  };

  const closeTaskDialog = () => {
    setShowTaskDialog(false);
    setEditingTask(null);
    setTaskForm({
      title: '',
      description: '',
      assignee: '',
      priority: 'medium',
      deadline: '',
      status: 'todo'
    });
  };

  const saveTask = () => {
    if (!taskForm.title.trim()) return;

    if (editingTask) {
      setTasks(tasks.map(t => t.id === editingTask.id ? { ...taskForm, id: t.id } : t));
    } else {
      setTasks([...tasks, { ...taskForm, id: Date.now() }]);
    }
    closeTaskDialog();
  };

  const deleteTask = () => {
    if (editingTask) {
      setTasks(tasks.filter(t => t.id !== editingTask.id));
      closeTaskDialog();
    }
  };

  const openMemberDialog = () => {
    setMemberForm({ name: '', email: '', role: '' });
    setShowMemberDialog(true);
  };

  const closeMemberDialog = () => {
    setShowMemberDialog(false);
    setMemberForm({ name: '', email: '', role: '' });
  };

  const saveMember = () => {
    if (!memberForm.name.trim() || !memberForm.email.trim()) return;
    
    const initials = memberForm.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    const colorIndex = members.length % memberColors.length;
    
    setMembers([...members, { 
      ...memberForm, 
      id: Date.now(),
      initials,
      color: memberColors[colorIndex]
    }]);
    closeMemberDialog();
  };

  const getTasksByStatus = (status) => tasks.filter(t => t.status === status);

  const getAssigneeName = (assigneeId) => {
    const member = members.find(m => m.id === parseInt(assigneeId));
    return member ? `${member.name} (${member.initials})` : '';
  };

  const renderSidebar = () => (
    <div className="w-64 bg-gray-900 min-h-screen p-4 flex flex-col">
      <div className="mb-8">
        <button
          onClick={() => router.push('/workspace')}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-4"
        >
          <ArrowLeft size={18} />
          Back to Workspaces
        </button>

        <div className="bg-purple-600 rounded-lg p-3 flex items-center gap-3">
          <CheckSquare size={24} />
          <div>
            <div className="font-semibold">Syeda shamsa</div>
            <div className="text-xs text-gray-300">Workspace</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        <button 
          onClick={() => setCurrentPage('dashboard')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            currentPage === 'dashboard' ? 'bg-purple-600' : 'hover:bg-gray-800'
          }`}
        >
          <LayoutDashboard size={20} />
          Dashboard
        </button>
        <button 
          onClick={() => setCurrentPage('tasks')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            currentPage === 'tasks' ? 'bg-purple-600' : 'hover:bg-gray-800'
          }`}
        >
          <CheckSquare size={20} />
          Tasks
        </button>
        <button 
          onClick={() => setCurrentPage('members')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            currentPage === 'members' ? 'bg-purple-600' : 'hover:bg-gray-800'
          }`}
        >
          <Users size={20} />
          Team Members
        </button>
        <button 
          onClick={() => setCurrentPage('settings')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            currentPage === 'settings' ? 'bg-purple-600' : 'hover:bg-gray-800'
          }`}
        >
          <Settings size={20} />
          Settings
        </button>
      </nav>

      <div className="space-y-2">
        <button 
          onClick={() => router.push('/profile')}
          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-800 rounded-lg transition"
        >
          <Users size={20} />
          Profile
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-800 rounded-lg transition">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-gray-400">Overview of your workspace</p>
          </div>
          <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center font-bold">
            S
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-400 text-sm font-medium">Total Tasks</h3>
            <CheckSquare className="text-purple-500" size={24} />
          </div>
          <div className="text-3xl font-bold">{tasks.length}</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-400 text-sm font-medium">Team Members</h3>
            <Users className="text-blue-500" size={24} />
          </div>
          <div className="text-3xl font-bold">{members.length}</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-400 text-sm font-medium">Completed</h3>
            <CheckSquare className="text-green-500" size={24} />
          </div>
          <div className="text-3xl font-bold">{getTasksByStatus('done').length}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Task Distribution</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">To Do</span>
              <span className="font-semibold">{getTasksByStatus('todo').length}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">In Progress</span>
              <span className="font-semibold">{getTasksByStatus('inprogress').length}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Done</span>
              <span className="font-semibold">{getTasksByStatus('done').length}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3 text-sm text-gray-400">
            {tasks.length === 0 ? (
              <p>No recent activity</p>
            ) : (
              tasks.slice(0, 5).map(task => (
                <div key={task.id} className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${priorityColors[task.priority]}`}></div>
                  <span className="truncate">{task.title}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Settings</h1>
            <p className="text-gray-400">Manage your workspace settings</p>
          </div>
          <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center font-bold">
            S
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Workspace Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium">Workspace Name</label>
              <input
                type="text"
                defaultValue="Syeda shamsa"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Description</label>
              <textarea
                defaultValue="Manage your team's tasks and workflow"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 h-24 focus:outline-none focus:border-purple-500 resize-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-red-400">Danger Zone</h3>
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition">
            Delete Workspace
          </button>
        </div>
      </div>
    </div>
  );

  const renderTasksPage = () => (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Syeda shamsa</h1>
            <p className="text-gray-400">Manage your team's tasks and workflow</p>
          </div>
          <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center font-bold">
            S
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {[
          { status: 'todo', title: 'To Do' },
          { status: 'inprogress', title: 'In Progress' },
          { status: 'done', title: 'Done' }
        ].map(column => {
          const columnTasks = getTasksByStatus(column.status);
          return (
            <div key={column.status}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold">{column.title}</h2>
                  <span className="bg-gray-700 rounded-full px-2 py-1 text-sm">{columnTasks.length}</span>
                </div>
                <button 
                  onClick={() => openTaskDialog(column.status)}
                  className="hover:bg-gray-700 rounded p-1"
                >
                  <Plus size={20} />
                </button>
              </div>
              <div className="space-y-3">
                {columnTasks.map(task => (
                  <div 
                    key={task.id}
                    onClick={() => openTaskDialog(task.status, task)}
                    className="bg-gray-800 rounded-lg p-4 cursor-pointer hover:bg-gray-750 transition"
                  >
                    <h3 className="font-semibold mb-2">{task.title}</h3>
                    <p className="text-sm text-gray-400 mb-3">{task.description}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">{task.assignee ? getAssigneeName(task.assignee) : 'Unassigned'}</span>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${priorityColors[task.priority]}`}></span>
                        <span className="text-gray-400">{task.deadline}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderMembersPage = () => (
    <div className="flex-1 p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Team Members</h1>
          <p className="text-gray-400">Manage your team members</p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={openMemberDialog}
            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <Plus size={20} />
            Add Member
          </button>
          <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center font-bold">
            S
          </div>
        </div>
      </div>

      {members.length === 0 ? (
        <div className="text-center py-16">
          <Users size={64} className="mx-auto mb-4 text-gray-600" />
          <h3 className="text-xl font-semibold mb-2">No team members yet</h3>
          <p className="text-gray-400 mb-4">Add your first team member to get started</p>
          <button 
            onClick={openMemberDialog}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg"
          >
            Add Member
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-6">
          {members.map(member => (
            <div key={member.id} className="bg-gray-800 rounded-lg p-6 flex items-center gap-4">
              <div className={`${member.color} rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl`}>
                {member.initials}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400 text-sm">{member.email}</p>
                <p className="text-purple-400 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="flex bg-gray-950 text-white min-h-screen">
      {renderSidebar()}
      
      {currentPage === 'dashboard' && renderDashboard()}
      {currentPage === 'tasks' && renderTasksPage()}
      {currentPage === 'members' && renderMembersPage()}
      {currentPage === 'settings' && renderSettings()}

      {showTaskDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">Task Details</h2>
                <p className="text-gray-400">View and edit task information</p>
              </div>
              <button onClick={closeTaskDialog} className="hover:bg-gray-800 rounded p-2">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium">Title</label>
                <input
                  type="text"
                  value={taskForm.title}
                  onChange={(e) => setTaskForm({...taskForm, title: e.target.value})}
                  className="w-full bg-gray-800 border border-purple-500 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
                  placeholder="Enter task title"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Description</label>
                <textarea
                  value={taskForm.description}
                  onChange={(e) => setTaskForm({...taskForm, description: e.target.value})}
                  className="w-full bg-gray-800 border border-purple-500 rounded-lg px-4 py-3 h-32 focus:outline-none focus:border-purple-400 resize-none"
                  placeholder="Enter task description"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium flex items-center gap-2">
                    <Users size={16} />
                    Assignee
                  </label>
                  <select
                    value={taskForm.assignee}
                    onChange={(e) => setTaskForm({...taskForm, assignee: e.target.value})}
                    className="w-full bg-gray-800 border border-purple-500 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
                  >
                    <option value="">Unassigned</option>
                    {members.map(member => (
                      <option key={member.id} value={member.id}>
                        {member.name} ({member.initials})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium">Priority</label>
                  <select
                    value={taskForm.priority}
                    onChange={(e) => setTaskForm({...taskForm, priority: e.target.value})}
                    className="w-full bg-gray-800 border border-purple-500 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
                  >
                    <option value="low">🟢 Low</option>
                    <option value="medium">🟡 Medium</option>
                    <option value="high">🔴 High</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Deadline</label>
                <input
                  type="date"
                  value={taskForm.deadline}
                  onChange={(e) => setTaskForm({...taskForm, deadline: e.target.value})}
                  className="w-full bg-gray-800 border border-purple-500 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
                />
              </div>

              <div className="flex gap-4 pt-4">
                {editingTask && (
                  <button
                    onClick={deleteTask}
                    className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg flex items-center gap-2"
                  >
                    <Trash2 size={20} />
                    Delete
                  </button>
                )}
                <button
                  onClick={closeTaskDialog}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={saveTask}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showMemberDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Add Team Member</h2>
              <button onClick={closeMemberDialog} className="hover:bg-gray-800 rounded p-2">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  value={memberForm.name}
                  onChange={(e) => setMemberForm({...memberForm, name: e.target.value})}
                  className="w-full bg-gray-800 border border-purple-500 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
                  placeholder="Enter member name"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={memberForm.email}
                  onChange={(e) => setMemberForm({...memberForm, email: e.target.value})}
                  className="w-full bg-gray-800 border border-purple-500 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Role</label>
                <input
                  type="text"
                  value={memberForm.role}
                  onChange={(e) => setMemberForm({...memberForm, role: e.target.value})}
                  className="w-full bg-gray-800 border border-purple-500 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
                  placeholder="e.g. Developer, Designer"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={closeMemberDialog}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={saveMember}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg"
                >
                  Add Member
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}