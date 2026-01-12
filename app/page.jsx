// 'use client'
// import React, { useState } from 'react';
// import { Plus } from 'lucide-react';

// export default function Workspace({ user, workspaces, setWorkspaces, onNavigate, setSelectedWorkspace }) {
//   const [showNewWorkspace, setShowNewWorkspace] = useState(false);
//   const [newWorkspaceName, setNewWorkspaceName] = useState('');

//   const handleCreateWorkspace = () => {
//     if (newWorkspaceName.trim()) {
//       const newWorkspace = {
//         id: Date.now().toString(),
//         name: newWorkspaceName,
//         members: 1,
//         owner: true,
//         tasks: []
//       };
//       setWorkspaces([...workspaces, newWorkspace]);
//       setNewWorkspaceName('');
//       setShowNewWorkspace(false);
//     }
//   };

//   const openWorkspace = (workspace) => {
//     setSelectedWorkspace(workspace);
//     onNavigate('openworkspace');
//   };

//   return (
//     <section className="min-h-screen px-10 py-8 text-white" style={{ background: "linear-gradient(to bottom, #160a28, #261643)" }}>
//       {/* Navbar */}
//       <nav className="flex items-center justify-between pb-6 border-b border-white/10">
//         <div className="text-2xl font-bold">TaskFlow</div>
//         <div className="flex items-center gap-6">
//           <button onClick={() => onNavigate('workspace')} className="hover:text-purple-400 transition">Workspaces</button>
//           <button onClick={() => onNavigate('profile')} className="flex items-center gap-2 hover:text-purple-400 transition">
//             <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
//               {user?.name?.[0]?.toUpperCase() || 'U'}
//             </div>
//             Profile
//           </button>
//         </div>
//       </nav>

//       {/* Header */}
//       <div className="mt-10 flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold">Your Workspaces</h1>
//           <p className="text-gray-300 mt-1">Choose a workspace or create a new one</p>
//         </div>
//         <button
//           onClick={() => setShowNewWorkspace(true)}
//           className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-sm font-medium"
//         >
//           <Plus size={18} /> New Workspace
//         </button>
//       </div>

//       {/* Workspace Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
//         {workspaces.map((workspace) => (
//           <div key={workspace.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition">
//             <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4 text-2xl">
//               📁
//             </div>
//             <h2 className="text-xl font-semibold">{workspace.name}</h2>
//             <p className="text-gray-300 text-sm mt-1">{workspace.members} members</p>
//             <button
//               onClick={() => openWorkspace(workspace)}
//               className="mt-6 w-full border border-purple-500 text-purple-300 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition"
//             >
//               Open Workspace
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* New Workspace Modal */}
//       {showNewWorkspace && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
//           <div className="bg-gradient-to-br from-[#1b0f2e] to-[#12071f] p-6 rounded-2xl w-96 border border-purple-500/30">
//             <h3 className="text-xl font-semibold mb-4">Create New Workspace</h3>
//             <input
//               type="text"
//               value={newWorkspaceName}
//               onChange={(e) => setNewWorkspaceName(e.target.value)}
//               placeholder="Workspace Name"
//               className="w-full px-4 py-2 bg-white/10 border border-purple-500/30 rounded-lg text-white focus:outline-none"
//             />
//             <div className="flex gap-3 mt-6">
//               <button
//                 onClick={() => setShowNewWorkspace(false)}
//                 className="flex-1 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleCreateWorkspace}
//                 className="flex-1 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700"
//               >
//                 Create
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }



// Main App Component
// 'use client'
// import { useState } from "react";

// import toast, { Toaster } from "react-hot-toast";

// // components imports (path apne project ke mutabiq adjust karna)
// import Login from "../components/Login";
// import Signup from "../components/Signup";
// import Workspace from "../components/Workspace";

// export default function App() {
//   const [currentPage, setCurrentPage] = useState('login');
//   const [users, setUsers] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null);

//   const handleSignup = (userData) => {
//     const existingUser = users.find(u => u.email === userData.email);
    
//     if (existingUser) {
//       toast.error('Email pehle se registered hai! Login kar lein.');
//       return;
//     }

//     setUsers([...users, userData]);
//     toast.success('Aap successful signup ho gaye! Ab login kar lein.');
//     setTimeout(() => setCurrentPage('login'), 1000);
//   };

//   const handleLogin = (user) => {
//     if (user) {
//       setCurrentUser(user);
//       setTimeout(() => setCurrentPage('workspace'), 1000);
//     }
//   };

//   const handleLogout = () => {
//     setCurrentUser(null);
//     setCurrentPage('login');
//     toast.success('Logout ho gaye!');
//   };

//   return (
//     <>
//       <Toaster 
//         position="top-right"
//         toastOptions={{
//           duration: 3000,
//           style: {
//             background: '#1f2937',
//             color: '#fff',
//             border: '1px solid #374151',
//           },
//           success: {
//             iconTheme: {
//               primary: '#10b981',
//               secondary: '#fff',
//             },
//           },
//           error: {
//             iconTheme: {
//               primary: '#ef4444',
//               secondary: '#fff',
//             },
//           },
//         }}
//       />
      
//       {currentPage === 'login' && (
//         <Login
//           onLogin={handleLogin}
//           onNavigate={setCurrentPage}
//           users={users}
//         />
//       )}
      
//       {currentPage === 'signup' && (
//         <SignupPage
//           onSignup={handleSignup}
//           onNavigate={setCurrentPage}
//         />
//       )}
      
//       {currentPage === 'workspace' && currentUser && (
//         <Workspace
//           user={currentUser}
//           onLogout={handleLogout}
//         />
//       )}
//     </>
//   );
// }'use client'
'use client'
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import Login from "../components/Login";
import Signup from "../components/Signup";
import Workspace from "../components/Workspace";

export default function Page() {
  const [currentPage, setCurrentPage] = useState('login');
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // localStorage se users load karna
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(savedUsers);

    const savedCurrentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (savedCurrentUser) {
      setCurrentUser(savedCurrentUser);
      setCurrentPage('workspace');
    }
  }, []);

  const handleSignup = (userData) => {
    const existingUser = users.find(u => u.email === userData.email);

    if (existingUser) {
      toast.error('Email pehle se registered hai! Login kar lein.');
      return;
    }

    const updatedUsers = [...users, userData];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    toast.success('Aap successful signup ho gaye! Ab login karein.');
    setTimeout(() => setCurrentPage('login'), 1000);
  };

  const handleLogin = (user) => {
    setCurrentUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
    toast.success('Login successful!');
    setTimeout(() => setCurrentPage('workspace'), 1000);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    toast.success('Logout ho gaye!');
    setCurrentPage('login');
  };

  return (
    <>
      <Toaster position="top-right" />
      {currentPage === 'login' && (
        <Login
          users={users}
          onLogin={handleLogin}
          onNavigate={setCurrentPage}
        />
      )}

      {currentPage === 'signup' && (
        <Signup
          onSignup={handleSignup}
          onNavigate={setCurrentPage}
        />
      )}

      {currentPage === 'workspace' && currentUser && (
        <Workspace
          user={currentUser}
          onLogout={handleLogout}
        />
      )}
    </>
  );
}
