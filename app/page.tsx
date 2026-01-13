"use client"

import { useState } from "react";
import DicList from "./components/DicList";
import ErrorList, { CodeError } from "./components/ErrorList";
import SideBar from "./components/SideBar";

export default function Home() {
  const [errors, setErrors] = useState<CodeError[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = async (path: string) => {
    setIsScanning(true);
    try {
      const response = await fetch('/api/runScan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ path }),
      });

      if (!response.ok) {
        throw new Error('Scan failed');
      }

      const data = await response.json();
      
      // Map API issues to CodeError interface
      const mappedErrors: CodeError[] = data.issues.map((issue: any, index: number) => ({
        id: `${index}-${Date.now()}`,
        errorName: issue.rule,
        errorLevel: issue.level === 'error' ? 'critical' : issue.level, // Normalize levels
        errorLocation: issue.file,
        errorCodeLine: issue.line,
      }));

      setErrors(mappedErrors);
    } catch (error) {
      console.error("Scan error:", error);
      alert("Failed to scan project. Check console for details.");
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="flex min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <SideBar onScan={handleScan} isLoading={isScanning} />
      <main className="flex min-h-screen w-full flex-1 flex-col items-center justify-start py-10 px-8 sm:px-16 bg-white dark:bg-black sm:items-start overflow-y-auto">
        <DicList/>
        
             <ErrorList initialErrors={errors} />
        
      </main>
    </div>
  );
}

{/* <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
           
          </p> */}
