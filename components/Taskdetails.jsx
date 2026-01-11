import React from "react";

export const Taskdetails = ({ task, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-lg rounded-2xl bg-gradient-to-br from-[#1b0f2e] to-[#12071f] p-6 text-white shadow-xl">

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Task Details</h2>
          <p className="text-sm text-gray-400">View and edit task</p>
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className="text-sm text-gray-300">Title</label>
          <input
            type="text"
            defaultValue={task.title}
            className="mt-2 w-full rounded-lg border border-purple-500 bg-transparent px-4 py-2"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="text-sm text-gray-300">Description</label>
          <textarea
            rows="3"
            defaultValue={task.desc}
            className="mt-2 w-full rounded-lg border border-purple-500 bg-transparent px-4 py-2"
          />
        </div>

        {/* Priority */}
        <div className="mb-4">
          <label className="text-sm text-gray-300">Priority</label>
          <select
            defaultValue={task.priority}
            className="mt-2 w-full rounded-lg bg-[#2a1a44] px-3 py-2"
          >
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg bg-[#2a1a44] px-4 py-2 text-sm"
          >
            Cancel
          </button>
          <button className="rounded-lg bg-purple-600 px-4 py-2 text-sm">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
