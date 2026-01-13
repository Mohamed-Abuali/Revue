"use client"

import React, { useState, useMemo } from 'react'

// Interface Definition
export interface CodeError {
  id: string;
  errorName: string;
  errorLevel: 'critical' | 'warning' | 'info';
  errorLocation: string;
  errorCodeLine: number;
}

// Mock Data
const initialErrors: CodeError[] = [
  {
    id: '1',
    errorName: 'SyntaxError',
    errorLevel: 'critical',
    errorLocation: 'app/components/Button.tsx',
    errorCodeLine: 10,
  },
  {
    id: '2',
    errorName: 'UnusedVariable',
    errorLevel: 'warning',
    errorLocation: 'app/utils/helpers.ts',
    errorCodeLine: 45,
  },
  {
    id: '3',
    errorName: 'ConsoleLog',
    errorLevel: 'info',
    errorLocation: 'app/routes/index.tsx',
    errorCodeLine: 12,
  },
];

// Error Boundary Component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 border border-red-400 bg-red-100 text-red-700 rounded-md">
          <h2>Something went wrong in the Error List.</h2>
        </div>
      );
    }

    return this.props.children;
  }
}

const ErrorListContent = ({ initialErrors = [] }: { initialErrors?: CodeError[] }) => {
  const [errors, setErrors] = useState<CodeError[]>(initialErrors);
  
  // Update local state when prop changes
  React.useEffect(() => {
    if (initialErrors.length > 0) {
        setErrors(initialErrors);
    }
  }, [initialErrors]);

  const [filterLevel, setFilterLevel] = useState<'all' | 'critical' | 'warning' | 'info'>('all');
  const [sortField, setSortField] = useState<'line' | 'name'>('line');

  // Helper Methods
  const addError = () => {
    const newError: CodeError = {
      id: Date.now().toString(),
      errorName: 'NewRuntimeError',
      errorLevel: 'warning',
      errorLocation: 'app/runtime.ts',
      errorCodeLine: Math.floor(Math.random() * 100),
    };
    setErrors([...errors, newError]);
  };

  const removeError = (id: string) => {
    setErrors(errors.filter(e => e.id !== id));
  };

  const filteredAndSortedErrors = useMemo(() => {
    let result = errors;

    if (filterLevel !== 'all') {
      result = result.filter(e => e.errorLevel === filterLevel);
    }

    return result.sort((a, b) => {
      if (sortField === 'line') {
        return a.errorCodeLine - b.errorCodeLine;
      }
      return a.errorName.localeCompare(b.errorName);
    });
  }, [errors, filterLevel, sortField]);

  return (
    <div className="w-full max-w-2xl mx-auto p-4 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Code Errors</h1>

      </div>

      <div className="flex flex-wrap gap-4 p-4 bg-gray-50 dark:bg-zinc-900 rounded-lg">
        <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter:</span>
            <select
                value={filterLevel}
                onChange={(e) => setFilterLevel(e.target.value as any)}
                className="block w-full py-1.5 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-zinc-800 dark:text-white"
            >
                <option value="all">All Levels</option>
                <option value="critical">Critical</option>
                <option value="warning">Warning</option>
                <option value="info">Info</option>
            </select>
        </div>
        <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-20">Sort By:</span>
             <select
                value={sortField}
                onChange={(e) => setSortField(e.target.value as any)}
                className="block w-full py-1.5 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-zinc-800 dark:text-white"
            >
                <option value="line">Line Number</option>
                <option value="name">Error Name</option>
            </select>
        </div>
      </div>

      <div className="space-y-4 px-2 h-112.5 overflow-y-scroll">
        {filteredAndSortedErrors.map((error) => (
          <div
            key={error.id}
            className={`relative flex items-start p-4 border rounded-lg shadow-sm transition-all hover:shadow-md ${
                error.errorLevel === 'critical' ? 'border-red-200 bg-red-50 dark:bg-red-900/10' :
                error.errorLevel === 'warning' ? 'border-yellow-200 bg-yellow-50 dark:bg-yellow-900/10' :
                'border-blue-200 bg-blue-50 dark:bg-blue-900/10'
            }`}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                  {error.errorName}
                </h3>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                    error.errorLevel === 'critical' ? 'bg-red-100 text-red-800' :
                    error.errorLevel === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                }`}>
                  {error.errorLevel}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium">File:</span> {error.errorLocation}
              </p>
               <p className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium">Line:</span> {error.errorCodeLine}
              </p>
            </div>
            <button
                onClick={() => removeError(error.id)}
                className="ml-4 text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Remove error"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
          </div>
        ))}
        {filteredAndSortedErrors.length === 0 && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                No errors found matching your criteria.
            </div>
        )}
      </div>
    </div>
  );
};

const ErrorList = ({ initialErrors }: { initialErrors?: CodeError[] }) => {
    return (
        <ErrorBoundary>
            <ErrorListContent initialErrors={initialErrors} />
        </ErrorBoundary>
    )
}

export default ErrorList
