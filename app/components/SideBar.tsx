"use client"

import React, { useState } from 'react'
import { FaSearch, FaSpinner } from 'react-icons/fa'

interface SideBarProps {
  onScan: (path: string) => Promise<void>;
  isLoading?: boolean;
}

const SideBar = ({ onScan, isLoading = false }: SideBarProps) => {
  const [path, setPath] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (path.trim()) {
      onScan(path);
    }
  };

  return (
    <div className='w-full max-w-sm min-h-screen border-r-2 border-zinc-100 dark:border-zinc-900 px-8 py-20 bg-white dark:bg-zinc-950'>
      <h1 className="mb-12 text-5xl font-bold tracking-tighter text-black dark:text-white">
        Revue
      </h1>
      
      <div className="space-y-6">
        <div>
            <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                Project Scanner
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <label htmlFor="project-path" className="sr-only">Project Path</label>
                <input
                    id="project-path"
                    type="text"
                    value={path}
                    onChange={(e) => setPath(e.target.value)}
                    placeholder="C:/Path/To/Project"
                    className="w-full px-4 py-2 text-sm border rounded-md bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                />
                <button
                    type="submit"
                    disabled={isLoading || !path.trim()}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-md hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    {isLoading ? (
                        <FaSpinner className="animate-spin" />
                    ) : (
                        <FaSearch />
                    )}
                    {isLoading ? 'Scanning...' : 'Scan Project'}
                </button>
            </form>
        </div>

        <div className="pt-8 border-t border-zinc-100 dark:border-zinc-900">
             <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                Recent Scans
            </h2>
            {/* Placeholder for history */}
            <p className="text-xs text-zinc-400 italic">No recent scans</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar