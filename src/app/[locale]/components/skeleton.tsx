
"use client";

export default function Skeleton() {
  return (
    <div className="animate-pulse space-y-4 p-4">
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
      <div className="h-40 bg-gray-300 dark:bg-gray-700 rounded"></div>
    </div>
  );
}
