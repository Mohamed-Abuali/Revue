import React from 'react';
import { CodeError } from '@/types';

interface StatsOverviewProps {
  errors: CodeError[];
}

const StatsOverview = ({ errors }: StatsOverviewProps) => {
  const stats = {
    total: errors.length,
    critical: errors.filter(e => e.errorLevel === 'critical').length,
    warning: errors.filter(e => e.errorLevel === 'warning').length,
    info: errors.filter(e => e.errorLevel === 'info').length,
  };

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm">
        <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium uppercase">Total Issues</p>
        <p className="text-3xl font-bold text-black dark:text-white mt-1">{stats.total}</p>
      </div>
      
      <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-lg shadow-sm">
        <p className="text-sm text-red-600 dark:text-red-400 font-medium uppercase">Critical</p>
        <p className="text-3xl font-bold text-red-700 dark:text-red-500 mt-1">{stats.critical}</p>
      </div>

      <div className="p-4 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/30 rounded-lg shadow-sm">
        <p className="text-sm text-yellow-600 dark:text-yellow-400 font-medium uppercase">Warnings</p>
        <p className="text-3xl font-bold text-yellow-700 dark:text-yellow-500 mt-1">{stats.warning}</p>
      </div>

      <div className="p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-lg shadow-sm">
        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium uppercase">Info</p>
        <p className="text-3xl font-bold text-blue-700 dark:text-blue-500 mt-1">{stats.info}</p>
      </div>
    </div>
  );
};

export default StatsOverview;