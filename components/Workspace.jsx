'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Briefcase, Users, Plus, LogOut } from "lucide-react";
import Toast from "@/components/Toast";

export default function Workspace() {
  const [user, setUser] = useState(null);
  const [workspaces, setWorkspaces] = useState([]);
  const [toast, setToast] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newWorkspaceName, setNewWorkspaceName] = useState("");
  const router = useRouter();

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      showToast("Pehle login karein!", "error");
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } else {
      const userData = JSON.parse(currentUser);
      setUser(userData);
      loadWorkspaces(userData.email);
    }
  }, [router]);

  const loadWorkspaces = (userEmail) => {
    const allWorkspaces = JSON.parse(localStorage.getItem("workspaces")) || [];
    const userWorkspaces = allWorkspaces.filter(w => w.userEmail === userEmail);
    setWorkspaces(userWorkspaces);
  };

  const handleCreateWorkspace = () => {
    if (!newWorkspaceName.trim()) {
      showToast("Workspace name enter karein!", "error");
      return;
    }

    const allWorkspaces = JSON.parse(localStorage.getItem("workspaces")) || [];
    
    const newWorkspace = {
      id: Date.now(),
      name: newWorkspaceName,
      userEmail: user.email,
      members: 1,
      createdAt: new Date().toISOString()
    };

    allWorkspaces.push(newWorkspace);
    localStorage.setItem("workspaces", JSON.stringify(allWorkspaces));
    
    loadWorkspaces(user.email);
    setNewWorkspaceName("");
    setShowCreateModal(false);
    showToast("Workspace create ho gaya!", "success");
  };

  const handleOpenWorkspace = (workspace) => {
    localStorage.setItem("currentWorkspace", JSON.stringify(workspace));
    showToast(`${workspace.name} open ho raha hai...`, "success");
    setTimeout(() => {
      router.push(`/workspace/${workspace.id}`);
    }, 1000);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    showToast("Logout ho gaye!", "success");
    setTimeout(() => {
      router.push("/login");
    }, 1000);
  };

  if (!user) return null;

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-900">
        {/* Header */}
        <header className="border-b border-purple-800/30 bg-indigo-950/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white  p-3 rounded-full ">
                <img src='/logo.png' alt='Login' width={55} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Team Collabration Kanban Board </h1>
                <p className="text-gray-400 text-sm">Select a workspace to continue</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 bg-purple-900/30 px-4 py-2 rounded-lg border border-purple-700/30">
                <div className="bg-purple-600 p-2 rounded-full">
                  <span className="text-white font-bold text-sm">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-white font-medium">Profile</span>
              </div>
              
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 px-4 py-2 rounded-lg border border-red-600/30 transition"
              >
                <LogOut className="w-4 h-4" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Your Workspaces</h2>
              <p className="text-gray-400">Choose a workspace or create a new one</p>
            </div>
            
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg shadow-purple-600/30"
            >
              <Plus className="w-5 h-5" />
              New Workspace
            </button>
          </div>

          {/* Workspaces Grid */}
          {workspaces.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-purple-900/20 p-6 rounded-full inline-block mb-4">
                <Briefcase className="w-16 h-16 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Koi workspace nahi hai</h3>
              <p className="text-gray-400 mb-6">Apna pehla workspace banayein!</p>
              <button
                onClick={() => setShowCreateModal(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Create Workspace
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workspaces.map((workspace) => (
                <div
                  key={workspace.id}
                  className="bg-indigo-900/30 backdrop-blur-sm border border-purple-800/30 rounded-xl p-6 hover:border-purple-600/50 transition group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-purple-600 p-3 rounded-xl group-hover:bg-purple-500 transition">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {workspace.name}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Users className="w-4 h-4" />
                        <span>{workspace.members} members</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleOpenWorkspace(workspace)}
                    className="w-full bg-transparent hover:bg-purple-600/20 text-white border border-purple-700/50 hover:border-purple-600 py-3 rounded-lg font-semibold transition"
                  >
                    Open Workspace
                  </button>
                </div>
              ))}
            </div>
          )}
        </main>

        {/* Create Workspace Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-indigo-900 border border-purple-800/50 rounded-xl p-8 max-w-md w-full shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-2">New Workspace</h2>
              <p className="text-gray-400 mb-6">Create a new workspace for your team</p>

              <input
                type="text"
                value={newWorkspaceName}
                onChange={(e) => setNewWorkspaceName(e.target.value)}
                placeholder="Enter workspace name"
                className="w-full px-4 py-3 bg-indigo-950 text-white rounded-lg border border-purple-700/50 focus:outline-none focus:ring-2 focus:ring-purple-600 mb-6"
                autoFocus
                onKeyPress={(e) => e.key === 'Enter' && handleCreateWorkspace()}
              />

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowCreateModal(false);
                    setNewWorkspaceName("");
                  }}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateWorkspace}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
