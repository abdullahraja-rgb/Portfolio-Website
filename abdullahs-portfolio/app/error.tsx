"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to your console
    console.error(error);
  }, [error]);

  // This UI is based on your old ErrorBoundary
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>Oops!</h1>
      <p>{error.message || "An unexpected error occurred."}</p>
      
      {/* Only show stack in development */}
      {process.env.NODE_ENV === "development" && error.stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{error.stack}</code>
        </pre>
      )}

      <button
        onClick={() => reset()}
        className="mt-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Try again
      </button>
    </main>
  );
}