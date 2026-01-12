'use client'
import React from 'react';

export default function Navbar({ user, onNavigate }) {
  return (
    <nav className="flex items-center justify-between pb-6 border-b border-white/10">
      <div className="text-2xl font-bold">TaskFlow</div>
      <div className="flex items-center gap-6">
        <button 
          onClick={() => onNavigate('workspace')} 
          className="hover:text-purple-400 transition"
        >
          Workspaces
        </button>
        <button 
          onClick={() => onNavigate('profile')} 
          className="flex items-center gap-2 hover:text-purple-400 transition"
        >
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
            {user?.name?.[0]?.toUpperCase() || 'U'}
          </div>
          Profile
        </button>
      </div>
    </nav>
  );
}