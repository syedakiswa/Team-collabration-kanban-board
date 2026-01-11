'use client'
import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export default function Workspace({ user, workspaces, setWorkspaces, onNavigate, setSelectedWorkspace }) {
  const [showNewWorkspace, setShowNewWorkspace] = useState(false);
  const [newWorkspaceName, setNewWorkspaceName] = useState('');

  const handleCreateWorkspace = () => {
    if (newWorkspaceName.trim()) {
      const newWorkspace = {
        id: Date.now().toString(),
        name: newWorkspaceName,
        members: 1,
        owner: true,
        tasks: []
      };
      setWorkspaces([...workspaces, newWorkspace]);
      setNewWorkspaceName('');
      setShowNewWorkspace(false);
    }
  };

  const openWorkspace = (workspace) => {
    setSelectedWorkspace(workspace);
    onNavigate('openworkspace');
  };

  return (
    <section className="min-h-screen px-10 py-8 text-white" style={{ background: "linear-gradient(to bottom, #160a28, #261643)" }}>
      {/* Navbar */}
      <nav className="flex items-center justify-between pb-6 border-b border-white/10">
        <div className="text-2xl font-bold">TaskFlow</div>
        <div className="flex items-center gap-6">
          <button onClick={() => onNavigate('workspace')} className="hover:text-purple-400 transition">Workspaces</button>
          <button onClick={() => onNavigate('profile')} className="flex items-center gap-2 hover:text-purple-400 transition">
            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
              {user?.name?.[0]?.toUpperCase() || 'U'}
            </div>
            Profile
          </button>
        </div>
      </nav>

      {/* Header */}
      <div className="mt-10 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Your Workspaces</h1>
          <p className="text-gray-300 mt-1">Choose a workspace or create a new one</p>
        </div>
        <button
          onClick={() => setShowNewWorkspace(true)}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-sm font-medium"
        >
          <Plus size={18} /> New Workspace
        </button>
      </div>

      {/* Workspace Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {workspaces.map((workspace) => (
          <div key={workspace.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4 text-2xl">
              📁
            </div>
            <h2 className="text-xl font-semibold">{workspace.name}</h2>
            <p className="text-gray-300 text-sm mt-1">{workspace.members} members</p>
            <button
              onClick={() => openWorkspace(workspace)}
              className="mt-6 w-full border border-purple-500 text-purple-300 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition"
            >
              Open Workspace
            </button>
          </div>
        ))}
      </div>

      {/* New Workspace Modal */}
      {showNewWorkspace && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-gradient-to-br from-[#1b0f2e] to-[#12071f] p-6 rounded-2xl w-96 border border-purple-500/30">
            <h3 className="text-xl font-semibold mb-4">Create New Workspace</h3>
            <input
              type="text"
              value={newWorkspaceName}
              onChange={(e) => setNewWorkspaceName(e.target.value)}
              placeholder="Workspace Name"
              className="w-full px-4 py-2 bg-white/10 border border-purple-500/30 rounded-lg text-white focus:outline-none"
            />
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowNewWorkspace(false)}
                className="flex-1 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateWorkspace}
                className="flex-1 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}